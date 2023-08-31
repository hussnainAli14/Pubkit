import {
  addDoc,
  auth,
  collection,
  db,
  getDocs,
  query,
  where,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "./Firebase-config";

async function addObjectives(userId) {
  const objectives = [];
  for (let i = 1; i <= 10; i++) {
    const objectiveStatus = i == 1 ? "in_progress" : "lock"; // Set the status based on the step number
    const objective = {
      stepNumber: i,
      text: `Step ${i} Text`,
      objectiveName: `Objective ${i}`,
      objectiveStatus: objectiveStatus,
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      objectiveDescription: `Objective ${i} Description`,
    };
    objectives.push(objective);
  }
  try {
    await addDoc(collection(db, "tutorials objective"), {
      objective: objectives,
      associateId: userId,
    });
  } catch (error) {
    console.log("There is an error in Sending Message", error);
  }
}

const signUp = async (email, password, firstName, lastName) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    if (user) {
      try {
        const accountsRef = await addDoc(collection(db, "accounts"), {
          uuid: user.user.uid,

          firstName: firstName,
          lastName: lastName,
          email: email,
          createdAt: Date.now(),
          avatar: {
            image:
              "https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg",
            isPrivate: false,
          },
          level: 0,
          gender: "",
          campaign: [],
          xp: 100,
          dob: "",
          settings: {
            uilanguage: "eng",
            isPublishInNetwork: false,
            getNotifications: true,
            getDailySummary: false,
          },
          contact: {
            mobile: "",
            city: "",
            country: "",
          },
        });

        await addObjectives(accountsRef._key.path.segments[1]);
      } catch (error) {
        console.log("There is an error in Saving Details", error);
      }
    }
  } catch (error) {
    console.log("There is an error in Signing Up", error);
  }
};

const logout = async () => {
  try {
    await auth.signOut(); // Call the Firebase signOut method
  } catch (error) {
    console.log("Error logging out:", error);
  }
};

const logIn = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log("Error logging in:", error);
  }
};

const getUserDetailsFromFirebase = async () => {
  try {
    const accountRef = collection(db, "accounts");
    const accountQuery = query(
      accountRef,
      where("uuid", "==", auth.currentUser.uid)
    );
    const accountQuerySnapshot = await getDocs(accountQuery);
    const user = accountQuerySnapshot.docs.map((x) => ({
      ...x.data(),
      id: x.id,
    }));
    return user[0];
  } catch (error) {
    console.log("There is an error in getting user from Firebase", error);
  }
};

const createNotification = async (message, associateId) => {
  try {
    await addDoc(collection(db, "notification"), {
      associateId: associateId,
      message: message,
      createdAt: new Date().getTime(),
    });
  } catch (error) {
    console.log("There is an error in Notification", error);
  }
};
// Export the signUp function as a named export
export {
  signUp,
  logout,
  logIn,
  getUserDetailsFromFirebase,
  createNotification,
};
