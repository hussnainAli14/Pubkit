import React, { useState } from 'react'
import { Dimensions, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import SettingsList from '../../components/SettingsList'
import Style from './Style'
const { height, width } = Dimensions.get("window");
import { useTranslation } from "react-i18next";

const Settings = () => {
  const { t } = useTranslation();
const [lang,setLang] = useState('')
  return (
    <View style={[Style.container,{paddingVertical:height*0.05}]}>

   <SettingsList text={'Display my profile in the community'}/>
   <SettingsList text={'Send me notifications about new campaigns'}/>
   <SettingsList text={'Send me a daily summary of my movements'}/>
   <SettingsList text={'Send me notifications about new campaigns'}/>


   <View 
          style={[Style.textInput,{flexDirection:'row',justifyContent:'space-between'}]}
          >
         <TextInput
          placeholder={t("language-placeHolder")}
          keyboardType="default"
          value={lang}
          style={{width:'90%'}}
          onChangeText={(text)=>{
            setLang(text)
          }}
         
        />
        <TouchableOpacity>
    <Image source={require('../../../assets/images/icon_Italy.png')} style={Style.icon} />
    </TouchableOpacity>
        </View>
</View>
  )
}

export default Settings