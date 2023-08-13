import { StyleSheet, Platform, Dimensions } from "react-native";
import AppColors from "../../utils/AppColors";
const { height, width } = Dimensions.get("window");
export default StyleSheet.create({

    container:{
        paddingLeft:width*0.04,
        flex:1,
        paddingVertical:height*0.03
        // minHeight:'100%',
        // backgroundColor:AppColors.gray_light
    },
    box:{
        alignItems:'center',
        backgroundColor:AppColors.white,
        paddingHorizontal:width*0.03,
        paddingVertical:height*0.025,
        borderRadius:15,
        width:'32%',
        marginTop:height*0.02
    },
    details:{
        flexDirection:'row',
        justifyContent:"space-between",
        backgroundColor:AppColors.white,
        paddingVertical:height*0.015,
        paddingHorizontal:width*0.02,
        borderRadius:12,
        marginTop:10,
        shadowColor:AppColors.gray,
    shadowOffset:1,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    // shadowRadius: 5,
    elevation: 3,

    },
    text:{
        fontFamily:'Outfit-Light',
        fontSize:12,
        color:AppColors.gray
    },
    reward_box:{
        alignItems:'center',
        backgroundColor:AppColors.white,
        paddingHorizontal:width*0.03,
        paddingVertical:height*0.015,
        borderRadius:15,
        width:'45%',

    },
    google_btn:{
        marginTop:height*0.01,
    flexDirection:'row',
    borderRadius:25,
    backgroundColor:AppColors.gray_light,
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
})