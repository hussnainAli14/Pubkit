import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import Style from "../screens/compaign/Style";
import { Image } from "react-native";
import AppColors from "../utils/AppColors";
import { Avatar } from "react-native-paper";
import LevelModal from "../Modals/LevelModal";
import { useSelector } from "react-redux";
const { height, width } = Dimensions.get("window");

const CustomerLevelList = (props) => {
  const data = useSelector((state) => state.user);

  console.log("===>>>", props.campaignsData.entryLevel);

  const { t } = useTranslation();

  const bgColor =
    props.campaignsData.entryLevel > data.level
      ? AppColors.gray
      : AppColors.blue_light;

  return (
    <TouchableOpacity
      style={{ marginBottom: height * 0.02 }}
      onPress={() => {
        if (props.campaignsData.entryLevel <= data.level) {
          //   // If the condition is true, call the handleNavigation function
          props.handleNavigation(props.campaignsData);
          console.log("===>>>", props.campaignsData.entryLevel);
          console.log("DATALEVEL===>>>", data.level);
        } else {
          props.handlePress();
        }
      }}
    >
      <LevelModal
        Image={require("../../assets/images/Group13.png")}
        handlePress={props.handlePress}
        visible={props.visible}
        hideDialog={props.hideDialog}
      />
      <View style={Style.majorContainer}>
        <View style={Style.innerContainer}>
          <Text style={[Style.text, { width: width * 0.25 }]}>
            {t("customer")}
          </Text>
          <Text style={[Style.text]}>
            Level {props.campaignsData.entryLevel}
          </Text>
        </View>

        <View style={[Style.innerContainer, { paddingTop: 5 }]}>
          <Text
            style={[Style.text_btm, { width: width * 0.3, color: bgColor }]}
          >
            {props.campaignsData.campaignName}
          </Text>

          <TouchableOpacity
            style={{ paddingTop: 10 }}
            // onPress={() => {
            //   props.handlePress();
            // }}
          >
            <Image
              source={require("../../assets/images/Group13.png")}
              style={{ height: 40, width: 40 }}
            />
          </TouchableOpacity>
        </View>

        <View></View>
      </View>

      <View style={[Style.bottom_Container, { backgroundColor: bgColor }]}>
        <Text style={Style.bottom_Container_text}>
          Expected profit from action
        </Text>
        <Text style={Style.bottom_Container_text}>
          ${props.campaignsData.campaignCPA}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomerLevelList;
