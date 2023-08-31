import React, { useState } from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import Style from "../screens/Payments/Style";
import AppColors from "../utils/AppColors";
import RewardModal from "../Modals/RewardModal";
const { height, width } = Dimensions.get("window");

const RewardBox = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: width * 0.92,
      }}
    >
      <RewardModal visible={visible} setVisible={setVisible} />
      <TouchableOpacity
        style={[Style.reward_box]}
        onPress={() => {
          setVisible(true);
        }}
      >
        <Image source={props.image} style={{ height: 40, width: 40 }} />
        <Text
          style={{
            fontFamily: "Outfit-Light",
            color: AppColors.blue_light,
            fontSize: 18,
            textTransform: "capitalize",
          }}
        >
          {props.label}
        </Text>
      </TouchableOpacity>

      <View style={[Style.reward_box]}>
        <Text
          style={{
            fontFamily: "Outfit-Light",
            fontSize: 40,
            color: AppColors.blue_light,
          }}
        >
          {props.text}
        </Text>
        <Text style={{ fontFamily: "Outfit-Light", fontSize: 12 }}>
          {props.label2}
        </Text>
      </View>
    </View>
  );
};

export default RewardBox;
