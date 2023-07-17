import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import AppColors from '../utils/AppColors'

const NotificationIcon = () => {
  return (
    <View style={{flexDirection:'row'}}>
    <TouchableOpacity style={{paddingRight:10}} >
        <Image
        source={require('../../assets/images/notification.png')}
        />
    </TouchableOpacity>

<TouchableOpacity>
<Image
source={require('../../assets/images/message.png')}
/>
</TouchableOpacity>

</View>
  )
}

export default NotificationIcon