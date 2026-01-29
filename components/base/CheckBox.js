import React, {useEffect, useRef} from 'react';
import {StyleSheet, View, TouchableOpacity, Animated} from 'react-native';
import {Colors, moderateScale, scale, verticalScale} from '../../theme';
import {Text} from './Text';
import {Svgs} from '../../theme/images';

export const CheckBox = ({
  checked = false,
  handlePress = () => {},
  text = false,
  descriptionStyle = {},
  containerStyle,
  description,
  clickableText,
  clickableTextPress,
  key,
}) => {
  const fadeAnim = useRef(new Animated.Value(checked ? 1 : 0)).current;
  const scaleAnim = useRef(new Animated.Value(checked ? 1 : 0.6)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: checked ? 1 : 0,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: checked ? 1 : 0.6,
        tension: 60,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start();
  }, [checked, fadeAnim, scaleAnim]);

  return (
    <View style={[styles.container, containerStyle]} key={key}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[
          styles.checkbox,
          {
            borderColor: checked ? Colors.primary : Colors.grey300,
            backgroundColor: checked ? Colors.primary : Colors.white,
          },
        ]}
        onPress={handlePress}>
        <Animated.View
          style={[
            styles.checkIconContainer,
            {
              opacity: fadeAnim,
              transform: [{scale: scaleAnim}],
            },
          ]}>
          <Svgs.Checked />
        </Animated.View>
      </TouchableOpacity>
      {text !== false && (
        <View style={styles.descriptionContainer}>
          <Text
            style={[descriptionStyle , {
              includeFontPadding: false,
            }]}
            ff="medium"
            color={Colors.white}
            fs="M">
            {description}
          </Text>

          {clickableText && (
            <TouchableOpacity onPress={clickableTextPress} activeOpacity={0.7} >
              <Text
                style={{
                  textDecorationLine: 'underline',
                }}
                ff="bold"
                color={Colors.secondry}
                fs="M">
                {clickableText}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: scale(20),
    height: verticalScale(20),
    borderRadius: moderateScale(5),
    borderWidth: moderateScale(1),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: moderateScale(10),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(20),
  },
  checkIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedInnerBox: {
    backgroundColor: Colors.primary,
    width: scale(10),
    height: verticalScale(10),
    borderRadius: moderateScale(10),
    alignSelf: 'center',
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(5),
  },
});
