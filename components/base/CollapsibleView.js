import React, { useState, useRef, useEffect } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Animated,
  StyleSheet,
  I18nManager,
} from "react-native";
import { Colors, moderateScale, verticalScale } from "../../theme";
import DownArrow from "../svgsComponents/DownArrow";
import UpArrow from "../svgsComponents/UpArrow";
import { Text } from "./Text";
import { Divider } from "react-native-paper";

const CollapsibleView = ({
  title,
  children,
  containerStyle,
  collaspibleViewStyle,
  textStyle,
  collapsedChild,
  isCollapsed = false,
  collapsedIcon = <DownArrow color={Colors.secondry} />,
  expandedIcon = <UpArrow color={Colors.secondry} />,
}) => {
  const [collapsed, setCollapsed] = useState(isCollapsed);
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const toValue = collapsed ? 0 : 1;

    Animated.timing(animation, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [collapsed]);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const heightInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 20],
  });

  const animatedStyle = {
    transform: [{ translateY: heightInterpolate }],
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableWithoutFeedback style={{ flex: 1  , alignSelf: 'flex-start'}} onPress={toggleCollapse}>
        <View
          style={[
            {
              flexDirection: "row",
              alignItems: 'flex-start',
            },
            !collapsedChild && { alignItems: "center" },
          ]}
        >
          {title && (
            <Text
              fs="M"
              ff={"bold"}
              color={Colors.secondry}
              style={[textStyle, { alignSelf: 'flex-start'}]}
            >
              {title}
            </Text>
          )}

          {collapsedChild && collapsedChild}

          {collapsed ? collapsedIcon : expandedIcon}
        </View>
      </TouchableWithoutFeedback>

      {
        collapsed && <Divider
          style={{
            backgroundColor: Colors.grey400,
            marginTop: verticalScale(10),
          }}
        />
      }

      {!collapsed && (
        <Animated.View
          style={[
            styles.collapsibleContent,
            animatedStyle,
            collaspibleViewStyle,
          ]}
        >
          {children}
        </Animated.View>
      )}
    </View>
  );
};

export default CollapsibleView;

const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(16),
    borderRadius: moderateScale(8),
    marginBottom: moderateScale(12),
    marginEnd: I18nManager.isRTL ? moderateScale(8) : moderateScale(0),
    marginStart: I18nManager.isRTL ? moderateScale(16) : moderateScale(0),
  },
  collapsibleContent: {
    overflow: "hidden",
    paddingBottom: moderateScale(20),
    paddingTop: moderateScale(10),
    borderTopWidth: 1,
    borderTopColor: Colors.grey200,
    marginTop: moderateScale(-5),
  },
});
