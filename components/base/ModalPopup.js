import React from "react"
import {
  KeyboardAvoidingView,
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  // Text,
  View
} from "react-native"
import {
  Colors,
  moderateScale,
  scale,
  SCREEN_WIDTH,
  verticalScale
} from "../../theme"
import { Button } from "./Button"
import { Text } from "./Text"

export const ModalPopup = ({
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
  visible,
  containerStyle
}) => {
  // const { declineApi } = useSelector(state => state.Workshops)

  return (
    <Modal
      animationType={"fade"}
      visible={visible}
      onRequestClose={onNoPress}
      transparent={true}
    >
      <Pressable onPress={onNoPress} style={[styles.container , containerStyle]}>
        <View style={[styles.wrapper, wrapperStyle]}>
          <KeyboardAvoidingView
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
                    <Text fs="L" ff="bold" style={styles.title} color={Colors.placeholderColor}>
                      {title}
                    </Text>
                  )}
                  {titleIcon && <View>{titleIcon}</View>}

                  {!titleIcon && (
                    <TouchableOpacity
                      style={{
                        position: "absolute",
                        right: 0
                      }}
                      activeOpacity={0.7}
                      onPress={onCrossPress}
                    >
                      {/* <Svgs.Close /> */}
                    </TouchableOpacity>
                  )}
                </View>

                {subtitle && (
                  <Text
                    fs="M"
                    color={Colors.placeholderColor}
                    style={[
                      styles.title,
                      {
                        marginTop: moderateScale(10),
                        lineHeight: moderateScale(20)
                      }
                    ]}
                  >
                    {subtitle}
                  </Text>
                )}
                {icon && <View style={{ alignSelf: "center" }}>{icon}</View>}
                {type === 1 ? (
                  <View style={[styles.buttonContainer, buttonStyle]}>
                    {onNoPress && (
                      <Button
                        title={noTitle}
                        type="outlined"
                        onPress={onNoPress}
                        buttonStyle={{ flex: 1 , height: verticalScale(40) }}
                      />
                    )}
                    {onYesPress && (
                      <Button
                        title={yesTitle}
                        onPress={onYesPress}
                        buttonStyle={{ flex: 1 , height: verticalScale(40) }}
                        loading={loading}

                        // loading={declineApi?.loading === "loading"}
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
      </Pressable>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "rgba(0, 0, 0, 0.3)"
  },
  wrapper: {
    padding: moderateScale(15),
    borderRadius: 16,
    backgroundColor: Colors.white,
    shadowColor: Colors.backGround,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: SCREEN_WIDTH * 0.85
  },
  titleContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
  },

  buttonContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: moderateScale(20),
    marginTop: moderateScale(20)
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
