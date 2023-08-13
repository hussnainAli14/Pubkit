import React, { useState } from 'react'
import { Text, TouchableOpacity, View,Animated, Dimensions  } from 'react-native'
import Style from '../screens/more/Style'
import AppColors from '../utils/AppColors'
const { height, width } = Dimensions.get("window");


const SettingsList = (props) => {
    const [isOn, setIsOn] = useState(false);
    const translateXValue = new Animated.Value(0);
    const toggleSwitch = () => {
        setIsOn(!isOn);
        Animated.timing(translateXValue, {
          toValue: isOn ? 0 : 18, // Adjust the value to move the thumb to the right when the switch is on
          duration: 2000,
          useNativeDriver: false,
        }).start();
    };
  return (
        <View style={{flexDirection:'row',justifyContent:'space-around',paddingBottom:height*0.02}}>
        <TouchableOpacity
      style={[
        Style.toggleContainer,
        // { backgroundColor: isOn ? AppColors.yellow_light : AppColors.pink },
      ]}
      onPress={toggleSwitch}
    >
      <View
        style={[
          Style.thumb,
          { backgroundColor: isOn ? AppColors.yellow_light : AppColors.pink,transform:[{ translateX: isOn ? 20 : 0 }]  },
        ]}
      />
    </TouchableOpacity>
        {/* <ToggleSwitch
  isOn={false}
  size='small'
  trackOnStyle={{backgroundColor:AppColors.white}}
  trackOffStyle={{backgroundColor:AppColors.white}}
  thumbOnStyle={{backgroundColor:AppColors.yellow_light}}
  thumbOffStyle={{backgroundColor:AppColors.pink}}
  onToggle={isOn => console.log("changed to : ", isOn)}
/> */}

<Text style={{fontFamily:'Outfit-Light',fontSize:14,width:width*0.65}}>{props.text}</Text>
        </View>
 
  )
}

export default SettingsList