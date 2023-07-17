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
import i18next from "../../../services/i18next";
import { useTranslation } from "react-i18next";


const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const {t} = useTranslation();


    const changeLng = ()=>{
      i18next.changeLanguage('en')
    }
  return (
    <ScrollView>
      <SafeAreaView style={Style.container}>
        <Image
          source={require("../../../assets/images/login_logo.png")}
          style={Style.logo}
        />
        <TouchableOpacity onPress={changeLng}>
          <Text>Change Language</Text>
        </TouchableOpacity>
        <Text style={Style.main_Text}>{t('login-mainText')}</Text>
        <Text style={Style.main_subText}>
         {t('login-mainSubText')}
        </Text>
        <TextInput
          placeholder={t("email-PlaceHolder")}
          keyboardType="default"
          style={Style.textInput}
          value={email}
          onChangeText={(text)=>{
            setEmail(text)
          }}
        />
        <TextInput
          placeholder={t("password-PlaceHolder")}
          keyboardType="default"
          style={Style.textInput}
          value={password}
          onChangeText={(text)=>{
            setPassword(text)
          }}
        />
        <TouchableOpacity style={Style.login_btn}>
          <Text style={Style.login_btnText}>{t("login-btnText")}</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <Text style={Style.bottom_Text}>{t("bottom-Text")}</Text>
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
              {t("bottom-btnText")}
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
          <Text style={Style.google_btn_Text}>{t( "google_Btn_Text")}</Text>
        </TouchableOpacity>
        <Text style={Style.footer_Text}>
          {t("footer_text")}
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
