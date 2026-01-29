// FadeModal.js

import React, {forwardRef, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  Colors,
  FontSizes,
  Fonts,
  moderateScale,
  scale,
  verticalScale,
} from '../../theme';
import {Button} from './Button';
import {Text} from './Text';

const FadeModal = (
  {
    onClose,
    header,
    headerTitle,
    setIsVisible,
    height,
    children,
    closeOnDragDown = true,
    closeOnPressMask = true,
    openDuration = 300,
    dualButton = false,
    dualButton1Text,
    dualButton2Text,
    dualButton1Press = setIsVisible,
    dualButton2Press,
    isButtonAdded = false,
    simpleBtnTitle = 'Close',
    loading,
    type = 1,
    icon = null,
    btnType = 'disabled',
    headerStyle = {},
    viewStyle = {},
    contentContainerStyle = {},
    keyboardAvoidingViewEnabled = false,
    dragFromTopOnly = false,
  },
  ref,
) => {
  const insets = useSafeAreaInsets();

  return (
    <RBSheet
      ref={ref}
      closeOnDragDown={closeOnDragDown}
      closeOnPressMask={closeOnPressMask}
      keyboardAvoidingViewEnabled={keyboardAvoidingViewEnabled}
      draggable={closeOnDragDown}
      dragFromTopOnly={dragFromTopOnly}
      customModalProps={{animationType: 'fade'}}
      onClose={onClose}
      customStyles={{
        wrapper: {
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        },
        container: {
          height: height,
          borderTopLeftRadius: moderateScale(16),
          borderTopRightRadius: moderateScale(16),
          backgroundColor: Colors.white,
          
        },
        draggableIcon: {
          backgroundColor: '#344054',
          width: scale(100),
        },
      }}>
      <View
        style={[
          styles.modalContainer,
          viewStyle,
          {
            paddingBottom:
              insets.bottom > 0
                ? verticalScale(insets.bottom)
                : verticalScale(15),
          },
        ]}>

        {header && (
          <>
            {type == 1 ? (
              <View style={styles.headerContainer}>
                <Text style={headerStyle} ff="bold" color="grey800" fs={'M'}>
                  {headerTitle}
                </Text>
                {/* <TouchableOpacity onPress={setIsVisible}>
                  <Svgs.Close />
                </TouchableOpacity> */}
              </View>
            ) : (
              <View style={{alignItems: 'center', gap: moderateScale(20)}}>
                {/* {icon} */}
                <Text
                  ff="medium"
                  color={Colors.black}
                  fs={'L'}
                  style={{textAlign: 'center', lineHeight: moderateScale(20)}}>
                  {headerTitle}
                </Text>
              </View>
            )}
          </>
        )}

        <View style={[styles.contentContainer, contentContainerStyle]}>{children}</View>
        {isButtonAdded && (
          <>
            {dualButton ? (
              <View style={[styles.buttonContainer]}>
                <View style={{flex: 1}}>
                  <Button
                    buttonStyle={{
                      borderWidth: 1,
                      borderColor: Colors.grey300,
                      width: '100%',
                      backgroundColor: Colors.white,
                    }}
                    isFirstButton
                    title={dualButton1Text}
                    onPress={dualButton1Press}
                  />
                </View>

                <View style={{flex: 1}}>
                  <Button
                    loading={loading}
                    title={dualButton2Text}
                    onPress={dualButton2Press}
                    buttonStyle={{width: '100%'}}
                    textStyle={{
                      fontFamily: Fonts.GothamMedium,
                    }}
                  />
                </View>
              </View>
            ) : (
              <>
                {isButtonAdded && (
                  <View style={[styles.buttonContainer]}>
                    <View style={{flex: 1}}>
                      <Button
                        loading={loading}
                        title={simpleBtnTitle}
                        onPress={dualButton1Press}
                        buttonStyle={styles.commonBtnStyle}
                        type={btnType}
                      />
                    </View>
                  </View>
                )}
              </>
            )}
          </>
        )}
      </View>
    </RBSheet>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(15),
    backgroundColor: Colors.white,
  },
  headerContainer: {
    marginBottom: moderateScale(7),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentContainer: {
    marginBottom: moderateScale(5),
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    gap: 20,
  },

  commonBtnStyle: {
    marginBottom: moderateScale(15),
  },

  borderView: {
    borderBottomWidth: 1,
    borderBottomColor: '#212121',
    marginBottom: moderateScale(10),
  },
  buttonStyle: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',


  },
  buttonGradient: {
    flex: 1,
    borderRadius: moderateScale(25),
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(48),
    paddingHorizontal: moderateScale(40),
    marginVertical: moderateScale(8),
  },
  textStyle: {
    fontFamily: Fonts.GothamBold,
    color: Colors.black,
    fontSize: FontSizes.M,
  },
});

export default forwardRef(FadeModal);
