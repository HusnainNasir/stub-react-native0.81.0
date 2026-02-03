import React from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../../theme';
import { Icons, Svgs } from '../../theme/images';
import { moderateScale, scale, verticalScale } from '../../utils/normalize';
import { Text } from './Text';

export const Header = ({
  onPress,
  onRightPress,
  rightIcon,
  loading,
  title,
  drawer,
  headerStyle,
}) => {
  const insets = useSafeAreaInsets();

  const isSafeAreaPhone = insets.top > 20 || insets.bottom > 0; // heuristic check

  return (
    <View
      style={[
        styles.container,
        headerStyle,
      ]}>
      {onPress !== undefined && onPress !== null && (
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.backBtnContainer]}
          onPress={onPress}>
          {drawer ? (
            <Image
              source={Icons.Menu}
              style={{
                width: scale(36),
                height: verticalScale(36),
                resizeMode: 'contain',
              }}
            />
          ) : (
            <Svgs.BackArrow width={scale(36)} height={verticalScale(36)} />
          )}
        </TouchableOpacity>
      )}

      {
        title && (
          <Text
            style={{
              flex: 1,
              // textAlign: 'center',
            }}
            ff={'bold'}
            fs={'XL'}
            color={Colors.white}>
            {title}
          </Text>
        )
      }

      {onRightPress && (
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.rightBtnContainer}
          disabled={loading}
          onPress={onRightPress}>
          {loading ? (
            <ActivityIndicator color={Colors.primary} size="small" />
          ) : (
            rightIcon
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: verticalScale(45),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: moderateScale(14),
    gap: moderateScale(20),
    backgroundColor: Colors.primary,
  },

  backBtnContainer: {
    zIndex: 10000,
    left: 0,
    height: verticalScale(40),
    justifyContent: 'center',
  },
  rightBtnContainer: {
    right: 0,
    zIndex: 100,
    paddingRight: moderateScale(30),
    position: 'absolute',
  },
});
