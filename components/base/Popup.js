import React from "react"
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native"
import {
  Colors,
  SCREEN_WIDTH,
  Svgs,
  moderateScale,
  scale,
  verticalScale
} from "../../theme"
import { Button } from "./Button"
import { Text } from "./Text"

export const Popup = ({
  title,
  subtitle,
  yesTitle = "Logout",
  noTitle = "Cancel",
  wrapperStyle,
  titleIcon,
  onYesPress,
  onNoPress,
  buttonStyle,
  onCrossPress,
  children1,
  children,
  type = 1,
  loading = false,
  icon,
  containerStyle
}) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[styles.container, containerStyle]}>
        <KeyboardAvoidingView
          style={[styles.wrapper, wrapperStyle]}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={
            Platform.OS === "ios" ? moderateScale(60) : moderateScale(0)
          }
        >
          {children1 ? (
            children1
          ) : (
            <>
              <View style={styles.titleContainer}>
                {title && (
                  <Text fs="L" ff="bold" style={styles.title} color="grey900">
                    {title}
                  </Text>
                )}
                {
                  titleIcon && (
                    <View style={{
                    }} >
                      {titleIcon}
                    </View>
                  )
                }

                {
                  !titleIcon && (
                    <TouchableOpacity style={{
                      position: "absolute",
                      right: 0,
                    }} activeOpacity={0.7} onPress={onCrossPress}>
                      <Svgs.Close />
                    </TouchableOpacity>
                  )
                }
               
              </View>

              {subtitle && (
                <Text
                  fs="M"
                  color="grey600"
                  style={[
                    styles.title,
                    {
                      marginTop: moderateScale(20),
                      lineHeight: moderateScale(20)
                    }
                  ]}
                >
                  {subtitle}
                </Text>
              )}
              {icon && <View style={{ alignSelf: "center" }}>{icon}</View>}
              {type === 1 ? (
                <View style={[styles.buttonContainer , buttonStyle]}>
                  {onNoPress && (
                    <Button
                      title={noTitle}
                      type="outlined"
                      onPress={onNoPress}
                      buttonStyle={{ width: SCREEN_WIDTH / 2.7 }}
                      loading={loading}
                    />
                  )}
                  {onYesPress && (
                    <Button
                      title={yesTitle}
                      onPress={onYesPress}
                      buttonStyle={{ width: SCREEN_WIDTH / 2.7 }}
                      loading={loading}
                    />
                  )}
                </View>
              ) : (
                children
              )}
            </>
          )}
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    zIndex: 99999,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    alignSelf: "center",
  },
  wrapper: {
    padding: moderateScale(15),
    // borderRadius: moderateScale(12),
    backgroundColor: Colors.white,
    shadowColor: Colors.backGround,
    shadowOffset: {
      width: 0,
      height: verticalScale(2)
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    maxWidth: SCREEN_WIDTH - 50
  },
  titleContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent:'center',
  },

  buttonContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: moderateScale(20),
    marginTop: moderateScale(40)
  },
  title: {
    textAlign: "center"
  },
  btnStyle: {
    flex: 0.5
  },
  img: {
    height: verticalScale(65),
    width: scale(65),
    borderRadius: moderateScale(65),
    alignSelf: "center"
  }
})
