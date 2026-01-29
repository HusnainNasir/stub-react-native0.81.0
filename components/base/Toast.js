import React from "react"
import { StyleSheet, View } from "react-native"
import { Colors, moderateScale, SCREEN_WIDTH, ToastType } from "../../theme"
import { Text } from "./Text"

export const ToastCard = props => {
  const { text, type } = props

  return (
    <View
      style={[
        styles.mainCont,
        type === ToastType.Error
          ? { backgroundColor: Colors.error }
          : { backgroundColor: Colors.primary }
      ]}
    >
      <View style={styles.textCont}>
        <Text ff={"medium"} fS={"XS"} color={Colors.white}>
          {text}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainCont: {
    width: SCREEN_WIDTH * 0.9,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
    borderRadius: SCREEN_WIDTH * 0.02,
    paddingVertical: moderateScale(18),
    paddingHorizontal: SCREEN_WIDTH * 0.01
  },
  iconCont: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center"
  },
  textCont: {
    width: "80%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  }
})
