import React, { useCallback, useState, useEffect, StatusBar } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  LogBox,
  I18nManager,
} from "react-native";
import { useFonts } from "expo-font";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import * as SplashScreen from "expo-splash-screen";
import Colors from "../utils/AppColors";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthFlow from "./AuthFlow";

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);
LogBox.ignoreAllLogs();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondaryContainer: Colors.white,
  },
};

// import AppFlow from './AppFlow';

const App = () => {
  const [fontsLoaded] = useFonts({
    "Outfit-Black": require("../../assets/fonts/static/Outfit-Black.ttf"),
    "Outfit-Bold": require("../../assets/fonts/static/Outfit-Bold.ttf"),
    "Outfit-ExtraBold": require("../../assets/fonts/static/Outfit-ExtraBold.ttf"),
    "Outfit-ExtraLight": require("../../assets/fonts/static/Outfit-ExtraLight.ttf"),
    "Outfit-Light": require("../../assets/fonts/static/Outfit-Light.ttf"),
    "Outfit-Medium": require("../../assets/fonts/static/Outfit-Medium.ttf"),
    "Outfit-Regular": require("../../assets/fonts/static/Outfit-Regular.ttf"),
    "Outfit-SemiBold": require("../../assets/fonts/static/Outfit-SemiBold.ttf"),
    "Outfit-Thin": require("../../assets/fonts/static/Outfit-Thin.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const AllStack = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar barStyle={"dark-content"} />
      <View
        onLayout={onLayoutRootView}
        style={{
          flex: 1,
          direction: Platform.OS === "ios" ? "rtl" : "inherit",
        }}
      >
        <AllStack.Navigator screenOptions={{ headerShown: false }}>
          <AllStack.Screen name="Auth" component={AuthFlow} />
          {/* <AllStack.Screen name="App" component={AppFlow} /> */}
        </AllStack.Navigator>
      </View>
    </NavigationContainer>
  );
};
export default App;

const styles = StyleSheet.create({});
