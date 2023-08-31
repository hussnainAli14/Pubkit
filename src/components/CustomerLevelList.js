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
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  const handlePress = () => {
    console.log("abc");
    setVisible(true);
  };

  const hideDialog = () => {
    setVisible(false);
  };
  console.log(props);

  const entryLevel =
    props.campaignsData.entryLevel > 0 ? props.campaignsData.entryLevel : 0;
  const bgColor =
    entryLevel > props.userData.level ? AppColors.gray : AppColors.blue_light;

  return (
    <TouchableOpacity
      style={{ marginBottom: height * 0.02 }}
      onPress={() => {
        if (entryLevel <= props.userData.level) {
          //   // If the condition is true, call the handleNavigation function
          props.handleNavigation(props.campaignsData);
          console.log("===>>>", entryLevel);
          console.log("DATALEVEL===>>>", props.userData.level);
        } else {
          handlePress();
        }
      }}
    >
      <LevelModal
        Image={require("../../assets/images/Group13.png")}
        handlePress={handlePress}
        visible={visible}
        hideDialog={hideDialog}
        level={props.campaignsData.entryLevel}
      />
      <View style={Style.majorContainer}>
        <View style={Style.innerContainer}>
          <Text style={[Style.text, { width: width * 0.25 }]}>
            {t("customer")}
          </Text>
          <Text style={[Style.text]}>Level {entryLevel}</Text>
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
