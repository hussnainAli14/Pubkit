import React from 'react'
import { Dimensions, SafeAreaView, ScrollView, Text, View } from 'react-native'
import Style from './Style'
import Boxes from '../../components/Boxes'
import { useTranslation } from 'react-i18next'
import AppColors from '../../utils/AppColors'
import DepositDetails from '../../components/DepositDetails'
const { height, width } = Dimensions.get("window");

const Income = () => {
    const {t} = useTranslation();
  return (
    <ScrollView>
    <SafeAreaView style={Style.container}>
   <View style={{flexDirection:'row',justifyContent:"space-between",paddingRight:width*0.02}}>

    <Boxes text={'32'} label={t('deposits')} sign1={'$'} sign2={'k'} color={AppColors.blue_light}/>
    <Boxes text={'32'} label={t('deposits')} sign1={'$'} sign2={'k'} color={AppColors.yellow_light} />
    <Boxes text={'32'} label={t('deposits')} color={AppColors.gray} />

</View>

    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:height*0.03,width:width*0.92}}>
        <Text style={{fontFamily:"Outfit-Bold",fontSize:10,textTransform:'uppercase'}}>{t('next_deposit_details')}</Text>
        <Text style={{fontFamily:"Outfit-Bold",fontSize:10,color:AppColors.blue_light,textTransform:'uppercase'}}>{t('next_deposit_date')}</Text>
    </View>
    <View style={{width:width*0.92}}>
        <DepositDetails date={'07/16'} desc={'Gucci sunglasses campaign sales commission'} price={'50'} />
        <DepositDetails date={'07/16'} desc={'Gucci sunglasses campaign sales commission'} price={'50'} />

    </View>

    <View style={{marginTop:height*0.02}} >
        <Text style={{fontFamily:"Outfit-Bold",fontSize:10,textTransform:'uppercase'}}>{t('previous_deposit_details')}</Text>
    </View>
    <View style={{width:width*0.92,}}>
        <DepositDetails date={'07/16'} desc={'Gucci sunglasses campaign sales commission'} price={'50'} />
        <DepositDetails date={'07/16'} desc={'Gucci sunglasses campaign sales commission'} price={'50'} />

    </View>
    </SafeAreaView>
   </ScrollView>
  )
}

export default Income