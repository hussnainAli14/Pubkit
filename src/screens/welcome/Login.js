import React,{useState} from "react";
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
const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

  return (
    <ScrollView>
      <SafeAreaView style={Style.container}>
        <Image
          source={require("../../../assets/images/login_logo.png")}
          style={Style.logo}
        />
        <Text style={Style.main_Text}>Welcome Aboard.</Text>
        <Text style={Style.main_subText}>
          Your road to financial independence starts here. This is the exact
          place to start your journey.
        </Text>
        <TextInput
          placeholder="Email Address"
          keyboardType="default"
          style={Style.textInput}
          value={email}
          onChangeText={(text)=>{
            setEmail(text)
          }}
        />
        <TextInput
          placeholder="Password"
          keyboardType="default"
          style={Style.textInput}
          value={password}
          onChangeText={(text)=>{
            setPassword(text)
          }}
        />
        <TouchableOpacity style={Style.login_btn}>
          <Text style={Style.login_btnText}>LOGIN</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <Text style={Style.bottom_Text}>Don’t have an account?</Text>
          <TouchableOpacity
            style={{ paddingTop: 7 }}
            onPress={() => {
              props.navigation.navigate("RegisterScreen");
            }}
          >
            <Text
              style={{
                fontFamily: "Outfit-SemiBold",
                paddingTop: 10,
                fontSize: 16,
              }}
            >
              Sign Up Now
            </Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            textAlign: "center",
            fontFamily: "Outfit-Medium",
            fontSize: 16,
            color: AppColors.blue_light,
          }}
        >
          OR
        </Text>
        <TouchableOpacity style={Style.google_btn}>
          <Image source={require("../../../assets/images/icon_google.png")} />
          <Text style={Style.google_btn_Text}>LOGIN WITH GOOGLE</Text>
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
export default Login;
