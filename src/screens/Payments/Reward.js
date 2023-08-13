import React from 'react'
import { Dimensions, SafeAreaView, ScrollView, Text, View } from 'react-native'
import Style from './Style'
import RewardBox from '../../components/RewardBox'
import { useTranslation } from 'react-i18next'
import DepositDetails from '../../components/DepositDetails'
const { height, width } = Dimensions.get("window");

const Reward = () => {
    const {t} = useTranslation();
  return (
    <ScrollView>
    <SafeAreaView style={Style.container}>
        <RewardBox image={require('../../../assets/images/Group13.png')} label={t('level')+' 5'} text={'560'} label2={'XP (+140 to next level)'} />
    
        <View style={{marginTop:height*0.02}} >
        <Text style={{fontFamily:"Outfit-Bold",fontSize:10,textTransform:'uppercase'}}>{t('activity')}</Text>
    </View>
    <View style={{width:width*0.92,}}>
        <DepositDetails date={'07/16'} desc={'Gucci sunglasses campaign sales commission'} price={'50'} />
        <DepositDetails date={'07/16'} desc={'Gucci sunglasses campaign sales commission'} price={'50'} />

    </View>
    
    </SafeAreaView>
   </ScrollView>
  )
}

export default Reward