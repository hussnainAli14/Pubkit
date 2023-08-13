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
import { Avatar } from "react-native-paper";
import AppColors from "../../utils/AppColors";
import Style from "./Style";
const { height, width } = Dimensions.get("window");
import { useTranslation } from "react-i18next";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { changePassword, updateUserDetails } from "./moreUtil";
import { useDispatch, useSelector } from "react-redux";
import { setEditMyAccountValueAction } from "../../Redux/Reducers/Action/UserAction/userAction";

const EditAccount = (props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.user);
  ///////

  useEffect(() => {
    console.log("======.>>>>", data);
  }, []);

  const [user, setUser] = useState(data);

  const [firstName, setfirstName] = useState(data?.firstName);
  const [lastName, setlastName] = useState(data?.lastName);
  const [email, setEmail] = useState(data?.email);
  const [level, setLevel] = useState(data?.level);
  const [birthDate, setBirthDate] = useState(data?.dob);
  const [location, setLocation] = useState(data?.contact.country);
  const [oldpassword, setOldPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState(data?.gender);

  async function handleUpdateUserDetails() {
    dispatch(
      setEditMyAccountValueAction(firstName, lastName, birthDate, gender, {
        mobile: "",
        city: "",
        country: location,
      })
    );
    await updateUserDetails(
      user.id,
      firstName,
      lastName,
      birthDate,
      gender,
      location
    );
    console.log("User Updated");
    props.navigation.navigate("More");
  }

  async function handlePasswordChange() {
    if (newpassword == confirmpassword) {
      changePassword(oldpassword, newpassword);
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    }
    Alert.alert("Your Password is Updated");
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
          {data.avatar ? (
            <Avatar.Image
              source={{ uri: data.avatar.image }}
              size={80}
              style={{
                marginRight: 10,
                marginLeft: 10,
                position: "relative",
              }}
            />
          ) : (
            <Avatar.Image
              source={{
                uri: "https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg",
              }}
              size={80}
              style={{
                marginRight: 10,
                marginLeft: 10,
                position: "relative",
              }}
            />
          )}
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
            <Text style={Style.login_btnText}>{t("update-btnText")}</Text>
          </TouchableOpacity>
        </View>

        <View style={{ paddingVertical: height * 0.03 }}>
          <Text style={Style.menuHeading}> {t("update_password")} </Text>

          <TextInput
            placeholder={t("oldPassword-placeHolder")}
            keyboardType="default"
            style={Style.textInput}
            value={oldpassword}
            onChangeText={(text) => {
              setOldPassword(text);
            }}
          />
          <TextInput
            placeholder={t("NewPassword-placeHolder")}
            keyboardType="default"
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
            value={confirmpassword}
            onChangeText={(text) => {
              setConfirmPassword(text);
            }}
          />
          <TouchableOpacity
            style={Style.login_btn}
            onPress={handlePasswordChange}
          >
            <Text style={Style.login_btnText}>{t("change-btnText")}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={[Style.logOut_btn, { marginBottom: 10 }]}>
          <Text style={Style.login_btnText}>{t("delete_account")}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

export default EditAccount;
