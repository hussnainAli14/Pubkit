import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import AppColors from '../utils/AppColors'
import { useNavigation } from '@react-navigation/native';
const NotificationIcon = (props) => {
  const navigation = useNavigation(); // Use the useNavigation hook to get the navigation object

  return (
    <View style={{flexDirection:'row'}}>
    <TouchableOpacity style={{paddingRight:10}} onPress={()=>{navigation.navigate("Notifications")}} >
        <Image
        source={require('../../assets/images/notification.png')}
        />
    </TouchableOpacity>

<TouchableOpacity onPress={() =>{navigation.navigate('Messages')}}>
<Image
source={require('../../assets/images/message.png')}
/>
</TouchableOpacity>

</View>
  )
}

export default NotificationIcon