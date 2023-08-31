import React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import Style from "../screens/NotificationItems/Style";
const { height, width } = Dimensions.get("window");

const NotificationsList = ({ notifications }) => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: height * 0.025,
        }}
      >
        <Image
          source={require("../../assets/images/Group7.png")}
          style={{ alignSelf: "center" }}
        />
        <Text
          style={{
            fontFamily: "Outfit-Light",
            fontSize: 14,
            width: width * 0.7,
          }}
        >
          {notifications.message}
        </Text>
      </View>
    </>
  );
};

export default NotificationsList;
