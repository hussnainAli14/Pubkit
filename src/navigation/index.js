import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
import Objectives from "../screens/objectives";
import { Dimensions, Image } from "react-native";
import AppColors from "../utils/AppColors";
import NotificationIcon from "../components/NotificationIcon";
import { useTranslation } from "react-i18next";
import EditAccount from "../screens/more/EditAccount";
import Messages from "../screens/messages";
import Chat from "../screens/messages/Chat";
import Notification from "../screens/NotificationItems";
import Settings from "../screens/more/Settings";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MyCompaigns from "../screens/compaign/MyCompaigns";
import Compaigns from "../screens/compaign/Compaigns";
import Income from "../screens/Payments/Income";
import Reward from "../screens/Payments/Reward";
import Setting from "../screens/Payments/Setting";
import Connect from "../screens/more/Connect";
import PartnerDetails from "../screens/more/PartnerDetails";
import CompaignInfo from "../screens/compaign/CompaignInfo";
import MyCompaignInfo from "../screens/compaign/MyCompaignInfo";
import ObjectiveDetails from "../screens/objectives/ObjectiveDetails";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const WelcomeStackNavigator = createNativeStackNavigator();
const OverViewStackNavigator = createNativeStackNavigator();
const CompaignStackNavigator = createNativeStackNavigator();
const ObjectivesStackNavigator = createNativeStackNavigator();
const MoreStackNavigator = createNativeStackNavigator();
const NotificationStackNavigator = createNativeStackNavigator();

const BottomTabNavigator = createBottomTabNavigator();
const TopTabs = createMaterialTopTabNavigator();
const PaymentTopTabs = createMaterialTopTabNavigator();
const FinalStack = createNativeStackNavigator();

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
const height = Dimensions.get("window").height;

//Compaign Tabs
export const MyTabs = () => {
  const { t } = useTranslation();

  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#989898",
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: "Outfit-Medium",
          textTransform: "capitalize",
        },
        tabBarIndicatorStyle: {
          backgroundColor: AppColors.blue,
          height: "100%",
        },
        tabBarStyle: {
          backgroundColor: AppColors.gray_light,
        },
      }}
    >
      <TopTabs.Screen name={t("my_compaign")} component={MyCompaigns} />
      <TopTabs.Screen name={t("compaign")} component={Compaigns} />
    </TopTabs.Navigator>
  );
};

//Payment Tabs
export const PaymentTabs = () => {
  const { t } = useTranslation();

  return (
    <PaymentTopTabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#989898",
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: "Outfit-Medium",
          textTransform: "capitalize",
        },
        tabBarIndicatorStyle: {
          backgroundColor: AppColors.blue,
          height: "100%",
        },
        tabBarStyle: {
          backgroundColor: AppColors.gray_light,
        },
      }}
    >
      <PaymentTopTabs.Screen name={t("incomes")} component={Income} />
      <PaymentTopTabs.Screen name={t("reward")} component={Reward} />
      <PaymentTopTabs.Screen name={t("setting")} component={Setting} />
    </PaymentTopTabs.Navigator>
  );
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
      <OverViewStackNavigator.Screen name={t("message")} component={Messages} />
      <OverViewStackNavigator.Screen
        name={t("notification")}
        component={Notification}
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
        component={MyTabs}
      />
      <CompaignStackNavigator.Screen name={t("message")} component={Messages} />
      <CompaignStackNavigator.Screen
        name={t("notification")}
        component={Notification}
      />
      <CompaignStackNavigator.Screen
        name={t("compaign_info")}
        component={CompaignInfo}
      />
      <CompaignStackNavigator.Screen
        name={t("my_compaign_info")}
        component={MyCompaignInfo}
      />
      <CompaignStackNavigator.Screen name={t("connect")} component={Connect} />
      <CompaignStackNavigator.Screen
        name={t("details")}
        component={PartnerDetails}
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
      <ObjectivesStackNavigator.Screen
        name={t("message")}
        component={Messages}
      />
      <ObjectivesStackNavigator.Screen
        name={t("notification")}
        component={Notification}
      />
      <ObjectivesStackNavigator.Screen
        name={t("objectiveDetails")}
        component={ObjectiveDetails}
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
      <MoreStackNavigator.Screen
        name={t("notification")}
        component={Notification}
      />
      <MoreStackNavigator.Screen name={t("settings")} component={Settings} />
      <MoreStackNavigator.Screen name={t("payments")} component={PaymentTabs} />
      <MoreStackNavigator.Screen name={t("connect")} component={Connect} />
      <MoreStackNavigator.Screen
        name={t("details")}
        component={PartnerDetails}
      />
      <MoreStackNavigator.Screen name={t("tab-compaign")} component={MyTabs} />
    </MoreStackNavigator.Navigator>
  );
};

export const NotificationStack = () => {
  const { t } = useTranslation();
  <NotificationStackNavigator.Navigator>
    <NotificationStackNavigator.Screen
      name={t("notification")}
      component={Notification}
    />
  </NotificationStackNavigator.Navigator>;
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
    </WelcomeStackNavigator.Navigator>
  );
};

export const BottomTabs = () => {
  return (
    <BottomTabNavigator.Navigator
      barStyle={{ backgroundColor: AppColors.gray_light }}
      activeColor={AppColors.blue_light}
      inactiveColor={AppColors.gray}
      screenOptions={({}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#FFF",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          height: height * 0.075,
          paddingBottom: height * 0.01,
        },
      })}
      initialRouteName="OverViewTab"
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

export const FinalStackNavigator = () => {
  const { t } = useTranslation();

  return (
    <FinalStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={t("MyTab")}
    >
      <FinalStack.Screen name={t("MyTab")} component={BottomTabs} />
      <FinalStack.Screen
        name={t("Chat")}
        component={Chat}
        options={{
          headerShown: true,
          ...defaultNavOptions,
        }}
      />
    </FinalStack.Navigator>
  );
};
