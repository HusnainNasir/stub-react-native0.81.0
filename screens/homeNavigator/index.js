import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Platform, TouchableWithoutFeedback, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';


import { Colors, FontSizes, moderateScale, moderateVerticalScale, ScreenName, Strings } from '../../theme';
import ChargeScreen from './chargeScreen';
import HomeScreen from './homeScreen';
import InventoryScreen from './inventoryScreen';
import OrderScreen from './orderScreen';
import ToolScreen from './toolScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeNavigator = () => {

    const insets = useSafeAreaInsets();

    const tabOptionHandler = ({ route }) => ({
        lazy: false,
        tabBarShowLabel: true,
        tabBarShowIcon: false,
        tabBarHideOnKeyboard: true,
        unmountOnBlur: false,
        tabBarStyle: {
            backgroundColor: Colors.white,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            overflow: 'hidden',
            elevation: 0,
            paddingTop: Platform.OS === 'android' ? '0.5%' : '1.5%',
            height:
                Platform.OS === 'android'
                    ? moderateVerticalScale(60) + insets.bottom
                    : moderateVerticalScale(60) + insets.bottom,

        },
        tabBarLabelStyle: {
            fontSize: FontSizes.S,
        },
        swipeEnabled: false,
        headerShown: false,
        // safeAreaInsets: { bottom: Platform.OS === 'android' ? moderateVerticalScale(10) : 0 }

        // // ✅ Custom tabBarButton to disable ripple effect
        // tabBarButton: props => (
        //     <TouchableWithoutFeedback onPress={props.onPress}>
        //         <View
        //             style={{
        //                 flex: 1,
        //                 alignItems: 'center',
        //             }}>
        //             {props.children}
        //         </View>
        //     </TouchableWithoutFeedback>
        // ),

        // tabBarIcon: ({ focused, color, size }) => {
        //     switch (route.name) {
        //         case ScreenName.HomeScreenStack:
        //             return (
        //                 <View
        //                     style={{
        //                         paddingHorizontal: moderateScale(13),
        //                         paddingVertical: moderateVerticalScale(13),
        //                         borderRadius: moderateScale(100),

        //                         backgroundColor: focused
        //                             ? Colors.bottomTabBgColor
        //                             : 'transparent',
        //                     }}>
        //                     <HomeSvg
        //                         width={moderateScale(30)}
        //                         height={moderateVerticalScale(30)}
        //                         color={focused ? Colors.primary : Colors.white}
        //                     />
        //                 </View>
        //             );
        //         case ScreenName.ChargesScreenStack:
        //             return (
        //                 <View
        //                     style={{
        //                         paddingHorizontal: moderateScale(13),
        //                         paddingVertical: moderateVerticalScale(13),
        //                         borderRadius: moderateScale(100),
        //                         backgroundColor: focused
        //                             ? Colors.bottomTabBgColor
        //                             : 'transparent',
        //                     }}>
        //                     <SmilePowered
        //                         width={moderateScale(30)}
        //                         height={moderateVerticalScale(30)}
        //                         color={focused ? Colors.primary : Colors.white}
        //                     />
        //                 </View>
        //             );
        //         case ScreenName.OrdersScreenStack:
        //             return (
        //                 <View
        //                     style={{
        //                         paddingHorizontal: moderateScale(13),
        //                         paddingVertical: moderateVerticalScale(13),
        //                         borderRadius: moderateScale(100),
        //                         backgroundColor: focused
        //                             ? Colors.bottomTabBgColor
        //                             : 'transparent',
        //                     }}>
        //                     <GuidedSmile
        //                         width={moderateScale(30)}
        //                         height={moderateVerticalScale(30)}
        //                         color={focused ? Colors.primary : Colors.white}
        //                     />
        //                 </View>
        //             );
        //         case ScreenName.InventoryScreenStack:
        //             return (
        //                 <View
        //                     style={{
        //                         paddingHorizontal: moderateScale(13),
        //                         paddingVertical: moderateVerticalScale(13),
        //                         borderRadius: moderateScale(100),
        //                         backgroundColor: focused
        //                             ? Colors.bottomTabBgColor
        //                             : 'transparent',
        //                     }}>
        //                     <Stats
        //                         width={moderateScale(30)}
        //                         height={moderateVerticalScale(26)}
        //                         color={focused ? Colors.primary : Colors.white}
        //                     />
        //                 </View>
        //             );
        //         case ScreenName.ToolsScreenStack:
        //             return (
        //                 <View
        //                     style={{
        //                         paddingHorizontal: moderateScale(13),
        //                         paddingVertical: moderateVerticalScale(13),
        //                         borderRadius: moderateScale(100),
        //                         backgroundColor: focused
        //                             ? Colors.bottomTabBgColor
        //                             : 'transparent',
        //                     }}>
        //                     <Setting
        //                         width={moderateScale(30)}
        //                         height={moderateVerticalScale(30)}
        //                         color={focused ? Colors.primary : Colors.white}
        //                     />
        //                 </View>
        //             );
        //     }
        // },
    });

    const HomeScreenStack = () => {
        return (
            <Stack.Navigator
                initialRouteName={ScreenName.HomeScreen}
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: false,
                }}>

                <Stack.Screen
                    name={ScreenName.HomeScreen}
                    component={HomeScreen}
                />

            </Stack.Navigator>
        );
    };

    const ChargesScreenStack = () => {
        return (
            <Stack.Navigator
                initialRouteName={ScreenName.ChargeScreen}
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: false,
                }}>

                <Stack.Screen
                    name={ScreenName.ChargeScreen}
                    component={ChargeScreen}
                />

            </Stack.Navigator>
        );
    };

    const OrdersScreenStack = () => {
        return (
            <Stack.Navigator
                initialRouteName={ScreenName.OrderScreen}
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: false,
                }}>

                <Stack.Screen
                    name={ScreenName.OrderScreen}
                    component={OrderScreen}
                />
            </Stack.Navigator>
        );
    };

    const InventoryScreenStack = () => {
        return (
            <Stack.Navigator
                initialRouteName={
                    ScreenName.InventoryScreen
                }
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: false,
                }}>

                <Stack.Screen
                    name={ScreenName.InventoryScreen}
                    component={InventoryScreen}
                />

            </Stack.Navigator>
        );
    };

    const ToolsScreenStack = () => {
        return (
            <Stack.Navigator
                initialRouteName={ScreenName.ToolScreen}
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: false,
                }}>

                <Stack.Screen
                    name={ScreenName.ToolScreen}
                    component={ToolScreen}
                />

            </Stack.Navigator>
        );
    };

    return (
        // <SafeAreaView
        //     style={{ flex: 1, backgroundColor: Colors.white }}
        //     edges={Platform.OS === 'android' ? ['bottom'] : []}>
        <Tab.Navigator
            initialRouteName={ScreenName.HomeScreenStack}
            screenOptions={tabOptionHandler}>
            <Tab.Screen
                name={ScreenName.HomeScreenStack}
                component={HomeScreenStack}
                options={{ tabBarLabel: Strings.Home }}
            />
            <Tab.Screen
                name={ScreenName.ChargesScreenStack}
                component={ChargesScreenStack}
                options={{ tabBarLabel: Strings.Charges }}
            />
            <Tab.Screen
                name={ScreenName.OrdersScreenStack}
                component={OrdersScreenStack}
                options={{ tabBarLabel: Strings.Order }}
            />
            <Tab.Screen
                name={ScreenName.InventoryScreenStack}
                component={InventoryScreenStack}
                options={{ tabBarLabel: Strings.Inventory }}
            />
            <Tab.Screen
                name={ScreenName.ToolsScreenStack}
                component={ToolsScreenStack}
                options={{ tabBarLabel: Strings.Tools }}
            />
        </Tab.Navigator>
        // </SafeAreaVieF
    );
};

export default HomeNavigator;