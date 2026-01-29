import React, { forwardRef, useEffect, useState } from 'react';
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
// import PhoneInput from "react-native-phone-number-input";
import {
  Colors,
  FontSizes,
  Fonts,
  moderateScale,
  scale,
  verticalScale,
} from '../../theme';
import { Icons, Svgs } from '../../theme/images';
import { Text } from './Text';

const Input = (props, ref) => {
  const {
    error,
    inputWrapperStyle,
    inputWrapperErrorStyle,
    inputStyle,
    errorStyle,
    containerStyle,
    placeholder,
    placeholderColor = Colors.placeholderColor,
    onChangeText,
    type = 'input',
    value,
    secureTextEntry = false,
    incrementer = false,
    icon,
    pressableIcon = null,
    onIconPress = null,
    leftIcon,
    onLeftIconPress,
    title,
    defaultCode = 'US',
    onBlur,
    nonEditablePress,
    required,
  } = props;

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [numericValue, setNumericValue] = useState(value?.toString());

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };

  useEffect(() => {
    if (incrementer) {
      setNumericValue(value?.toString());
    }
  }, [value]);

  const handleIncrement = () => {
    //Explain this function

    const newValue = parseInt(numericValue, 10) + 1;
    setNumericValue(newValue.toString());
    onChangeText(newValue);
  };

  const handleDecrement = () => {
    const newValue = Math.max(parseInt(numericValue, 10) - 1, 0);
    setNumericValue(newValue.toString());
    onChangeText(newValue);
  };

  const handleTextChange = text => {
    const numericText = text.replace(/\D/g, ''); // Allow only numeric characters
    setNumericValue(numericText);
    onChangeText(text);
  };

  const DownArrowImage = () => {
    return (
      <Image
        source={Icons.ChevronDown}
        style={{
          width: scale(20),
          heigh: verticalScale(20),
        }}
      />
    );
  };

  return (
    <View style={[styles.containerStyle, containerStyle]}>
      {title && (
        <Text
          style={{
            alignSelf: 'flex-start',
            marginBottom:verticalScale(5)
          }}
          fs="M"
          ff={'medium'}
          color={Colors.white}>
          {title}
          {required && (
            <Text fs="S" color={Colors.error}>
              *
            </Text>
          )}
        </Text>
      )}
      <Pressable
        onPressIn={nonEditablePress}
        style={[styles.inputWrapper, inputWrapperStyle]}>
        {onLeftIconPress ||
          (leftIcon && (
            <TouchableOpacity
              style={styles.leftIcon}
              onPress={onLeftIconPress}
              activeOpacity={0.7}>
              {leftIcon}
            </TouchableOpacity>
          ))}

        {type === 'phone_number' ? (
          <></>
        ) : (
          // <PhoneInput
          //   defaultValue={""}
          //   defaultCode={defaultCode}
          //   layout="second"
          //   withDarkTheme={true}
          //   placeholder={placeholder}
          //   // disableArrowIcon={true}
          //   containerStyle={[
          //     styles.phoneContainer,
          //     Platform.OS === "ios" && styles.phoneContainerIOS,
          //   ]}
          //   textInputProps={{
          //     onBlur: onBlur,
          //     cursorColor: Colors.primary,
          //     selectionColor: Colors.primary,
          //     placeholderTextColor: Colors.placeholderColor,
          //     textAlign: I18nManager.isRTL ? "right" : "left",
          //   }}
          //   value={value}
          //   textContainerStyle={[
          //     styles.textContainer,
          //     {
          //       backgroundColor: Colors.white,
          //     },
          //   ]}

          //   codeTextStyle={styles.codeText}
          //   textInputStyle={{
          //     color: Colors.secondry,
          //     fontSize: FontSizes.S,
          //     fontFamily: Fonts.InterRegular,
          //     marginStart: moderateScale(-25),
          //   }}
          //   onChangeFormattedText={onChangeText}
          // />
          <TextInput
            {...props}
            ref={ref}
            style={[
              styles.input,
              type === 'textarea'
                ? {
                    minHeight: verticalScale(100),
                    maxWidth: verticalScale(400),
                    textAlignVertical: 'top',
                    borderRadius: moderateScale(16),
                    paddingTop: moderateScale(13),
                  }
                : {height: verticalScale(48)},
              inputStyle,
            ]}
            {...(nonEditablePress ? {onPressIn: nonEditablePress} : {})}
            selectionColor={Colors.primary}
            placeholderTextColor={placeholderColor}
            placeholder={placeholder}
            onChangeText={incrementer ? handleTextChange : onChangeText}
            value={incrementer ? numericValue : value}
            multiline={type === 'textarea'}
            secureTextEntry={secureTextEntry && !isPasswordVisible}
            onBlur={onBlur}
          />
        )}

        {secureTextEntry && (
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={togglePasswordVisibility}>
            {isPasswordVisible ? (
              <Svgs.Unlocked width={scale(20)} height={verticalScale(18)} />
            ) : (
              <Svgs.Locked width={scale(20)} height={verticalScale(18)} />
            )}
          </TouchableOpacity>
        )}
        {onIconPress && pressableIcon && (
          <TouchableOpacity
            style={styles.rightIcon}
            onPress={onIconPress}
            activeOpacity={0.7}>
            {pressableIcon}
          </TouchableOpacity>
        )}

        {icon && <View style={styles.eyeIcon}>{icon}</View>}
        {incrementer && (
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.incrementerIcon}
              onPress={handleIncrement}>
              <Svgs.ArrowDropUp />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.incrementerIcon}
              onPress={handleDecrement}>
              <Svgs.ArrowDropDown />
            </TouchableOpacity>
          </View>
        )}
      </Pressable>
      {error ? <Text style={[styles.error, errorStyle]}>{error}</Text> : null}
    </View>
  );
};

export default forwardRef(Input);

const styles = StyleSheet.create({
  containerStyle: {
    gap: moderateScale(8),
  },
  inputWrapper: {
    borderRadius: moderateScale(80),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(20),
    height: verticalScale(60),
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.inputBorder,
  },
  input: {
    flex: 1,
    paddingHorizontal: moderateScale(15),
    fontSize: FontSizes.S,
    fontFamily: Fonts.PoppinsMedium,
    color: Colors.black,
    selectionColor: Colors.primary,
    // marginTop: Platform.OS === 'android' ? moderateScale(4) : moderateScale(0),
    textAlignVertical: 'center',
    includeFontPadding: false,
  },
  eyeIcon: {
    padding: moderateScale(10),
  },
  rightIcon: {
    paddingRight: moderateScale(10),
    paddingLeft: moderateScale(5),
  },
  leftIcon: {
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(0),
  },
  error: {
    marginTop: moderateScale(3),
    color: Colors.secondry,
    fontSize: FontSizes.XS,
    fontFamily: Fonts.PoppinsMedium,
    fontWeight: '400',
  },
  incrementerIcon: {
    paddingHorizontal: moderateScale(10),
  },

  phoneContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(8),
    paddingRight: moderateScale(12),
    paddingVertical:
      Platform.OS === 'android' ? moderateScale(5) : moderateScale(0),
    width: '100%',
    backgroundColor: Colors.white,
    borderColor: Colors.inputBorder,
  },
  phoneContainerIOS: {
    paddingVertical:
      Platform.OS === 'ios' ? moderateScale(17) : moderateScale(0),
  },
  textContainer: {
    backgroundColor: Colors.white,
    paddingVertical: 0,
    cursorColor: Colors.primary,
  },
  codeText: {
    fontSize: FontSizes.S,
    fontFamily: Fonts.PoppinsRegular,
    // color: Colors.white,
  },
});
