import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import NotificationIcon from "../../components/NotificationIcon";
import AppColors from "../../utils/AppColors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUserValueAction } from "../../Redux/Reducers/Action/UserAction/userAction";
import { getUserDetailsFromFirebase } from "../../utils/authUtils";

const OverView = () => {
  const data = useSelector((state) => state.user);
  const dispatch = useDispatch();

  async function getUserDetails() {
    const user = await getUserDetailsFromFirebase();
    console.log("User Details", user);
    dispatch(setUserValueAction(user));
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
    </View>
  );
};

export default OverView;
