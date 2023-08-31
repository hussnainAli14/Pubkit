import React, { useState } from "react";
import {
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import SettingsList from "../../components/SettingsList";
import Style from "./Style";
const { height } = Dimensions.get("window");
import { useTranslation } from "react-i18next";

const settingsData = [
  {
    id: "displayProfile",
    text: "Display my profile in the community",
    getValue: (user) => !user.avatar.isPrivate,
  },
  {
    id: "notifications",
    text: "Send me notifications",
    getValue: (user) => user.settings.getNotifications,
  },
  {
    id: "dailySummary",
    text: "Send me a daily summary of my movements",
    getValue: (user) => user.settings.getDailySummary,
  },
  {
    id: "networkNotifications",
    text: "Send me notifications about new campaigns",
    getValue: (user) => user.settings.isPublishInNetwork,
  },
];

const Settings = (props) => {
  console.log("SETTINGS", props.route.params);
  const [user, setUser] = useState(props.route.params?.data);
  const { t } = useTranslation();
  const [lang, setLang] = useState("");

  return (
    <View style={[Style.container, { paddingVertical: height * 0.05 }]}>
      {settingsData.map((item, index) => {
        return (
          <SettingsList
            text={item.text}
            isOn={item.getValue(user)}
            id={user.id}
            index={index}
          />
        );
      })}

      <View
        style={[
          Style.textInput,
          { flexDirection: "row", justifyContent: "space-between" },
        ]}
      >
        <TextInput
          placeholder={t("language-placeHolder")}
          keyboardType="default"
          value={lang}
          style={{ width: "90%" }}
          onChangeText={(text) => {
            setLang(text);
          }}
        />
        <TouchableOpacity>
          <Image
            source={require("../../../assets/images/icon_Italy.png")}
            style={Style.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;
