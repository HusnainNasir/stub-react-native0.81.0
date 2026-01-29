import React from "react";
import { Text as _Text, StyleSheet } from "react-native";
import { Fonts, Colors , FontSizes } from "../../theme";
export const Text = (props) => {
  let { style = {}, children, ff, fs, lineHeight, color, gradient, ...rest } = props;

  const getFontSize = (key) => {
    switch (key) {
      case "XXXS":
        return FontSizes.XXXS;
      case "XXS":
        return FontSizes.XXS;
      case "XS":
        return FontSizes.XS;
      case "S":
        return FontSizes.S;
      case "M":
        return FontSizes.M;
      case "L":
        return FontSizes.L;
      case "XL":
        return FontSizes.XL;
      case "XXL":
        return FontSizes.XXL;
      case "XXXL":
        return FontSizes.XXXL;
      case "XXXXL":
        return FontSizes.XXXXL;
      case "XXXXXL":
        return FontSizes.XXXXLLL;
      default:
        return FontSizes.S;
    }
  };

  const getFontFamily = (key) => {
    switch (key) {
      case "semibold": //600
        return Fonts.PoppinsSemiBold;
      case "bold": //700
        return Fonts.PoppinsBold;
      case "medium": //500
        return Fonts.PoppinsMedium;
      default: //400
        return Fonts.PoppinsRegular;
    }
  };

  const getColor = (color) => {
    return color ?? Colors.secondry;
  };

  ff = getFontFamily(ff);
  fs = getFontSize(fs);
  color = getColor(color);

  style = StyleSheet.flatten(style);
  style = { fontSize: fs, fontFamily: ff,  lineHeight:lineHeight , selectionColor: Colors.primary, color, ...style };

  return (
    <>
      <_Text style={[style ]} {...rest}>
        {children}
      </_Text>
    </>
  );
};
