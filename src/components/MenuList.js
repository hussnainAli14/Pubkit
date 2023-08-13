import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';


const MenuList = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection:'row',marginVertical:15}}>
        <Image source={props.image} style={{marginRight:12}} />
        <TouchableOpacity onPress={()=>{navigation.navigate(props.path)}}>
        <Text style={{fontFamily:"Outfit-Regular",fontSize:16,textTransform:'capitalize'}}>{props.name}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default MenuList