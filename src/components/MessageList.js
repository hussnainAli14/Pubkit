import React from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { Avatar } from "react-native-paper";
import Style from "../screens/messages/Style";
import AppColors from "../utils/AppColors";
import { useNavigation } from "@react-navigation/native";
const MessageList = (props) => {
  const navigation = useNavigation();
  return (
    <View style={Style.listContainer}>
      <View style={{ flexDirection: "row" }}>
        {!props.avatar.isPrivate ? (
          <Avatar.Image
            source={{ uri: props.avatar.image }}
            // style={{marginRight:10}}
          />
        ) : (
          <Avatar.Image
            source={{
              uri: "https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg",
            }}
            // style={{marginRight:10}}
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
          <Text style={{ fontFamily: "Outfit-Light", fontSize: 12 }}>
            {props.msg}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{ alignSelf: "center" }}
        onPress={() => {
          navigation.navigate("Chat", {
            id: props.id,
            avatar: props.avatar,
            myAvatar: props.myAvatar,
          });
        }}
      >
        <Image source={require("../../assets/images/arrowleft2.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default MessageList;
