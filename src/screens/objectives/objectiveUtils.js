import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../utils/Firebase-config";
import { createNotification } from "../../utils/authUtils";

const getMyObjective = async (userId, level) => {
  try {
    if (level > 0) {
      const objectivesRef = await getDocs(collection(db, "objective"));
      const objectivesData = objectivesRef.docs.map((x) => ({
        ...x.data(),
        id: x.id,
      }));

      return objectivesData;
    } else {
      //   const tutorialObjectivesRef = await getDocs(
      //     collection(db, "tutorials objective")
      //   );

      const tutorialObjectivesRef = collection(db, "tutorials objective");
      const tutorialObjectivesQuery = query(
        tutorialObjectivesRef,
        where("associateId", "==", userId)
      );

      const tutorialObjectivesQuerySnapshot = await getDocs(
        tutorialObjectivesQuery
      );

      const tutorialObjectivesData = tutorialObjectivesQuerySnapshot.docs.map(
        (x) => ({
          ...x.data(),
          id: x.id,
        })
      );
      return tutorialObjectivesData[0].objective;
    }
  } catch (error) {
    console.error("Error getting objectivess:=>", error);
    return []; // Return an empty array in case of an error
  }
};

const updateStatus = (objectivesArray, index) => {
  let level = 1;
  if (index >= 0 && index < objectivesArray.length) {
    // Update the status of the specified index
    objectivesArray[index].objectiveStatus = "done";
    xp = 15;

    // If it's not the last index, update the status of the next index
    if (index < objectivesArray.length - 1) {
      objectivesArray[index + 1].objectiveStatus = "in_progress";
      level = 0;
    }
  }

  return [objectivesArray, xp, level];
};

const updateObjectiveStatus = async (objective, user) => {
  const tutorialObjectivesRef = collection(db, "tutorials objective");
  const tutorialObjectivesQuery = query(
    tutorialObjectivesRef,
    where("associateId", "==", user.id)
  );

  const tutorialObjectivesQuerySnapshot = await getDocs(
    tutorialObjectivesQuery
  );
  const docId = tutorialObjectivesQuerySnapshot.docs[0].id;
  const objectives = tutorialObjectivesQuerySnapshot.docs[0].data().objective;

  // Find the index of the objective with the given stepNumber
  const index = objectives.findIndex(
    (obj) => obj.stepNumber == objective.stepNumber
  );

  const tutorialObjectivesRefs = doc(db, "tutorials objective", docId);

  // // if (index >= 0 && index < objectives.length - 1) {
  // //   // Update the current objective's status to "done"
  // //   const currentObjectiveDoc = doc(
  // //     tutorialObjectivesRef,
  // //     querySnapshot.docs[index].id
  // //   );

  const updatedObjStatus = updateStatus(objectives, index);

  await updateDoc(tutorialObjectivesRefs, {
    objective: updatedObjStatus[0],
  });

  const accountRef = doc(db, "accounts", user.id);
  await updateDoc(accountRef, {
    xp: parseInt(user.xp) + parseInt(updatedObjStatus[1]),
    level: updatedObjStatus[2],
  });

  if (user.level != updatedObjStatus[2]) {
    if (user.settings.getNotifications) {
      await createNotification(
        `Your Level has been upgraded to ${updatedObjStatus[2]}`,
        user.id
      );
    }
  }

  //   // Update the next objective's status to "unlock"
  //   const nextObjectiveDoc = doc(
  //     tutorialObjectivesRef,
  //     querySnapshot.docs[index + 1].id
  //   );
  //   await updateDoc(nextObjectiveDoc, { objectiveStatus: "in_progress" });
  // }
};

export { getMyObjective, updateObjectiveStatus };
