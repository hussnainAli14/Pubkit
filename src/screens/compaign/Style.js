import { StyleSheet, Platform, Dimensions } from "react-native";
import AppColors from "../../utils/AppColors";
const { height, width } = Dimensions.get("window");
export default StyleSheet.create({

    container:{
        paddingHorizontal:width*0.06,
        flex:1,
        // minHeight:'100%',
        // backgroundColor:AppColors.gray_light
    },
    majorContainer:{
        marginVertical:height*0.02,
        backgroundColor:AppColors.white,
        paddingHorizontal:width*0.04,
        paddingVertical:height*0.02,
        borderRadius:10
    },
    innerContainer:{
        flexDirection:"row",
        // alignContent:"space-between"
        justifyContent:'space-between'
    },
    text:{
        fontFamily:'Outfit-SemiBold',
        fontSize:12,
        textTransform:'uppercase'
    },
    text_btm:{
        fontFamily:"Outfit-SemiBold",
        fontSize:16,
        color:AppColors.blue_light,
        textTransform:'uppercase'

    },
    bottom_Container:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:10,
        paddingHorizontal:10,
        position:'absolute',
        bottom:-height*0.02,
        width:'100%',
        borderBottomRightRadius:15,
        borderBottomLeftRadius:15
    },
    bottom_Container_text:{
        fontFamily:"Outfit-Medium",
        fontSize:10,color:AppColors.white,
        textTransform:'capitalize'
    }
})