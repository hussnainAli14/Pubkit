import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Style from "./Style";
import { Avatar, Divider } from "react-native-paper";
import AppColors from "../../utils/AppColors";
const { height, width } = Dimensions.get("window");
import { useTranslation } from "react-i18next";
import Boxes from "../../components/Boxes";
import ImageBox from "../../components/ImageBox";
import { useNavigation } from "@react-navigation/native";

const PartnerDetails = (props) => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const [partnerDetail, setPartnerDetail] = useState(
    props.route.params?.partner
  );
  console.log(" DETAILS ==>>>", partnerDetail);

  return (
    <ScrollView>
      <SafeAreaView>
        <View
          style={[
            Style.infoContainer,
            { flexDirection: "column", justifyContent: "center" },
          ]}
        >
          <View>
            {partnerDetail.avatar.isPrivate ? (
              <Avatar.Image
                source={require("../../../assets/images/avatar.png")}
                size={100}
                style={{ alignSelf: "center" }}
              />
            ) : (
              <Avatar.Image
                source={{ uri: partnerDetail.avatar.image }}
                size={100}
                style={{ alignSelf: "center" }}
              />
            )}

            <View style={{ paddingTop: 10 }}>
              <Text
                style={{
                  fontFamily: "Outfit-SemiBold",
                  fontSize: 20,
                  textAlign: "center",
                  color: AppColors.blue_light,
                }}
              >
                {partnerDetail.firstName} {partnerDetail.lastName}
              </Text>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Text
                  style={{
                    fontFamily: "Outfit-Regular",
                    fontSize: 12,
                    textTransform: "lowercase",
                  }}
                >
                  {t("since") +
                    ` ${new Date(partnerDetail.createdAt).getFullYear()}`}
                </Text>
                <Divider style={Style.divider} />

                <Text
                  style={{
                    fontFamily: "Outfit-Regular",
                    fontSize: 12,
                    textTransform: "capitalize",
                  }}
                >
                  {t("from") + ` ${partnerDetail.contact.country}`}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              marginTop: height * 0.01,
            }}
          >
            <TouchableOpacity
              style={[
                Style.details_btn,
                { backgroundColor: AppColors.blue_light, marginRight: 10 },
              ]}
              onPress={() => {
                props.navigation.navigate("BottomTabs");
              }}
            >
              <Text style={[Style.login_btnText, { fontSize: 12 }]}>
                {t("connect")}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={Style.details_btn}
              onPress={() => {
                navigation.navigate("Chat", {
                  id: partnerDetail.id,
                });
              }}
            >
              <Text
                style={[
                  Style.login_btnText,
                  { fontSize: 12, color: AppColors.blue_light },
                ]}
              >
                {t("message")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: width * 0.03,
            flexWrap: "wrap",
          }}
        >
          <Boxes
            text={`${partnerDetail.level}`}
            label={t("level")}
            color={AppColors.blue_light}
          />
          <Boxes
            text={`${partnerDetail.xp}`}
            label={t("xp")}
            color={AppColors.blue_light}
          />
          <Boxes
            text={`${partnerDetail.campaign.length}`}
            label={t("campaign")}
            color={AppColors.blue_light}
          />
          <Boxes
            text={"32"}
            label={t("deposits")}
            sign1={"$"}
            sign2={"k"}
            color={AppColors.blue_light}
          />
          <Boxes
            text={"89"}
            label={t("income")}
            sign2={"%"}
            color={AppColors.blue_light}
          />
          {/* <Boxes
            text={`${partnerDetail.contact.country}`}
            label={t("location-placeHolder")}
            color={AppColors.blue_light}
          /> */}
          <ImageBox
            // image={require("../../../assets/images/icon_Italy.png")}
            text={`${partnerDetail.contact.country}`}
            label={t("location-placeHolder")}
            color={AppColors.black}
          />

          <Text style={[Style.menuHeading, { paddingTop: height * 0.02 }]}>
            {t("activity")}
          </Text>
          <Text
            style={{
              fontFamily: "Outfit-Light",
              fontSize: 14,
              paddingVertical: 10,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default PartnerDetails;
