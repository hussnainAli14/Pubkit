import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Style from "./Style";
import CustomerList from "../../components/CustomerList";
import AppColors from "../../utils/AppColors";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllMyCampaign } from "./compaignUtil";

const MyCompaigns = (props) => {
  const data = useSelector((state) => state.user);

  console.log(data);

  async function getMyCampigns() {
    const campigns = await getAllMyCampaign(data.campaign);
    console.log("=====>>>>>", campigns);
  }

  useEffect(() => {
    getMyCampigns();
  }, []);

  const handleNavigation = () => {
    props.navigation.navigate("My Compaign Information");
  };
  return (
    <ScrollView>
      <SafeAreaView style={Style.container}>
        <CustomerList
          bgColor={AppColors.yellow_light}
          handleNavigation={handleNavigation}
        />
        <CustomerList bgColor={AppColors.yellow_light} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default MyCompaigns;
