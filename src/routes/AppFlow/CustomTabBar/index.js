import {
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {appImages, fontFamily, height, width} from '../../../assets/utilities';
import {TouchableRipple} from 'react-native-paper';

const CustomTabBar = ({navigation}) => {
  const activeTab = navigation.getState().index;
  const tabs = [
    {
      id: 1,
      name: 'Schedule',
      icon: appImages.scheduleImg,
    },
    {
      id: 2,
      name: 'Tasks',
      icon: appImages.documentImg,
    },
    {
      id: 3,
      name: 'Referrals',
      icon: appImages.referralsImg,
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <TouchableRipple
        rippleColor="rgba(0,0,0,0.03)"
        onPress={() => {
          item.id == 1
            ? navigateToTab('ScheduleTab')
            : item.id == 2
            ? navigateToTab('TasksTab')
            : navigateToTab('ReferralsTab');
        }}
        style={{
          alignItems: 'center',
          width: '33.3%',
          paddingVertical: height * 0.014,
        }}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            style={[
              styles.singleTabImage,
              {
                tintColor: activeTab == index ? '#005EB8' : '#8D8E8F',
              },
            ]}
            source={item?.icon}
          />
          <Text
            style={[
              styles.nameStyle,
              {
                color: activeTab == index ? '#005EB8' : '#8D8E8F',
              },
            ]}>
            {item?.name}
          </Text>
          {index == 2 && (
            <View
              style={{
                position: 'absolute',
                backgroundColor: '#FC4C02',
                paddingHorizontal: width * 0.01,
                paddingVertical: width * 0.003,
                borderRadius: width * 0.01,
                right: width * 0.005,
              }}>
              <Text
                style={{
                  fontFamily: fontFamily.appTextSemibold,
                  color: '#fff',
                  fontSize: width * 0.033,
                }}>
                3
              </Text>
            </View>
          )}
        </View>
      </TouchableRipple>
    );
  };

  const navigateToTab = text => {
    navigation.navigate(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.singleTabStyle}>
        <FlatList
          scrollEnabled={false}
          data={tabs}
          renderItem={renderItem}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            // paddingHorizontal: width * 0.08,
          }}
        />
      </View>
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    paddingBottom: Platform.OS == 'ios' ? height * 0.025 : 0,
  },
  singleTabStyle: {},
  singleTabImage: {
    width: width * 0.075,
    height: width * 0.075,
    resizeMode: 'contain',
  },
  nameStyle: {
    fontFamily: fontFamily.appTextSemibold,
    color: '#8D8E8F',
    marginTop: height * 0.005,
  },
});
