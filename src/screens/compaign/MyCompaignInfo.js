import React from "react";
import { Dimensions, SafeAreaView, ScrollView, Text, View } from "react-native";
import Boxes from "../../components/Boxes";
import { useTranslation } from "react-i18next";
import AppColors from "../../utils/AppColors";
const { height, width } = Dimensions.get("window");
import Style from "../more/Style";
import DepositDetails from "../../components/DepositDetails";
import { Link } from "@react-navigation/native";
const MyCompaignInfo = () => {
  const { t } = useTranslation();
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
            text={"32"}
            label={t("deposits")}
            color={AppColors.blue_light}
          />
          <Boxes
            text={"32"}
            label={t("deposits")}
            color={AppColors.blue_light}
          />
          <Boxes
            text={"32"}
            label={t("deposits")}
            color={AppColors.blue_light}
          />
        </View>

        <View
          style={{
            marginTop: height * 0.02,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(137, 196, 244,0.6)",
            paddingVertical: 10,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "Outfit-Bold",
              fontSize: 10,
              textTransform: "uppercase",
            }}
          >
            {t("affiliate")}
          </Text>
          <Link to="/http://www.campaigns.aig.com/129055645/789455666">
            <Text style={{ fontFamily: "Outfit-Light", fontSize: 12 }}>
              http://www.campaigns.aig.com/129055645/789455666
            </Text>
          </Link>
        </View>

        <View style={{ paddingVertical: height * 0.03 }}>
          <Text
            style={{
              fontFamily: "Outfit-Bold",
              fontSize: 10,
              textTransform: "uppercase",
            }}
          >
            {t("next_deposit_details")}
          </Text>
          <DepositDetails
            date={"07/16"}
            desc={"Gucci sunglasses campaign sales commission"}
            price={"50"}
          />
          <DepositDetails
            date={"07/16"}
            desc={"Gucci sunglasses campaign sales commission"}
            price={"50"}
          />
        </View>

        <View>
          <Text
            style={{
              fontFamily: "Outfit-Bold",
              fontSize: 10,
              textTransform: "uppercase",
            }}
          >
            {t("next_deposit_details")}
          </Text>
          <DepositDetails
            date={"07/16"}
            desc={"Gucci sunglasses campaign sales commission"}
            price={"50"}
          />
          <DepositDetails
            date={"07/16"}
            desc={"Gucci sunglasses campaign sales commission"}
            price={"50"}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default MyCompaignInfo;
