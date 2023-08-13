import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {DailySchedule, MainMenu} from '../../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from './CustomTabBar';

const AppStack = createStackNavigator();
const ScheduleStack = createStackNavigator();
const TasksStack = createStackNavigator();
const ReferralsStack = createStackNavigator();
const TabStack = createBottomTabNavigator();

const ScheduleTab = () => {
  return (
    <ScheduleStack.Navigator screenOptions={{headerShown: false}}>
      <ScheduleStack.Screen name="DailySchedule" component={DailySchedule} />
    </ScheduleStack.Navigator>
  );
};
const TasksTab = () => {
  return (
    <TasksStack.Navigator screenOptions={{headerShown: false}}>
      <TasksStack.Screen name="DailySchedule" component={DailySchedule} />
    </TasksStack.Navigator>
  );
};
const ReferralsTab = () => {
  return (
    <ReferralsStack.Navigator screenOptions={{headerShown: false}}>
      <ReferralsStack.Screen name="DailySchedule" component={DailySchedule} />
    </ReferralsStack.Navigator>
  );
};

const Tab = () => {
  return (
    <TabStack.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <CustomTabBar {...props} />}>
      <TabStack.Screen name="ScheduleTab" component={ScheduleTab} />
      <TabStack.Screen name="TasksTab" component={TasksTab} />
      <TabStack.Screen name="ReferralsTab" component={ReferralsTab} />
    </TabStack.Navigator>
  );
};

const AppFlow = () => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen name="Tab" component={Tab} />
      <AppStack.Screen name="MainMenu" component={MainMenu} />
    </AppStack.Navigator>
  );
};
export default AppFlow;

const styles = StyleSheet.create({});
