import React from "react";
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
import { Avatar } from "react-native-paper";
import AppColors from "../../utils/AppColors";
const { height, width } = Dimensions.get("window");
import { useTranslation } from "react-i18next";
import MenuList from "../../components/MenuList";

const More = (props) => {
  const { t } = useTranslation();

  const MenuDetails = [
    {
      image: require("../../../assets/images/element3_blue.png"),
      title: t("tab-overview"),
    },
    {
      image: require("../../../assets/images/compaigns_blue.png"),
      title: t("tab-compaign"),
    },
    {
      image: require("../../../assets/images/Objectives_blue.png"),
      title: t("tab-objective"),
    },
    {
      image: require("../../../assets/images/message_blue.png"),
      title: t("message"),
    },
    {
      image: require("../../../assets/images/notification_blue.png"),
      title: t("notificataion"),
    },
    {
      image: require("../../../assets/images/link2.png"),
      title: t("links"),
    },
    {
      image: require("../../../assets/images/alignhorizontally.png"),
      title: t("ads"),
    },
    {
      image: require("../../../assets/images/convertshape2.png"),
      title: t("connect"),
    },
    {
      image: require("../../../assets/images/video.png"),
      title: t("tutorial"),
    },
    {
      image: require("../../../assets/images/messagequestion.png"),
      title: t("faq"),
    },
  ];

  const AccountList = [
    {
      image: require("../../../assets/images/edit.png"),
      title: t("edit"),
    },
    {
      image: require("../../../assets/images/setting3.png"),
      title: t("settings"),
    },
    {
      image: require("../../../assets/images/wallet.png"),
      title: t("payments"),
    },
    {
      image: require("../../../assets/images/medalstar.png"),
      title: t("terms"),
    },
  ];

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={Style.infoContainer}>
          <View style={Style.innerContainer}>
            <Avatar.Image
              source={require("../../../assets/images/avatar.png")}
              size={80}
              style={{ marginRight: 10, marginLeft: 10, position: "relative" }}
            />
            <Image
              source={require("../../../assets/images/medalstar.png")}
              style={{ position: "absolute", marginTop: height * 0.03 }}
            />
            <View style={{ paddingTop: 10 }}>
              <Text style={{ fontFamily: "Outfit-Medium", fontSize: 16 }}>
                Name
              </Text>
              <Text style={{ fontFamily: "Outfit-Regular", fontSize: 12 }}>
                Email
              </Text>
              <Text
                style={{
                  fontFamily: "Outfit-Bold",
                  fontSize: 13,
                  color: AppColors.blue_light,
                }}
              >
                Level 05
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{ paddingTop: height * 0.03 }}
            onPress={() => {
              props.navigation.navigate("Edit My Account");
            }}
          >
            <Image source={require("../../../assets/images/edit.png")} />
          </TouchableOpacity>
        </View>

        <View style={Style.listContainer}>
          <View>
            <Text style={Style.menuHeading}>{t("more-menu")}</Text>

            <FlatList
              data={MenuDetails}
              renderItem={(item) => {
                return (
                  <MenuList image={item.item.image} name={item.item.title} />
                );
              }}
            />

            <Text style={[Style.menuHeading, { paddingTop: height * 0.02 }]}>
              {t("more-account")}
            </Text>

            <FlatList
              data={AccountList}
              renderItem={(item) => {
                return (
                  <MenuList image={item.item.image} name={item.item.title} />
                );
              }}
            />
          </View>

          <TouchableOpacity style={Style.logOut_btn}>
            <Text style={Style.login_btnText}>{t("logut_btn_text")}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default More;
