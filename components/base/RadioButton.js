import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Colors, scale, verticalScale } from "../../theme";
import CheckedRadio from "../svgsComponents/CheckedRadio";
import Radio from "../svgsComponents/Radio";
import { Text } from "./Text";

const RadioButton = ({ text, radioChecked, setRadioChecked , textStyle , checkedColor=Colors.primary  , uncheckedColor=Colors.black}) => {
  return (
    <TouchableOpacity
      style={styles?.container}
      activeOpacity={0.7}
      onPress={setRadioChecked}
    >
      {radioChecked ? <CheckedRadio width={scale(20)} height={verticalScale(20)} color={checkedColor}/> : <Radio width={scale(20)} height={verticalScale(20)} color={uncheckedColor}/>}

      <Text fs={"XXL"} ff={'medium'} color={Colors.placeholderColor} style={[styles.textStyle , textStyle ]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default RadioButton

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: verticalScale(10),
  },
  textStyle: {
    marginLeft: scale(12),
  },
});
