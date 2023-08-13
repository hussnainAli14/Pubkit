import React from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { Avatar, Divider } from "react-native-paper";
import Style from "../screens/messages/Style";
import AppColors from "../utils/AppColors";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

const { height, width } = Dimensions.get("window");

const PartnerList = (props) => {
  const navigation = useNavigation();
  console.log("PARTNER LIST", props);
  const { t } = useTranslation();
  return (
    <View style={Style.listContainer}>
      <View style={{ flexDirection: "row" }}>
        {props.partner.avatar.isPrivate ? (
          <Avatar.Image
            source={require("../../assets/images/avatar.png")}
            style={{ alignSelf: "center" }}
          />
        ) : (
          <Avatar.Image
            source={{ uri: props.partner.avatar.image }}
            style={{ alignSelf: "center" }}
          />
        )}
        <View style={{ paddingTop: 10, paddingLeft: 7 }}>
          <Text
            style={{
              fontFamily: "Outfit-Bold",
              fontSize: 14,
              color: AppColors.blue_light,
              textTransform: "uppercase",
            }}
          >
            {props.name}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontFamily: "Outfit-Regular",
                fontSize: 12,
                textTransform: "capitalize",
              }}
            >
              {t("level ") + props.level}
            </Text>
            <Divider style={Style.divider} />
            <Text style={{ fontFamily: "Outfit-Regular", fontSize: 12 }}>
              {" " + props.points + t("xp")}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontFamily: "Outfit-Regular",
                fontSize: 10,
                textTransform: "lowercase",
              }}
            >
              {t("since") + " " + props.since}
            </Text>
            <Divider style={Style.divider} />

            <Text
              style={{
                fontFamily: "Outfit-Regular",
                fontSize: 10,
                textTransform: "capitalize",
              }}
            >
              {t("from") + " " + props.area}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{ alignSelf: "center" }}
        onPress={() => {
          navigation.navigate("Details", {
            partner: props.partner,
          });
        }}
      >
        <Image source={require("../../assets/images/arrowleft2.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default PartnerList;
