import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import Style from '../screens/Payments/Style'
import AppColors from '../utils/AppColors'
const { height, width } = Dimensions.get("window");

const Boxes = (props) => {
  return (
    <View style={Style.box}>
        <Text style={{fontFamily:'Outfit-Light', color:props.color}}>
            <Text style={{fontSize:18}}>{props.sign1}</Text>
           <Text style={{fontSize:40}}>{props.text}</Text> 
            <Text style={{fontSize:18}}>{props.sign2}</Text>
            </Text>
        <Text style={{fontFamily:'Outfit-Light',fontSize:14}}>{props.label}</Text>
    </View>
  )
}

export default Boxes