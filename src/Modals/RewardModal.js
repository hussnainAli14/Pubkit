import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Dialog, Portal } from "react-native-paper";
// import Style from "../screens/welcome/Style";
import { useTranslation } from "react-i18next";
import AppColors from "../utils/AppColors";
import Style from "../screens/Payments/Style";
const { height, width } = Dimensions.get("window");

const RewardModal = (props) => {
  const { t } = useTranslation();
  const levelDetails = [
    {
      image: require("../../assets/images/Group13.png"),
      level: t("level") + " 1",
      des: "The level information",
      points: t("level1"),
    },
    {
      image: require("../../assets/images/Group13.png"),
      level: t("level") + " 2",
      des: "The level information",
      points: t("level2"),
    },
    {
      image: require("../../assets/images/Group13.png"),
      level: t("level") + " 3",
      des: "The level information",
      points: t("level3"),
    },
    {
      image: require("../../assets/images/Group13.png"),
      level: t("level") + " 4",
      des: "The level information",
      points: t("level4"),
    },
    {
      image: require("../../assets/images/Group13.png"),
      level: t("level") + " 5",
      des: "The level information",
      points: t("level5"),
    },
    {
      image: require("../../assets/images/Group13.png"),
      level: t("level") + " 6",
      des: "The level information",
      points: t("level6"),
    },
  ];
  return (
    <Portal>
      <Dialog
        visible={props.visible}
        onDismiss={() => {
          props.setVisible(false);
        }}
        style={{
          backgroundColor: AppColors.white,
          paddingHorizontal: width * 0.03,
          paddingVertical: height * 0.02,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignSelf: "center",
            marginTop: 10,
            paddingBottom: height * 0.02,
          }}
        >
          <Text
            style={{
              fontFamily: "Outfit-Bold",
              fontSize: 16,
              textTransform: "uppercase",
            }}
          >
            {" "}
            {t("level_des")}{" "}
          </Text>
        </View>

        <Dialog.Content style={{ marginTop: 20 }}>
          <FlatList
            data={levelDetails}
            renderItem={(item) => {
              return (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingBottom: height * 0.02,
                  }}
                >
                  <Image
                    source={item.item.image}
                    style={{ height: 40, width: 40 }}
                  />
                  <View>
                    <Text
                      style={{ fontFamily: "Outfit-SemiBold", fontSize: 14 }}
                    >
                      {item.item.level}
                    </Text>
                    <Text style={{ fontFamily: "Outfit-Light", fontSize: 12 }}>
                      {item.item.des}
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontFamily: "Outfit-SemiBold",
                      fontSize: 18,
                      color: AppColors.blue_light,
                    }}
                  >
                    {item.item.points}
                    <Text style={{ fontSize: 14, color: AppColors.gray }}>
                      {t("xp")}
                    </Text>
                  </Text>
                </View>
              );
            }}
          />
        </Dialog.Content>

        <Dialog.Actions style={{ flexDirection: "column" }}>
          <TouchableOpacity
            style={[
              Style.google_btn,
              {
                borderWidth: 2,
                borderColor: AppColors.blue_light,
                justifyContent: "center",
              },
            ]}
            onPress={() => {
              props.setVisible(false);
            }}
          >
            <Text
              style={[Style.google_btn_Text, { textTransform: "uppercase" }]}
            >
              {t("ok")}
            </Text>
          </TouchableOpacity>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default RewardModal;
