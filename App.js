import React, { useCallback, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  LogBox,
  I18nManager,
} from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import * as SplashScreen from "expo-splash-screen";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from './src/utilis/Firebase-config';
import Colors from "./src/utils/AppColors";
import {
  BottomTabs,
  FinalStackNavigator,
  WelcomeStack,
} from "./src/navigation";

import { onAuthStateChanged, auth } from "./src/utils/Firebase-config";
import { Provider } from "react-redux";
import { store } from "./src/Redux/store";

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

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log("HELLOoo");
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  const [fontsLoaded] = useFonts({
    "Outfit-Black": require("./assets/fonts/static/Outfit-Black.ttf"),
    "Outfit-Bold": require("./assets/fonts/static/Outfit-Bold.ttf"),
    "Outfit-ExtraBold": require("./assets/fonts/static/Outfit-ExtraBold.ttf"),
    "Outfit-ExtraLight": require("./assets/fonts/static/Outfit-ExtraLight.ttf"),
    "Outfit-Light": require("./assets/fonts/static/Outfit-Light.ttf"),
    "Outfit-Medium": require("./assets/fonts/static/Outfit-Medium.ttf"),
    "Outfit-Regular": require("./assets/fonts/static/Outfit-Regular.ttf"),
    "Outfit-SemiBold": require("./assets/fonts/static/Outfit-SemiBold.ttf"),
    "Outfit-Thin": require("./assets/fonts/static/Outfit-Thin.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <View
            style={{ flex: 1, width: "100%", height: "100%" }}
            onLayout={onLayoutRootView}
          >
            {user ? <FinalStackNavigator /> : <WelcomeStack />}
          </View>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// import App from "./src/routes";

// export default App;
