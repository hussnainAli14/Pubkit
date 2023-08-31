import { updateUserDetails } from "../../../../screens/more/moreUtil";
import { getUserDetailsFromFirebase } from "../../../../utils/authUtils";

const setUserValueAction = (newUserValue) => {
  return {
    type: "setUser",
    user: newUserValue,
  };
};
const setUserFirstNameValueAction = (firstName) => {
  return {
    type: "setFirstName",
    firstName: firstName,
  };
};
const setUserLastNameValueAction = (lastName) => {
  return {
    type: "setLastName",
    lastName: lastName,
  };
};
const setUserAvaterValueAction = (avatar) => {
  return {
    type: "setAvatar",
    avatar: avatar,
  };
};
const setUserLevelValueAction = (level) => {
  return {
    type: "setLevel",
    level: level,
  };
};
const setUserGenderValueAction = (gender) => {
  return {
    type: "setGender",
    gender: gender,
  };
};
const setUserXpValueAction = (xp) => {
  return {
    type: "setXp",
    xp: xp,
  };
};
const setUserSettingsValueAction = (settings) => {
  return {
    type: "setSettings",
    settings: settings,
  };
};
const setUserContactValueAction = (contact) => {
  return {
    type: "setContact",
    contact: contact,
  };
};

const setEditMyAccountValueAction = (
  firstName,
  lastName,
  dob,
  gender,
  contact
) => {
  return {
    type: "setEditMyAccountDetails",
    firstName: firstName,
    lastName: lastName,
    dob: dob,
    gender: gender,
    contact: contact,
  };
};

const resetUserStateAction = () => {
  return { type: "resetUserData" };
};

const fetchUserDetailsAndDispatch = async (dispatch) => {
  try {
    const user = await getUserDetailsFromFirebase();
    console.log("User Details", user);
    dispatch(setUserValueAction(user));
  } catch (error) {
    console.error("Error fetching user details:", error);
  }
};

export {
  setUserValueAction,
  setUserFirstNameValueAction,
  setUserLastNameValueAction,
  setUserAvaterValueAction,
  setUserLevelValueAction,
  setUserGenderValueAction,
  setUserXpValueAction,
  setUserSettingsValueAction,
  setUserContactValueAction,
  setEditMyAccountValueAction,
  resetUserStateAction,
  fetchUserDetailsAndDispatch,
};
