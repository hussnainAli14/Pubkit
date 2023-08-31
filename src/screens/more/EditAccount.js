import React, { useEffect, useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ActivityIndicator, Avatar } from "react-native-paper";
import AppColors from "../../utils/AppColors";
import Style from "./Style";
const { height } = Dimensions.get("window");
import { useTranslation } from "react-i18next";
import {
  HandleFileUpload,
  changePassword,
  deleteAccount,
  pickImage,
  updateUserDetails,
} from "./moreUtil";
import { useDispatch } from "react-redux";
import { fetchUserDetailsAndDispatch } from "../../Redux/Reducers/Action/UserAction/userAction";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

const EditAccount = (props) => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  console.log("======.>>>>", props.route.params);
  const [user, setUser] = useState(props.route.params?.data);
  const [firstName, setfirstName] = useState(
    props.route.params?.data?.firstName
  );
  const [lastName, setlastName] = useState(props.route.params?.data?.lastName);
  const [email, setEmail] = useState(props.route.params?.data?.email);
  const [level, setLevel] = useState(props.route.params?.data?.level);
  const [birthDate, setBirthDate] = useState(props.route.params?.data?.dob);
  const [location, setLocation] = useState(
    props.route.params?.data?.contact.country
  );
  const [oldpassword, setOldPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState(props.route.params?.data?.gender);
  const [selectedAccountAvatar, setSelectedAccountAvatar] = useState(
    props.route.params?.data?.avatar.image
  );
  const [isLoading, setisLoading] = useState(false);
  const [isPasswordUpdating, setIsPasswordUpdating] = useState(false);

  async function handleUpdateUserDetails() {
    let _avatar = "";
    setisLoading(true);
    if (selectedAccountAvatar !== null) {
      _avatar = await HandleFileUpload(selectedAccountAvatar);
    }
    await updateUserDetails(
      _avatar,
      user,
      firstName,
      lastName,
      birthDate,
      gender,
      location
    );
    await fetchUserDetailsAndDispatch(dispatch);
    console.log("User Updated");
    setisLoading(false);

    navigation.navigate("More");
  }

  async function handlePasswordChange() {
    if (newpassword == confirmpassword) {
      setIsPasswordUpdating(true);
      changePassword(oldpassword, newpassword, user);
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    }
    setIsPasswordUpdating(false);
    Alert.alert("Your Password is Updated");
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log("================>>>>>>>>>>>>>>>>>>>", result.assets[0]);
    if (!result.canceled) {
      setSelectedAccountAvatar(result.assets[0].uri);
    }
  };

  const HandleFileUpload = async (source) => {
    setisLoading(true);
    let sourceuri = source;
    let newFile = {
      uri: sourceuri,
      type: `test/${sourceuri.split(".")[1]}`,
      name: `test.${sourceuri.split(".")[1]}`,
    };
    const data = new FormData();
    data.append("file", newFile);
    data.append("upload_preset", "unitedUploads");
    data.append("cloud_name", "united-app");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/united-app/image/upload",
      {
        method: "post",
        body: data,
      }
    );
    const result = await res.json();
    return result.secure_url;
  };

  async function deleteMyAccount() {
    await deleteAccount(user.id);
  }

  const RadioButton = ({ selected, onPress }) => (
    <TouchableOpacity onPress={onPress} style={Style.radioButton}>
      {selected && <View style={Style.radioButtonInner} />}
    </TouchableOpacity>
  );

  const RadioOption = ({ label, value, selectedValue, onValueChange }) => {
    const isSelected = selectedValue === value;

    const handlePress = () => {
      onValueChange(value);
    };

    return (
      <View style={{ flexDirection: "row", marginRight: 5 }}>
        <RadioButton selected={isSelected} onPress={handlePress} />
        <Text style={{ fontFamily: "Outfit-Light", fontSize: 15 }}>
          {label}
        </Text>
      </View>
    );
  };

  return (
    <ScrollView>
      <SafeAreaView style={Style.container}>
        <View style={{ alignItems: "center", marginTop: height * 0.05 }}>
          <TouchableOpacity onPress={pickImage}>
            {selectedAccountAvatar && (
              <Avatar.Image
                source={{ uri: selectedAccountAvatar }}
                size={80}
                style={{
                  marginRight: 10,
                  marginLeft: 10,
                  position: "relative",
                }}
              />
            )}
          </TouchableOpacity>
          <Image
            source={require("../../../assets/images/medalstar.png")}
            style={{
              position: "absolute",
              marginTop: height * 0.03,
              right: "34%",
            }}
          />
          <Text style={{ fontFamily: "Outfit-Medium", fontSize: 16 }}>
            {`${firstName} ${lastName}`}
          </Text>
          <Text style={{ fontFamily: "Outfit-Regular", fontSize: 12 }}>
            {email}
          </Text>
          <Text
            style={{
              fontFamily: "Outfit-Bold",
              fontSize: 13,
              color: AppColors.blue_light,
            }}
          >
            Level 0{level}
          </Text>
        </View>

        <View style={{ paddingTop: height * 0.03 }}>
          <Text style={Style.menuHeading}> {t("edit_details")} </Text>

          <TextInput
            placeholder={t("firstName-placeHolder")}
            keyboardType="default"
            style={Style.textInput}
            value={firstName}
            onChangeText={(text) => {
              setfirstName(text);
            }}
          />
          <TextInput
            placeholder={t("lastName-placeHolder")}
            keyboardType="default"
            style={Style.textInput}
            value={lastName}
            onChangeText={(text) => {
              setlastName(text);
            }}
          />
          <View
            style={[
              Style.textInput,
              { flexDirection: "row", justifyContent: "space-between" },
            ]}
          >
            <TextInput
              placeholder={t("birthDate-placeHolder")}
              keyboardType="default"
              value={birthDate}
              style={{ width: "90%" }}
              onChangeText={(text) => {
                setBirthDate(text);
              }}
            />
            <TouchableOpacity>
              <Image
                source={require("../../../assets/images/calendar.png")}
                style={Style.icon}
              />
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", marginTop: height * 0.02 }}>
            <RadioOption
              label="Male"
              value="Male"
              selectedValue={gender}
              onValueChange={(value) => {
                setGender(value);
              }}
            />
            <RadioOption
              label="Female"
              value="Female"
              selectedValue={gender}
              onValueChange={(value) => {
                setGender(value);
              }}
            />
            <RadioOption
              label="Prefer not to define"
              value="Prefer not to define"
              selectedValue={gender}
              onValueChange={(value) => {
                setGender(value);
              }}
            />
          </View>

          <View
            style={[
              Style.textInput,
              { flexDirection: "row", justifyContent: "space-between" },
            ]}
          >
            <TextInput
              placeholder={t("location-placeHolder")}
              keyboardType="default"
              value={location}
              style={{ width: "90%" }}
              onChangeText={(text) => {
                setLocation(text);
              }}
            />
            <TouchableOpacity>
              <Image
                source={require("../../../assets/images/icon_Italy.png")}
                style={Style.icon}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={Style.login_btn}
            onPress={handleUpdateUserDetails}
          >
            <Text style={Style.login_btnText}>
              {isLoading ? (
                <ActivityIndicator
                  color={AppColors.pink}
                  size={30}
                  style={{ alignSelf: "center" }}
                />
              ) : (
                t("update-btnText")
              )}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ paddingVertical: height * 0.03 }}>
          <Text style={Style.menuHeading}> {t("update_password")} </Text>

          <TextInput
            placeholder={t("oldPassword-placeHolder")}
            keyboardType="default"
            style={Style.textInput}
            value={oldpassword}
            secureTextEntry={true}
            onChangeText={(text) => {
              setOldPassword(text);
            }}
          />
          <TextInput
            placeholder={t("NewPassword-placeHolder")}
            keyboardType="default"
            secureTextEntry={true}
            style={Style.textInput}
            value={newpassword}
            onChangeText={(text) => {
              setNewPassword(text);
            }}
          />
          <TextInput
            placeholder={t("confirmPassword-placeHolder")}
            keyboardType="default"
            style={Style.textInput}
            secureTextEntry={true}
            value={confirmpassword}
            onChangeText={(text) => {
              setConfirmPassword(text);
            }}
          />
          <TouchableOpacity
            style={Style.login_btn}
            onPress={handlePasswordChange}
          >
            <Text style={Style.login_btnText}>
              {isPasswordUpdating ? (
                <ActivityIndicator
                  color={AppColors.pink}
                  size={30}
                  style={{ alignSelf: "center" }}
                />
              ) : (
                t("change-btnText")
              )}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[Style.logOut_btn, { marginBottom: 10 }]}
          onPress={deleteMyAccount}
        >
          <Text style={Style.login_btnText}>{t("delete_account")}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

export default EditAccount;
