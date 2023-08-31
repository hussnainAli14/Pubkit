import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Dialog, Portal } from "react-native-paper";
import Style from "../screens/welcome/Style";
import { useTranslation } from "react-i18next";
import AppColors from "../utils/AppColors";
import ModalStyle from "./ModalStyle";

const LevelModal = (props) => {
  const { t } = useTranslation();

  return (
    <Portal>
      <Dialog
        visible={props.visible}
        onDismiss={props.hideDialog}
        style={{ backgroundColor: AppColors.white }}
      >
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignSelf: "center",
            marginTop: 10,
          }}
        >
          <Image
            source={props.Image}
            style={{ height: 50, width: 50, alignSelf: "center" }}
          />

          <Text
            style={{
              fontFamily: "Outfit-Bold",
              fontSize: 16,
              textTransform: "uppercase",
            }}
          >
            {" "}
            {t("level") + ` ${props.level}`}{" "}
          </Text>

          <Text
            style={{
              fontFamily: "Outfit-Bold",
              fontSize: 16,
              textTransform: "uppercase",
            }}
          >
            {" "}
            {t("require")}{" "}
          </Text>
        </View>

        <Dialog.Content style={{ marginTop: 20 }}>
          <Text style={{ fontFamily: "Outfit-Light", fontSize: 14 }}>
            {t("des1") + "5 " + t("des2")}
          </Text>
        </Dialog.Content>

        <Dialog.Actions style={{ flexDirection: "column" }}>
          <TouchableOpacity style={Style.login_btn} onPress={props.hideDialog}>
            <Text style={Style.login_btnText}>{t("got")}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              Style.google_btn,
              {
                borderWidth: 1,
                borderColor: AppColors.black,
                justifyContent: "center",
              },
            ]}
            // onPress={() => {
            //   props.navigation.navigate("LoginScreen");
            // }}
          >
            <Text
              style={[Style.google_btn_Text, { textTransform: "uppercase" }]}
            >
              {t("guide")}
            </Text>
          </TouchableOpacity>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default LevelModal;
