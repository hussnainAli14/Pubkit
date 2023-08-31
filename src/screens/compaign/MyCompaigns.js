import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Style from "./Style";
import CustomerList from "../../components/CustomerList";
import AppColors from "../../utils/AppColors";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllMyCampaign } from "./compaignUtil";

const MyCompaigns = (props) => {
  const data = useSelector((state) => state.user);
  const [myCampigns, setMyCampigns] = useState([]);

  async function getMyCampigns() {
    console.log(data.campaign.length > 0);

    if (data.campaign.length > 0) {
      const campigns = await getAllMyCampaign(data.campaign);
      console.log("MY CAMPIGNS=====>>>>>", campigns);
      setMyCampigns(campigns);
    } else {
      setMyCampigns([]);
    }
  }

  useEffect(() => {
    const willFocusSubscription = props.navigation.addListener(
      "focus",
      async () => {
        await getMyCampigns();
      }
    );
    return willFocusSubscription;
  }, [data]);

  useEffect(() => {
    getMyCampigns();
  }, []);

  const handleNavigation = () => {
    props.navigation.navigate("My Compaign Information");
  };

  return (
    <ScrollView>
      <SafeAreaView style={Style.container}>
        {myCampigns &&
          myCampigns.map((x) => {
            return (
              <CustomerList
                key={x[0].id}
                data={x[0]}
                bgColor={AppColors.yellow_light}
                handleNavigation={handleNavigation}
              />
            );
          })}
      </SafeAreaView>
    </ScrollView>
  );
};

export default MyCompaigns;
