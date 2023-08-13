import React from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Boxes from "../../components/Boxes";
import AppColors from "../../utils/AppColors";
import { useTranslation } from "react-i18next";
const { height, width } = Dimensions.get("window");
import Style from "../more/Style";
import { useNavigation } from "@react-navigation/native";

const CompaignInfo = (props) => {
  const navigation = useNavigation();

  const { t } = useTranslation();

  console.log("PROPS===>>", props.route.params.campaign.partner.length);

  return (
    <ScrollView>
      <SafeAreaView
        style={{
          paddingVertical: height * 0.02,
          paddingHorizontal: width * 0.04,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Boxes
            text={`${props.route.params.campaign.campaignCPA}`}
            label={t("CPA (+5XP)")}
            color={AppColors.blue_light}
          />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Connect", {
                partners: props.route.params?.campaign?.partner,
              })
            }
          >
            <Boxes
              text={`${
                props.route.params.campaign.partner
                  ? Object.keys(props.route.params.campaign.partner).length
                  : 0
              }`}
              label={t("Partners")}
              color={AppColors.blue_light}
            />
          </TouchableOpacity>

          <Boxes
            text={`${props.route.params.campaign.entryLevel}`}
            label={t("Required Level")}
            color={AppColors.blue_light}
          />
        </View>

        <Text style={[Style.menuHeading, { paddingTop: height * 0.02 }]}>
          {t("description")}
        </Text>
        <Text
          style={{
            fontFamily: "Outfit-Light",
            fontSize: 14,
            paddingVertical: 10,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat
        </Text>

        <Text style={[Style.menuHeading, { paddingTop: height * 0.02 }]}>
          {t("goals")}
        </Text>
        <Text
          style={{
            fontFamily: "Outfit-Light",
            fontSize: 14,
            paddingVertical: 10,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat
        </Text>

        <Text style={[Style.menuHeading, { paddingTop: height * 0.02 }]}>
          {t("Acievements")}
        </Text>
        <Text
          style={{
            fontFamily: "Outfit-Light",
            fontSize: 14,
            paddingVertical: 10,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat
        </Text>

        <TouchableOpacity style={Style.login_btn}>
          <Text style={Style.login_btnText}>{t("activate")}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

export default CompaignInfo;
