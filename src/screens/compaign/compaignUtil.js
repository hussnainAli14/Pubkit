import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../utils/Firebase-config";

const getAllCampaign = async () => {
  try {
    // const chatList = [];
    // // Get the list of unique users (persons) that the current user has chatted with
    const campaignRef = await getDocs(collection(db, "campaigns"));
    const accountsRef = await getDocs(collection(db, "accounts"));

    let campaigns = await Promise.all(
      campaignRef.docs
        .map(async (x) => {
          const campaignData = x.data();
          const campaignId = x.id;

          // Filter accounts whose campaigns array contains the current campaignId
          const partnerAccounts = accountsRef.docs
            .map((accountDoc) => ({
              ...accountDoc.data(),
              id: accountDoc.id,
            }))
            .filter((account) => account.campaign.includes(campaignId));

          return {
            ...campaignData,
            id: campaignId,
            partner: partnerAccounts,
          };
        })
        .sort((a, b) => a.entryLevel - b.entryLevel)
    );

    campaigns = campaigns.sort((a, b) => a.entryLevel - b.entryLevel);

    return campaigns;
  } catch (error) {
    console.log("Error getting Campignss", error);
  }
};
const getAllMyCampaign = async (campaignIDs) => {
  const campaigns = [];
  console.log(`Campaign `, campaignIDs);

  try {
    for (const campaignID of campaignIDs) {
      const campaignRef = await getDocs(collection(db, "campaigns"));
      console.log(campaignRef.docs.map((campaignDoc) => campaignDoc.id));
      // const campaignDoc = await getDocs(campaignRef);
      // if (!campaignDoc.empty) {
      // Document exists, add it to the campaigns array
      // const campaignData = campaignDoc.docs[0].data();
      // console.log(`Campaign `, campaignData);

      // campaigns.push(campaignData);
      // } else {
      // console.log(`Campaign with ID ${campaignID} not found.`);
      // }
    }
    return campaigns;
  } catch (error) {
    console.error("Error getting campaigns:", error);
    return []; // Return an empty array in case of an error
  }
};

export { getAllCampaign, getAllMyCampaign };
