import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { screens } from '@screens';
import { connectors } from '@store';
import React, { useContext, useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';
import 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastCard } from './components/base';
import { getOptions, GlobalOptionsContext, OptionsContext } from './options';
import { ScreenName, ToastType } from './theme';
import { navigationRef } from './utils/NavigationService';
import { getStore } from './utils/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

const getNavigation = (modules, store) => {
  const global = useContext(GlobalOptionsContext);

  const getInitialRoute = () => {

    return ScreenName.LoginScreen;
  };

  const initialRoute = getInitialRoute();

  console.log(initialRoute, 'initi');

  const Navigation = () => {
    const routes = modules.map(mod => {
      const pakage = mod.package;
      const name = mod.value.title;
      const Navigator = mod.value.navigator;
      const Component = props => {
        return (
          <OptionsContext.Provider value={getOptions(pakage)}>
            <Navigator {...props} />
          </OptionsContext.Provider>
        );
      };
      return <Stack.Screen key={name} name={name} component={Component} />;
    });


    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName={initialRoute}
          screenOptions={{
            headerShown: false,
          }}>
          {routes}
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  return Navigation;
};

const toastConfig = {
  success: ({ props }) => (
    <ToastCard type={ToastType.Success} text={props?.textMsg} />
  ),
  error: ({ props }) => (
    <ToastCard type={ToastType.Error} text={props?.textMsg} />
  ),
};


const App = () => {
  const global = useContext(GlobalOptionsContext);

  const store = getStore(global, connectors);
  const persistor = persistStore(store);
  const Navigation = getNavigation(screens, store);

  useEffect(() => {

    setTimeout(() => {
      try {
        hideSplashScreen();
      } catch (error) {
        console.log('Error hiding splash screen:', error);
      }
    }, 3000);

  }, []);

  const hideSplashScreen = async () => {
    await BootSplash.hide({ fade: true });
  }


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PaperProvider>
            <Navigation />
            <Toast config={toastConfig} visibilityTime={6000} />
          </PaperProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
