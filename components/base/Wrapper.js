import React, { useEffect, useState } from 'react';
import { Keyboard, Platform, ScrollView, StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from '../../theme';
import { Header } from './Header';
import { Loader } from './Loader';

export const Wrapper = ({
  children,
  onPress,
  onRightPress,
  style,
  header = false,
  loading = false,
  rightLoading = false,
  scroll = false,
  edges = ['bottom'],
  rightIcon,
  title = '',
  paddingHorizontal = true,
  safeAreaView = true,
  bounces = true,
  scrollStyle,
  gradient = false,
  drawer,
  centerIcon,
  headerStyle,
  topContainerStyle,
  subtitle,
  isTrademark = false,
  isSubTitleTrademark = false,
  isLinear = true,
}) => {
  const containerStyle = style ?? {
    flex: scroll ? undefined : 1,
  };

  const [keyboardSpace, setKeyboardSpace] = useState(0);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      event => {
        setKeyboardSpace(event.endCoordinates.height);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardSpace(0);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const getScrollView = () => (
    <ScrollView
      bounces={bounces}
      style={scrollStyle}
      contentContainerStyle={[
        {
          paddingBottom: keyboardSpace,
        },
        containerStyle,
      ]}
      showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
  const getView = () => <View style={containerStyle}>{children}</View>;

  return (
    <>
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle={Platform.OS === 'ios' ? 'dark-content' : 'dark-content'}
          backgroundColor={Colors.black}
        />

        <Loader loading={loading} />
        {safeAreaView ? (
          <SafeAreaView style={{ flex: 1 }} edges={edges}>
            {header && (
              <Header
                drawer={drawer}
                onPress={onPress}
                onRightPress={onRightPress}
                loading={rightLoading}
                rightIcon={rightIcon}
                isTrademark={isTrademark}
                isSubTitleTrademark={isSubTitleTrademark}
                title={title}
                gradient={gradient}
                centerIcon={centerIcon}
                headerStyle={headerStyle}
                subtitle={subtitle}
              />
            )}
            {scroll ? getScrollView() : getView()}
          </SafeAreaView>
        ) : (
          <>
            {header && (
              <Header
                drawer={drawer}
                onPress={onPress}
                onRightPress={onRightPress}
                loading={rightLoading}
                rightIcon={rightIcon}
                isTrademark={isTrademark}
                isSubTitleTrademark={isSubTitleTrademark}
                title={title}
                gradient={gradient}
                centerIcon={centerIcon}
                headerStyle={headerStyle}
                subtitle={subtitle}
              />
            )}
            {scroll ? getScrollView() : getView()}
          </>
        )}
      </View>
    </>
  );
};
