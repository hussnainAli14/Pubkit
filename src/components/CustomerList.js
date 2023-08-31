import React from "react";
import { useTranslation } from "react-i18next";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import Style from "../screens/compaign/Style";
import { Image } from "react-native";
import AppColors from "../utils/AppColors";
const { height, width } = Dimensions.get("window");

const CustomerList = (props) => {
  const { t } = useTranslation();
  console.log("customerList", props.data);

  const bgColor =
    props.bgColor === AppColors.gray ? AppColors.gray : AppColors.blue_light;

  return (
    <View style={{ marginBottom: height * 0.02 }}>
      <View style={Style.majorContainer}>
        <View style={[Style.innerContainer, { paddingRight: width * 0.09 }]}>
          <Text style={[Style.text, { width: width * 0.25 }]}>
            {t("customer")}
          </Text>
          <Text style={Style.text}>{t("income")}</Text>
          <Text style={[Style.text]}>{t("action")}</Text>
        </View>

        <View style={[Style.innerContainer, { paddingTop: 5 }]}>
          <Text
            style={[Style.text_btm, { width: width * 0.25, color: bgColor }]}
          >
            {props.data.campaignName}
          </Text>
          <Text style={[Style.text_btm, { color: bgColor }]}>
            ${props.data.campaignCPA}
          </Text>
          <Text style={[Style.text_btm, { color: bgColor }]}>167</Text>
          <TouchableOpacity
            style={{ paddingTop: 10 }}
            onPress={() => {
              props.handleNavigation();
            }}
          >
            <Image source={require("../../assets/images/arrowleft2.png")} />
          </TouchableOpacity>
        </View>

        <View></View>
      </View>

      <View
        style={[Style.bottom_Container, { backgroundColor: props.bgColor }]}
      >
        <Text style={Style.bottom_Container_text}>
          Expected profit from action
        </Text>
        <Text style={Style.bottom_Container_text}>$12</Text>
      </View>
    </View>
  );
};

export default CustomerList;
