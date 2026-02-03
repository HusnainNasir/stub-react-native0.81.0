import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoaderKit from 'react-native-loader-kit';
import { Colors, moderateScale, Strings, verticalScale } from '../theme';
import { Text } from './base';

export const ApiLoader = ({ isNoData = false, color = Colors.primary, text = Strings.NoResultsFound }) => {
  return (
    <View style={styles.loaderContainer}>
      {isNoData ? (
        <Text fs="M" ff="medium" color={color}>
          {text}
        </Text>
      ) : (
        <LoaderKit
          style={{ width: moderateScale(40), height: verticalScale(40) }}
          name={'BallClipRotateMultiple'} // Optional: see list of animations below
          color={color} // Optional: color can be: 'red', 'green',... or
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
