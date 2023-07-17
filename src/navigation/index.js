import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Login, {
  screenOptions as LoginScreenOptions,
} from "../screens/welcome/Login";
import Signup, {
  screenOptions as RegisterScreenOptions,
} from "../screens/welcome/Signup";
import OverView, {
  screenOptions as OverviewScreenOptions,
} from "../screens/overview";
import More from "../screens/more";
import Compaign from "../screens/compaign";
import Objectives from "../screens/objectives";
import { Image, Text, View } from "react-native";
import AppColors from "../utils/AppColors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import NotificationIcon from "../components/NotificationIcon";
import { useTranslation } from "react-i18next";
import EditAccount from "../screens/more/EditAccount";

const WelcomeStackNavigator = createNativeStackNavigator();
const BottomTabNavigator = createMaterialBottomTabNavigator();
const OverViewStackNavigator = createNativeStackNavigator();
const CompaignStackNavigator = createNativeStackNavigator();
const ObjectivesStackNavigator = createNativeStackNavigator();
const MoreStackNavigator = createNativeStackNavigator();

const defaultNavOptions = {
  headerBackTitleVisible: true,
  headerStyle: {
    backgroundColor:
      Platform.OS === "android" ? AppColors.blue_light : AppColors.blue_light,
  },
  headerTitleStyle: { fontFamily: "Outfit-Medium" },
  headerBackTitleStyle: { fontFamily: "Outfit-Medium" },
  headerTintColor: Platform.OS === "android" ? "#FFFFFF" : "#FFFFFF",
  headerTitleAlign: "center",
  headerRight: () => <NotificationIcon />,
};

export const OverViewStack = () => {
  const { t } = useTranslation();

  return (
    <OverViewStackNavigator.Navigator
      screenOptions={defaultNavOptions}
      initialRouteName="OverView"
    >
      <OverViewStackNavigator.Screen
        name={t("tab-overview")}
        component={OverView}
        screenOptions={OverviewScreenOptions}
      />
      <OverViewStackNavigator.Screen
        name="RegisterScreen"
        component={Signup}
        options={RegisterScreenOptions}
      />
    </OverViewStackNavigator.Navigator>
  );
};

export const CompaignStack = () => {
  const { t } = useTranslation();

  return (
    <CompaignStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <CompaignStackNavigator.Screen
        name={t("tab-compaign")}
        component={Compaign}
      />
    </CompaignStackNavigator.Navigator>
  );
};

export const ObjectivesStack = () => {
  const { t } = useTranslation();

  return (
    <ObjectivesStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <ObjectivesStackNavigator.Screen
        name={t("tab-objective")}
        component={Objectives}
      />
    </ObjectivesStackNavigator.Navigator>
  );
};

export const MoreStack = () => {
  const { t } = useTranslation();

  return (
    <MoreStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <MoreStackNavigator.Screen name={t("tab-more")} component={More} />
      <MoreStackNavigator.Screen
        name={t("edit_account")}
        component={EditAccount}
      />
    </MoreStackNavigator.Navigator>
  );
};

export const BottomTabs = () => {
  return (
    <BottomTabNavigator.Navigator
      barStyle={{ backgroundColor: AppColors.gray_light }}
      activeColor={AppColors.blue_light}
      inactiveColor={AppColors.gray}
      labeled={true}
      initialRouteName="OverViewTab"

      // screenOptions={defaultNavOptions}
    >
      <BottomTabNavigator.Screen
        name="OverViewTab"
        component={OverViewStack}
        options={{
          tabBarLabel: "Overview",
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={require("../../assets/images/element3.png")}
              style={{ tintColor: color }}
            />

            // <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name="CompaignTab"
        component={CompaignStack}
        options={{
          tabBarLabel: "Compaigns",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/images/arrowswapvertical.png")}
              style={{ tintColor: color }}
            />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name="ObjectiveTab"
        component={ObjectivesStack}
        options={{
          tabBarLabel: "Objectives",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/images/flash.png")}
              style={{ tintColor: color, backgroundColor: "transparent" }}
            />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name="MoreTab"
        component={MoreStack}
        options={{
          tabBarLabel: "More",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/images/hambergermenu.png")}
              style={{ tintColor: color, backgroundColor: "transparent" }}
            />
          ),
        }}
      />
    </BottomTabNavigator.Navigator>
  );
};

export const WelcomeStack = () => {
  return (
    <WelcomeStackNavigator.Navigator>
      <WelcomeStackNavigator.Screen
        name="LoginScreen"
        component={Login}
        options={LoginScreenOptions}
      />
      <WelcomeStackNavigator.Screen
        name="RegisterScreen"
        component={Signup}
        options={RegisterScreenOptions}
      />
      <WelcomeStackNavigator.Screen name="OverviewTab" component={BottomTabs} />
    </WelcomeStackNavigator.Navigator>
  );
};
