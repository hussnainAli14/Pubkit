import {
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { addDoc, auth, collection, db } from "./../../utils/Firebase-config";
import {
  EmailAuthProvider,
  deleteUser,
  getAuth,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";
import firebase from "firebase/app";
import "firebase/auth";
import { createNotification } from "../../utils/authUtils";

const getUser = async () => {
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
    console.log("There is an error in Signing Up", error);
  }
};

const updateUserDetails = async (
  avatar,
  user,
  firstName,
  lastName,
  dob,
  gender,
  country
) => {
  try {
    const accountRef = doc(db, "accounts", user.id);
    await updateDoc(accountRef, {
      "avatar.image": avatar,
      firstName: firstName,
      lastName: lastName,
      dob: dob,
      gender: gender,
      "contact.country": country,
    });
    if (user.settings.getNotifications) {
      await createNotification("Your information updated", user.id);
    }
  } catch (error) {
    console.log("There is an error in Updating Details", error);
  }
};

const changePassword = async (currentPassword, newPassword, currentUser) => {
  try {
    const user = getAuth().currentUser;
    const cred = await EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    await reauthenticateWithCredential(user, cred);

    await updatePassword(user, newPassword).then(() => {
      // Update successful.
      console.log("Password updated successfully!");
    });
    if (currentUser.settings.getNotifications) {
      await createNotification(
        "Your Password has been changed",
        currentUser.id
      );
    }
  } catch (error) {
    console.log("There is an error in changing the password", error);
  }
};

const changeSettings = async (index, isOn, userId) => {
  try {
    const accountRef = doc(db, "accounts", userId);
    let key, value;

    if (index == 0) {
      await updateDoc(accountRef, {
        "avatar.isPrivate": isOn,
      });
      await createNotification("Your Picture privacy has been changed", userId);
    } else if (index == 1) {
      await updateDoc(accountRef, {
        "settings.getNotifications": isOn,
      });
      await createNotification(
        "Your notification privacy has been changed",
        userId
      );
    } else if (index == 2) {
      await updateDoc(accountRef, {
        "settings.getDailySummary": isOn,
      });
      await createNotification(
        "Your daily summary privacy has been changed",
        userId
      );
    } else if (index == 3) {
      await updateDoc(accountRef, {
        "settings.isPublishInNetwork": isOn,
      });
      await createNotification(
        "Your publish network privacy has been changed",
        userId
      );
    }
  } catch (error) {
    console.log("There is an error in Updating Settings", error);
  }
};

const deleteAccount = async (userId) => {
  try {
    // Delete user's data from Firestore
    const accountDocRef = doc(db, "accounts", userId);
    await deleteDoc(accountDocRef);

    // Delete user's account from Firebase authentication
    const authUser = auth.currentUser;
    if (authUser) {
      await deleteUser(authUser);
      console.log("User's account has been deleted successfully.");
    } else {
      console.log("No authenticated user found.");
    }
  } catch (error) {
    console.error("Error deleting user account:", error.message);
  }
};

export {
  getUser,
  updateUserDetails,
  changePassword,
  changeSettings,
  deleteAccount,
};
