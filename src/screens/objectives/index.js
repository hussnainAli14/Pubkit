import React from 'react'
import { Dimensions, SafeAreaView, ScrollView, Text } from 'react-native'
import Style from '../compaign/Style';
import AppColors from '../../utils/AppColors';
import ObjectiveList from '../../components/ObjectiveList';
import { useTranslation } from 'react-i18next';
const { height, width } = Dimensions.get("window");
const Objectives = (props) => {
  const { t } = useTranslation();

  const handlePress = ()=>{
    props.navigation.navigate('Objective Details')
  }
  return (
    <ScrollView>
      <SafeAreaView style={[Style.container,{paddingVertical:height*0.02}]}>
    <Text style={{fontFamily:'Outfit-Light',fontSize:12,textAlign:'justify'}}>
    <Text style={{fontWeight:'bold'}}>{t('objective_welcome_bold')} </Text> {t('objective_welcome_txt')}    </Text>
    
    <ObjectiveList bgColor={AppColors.blue} text={t('reg')} handlePress={handlePress} />
    </SafeAreaView>
    </ScrollView>
  )
}

export default Objectives