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
  const data = useSelector((state) => state.user);
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  async function getAllCampaigns() {
    console.log(data.id);
    const camp = await getAllCampaign(data.id);
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
    console.log("HELLOOO", data.settings.getNotifications);
  }, []);

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

        {campaigns &&
          campaigns.map((x) => {
            return (
              <CustomerLevelList
                bgColor={AppColors.blue}
                // handlePress={handlePress}
                // visible={visible}
                // hideDialog={hideDialog}
                handleNavigation={handleNavigation}
                campaignsData={x}
                userData={data}
              />
            );
          })}
      </SafeAreaView>
    </ScrollView>
  );
};

export default Compaigns;
