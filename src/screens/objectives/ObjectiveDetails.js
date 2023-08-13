import React from 'react'
import { Dimensions, Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import Style from '../more/Style'
import AppColors from '../../utils/AppColors'
import VideoPlayer from '../../components/VideoPlayer'
const {height,width} = Dimensions.get('window')
const ObjectiveDetails = () => {
  return (
    <ScrollView>
        <SafeAreaView style={{paddingVertical:height*0.02,paddingHorizontal:width*0.04}}>
        <Text style={[Style.menuHeading, { paddingTop: height * 0.02 }]}>
           Step 2
          </Text>

          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontFamily:'Outfit-Bold',fontSize:30,color:AppColors.blue_light,textTransform:'uppercase',width:width*0.7}}>introduction Video</Text>
         
            <View style={{flexDirection:'column'}}>
            <Image source={require('../../../assets/images/round_tick.png')} />
            <Text style={ {fontFamily:'Outfit-SemiBold',
        fontSize:12,
        textTransform:'uppercase',color:AppColors.blue_light}}>Done</Text>
        </View>
          </View>

          <Text style={{ fontFamily: "Outfit-Light", fontSize: 14,paddingVertical:10,paddingHorizontal:width*0.05 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat
          </Text>
          {/* <VideoPlayer/> */}
        </SafeAreaView>
    </ScrollView>
)
}

export default ObjectiveDetails