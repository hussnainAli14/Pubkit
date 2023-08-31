import React from "react";
import { Text } from "react-native";
import NotificationsList from "../../components/NotificationsList";
import { useEffect } from "react";
import { getNotifications } from "./notificationUtil";
import { useSelector } from "react-redux";
import { useState } from "react";
import { View } from "react-native";
import Style from "./Style";
import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const Notification = () => {
  const user = useSelector((state) => state.user);
  const [notification, setNotification] = useState([]);

  async function getNotification() {
    const notifications = await getNotifications(user);
    // console.log(notifications);
    setNotification(notifications);
  }

  useEffect(() => {
    getNotification();
  }, []);

  return (
    <>
      <View style={Style.container}>
        {Object.entries(notification).map(([dateKey, notifications]) => (
          <View key={dateKey}>
            <Text
              style={{
                fontFamily: "Outfit-Bold",
                fontSize: 12,
                marginBottom: height * 0.025,
              }}
            >
              {dateKey}
            </Text>
            {
            notifications.length > 0 ?
            notifications.map((x) => {
              return <NotificationsList notifications={x} />;
            })
          :
          <Text
          style={{
            textAlign: "center",
            color: AppColors.pink,
            fontFamily: "Outfit-SemiBold",
            fontSize: 20,
          }}
        >
          No Notifications
        </Text>
          }
          </View>
        ))}
      </View>
    </>
  );
};

export default Notification;
