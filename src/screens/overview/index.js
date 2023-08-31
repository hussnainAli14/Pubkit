import React from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import NotificationIcon from "../../components/NotificationIcon";
import AppColors from "../../utils/AppColors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchUserDetailsAndDispatch,
  setUserValueAction,
} from "../../Redux/Reducers/Action/UserAction/userAction";
import { getUserDetailsFromFirebase } from "../../utils/authUtils";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../utils/Firebase-config";

const OverView = (props) => {
  const data = useSelector((state) => state.user);
  const dispatch = useDispatch();

  async function addAction() {
    try {
      const value = 50;
      const xp = 20;

      const campaignAction = {
        actionTitle: "Campaign income from invitation action",
        actionType: "invite",
        actionValue: value,
        actionXp: xp,
        createdAt: Date.now(),
        status: "notPaid",
      };

      const accountDocRef = doc(db, "accounts", data.id);
      await updateDoc(accountDocRef, {
        xp: data.xp + xp, // Add the action's XP to the existing XP
      });

      // const depositDocData = {
      //   createdAt: Date.now(),
      //   value: value,
      //   status: "notPaid",
      //   associateId: data.id,
      // };
      // await addDoc(collection(db, "deposits"), depositDocData);

      await addDoc(collection(db, "action"), {
        associateId: data.id,
        campaignAction: campaignAction,
      });
    } catch (error) {
      Alert.alert("Cannot perform this action");
    }
  }

  useEffect(() => {
    const willFocusSubscription = props.navigation.addListener(
      "focus",
      async () => {
        await getUserDetails();
      }
    );
    return willFocusSubscription;
  }, []);

  async function getUserDetails() {
    // addAction();
    fetchUserDetailsAndDispatch(dispatch);
    console.log("=>>", data);
  }

  useEffect(() => {
    getUserDetails();

    console.log("=>>", data);
  }, []);

  function hello() {
    dispatch(setUserValueAction(a));
  }
  return (
    <View>
      <Text>OverView Page</Text>

      <TouchableOpacity onPress={addAction}>
        <Text>Perform Action</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OverView;
