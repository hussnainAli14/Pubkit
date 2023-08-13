import React from 'react'
import { Text, View } from 'react-native'
import Style from '../screens/Payments/Style'

const DepositDetails = (props) => {
  
  return (
    <View style={Style.details}>
        <Text style={Style.text}>{props.date}</Text>
        <Text style={Style.text}>{props.desc}</Text>
        <Text style={Style.text}>
            <Text style={Style.text}>$</Text>
            <Text style={{fontSize:16}}>{props.price}</Text>
            </Text>

    </View>
  )
}

export default DepositDetails