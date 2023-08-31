import React, { useEffect, useState } from "react";
import { Dimensions, SafeAreaView, ScrollView, Text, View } from "react-native";
import Style from "./Style";
import Boxes from "../../components/Boxes";
import { useTranslation } from "react-i18next";
import AppColors from "../../utils/AppColors";
import DepositDetails from "../../components/DepositDetails";
import { useSelector } from "react-redux";
import {
  getIncomeDetails,
  listenForActionsAndUpdateAccounts,
} from "./paymentUtils";
const { height, width } = Dimensions.get("window");

const Income = (props) => {
  const { t } = useTranslation();
  const user = useSelector((state) => state.user);
  const [nextDeposite, setNextDeposite] = useState([]);
  const [previousDeposite, setPreviousDeposite] = useState([]);
  const [nextDepositeTotal, setNextDepositeTotal] = useState(0);
  const [previousDepositeTotal, setPreviousDepositeTotal] = useState(0);

  async function getIncomeDetail() {
    const income = await getIncomeDetails(user);
    setNextDeposite(income.nextDeposits);
    setPreviousDeposite(income.previousDeposits);
    setNextDepositeTotal(income.nextDepositsTotal);
    setPreviousDepositeTotal(income.previousDepositsTotal);
    console.log(income);
  }

  // useEffect(() => {
  //   const unsubscribe = listenForActionsAndUpdateAccounts(user);

  //   return () => {
  //     unsubscribe(); // Unsubscribe when the component unmounts
  //   };
  // }, []);

  useEffect(() => {
    getIncomeDetail();
    // console.log("==", props.navigation.dispatch());
  }, []);

  return (
    <ScrollView>
      <SafeAreaView style={Style.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: width * 0.02,
          }}
        >
          <Boxes
            text={previousDepositeTotal}
            label={t("deposits")}
            sign1={"$"}
            sign2={"k"}
            color={AppColors.blue_light}
          />
          <Boxes
            text={nextDepositeTotal}
            label={t("next_deposit")}
            sign1={"$"}
            sign2={"k"}
            color={AppColors.yellow_light}
          />
          <Boxes
            text={`${user.campaign.length}`}
            label={t("compaign")}
            color={AppColors.gray}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: height * 0.03,
            width: width * 0.92,
          }}
        >
          <Text
            style={{
              fontFamily: "Outfit-Bold",
              fontSize: 10,
              textTransform: "uppercase",
            }}
          >
            {t("next_deposit_details")}
          </Text>
          <Text
            style={{
              fontFamily: "Outfit-Bold",
              fontSize: 10,
              color: AppColors.blue_light,
              textTransform: "uppercase",
            }}
          >
            {t("next_deposit_date")}
          </Text>
        </View>
        <View style={{ width: width * 0.92 }}>
          {nextDeposite.map((x) => {
            return (
              <DepositDetails
                key={x.campaignAction.createdAt}
                date={x.campaignAction.createdAt}
                desc={x.campaignAction.actionTitle}
                price={x.campaignAction.actionValue}
              />
            );
          })}
        </View>

        <View style={{ marginTop: height * 0.02 }}>
          <Text
            style={{
              fontFamily: "Outfit-Bold",
              fontSize: 10,
              textTransform: "uppercase",
            }}
          >
            {t("previous_deposit_details")}
          </Text>
        </View>
        <View style={{ width: width * 0.92 }}>
          {previousDeposite.map((x) => {
            return (
              <DepositDetails
                key={x.campaignAction.createdAt}
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

export default Income;
