import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";

import LoaderKit from "react-native-loader-kit";
import {
  Colors,
  FontSizes,
  Fonts,
  moderateScale,
  verticalScale
} from "../../theme";
import { Text } from "./Text";

export const Button = (props) => {
  const {
    title,
    buttonStyle,
    textStyle,
    type = "default",
    onPress,
    rightIcon,
    leftIcon,
    loading = false,
    loadingColor=Colors.white,
    isFirstButton,
    gradientStyle,
  } = props;

  let btnStyle = {};
  let txtStyle = {};

  if (type === "outlined") {
    btnStyle = {
      backgroundColor: Colors.white,
      borderColor: Colors.grey300,
      borderWidth: 1,
    };
    txtStyle = {
      color: Colors.grey700,
    };
  } else if (type === "disabled") {
    btnStyle = {
      backgroundColor: Colors.disabled,
    };
    txtStyle = {
      color: Colors.grey400,
    };
  }

  if (loading) {
    return (
      <View style={[styles.buttonStyle, btnStyle, buttonStyle]}>
        <LoaderKit
          style={{ width: moderateScale(30), height: verticalScale(30) }}
          name={"BallClipRotateMultiple"} // Optional: see list of animations below
          color={loadingColor ?? Colors.white} // Optional: color can be: 'red', 'green',... or
        />
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        {...props}
        activeOpacity={0.7}
        onPress={onPress}
        style={[styles.buttonStyle, btnStyle, buttonStyle]}
        disabled={type === "disabled"}
      >
        <>
          {rightIcon &&
            rightIcon}
          <Text style={[styles.textStyle, txtStyle, textStyle]}>{title}</Text>
          {leftIcon && leftIcon}
        </>
      </TouchableOpacity>
    );
  }
};
const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: verticalScale(50),
    borderRadius: moderateScale(100),
    // marginVertical: moderateScale(8),
    backgroundColor: Colors.black,
  },
  textStyle: {
    fontFamily: Fonts.PoppinsMedium,
    color: Colors.white,
    fontSize: FontSizes.M,
  },
});
