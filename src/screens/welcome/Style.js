import { StyleSheet, Platform, Dimensions } from "react-native";
import AppColors from "../../utils/AppColors";
const { height, width } = Dimensions.get("window");
export default StyleSheet.create({
container:{
    paddingHorizontal:width*0.08,
    flex:1
},
logo:{
    alignSelf:'center',
    marginTop:height*0.1,
    marginBottom:height*0.04

},
main_Text:{
    fontFamily:'Outfit-SemiBold',
    color:AppColors.blue_light,
    fontSize:64
},
main_subText:{
    fontFamily:'Outfit-Light',
    fontSize:16,
    width:width*0.8
},
textInput:{
    fontFamily:'Outfit-Light',
    fontSize:16,
    borderRadius:25,
    paddingVertical:height*0.013,
    paddingHorizontal:width*0.05,
    width:'100%',
    backgroundColor:AppColors.white,
    borderWidth:1,
    marginTop:height*0.02,
    borderColor:AppColors.gray_light,
    shadowColor:AppColors.gray,
    shadowOffset:1,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    // shadowRadius: 5,
    elevation: 3,
},
login_btn:{
    marginTop:height*0.02,
    borderRadius:25,
    paddingVertical:height*0.01,
    paddingHorizontal:width*0.05,
    width:'100%',
    backgroundColor:AppColors.blue_light,
    
},
login_btnText:{
    fontFamily:'Outfit-Bold',
    fontSize:16,
textAlign:'center',
color:AppColors.white,
textTransform:"uppercase"
},
bottom_Text:{
    paddingTop:height*0.02,
    fontFamily:'Outfit-Medium',
    fontSize:16
},
google_btn:{
    marginTop:height*0.02,
flexDirection:'row',
borderRadius:25,
backgroundColor:AppColors.white,
paddingVertical:height*0.01,
paddingHorizontal:width*0.05,
width:'100%',
marginBottom:height*0.04
},
google_btn_Text:{
    fontFamily:'Outfit-Bold',
    fontSize:16,
    paddingHorizontal:width*0.08,
    // paddingVertical:4
},
footer_Text:{
    textAlign:'center',
    fontSize:12,
    fontFamily:'Outfit-Light',
    marginBottom:height*0.04

}
})