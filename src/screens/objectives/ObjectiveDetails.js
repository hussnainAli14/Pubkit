import React, { useEffect } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import Style from "../more/Style";
import AppColors from "../../utils/AppColors";
import VideoPlayer from "../../components/VideoPlayer";
import { useTranslation } from "react-i18next";
import VideoComponent from "../../components/VideoComponent";
import { useState } from "react";
import { updateObjectiveStatus } from "./objectiveUtils";
import { Alert } from "react-native";
import { fetchUserDetailsAndDispatch } from "../../Redux/Reducers/Action/UserAction/userAction";
import { useDispatch } from "react-redux";
const { height, width } = Dimensions.get("window");

const ObjectiveDetails = (props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const objective = props.route.params.objective;
  const user = props.route.params.user;
  const [objectiveStatus, setObjectiveStatus] = useState(
    objective.objectiveStatus
  );

  console.log("------------>>>>>>>>", objective);

  async function updateStatus() {
    try {
      await updateObjectiveStatus(objective, user);
      console.log("UPDATEDDD");
      await fetchUserDetailsAndDispatch(dispatch);
    } catch (error) {
      Alert.alert("Cannot update Vedio status");
    }
  }

  useEffect(() => {
    if (
      objectiveStatus != "in_progress" &&
      props.route.params.objective.objectiveStatus != "done"
    ) {
      console.log("HEREEEE III AAAMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM");
      updateStatus();
    }
  }, [objectiveStatus]);

  return (
    <ScrollView>
      <SafeAreaView
        style={{
          paddingVertical: height * 0.02,
          paddingHorizontal: width * 0.04,
        }}
      >
        <Text style={[Style.menuHeading, { paddingTop: height * 0.02 }]}>
          Step 2
        </Text>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              fontFamily: "Outfit-Bold",
              fontSize: 30,
              color: AppColors.blue_light,
              textTransform: "uppercase",
              width: width * 0.7,
            }}
          >
            {objective.objTitle ? objective.objTitle : objective.objectiveName}
          </Text>

          <View style={{ flexDirection: "column", alignItems: "center" }}>
            {objectiveStatus == "in_progress" ? (
              <Image source={require("../../../assets/images/Group_17.png")} />
            ) : objectiveStatus == "done" ? (
              <Image
                source={require("../../../assets/images/round_tick.png")}
              />
            ) : (
              <Image source={require("../../../assets/images/lock1.png")} />
            )}
            <Text
              style={{
                fontFamily: "Outfit-SemiBold",
                fontSize: 12,
                textTransform: "uppercase",
                color: AppColors.blue_light,
              }}
            >
              {objective.objectiveStatus ? t(objectiveStatus) : ""}
            </Text>
          </View>
        </View>

        <Text
          style={{
            fontFamily: "Outfit-Light",
            fontSize: 14,
            paddingVertical: 10,
            paddingHorizontal: width * 0.05,
          }}
        >
          {objective.objDescription
            ? objective.objDescription
            : objective.objectiveDescription}
        </Text>
        {objective.videoUrl && (
          <VideoComponent setObjectiveStatus={setObjectiveStatus} />
        )}
      </SafeAreaView>
    </ScrollView>
  );
};

export default ObjectiveDetails;
