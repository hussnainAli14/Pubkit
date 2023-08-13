import { StyleSheet, Platform, Dimensions } from "react-native";
import AppColors from "../utils/AppColors";
const { height, width } = Dimensions.get("window");
export default StyleSheet.create({
    modal:{
        backgroundColor:AppColors.white,
        height:height*0.5,
        width:width*0.8,
       justifyContent:'center',
       marginTop:height*0.2,
       marginLeft:width*0.1,
       paddingHorizontal:width*0.1

        },
    modalTitle:{
        flexDirection:'column',
        justifyContent:'center',
        // alignContent:'center',
        
    }
})