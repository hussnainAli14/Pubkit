import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Login, {
    screenOptions as LoginScreenOptions,
  } from "../screens/welcome/Login";
  import Signup, {
    screenOptions as RegisterScreenOptions,
  } from "../screens/welcome/Signup";
import OverView from "../screens/overview";
import More from "../screens/more";
import Compaign from "../screens/compaign";
import Objectives from "../screens/objectives";
import { Image } from "react-native";
import AppColors from "../utils/AppColors";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';




const WelcomeStackNavigator = createNativeStackNavigator();
const BottomTabNavigator = createMaterialBottomTabNavigator();
const OverViewStackNavigator = createNativeStackNavigator();
const CompaignStackNavigator = createNativeStackNavigator();
const ObjectivesStackNavigator = createNativeStackNavigator();
const MoreStackNavigator = createNativeStackNavigator();

export const OverViewStack = ()=>{
  return(
  <OverViewStackNavigator.Navigator>
    <OverViewStackNavigator.Screen
    name="OverView"
    component={OverView}
    />
     <OverViewStackNavigator.Screen
    name="RegisterScreen"
    component={Signup}
    options={RegisterScreenOptions}
    />
  </OverViewStackNavigator.Navigator>
  )
}


export const CompaignStack = ()=>{
  return(
  <CompaignStackNavigator.Navigator>
    <CompaignStackNavigator.Screen
    name="Compaign"
    component={Compaign}
    />
  </CompaignStackNavigator.Navigator>
  )
}

export const ObjectivesStack = ()=>{
  return(
  <ObjectivesStackNavigator.Navigator>
    <ObjectivesStackNavigator.Screen
    name="Objectives"
    component={Objectives}
    />

  </ObjectivesStackNavigator.Navigator>
  )
}

export const MoreStack = ()=>{
  return(
  <MoreStackNavigator.Navigator>
    <MoreStackNavigator.Screen
    name="more"
    component={More}
    />
  </MoreStackNavigator.Navigator>
  )
}

export const BottomTabs =()=>{
  return(
<BottomTabNavigator.Navigator
barStyle={{ backgroundColor: AppColors.gray_light}}
activeColor={AppColors.blue_light}
inactiveColor={AppColors.gray}
labeled={true}
// screenOptions={defaultNavOptions}
>
  <BottomTabNavigator.Screen
  name="Overview"
  component={OverViewStack}
  options={{
    tabBarLabel: 'Overview',
          tabBarIcon: ({ color }) => (
            <Image source={require('../../assets/images/element3.png')} />
            // <MaterialCommunityIcons name="bell" color={color} size={26} />

          ),
   
  }}
  />
  <BottomTabNavigator.Screen
  name="Compaigns"
  component={CompaignStack}
  options={{
    tabBarLabel: 'Compaigns',
          tabBarIcon: ({ color }) => (
            <Image source={require('../../assets/images/arrowswapvertical.png')} />
          ),
   
  }}
  />
  <BottomTabNavigator.Screen
  name="Objectives"
  component={ObjectivesStack}
  options={{
    tabBarLabel: 'Objectives',
          tabBarIcon: ({ color }) => (
            <Image source={require('../../assets/images/flash.png')} />
          ),
   
  }}
  />
  <BottomTabNavigator.Screen
  name="More"
  component={MoreStack}
  options={{
    tabBarLabel: 'More',
    tabBarIcon: ({ color }) => (
      <Image source={require('../../assets/images/hambergermenu.png')} />
      ),
   
  }}
  />

</BottomTabNavigator.Navigator>
  )
}

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
        <WelcomeStackNavigator.Screen
        name="BottomTabs"
        component={BottomTabs}
      />
      </WelcomeStackNavigator.Navigator>
    );
  };