import React, { useEffect, useState } from "react";
import { Dimensions, SafeAreaView, ScrollView, Text } from "react-native";
import Style from "./Style";
import CustomerLevelList from "../../components/CustomerLevelList";
import AppColors from "../../utils/AppColors";
import LevelModal from "../../Modals/LevelModal";
import { useTranslation } from "react-i18next";
import { getAllCampaign } from "./compaignUtil";
import { useSelector } from "react-redux";
const { height, width } = Dimensions.get("window");

const Compaigns = (props) => {
  const [campaigns, setCampaigns] = useState([]);
  const { t } = useTranslation();

  const [visible, setVisible] = useState(false);

  async function getAllCampaigns() {
    const camp = await getAllCampaign();
    setCampaigns(camp);
  }

  useEffect(() => {
    const willFocusSubscription = props.navigation.addListener(
      "focus",
      async () => {
        await getAllCampaigns();
      }
    );
    return willFocusSubscription;
  }, []);

  useEffect(() => {
    getAllCampaigns();
    console.log(
      "HELLOOO",
      campaigns.map((x) => x.partner)
    );
  }, []);

  const handlePress = () => {
    console.log("abc");
    setVisible(true);
  };

  const hideDialog = () => {
    setVisible(false);
  };

  const handleNavigation = (campaign) => {
    props.navigation.navigate("Compaign Information", {
      campaign: campaign,
    });
  };

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
          {t("compaign_text")}
        </Text>

        {campaigns.map((x) => {
          return (
            <CustomerLevelList
              bgColor={AppColors.blue}
              handlePress={handlePress}
              visible={visible}
              hideDialog={hideDialog}
              handleNavigation={handleNavigation}
              campaignsData={x}
            />
          );
        })}
      </SafeAreaView>
    </ScrollView>
  );
};

export default Compaigns;
