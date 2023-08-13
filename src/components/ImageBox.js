import React from 'react'
import { Dimensions, Image, Text, View } from 'react-native'
import Style from '../screens/Payments/Style'
import AppColors from '../utils/AppColors'
const { height, width } = Dimensions.get("window");
const ImageBox = (props) => {
  return (
    <View style={[Style.box,{justifyContent:'center',paddingTop:height*0.025}]}>
        <Image
        source={props.image}
        style={{height:40,width:40,marginBottom:4}}
        />
        <Text style={{fontFamily:'Outfit-Light',fontSize:14,color:props.color,paddingTop:6}}>{props.label}</Text>
    </View>
  )
}

export default ImageBox