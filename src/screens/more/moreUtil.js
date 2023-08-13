import { doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { addDoc, auth, collection, db } from "./../../utils/Firebase-config";
import {
  EmailAuthProvider,
  getAuth,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";
import firebase from "firebase/app";
import "firebase/auth";

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
  userId,
  firstName,
  lastName,
  dob,
  gender,
  country
) => {
  try {
    const accountRef = doc(db, "accounts", userId);
    await updateDoc(accountRef, {
      firstName: firstName,
      lastName: lastName,
      dob: dob,
      gender: gender,
      "contact.country": country,
    });
  } catch (error) {
    console.log("There is an error in Updating Details", error);
  }
};

const changePassword = async (currentPassword, newPassword) => {
  try {
    const user = getAuth().currentUser;
    const cred = EmailAuthProvider.credential(user.email, currentPassword);
    reauthenticateWithCredential(user, cred);

    updatePassword(user, newPassword).then(() => {
      // Update successful.
      console.log("Password updated successfully!");
    });
  } catch (error) {
    console.log("There is an error in changing the password", error);
  }
};

export { getUser, updateUserDetails, changePassword };
