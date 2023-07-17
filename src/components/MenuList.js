import React from 'react'
import { Image, Text, View } from 'react-native'

const MenuList = (props) => {
  return (
    <View style={{flexDirection:'row',marginVertical:15}}>
        <Image source={props.image} style={{marginRight:12}} />
        <Text style={{fontFamily:"Outfit-Regular",fontSize:16,textTransform:'capitalize'}}>{props.name}</Text>
    </View>
  )
}

export default MenuList