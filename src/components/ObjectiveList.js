import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import Style from "../screens/compaign/Style";
import { Image } from "react-native";
import AppColors from "../utils/AppColors";
import LevelModal from "../Modals/LevelModal";
const { height, width } = Dimensions.get("window");

const ObjectiveList = (props) => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const objective = props.objective;

  let bgColor,color;

  if (objective.objectiveStatus == "in_progress") {
    bgColor = AppColors.blue_light;
    color = AppColors.yellow_light
  } else if (objective.objectiveStatus == "done") {
    bgColor = AppColors.yellow_light;
    color=AppColors.blue_light
  } else if (objective.objectiveStatus == "lock") {
    bgColor = AppColors.gray;
    color=AppColors.gray
  }

  const handlePress = (objectiveStatus) => {
    if (objectiveStatus == "in_progress") {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  return (
    <TouchableOpacity
      style={{ marginBottom: height * 0.02 }}
      onPress={() => {
        if (
          objective.objectiveStatus == "in_progress" ||
          objective.objectiveStatus == "done"
        ) {
          props.handlePress(objective);
        } else {
          // handlePress(objective.objectiveStatus);
        }
      }}
    >
      <LevelModal
        Image={require("../../assets/images/Group13.png")}
        handlePress={() => handlePress(objective.objectiveStatus)}
        visible={visible}
        hideDialog={() => setVisible(false)}
      />

      <View style={Style.majorContainer}>
        <View style={Style.innerContainer}>
          <Text style={[Style.text, { width: width * 0.25 }]}>
            {t("step")} {objective.stepNumber}
          </Text>
        </View>

        <View style={[Style.innerContainer, { paddingTop: 5 }]}>
          <Text
            style={[Style.text_btm, { width: width * 0.35, color: bgColor }]}
          >
            {objective.objTitle ? objective.objTitle : objective.objectiveName}
          </Text>

          <View style={{ flexDirection: "column", alignItems: "center" }}>
            {objective.objectiveStatus == "in_progress" ? (
              <Image source={require("../../assets/images/Group_17.png")} />
            ) : objective.objectiveStatus == "done" ? (
              <Image source={require("../../assets/images/round_tick.png")} />
            ) : (
              <Image source={require("../../assets/images/lock1.png")} />
            )}

            <Text style={{ color: color }}>
              {objective.objectiveStatus ? t(objective.objectiveStatus) : ""}
            </Text>
          </View>
        </View>

        <View></View>
      </View>

      <View
        style={[
          Style.bottom_Container,
          { backgroundColor: bgColor ? bgColor : AppColors.blue_light },
        ]}
      >
        <Text style={Style.bottom_Container_text}>
          Expected profit from action
        </Text>
        <Text style={Style.bottom_Container_text}>
          {objective.objXp ? objective.objXp : 15}XP
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ObjectiveList;
