import React from 'react'
import { useTranslation } from 'react-i18next';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import Style from '../screens/compaign/Style';
import { Image } from 'react-native';
import AppColors from '../utils/AppColors';
import { Avatar } from 'react-native-paper';
const { height, width } = Dimensions.get("window");

const ObjectiveList = (props) => {
    const { t } = useTranslation();
    const bgColor = props.bgColor === AppColors.gray?AppColors.gray:AppColors.blue_light
  return (
    <TouchableOpacity style={{marginBottom:height*0.02}} onPress={()=>{props.handlePress()}}> 
    <View style={Style.majorContainer}>
        
            <View style={Style.innerContainer} >
            <Text style={[Style.text,{width:width*0.25}]}>{t('step')} 1</Text>

            </View>

            <View style={[Style.innerContainer,{paddingTop:5}]} >
            <Text style={[Style.text_btm,{width:width*0.35,color:bgColor}]}>{props.text}</Text>
            
            <View style={{flexDirection:'column'}}>
            <Image source={require('../../assets/images/round_tick.png')} />
            <Text style={[Style.text,{color:bgColor}]}>{t('done')}</Text>
        </View>
            </View>

            <View>
            
        </View>
       
    </View>
    
    <View style={[Style.bottom_Container,{ backgroundColor:props.bgColor}]}>
        <Text style={Style.bottom_Container_text}>Expected profit from action</Text>
        <Text style={Style.bottom_Container_text}>+10XP</Text>

    </View>
    </TouchableOpacity>
  )
}

export default ObjectiveList