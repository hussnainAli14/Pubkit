import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Animated,
  Dimensions,
} from "react-native";
import Style from "../screens/more/Style";
import AppColors from "../utils/AppColors";
import { changeSettings } from "../screens/more/moreUtil";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { fetchUserDetailsAndDispatch } from "../Redux/Reducers/Action/UserAction/userAction";
const { height, width } = Dimensions.get("window");

const SettingsList = (props) => {
  const [isOn, setIsOn] = useState(props.isOn);
  const translateXValue = new Animated.Value(0);
  const dispatch = useDispatch();

  const toggleSwitch = () => {
    try {
      if (!isOn) {
        changeSettings(props.index, true, props.id);
      } else {
        changeSettings(props.index, false, props.id);
      }

      fetchUserDetailsAndDispatch(dispatch);

      setIsOn(!isOn);
      Animated.timing(translateXValue, {
        toValue: isOn ? 0 : 18, // Adjust the value to move the thumb to the right when the switch is on
        duration: 2000,
        useNativeDriver: false,
      }).start();
    } catch (error) {
      Alert.alert("Please Try Again");
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        paddingBottom: height * 0.02,
      }}
    >
      <TouchableOpacity
        style={[
          Style.toggleContainer,
          // { backgroundColor: isOn ? AppColors.yellow_light : AppColors.pink },
        ]}
        onPress={toggleSwitch}
      >
        <View
          style={[
            Style.thumb,
            {
              backgroundColor: isOn ? AppColors.yellow_light : AppColors.pink,
              transform: [{ translateX: isOn ? 20 : 0 }],
            },
          ]}
        />
      </TouchableOpacity>

      <Text
        style={{
          fontFamily: "Outfit-Light",
          fontSize: 14,
          width: width * 0.65,
        }}
      >
        {props.text}
      </Text>
    </View>
  );
};

export default SettingsList;
