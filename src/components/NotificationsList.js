import React from 'react'
import { Dimensions, Image, Text, View } from 'react-native'
import Style from '../screens/NotificationItems/Style'
const { height, width } = Dimensions.get("window");

const NotificationsList = () => {
  return (
  <View style={Style.container}>

    <View>
        <Text style={{fontFamily:'Outfit-Bold',fontSize:12,marginBottom:height*0.025}}>Firday 07/14/2023</Text>

        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            <Image
            source={require('../../assets/images/Group7.png')}
            style={{alignSelf:"center"}}
            
            />
            <Text style={{fontFamily:'Outfit-Light',fontSize:14,width:width*0.7}}>You have reached level 5 and now you can manage
new campaigns</Text>
        </View>
    </View>

  </View>
  )
}

export default NotificationsList