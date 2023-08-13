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
import { Dimensions, Image, Text, View } from "react-native";
import AppColors from "../utils/AppColors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import NotificationIcon from "../components/NotificationIcon";
import { useTranslation } from "react-i18next";
import EditAccount from "../screens/more/EditAccount";
import Messages from "../screens/messages";
import Chat from "../screens/messages/Chat";
import { useRoute } from "@react-navigation/native";
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
const MessageStackNavigator = createNativeStackNavigator();
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

const width = Dimensions.get("window").width;
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
      {/* <OverViewStackNavigator.Screen name={t("chat")} component={Chat} /> */}
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
      {/* <CompaignStackNavigator.Screen
        name={t("tab-compaign")}
        component={Compaign}
      /> */}
      <CompaignStackNavigator.Screen name={t("message")} component={Messages} />
      {/* <CompaignStackNavigator.Screen name={t("chat")} component={Chat} /> */}
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
      <CompaignStackNavigator.Screen name={t("chat")} component={Chat} />
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
      {/* <ObjectivesStackNavigator.Screen name={t("chat")} component={Chat} /> */}
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
      <MoreStackNavigator.Screen name={t("message")} component={Messages} />
      {/* <MoreStackNavigator.Screen
        name={t("chat")}
        component={Chat}
        options={{ tabBarVisible: false }}
      /> */}
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
      <MoreStackNavigator.Screen name={t("chat")} component={Chat} />
    </MoreStackNavigator.Navigator>
  );
};

// export const MessageStack = ()=>{
//   const { t } = useTranslation();
// <MessageStackNavigator.Navigator screenOptions={defaultNavOptions}>
// {/* <MessageStackNavigator.Screen name={t("message")} component={Messages}/> */}
// <MessageStackNavigator.Screen name={t("chat")} component={Chat} />
// <MessageStackNavigator.Screen name={t('notification')} component={NotificationIcon}/>
// </MessageStackNavigator.Navigator>
// }

// export const NotificationStack = ()=>{
//   const { t } = useTranslation();
// <NotificationStackNavigator.Navigator>
//   <NotificationStackNavigator.Screen name={t('notification')} component={Notification}/>
// </NotificationStackNavigator.Navigator>
// }

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
      {/* <WelcomeStackNavigator.Screen name="OverviewTab" component={BottomTabs} /> */}
    </WelcomeStackNavigator.Navigator>
  );
};

export const BottomTabs = () => {
  return (
    <BottomTabNavigator.Navigator
      barStyle={{ backgroundColor: AppColors.gray_light }}
      activeColor={AppColors.blue_light}
      inactiveColor={AppColors.gray}
      screenOptions={({ route }) => ({
        headerShown: false,
        // tabBarShowLabel: false,
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
      // style={{display:'none'}}
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

    // <BottomTabNavigator.Navigator
    //   screenOptions={({ route }) => ({
    //     headerShown: false,
    //     tabBarShowLabel: false,
    //     tabBarStyle: {
    //       backgroundColor: "#FFF",
    //       flexDirection: "column",
    //       justifyContent: "flex-start",
    //       alignItems: "center",
    //       // borderTopWidth: 0,
    //       // height: height * 0.07,
    //       paddingBottom: height * 0.04,
    //       // paddingTop: height * 0.015,
    //       // paddingVertical: 20,
    //     },
    //   })}
    // >
    //   <BottomTabNavigator.Screen
    //     options={{
    //       tabBarIcon: ({ focused }) => {
    //         return (
    //           <View
    //             style={{
    //               alignItems: "center",
    //               flexDirection: "column",
    //               justifyContent: "space-evenly",
    //             }}
    //           >
    //             <Image
    //               source={require("../../assets/images/element3.png")}
    //               style={{
    //                 resizeMode: "contain",
    //                 width: width * 0.07,
    //                 height: width * 0.07,
    //                 // marginBottom: height * 0.008,
    //                 tintColor: focused ? "#5FC1F8" : "#989898",
    //               }}
    //             />
    //           </View>
    //         );
    //       },
    //     }}
    //     name="Overview"
    //     component={OverViewStack}
    //   />

    //   <BottomTabNavigator.Screen
    //     options={{
    //       tabBarIcon: ({ focused }) => {
    //         return (
    //           <View
    //             style={{
    //               alignItems: "center",
    //               flexDirection: "column",
    //               justifyContent: "space-evenly",
    //             }}
    //           >
    //             <Image
    //               source={require("../../assets/images/arrowswapvertical.png")}
    //               style={{
    //                 resizeMode: "contain",
    //                 width: width * 0.07,
    //                 height: width * 0.07,
    //                 // marginBottom: height * 0.008,
    //                 tintColor: focused ? "#5FC1F8" : "#989898",
    //               }}
    //             />
    //           </View>
    //         );
    //       },
    //     }}
    //     name="Compaigns"
    //     component={CompaignStack}
    //   />

    //   <BottomTabNavigator.Screen
    //     options={{
    //       tabBarIcon: ({ focused }) => {
    //         return (
    //           <View
    //             style={{
    //               alignItems: "center",
    //               flexDirection: "column",
    //               justifyContent: "space-evenly",
    //             }}
    //           >
    //             <Image
    //               source={require("../../assets/images/flash.png")}
    //               style={{
    //                 resizeMode: "contain",
    //                 width: width * 0.07,
    //                 height: width * 0.07,
    //                 // marginBottom: height * 0.008,
    //                 tintColor: focused ? "#5FC1F8" : "#989898",
    //               }}
    //             />
    //           </View>
    //         );
    //       },
    //     }}
    //     name="Objectives"
    //     component={ObjectivesStack}
    //   />
    //   <BottomTabNavigator.Screen
    //     options={{
    //       tabBarIcon: ({ focused }) => {
    //         return (
    //           <View
    //             style={{
    //               alignItems: "center",
    //               flexDirection: "column",
    //               justifyContent: "space-evenly",
    //             }}
    //           >
    //             <Image
    //               source={require("../../assets/images/hambergermenu.png")}
    //               style={{
    //                 resizeMode: "contain",
    //                 width: width * 0.07,
    //                 height: width * 0.07,
    //                 // marginBottom: height * 0.008,
    //                 tintColor: focused ? "#5FC1F8" : "#989898",
    //               }}
    //             />
    //           </View>
    //         );
    //       },
    //     }}
    //     name="More"
    //     component={MoreStack}
    //   />
    // </BottomTabNavigator.Navigator>
  );
};

export const FinalStackNavigator = () => {
  const { t } = useTranslation();

  return (
    <FinalStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <FinalStack.Screen name={t("MyTab")} component={BottomTabs} />
      <FinalStack.Screen
        name={t("chat")}
        component={Chat}
        options={{
          headerShown: true,
          ...defaultNavOptions,
        }}
      />
    </FinalStack.Navigator>
  );
};
