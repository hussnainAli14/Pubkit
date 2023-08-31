import React, { useEffect } from "react";
import { Dimensions, SafeAreaView, ScrollView, Text, View } from "react-native";
import Style from "./Style";
import RewardBox from "../../components/RewardBox";
import { useTranslation } from "react-i18next";
import DepositDetails from "../../components/DepositDetails";
import { useSelector } from "react-redux";
import { calculateRemainingXP, getIncomeDetails } from "./paymentUtils";
import { useState } from "react";
const { height, width } = Dimensions.get("window");

const Reward = () => {
  const { t } = useTranslation();
  const user = useSelector((state) => state.user);
  const [nextDeposite, setNextDeposite] = useState([]);

  async function getIncomeDetail() {
    const income = await getIncomeDetails(user);
    setNextDeposite(income.nextDeposits);

    console.log("=>", income.nextDeposits);
  }

  useEffect(() => {
    getIncomeDetail();
  }, []);

  return (
    <ScrollView>
      <SafeAreaView style={Style.container}>
        <RewardBox
          image={require("../../../assets/images/Group13.png")}
          label={t("level") + ` ${user.level}`}
          text={`${user.xp}`}
          label2={`XP (+${calculateRemainingXP(user.xp)} to next level)`}
        />

        <View style={{ marginTop: height * 0.02 }}>
          <Text
            style={{
              fontFamily: "Outfit-Bold",
              fontSize: 10,
              textTransform: "uppercase",
            }}
          >
            {t("activity")}
          </Text>
        </View>
        <View style={{ width: width * 0.92 }}>
          {nextDeposite.map((x) => {
            return (
              <DepositDetails
                date={x.campaignAction.createdAt}
                desc={x.campaignAction.actionTitle}
                price={x.campaignAction.actionValue}
              />
            );
          })}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Reward;
