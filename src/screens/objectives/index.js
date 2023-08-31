import React from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import Style from "../compaign/Style";
import AppColors from "../../utils/AppColors";
import ObjectiveList from "../../components/ObjectiveList";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getMyObjective } from "./objectiveUtils";
import { useEffect } from "react";
import { useState } from "react";
const { height } = Dimensions.get("window");
const Objectives = (props) => {
  const { t } = useTranslation();
  const user = useSelector((state) => state.user);
  const [objective, setObjective] = useState([]);

  console.log("Objectives component re-rendered");
  const handlePress = (obj) => {
    props.navigation.navigate("Objective Details", {
      objective: obj,
      user: user,
    });
  };

  async function getMyObjectives() {
    console.log("level", user.level);
    const objectives = await getMyObjective(user.id, user.level);
    setObjective(objectives);
  }

  useEffect(() => {
    const willFocusSubscription = props.navigation.addListener(
      "focus",
      async () => {
        await getMyObjectives();
      }
    );
    return willFocusSubscription;
  }, [user]);


  return (
    <ScrollView>
      <SafeAreaView
        style={[Style.container, { paddingVertical: height * 0.02 }]}
      >
        <Text
          style={{
            fontFamily: "Outfit-Light",
            fontSize: 12,
            textAlign: "justify",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>
            {t("objective_welcome_bold")}{" "}
          </Text>{" "}
          {t("objective_welcome_txt")}{" "}
        </Text>
        {user.level > 0
          ? objective.map((x) => {
              return (
                <ObjectiveList
                  key={x.id}
                  bgColor={AppColors.blue}
                  text={t("reg")}
                  handlePress={handlePress}
                  objective={x}
                />
              );
            })
          : objective.map((x) => {
              return (
                <ObjectiveList
                  key={x.id}
                  bgColor={AppColors.blue}
                  text={t("reg")}
                  handlePress={handlePress}
                  objective={x}
                />
              );
            })}
      </SafeAreaView>
    </ScrollView>
  );
};

export default Objectives;
