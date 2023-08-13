import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  Login,
  Signup,
  Income,
  Reward,
  Setting,
  OverView,
  Objectives,
  ObjectiveDetails,
  Notification,
  More,
  Connect,
  EditAccount,
  PartnerDetails,
  Settings,
  Chat,
  Messages,
  Compaign,
  Compaigns,
  CompaignInfo,
  MyCompaignInfo,
  MyCompaigns,
} from "../../screens";

const AuthFlow = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Signup" component={Signup} />
      <AuthStack.Screen name="Income" component={Income} />
      <AuthStack.Screen name="Reward" component={Reward} />
      <AuthStack.Screen name="Setting" component={Setting} />
      <AuthStack.Screen name="OverView" component={OverView} />
      <AuthStack.Screen name="Objectives" component={Objectives} />
      <AuthStack.Screen name="ObjectiveDetails" component={ObjectiveDetails} />
      <AuthStack.Screen name="PartnerDetails" component={PartnerDetails} />
      <AuthStack.Screen name="MyCompaignInfo" component={MyCompaignInfo} />
      <AuthStack.Screen name="CompaignInfo" component={CompaignInfo} />
      <AuthStack.Screen name="EditAccount" component={EditAccount} />
      <AuthStack.Screen name="Notification" component={Notification} />
      <AuthStack.Screen name="MyCompaigns" component={MyCompaigns} />
      <AuthStack.Screen name="Compaigns" component={Compaigns} />
      <AuthStack.Screen name="Messages" component={Messages} />
      <AuthStack.Screen name="Settings" component={Settings} />
      <AuthStack.Screen name="Compaign" component={Compaign} />
      <AuthStack.Screen name="Connect" component={Connect} />
      <AuthStack.Screen name="More" component={More} />
      <AuthStack.Screen name="Chat" component={Chat} />
    </AuthStack.Navigator>
  );
};
export default AuthFlow;

const styles = StyleSheet.create({});
