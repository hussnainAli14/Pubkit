import { StyleSheet, Platform, Dimensions } from "react-native";
import AppColors from "../../utils/AppColors";
const { height, width } = Dimensions.get("window");
export default StyleSheet.create({
    container:{
        paddingHorizontal:width*0.06,
        flex:1,
        paddingVertical:height*0.03
    },
})