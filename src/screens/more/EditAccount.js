import React, { useState } from 'react'
import { Dimensions, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Avatar } from 'react-native-paper'
import AppColors from '../../utils/AppColors'
import Style from './Style'
const{height,width}= Dimensions.get('window')
import { useTranslation } from "react-i18next";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const EditAccount = () => {
  const { t } = useTranslation();

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
const [birthDate,setBirthDate] = useState("");
const [location,setLocation] = useState("")

const [oldpassword, setOldPassword] = useState("");
const [newpassword, setNewPassword] = useState("");
const [confirmpassword, setConfirmPassword] = useState("");

const [Gender,setGender] = useState("")

const RadioButton = ({ selected, onPress }) => (
    <TouchableOpacity onPress={onPress} style={Style.radioButton}>
      {selected && <View style={Style.radioButtonInner} />}
    </TouchableOpacity>
  );
  const RadioOption = ({ label, selectedValue, onValueChange }) => {
    const isSelected = selectedValue === label;

    const handlePress = () => {
      onValueChange(label);
    };
    return (
      <View style={{flexDirection:'row',marginRight:5}}>
        <RadioButton selected={isSelected} onPress={handlePress} />
        <Text style={{ fontFamily: "Outfit-Light",fontSize:15 }}>{label}</Text>
      </View>
    );
  };

  return (
    <ScrollView>
        <SafeAreaView style={Style.container}>
            <View style={{alignItems:'center',marginTop:height*0.05}}>
        <Avatar.Image
              source={require("../../../assets/images/avatar.png")}
              size={80}
              style={{ marginRight: 10, marginLeft: 10, position: "relative" }}
              resizeMode='contain'

            />
            <Image
              source={require("../../../assets/images/medalstar.png")}
              style={{ position: "absolute", marginTop: height * 0.03,right:'34%' }}
            />
              <Text style={{ fontFamily: "Outfit-Medium", fontSize: 16 }}>
                Name
              </Text>
              <Text style={{ fontFamily: "Outfit-Regular", fontSize: 12 }}>
                Email
              </Text>
              <Text
                style={{
                  fontFamily: "Outfit-Bold",
                  fontSize: 13,
                  color: AppColors.blue_light,
                }}
              >
                Level 05
              </Text>
              </View>

              <View style={{paddingTop:height*0.03}}>
                <Text style={Style.menuHeading}> {t('edit_details')} </Text>
                
                <TextInput
          placeholder={t("firstName-placeHolder")}
          keyboardType="default"
          style={Style.textInput}
          value={firstName}
          onChangeText={(text)=>{
            setfirstName(text)
          }}
        />
         <TextInput
          placeholder={t("lastName-placeHolder")}
          keyboardType="default"
          style={Style.textInput}
          value={lastName}
          onChangeText={(text)=>{
            setlastName(text)
          }}
        />
        <View 
          style={[Style.textInput,{flexDirection:'row',justifyContent:'space-between'}]}
          >
         <TextInput
          placeholder={t("birthDate-placeHolder")}
          keyboardType="default"
          value={birthDate}
          style={{width:'90%'}}
          onChangeText={(text)=>{
            setBirthDate(text)
          }}
         
        />
        <TouchableOpacity>
    <Image source={require('../../../assets/images/calendar.png')} style={Style.icon} />
    </TouchableOpacity>
        </View>

<View style={{flexDirection:'row',marginTop:height*0.02}}>
<RadioOption
            label="Male"
            value={Gender}
            selectedValue={Gender}
            onValueChange={(value) => {
              setGender(value);
            }}
          />
          <RadioOption
            label="Female"
            value={Gender}
            selectedValue={Gender}
            onValueChange={(value) => {
              setGender(value);
            }}
          />
          <RadioOption
            label="Prefer not to define"
            value={Gender}
            selectedValue={Gender}
            onValueChange={(value) => {
              setGender(value);
            }}
          />
</View>

         <TextInput
          placeholder={t("location-placeHolder")}
          keyboardType="default"
          style={Style.textInput}
          value={location}
          onChangeText={(text)=>{
            setLocation(text)
          }}
        />

<TouchableOpacity style={Style.login_btn}>
          <Text style={Style.login_btnText}>{t("update-btnText")}</Text>
        </TouchableOpacity>
              </View>

              <View style={{paddingVertical:height*0.03}}>
                <Text style={Style.menuHeading}> {t('update_password')} </Text>
                
                <TextInput
          placeholder={t("oldPassword-placeHolder")}
          keyboardType="default"
          style={Style.textInput}
          value={oldpassword}
          onChangeText={(text)=>{
            setOldPassword(text)
          }}
        />
         <TextInput
          placeholder={t("NewPassword-placeHolder")}
          keyboardType="default"
          style={Style.textInput}
          value={newpassword}
          onChangeText={(text)=>{
            setNewPassword(text)
          }}
        />
         <TextInput
          placeholder={t("confirmPassword-placeHolder")}
          keyboardType="default"
          style={Style.textInput}
          value={confirmpassword}
          onChangeText={(text)=>{
            setConfirmPassword(text)
          }}
        />
<TouchableOpacity style={Style.login_btn}>
          <Text style={Style.login_btnText}>{t("change-btnText")}</Text>
        </TouchableOpacity>
              </View>

              <TouchableOpacity style={[Style.logOut_btn,{marginBottom:10}]}>
            <Text style={Style.login_btnText}>{t("delete_account")}</Text>
          </TouchableOpacity>
        </SafeAreaView>
    </ScrollView>
    )
}



export default EditAccount