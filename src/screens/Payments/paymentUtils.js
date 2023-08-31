import {
  addDoc,
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../utils/Firebase-config";

const getIncomeDetails = async (user) => {
  try {
    // Get deposits with status "notPaid" and associateId
    const notPaidQuery = query(
      collection(db, "action"),
      where("campaignAction.status", "==", "notPaid"),
      where("associateId", "==", user.id)
    );
    const notPaidDepositsSnapshot = await getDocs(notPaidQuery);
    const notPaidDeposits = notPaidDepositsSnapshot.docs.map((doc) =>
      doc.data()
    );

    // Get deposits with status "Paid" and associateId
    const paidQuery = query(
      collection(db, "action"),
      where("campaignAction.status", "==", "Paid"),
      where("associateId", "==", user.id),
      orderBy("campaignAction.createdAt", "desc") // Order by createdAt in descending order
    );
    const paidDepositsSnapshot = await getDocs(paidQuery);
    const paidDeposits = paidDepositsSnapshot.docs.map((doc) => doc.data());

    const calculateTotalValue = (deposits) =>
      deposits.reduce(
        (total, item) => total + item.campaignAction.actionValue,
        0
      );

    const previousDepositsTotal = calculateTotalValue(paidDeposits);
    const nextDepositsTotal = calculateTotalValue(notPaidDeposits);

    return {
      nextDeposits: notPaidDeposits.map((item) => {
        const formattedCreatedAt = new Date(
          item.campaignAction.createdAt
        ).toLocaleDateString();
        return {
          ...item,
          campaignAction: {
            ...item.campaignAction,
            createdAt: formattedCreatedAt,
          },
        };
      }),
      nextDepositsTotal: nextDepositsTotal,
      previousDeposits: paidDeposits.map((item) => {
        const formattedCreatedAt = new Date(
          item.campaignAction.createdAt
        ).toLocaleDateString();
        return {
          ...item,
          campaignAction: {
            ...item.campaignAction,
            createdAt: formattedCreatedAt,
          },
        };
      }),
      previousDepositsTotal: previousDepositsTotal,
    };
  } catch (error) {
    console.error("Error getting deposits:", error);
    throw error;
  }
};

const levels = [
  { level: 1, requiredXP: 100 },
  { level: 2, requiredXP: 500 },
  { level: 3, requiredXP: 2000 },
  { level: 4, requiredXP: 3000 },
  { level: 5, requiredXP: 4500 },
  { level: 6, requiredXP: 6000 },
  // Add more levels here if needed
];

function calculateRemainingXP(currentXP) {
  const currentLevel = levels.find((level) => currentXP < level.requiredXP);

  if (!currentLevel) {
    return 0; // You've reached the maximum level
  }

  const nextLevel = levels[currentLevel.level - 1];
  const remainingXP = nextLevel.requiredXP - currentXP;

  return remainingXP;
}

const listenForActionsAndUpdateAccounts = (user) => {
  try {
    const actionsQuery = query(
      collection(db, "action"),
      where("associateId", "==", user.id)
    );

    const unsubscribe = onSnapshot(actionsQuery, async (snapshot) => {
      snapshot.docChanges().forEach(async (change) => {
        if (change.type === "added") {
          const actionData = change.doc.data();
          console.log("++++++", actionData.campaignAction);
          // Update XP in accounts
          const accountDocRef = doc(db, "accounts", user.id);
          await updateDoc(accountDocRef, {
            xp: user.xp + actionData.campaignAction.actionXp, // Add the action's XP to the existing XP
          });

          // Add deposit entry
          const depositDocData = {
            createdAt: actionData.campaignAction.createdAt,
            value: actionData.campaignAction.actionValue,
            status: "notPaid",
            associateId: user.id,
          };
          await addDoc(collection(db, "deposits"), depositDocData);
        }
      });
    });

    return unsubscribe; // Return the unsubscribe function to stop listening when needed
  } catch (error) {
    console.log("Error in listening and updating:", error);
  }
};

export {
  getIncomeDetails,
  calculateRemainingXP,
  listenForActionsAndUpdateAccounts,
};
