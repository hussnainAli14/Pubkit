import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Style from "./Style";
import AppColors from "../../utils/AppColors";

import { signUp } from "../../utils/authUtils";
import { Alert } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const Signup = (props) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSignUp() {
    setIsLoading(true);
    signUp(email, password, firstName, lastName)
      .then(() => {
        // Handle successful signup if needed
        setIsLoading(false);
        Alert.alert("Success", "You have successfully signed up!");
      })
      .catch((error) => {
        // Handle any errors during signup if needed
        setIsLoading(false);
        Alert.alert("Error", "An error occurred during signup.");
      });
  }

  return (
    <ScrollView>
      <SafeAreaView style={Style.container}>
        <Image
          source={require("../../../assets/images/login_logo.png")}
          style={Style.logo}
        />
        <Text style={Style.main_Text}>Create Account.</Text>
        <TextInput
          placeholder="First Name"
          keyboardType="default"
          style={Style.textInput}
          value={firstName}
          onChangeText={(text) => {
            setfirstName(text);
          }}
        />

        <TextInput
          placeholder="Last Name"
          keyboardType="default"
          style={Style.textInput}
          value={lastName}
          onChangeText={(text) => {
            setlastName(text);
          }}
        />

        <TextInput
          placeholder="Email Address"
          keyboardType="default"
          style={Style.textInput}
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <TextInput
          placeholder="Password"
          keyboardType="default"
          secureTextEntry={true}
          style={Style.textInput}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <TouchableOpacity
          style={Style.login_btn}
          onPress={() => {
            handleSignUp();
            // props.navigation.navigate("BottomTabs");
          }}
        >
          <Text style={Style.login_btnText}>
            {isLoading ? (
              <ActivityIndicator
                color={AppColors.pink}
                size={30}
                style={{ alignSelf: "center" }}
              />
            ) : (
              "SIGN UP"
            )}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            Style.google_btn,
            {
              borderWidth: 1,
              borderColor: AppColors.black,
              justifyContent: "center",
            },
          ]}
          onPress={() => {
            props.navigation.navigate("LoginScreen");
          }}
        >
          <Text style={[Style.google_btn_Text]}>Back to login screen</Text>
        </TouchableOpacity>
        <Text style={Style.footer_Text}>
          All rights reserved to pubkit 2023
        </Text>
      </SafeAreaView>
    </ScrollView>
  );
};
export const screenOptions = () => {
  return {
    headerShown: false,
  };
};

export default Signup;
