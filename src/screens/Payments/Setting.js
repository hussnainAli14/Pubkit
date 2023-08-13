import React, { useState } from 'react'
import { Dimensions, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Style from './Style'
import { useTranslation } from 'react-i18next';
import AppColors from '../../utils/AppColors';
const { height, width } = Dimensions.get("window");

const Setting = () => {
  const {t} = useTranslation();
  return (
   <ScrollView>
    <SafeAreaView style={Style.container}>
    <View style={{marginTop:height*0.02}} >
        <Text style={{fontFamily:"Outfit-Bold",fontSize:14,textTransform:'uppercase'}}>{t('connect_account')}</Text>
    </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',width:width*0.92,marginTop:10}}>
        <TouchableOpacity>
        <Image
        source={require('../../../assets/images/stripe.png')}
        />
</TouchableOpacity>

        <TouchableOpacity>

         <Image
        source={require('../../../assets/images/paypal.png')}
        />
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row',marginTop:height*0.05}} >
        <Text style={{fontFamily:"Outfit-Bold",fontSize:14,textTransform:'uppercase'}}>{t('invite')}</Text>
        <Text style={{fontFamily:"Outfit-Bold",fontSize:12,color:AppColors.blue_light,paddingTop:3,paddingLeft:10}}>2/5</Text>
    </View>

    
      <View style={{flexDirection:'row',marginVertical:height*0.02}}>
        <Text style={{fontFamily:"Outfit-Regular",fontSize:16,paddingRight:width*0.1}}>Elihu Schitrit</Text>
        <Text style={{fontFamily:"Outfit-Regular",fontSize:16}} >elihu@qwamo.com</Text>
      </View>
   

    <TouchableOpacity
          style={[
            Style.google_btn,
            {
              borderWidth: 2,
              borderColor: AppColors.blue_light,
              justifyContent: "center",
              width:width*0.92
            },
          ]}
          onPress={() => {
            // props.navigation.navigate("LoginScreen");
          }}
        >
          <Text style={[Style.google_btn_Text,{textTransform:'uppercase'}]}>{t('friends')}</Text>
        </TouchableOpacity>
    </SafeAreaView>
   </ScrollView>

  )
}

export default Setting