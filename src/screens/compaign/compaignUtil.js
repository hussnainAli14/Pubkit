import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../utils/Firebase-config";
import { useSelector } from "react-redux";
import { createNotification } from "../../utils/authUtils";

const getAllCampaign = async (userId) => {
  try {
    // const chatList = [];
    // // Get the list of unique users (persons) that the current user has chatted with
    const campaignRef = await getDocs(collection(db, "campaigns"));
    const accountsRef = await getDocs(collection(db, "accounts"));

    const userAccountRef = doc(db, "accounts", userId);
    const userAccount = (await getDoc(userAccountRef)).data();

    let campaigns = await Promise.all(
      campaignRef.docs.map(async (x) => {
        const campaignData = x.data();

        const campaignId = x.id;

        if (!userAccount.campaign.includes(campaignId)) {
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
        }
      })
    );
    campaigns = campaigns.filter((campaign) => campaign != null);

    console.log("==============>>>>>>>>>>>>>>>>>", campaigns);
    campaigns =
      campaigns.length > 0
        ? campaigns.sort((a, b) => a.entryLevel - b.entryLevel)
        : [];

    return campaigns;
  } catch (error) {
    console.log("Error getting Campignss", error);
  }
};

const getAllMyCampaign = async (campaignIDs) => {
  const campaigns = [];

  try {
    for (const campaignID of campaignIDs) {
      const campaignRef = await getDocs(collection(db, "campaigns"));
      const campaignData = campaignRef.docs
        .filter((campaignDoc) => campaignDoc.id == campaignID)
        .map((x) => x.data());

      campaigns.push(campaignData);
    }
    console.log("Error getting campaigns:=>", campaigns[0]);
    return campaigns;
  } catch (error) {
    console.error("Error getting campaigns:=>", error);
    return []; // Return an empty array in case of an error
  }
};

const activiateCampaign = async (campaignId, user) => {
  try {
    const documentRef = doc(db, "accounts", user.id);

    // Update the `campaigns` array field with the new value (campaignId)
    await updateDoc(documentRef, {
      campaign: arrayUnion(campaignId),
    });
    if (user.settings.getNotifications) {
      await createNotification("New campaign Activated", user.id);
    }
  } catch (error) {
    console.error("Error in campaign:", error);
  }
};
export { getAllCampaign, getAllMyCampaign, activiateCampaign };
