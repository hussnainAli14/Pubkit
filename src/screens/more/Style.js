import { StyleSheet, Platform, Dimensions } from "react-native";
import AppColors from "../../utils/AppColors";
const { height, width } = Dimensions.get("window");
export default StyleSheet.create({

    container:{
        paddingHorizontal:width*0.08,
        flex:1,
        // minHeight:'100%',
        backgroundColor:AppColors.gray_light
    },

    infoContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:AppColors.gray_light,
        paddingVertical:height*0.04,
        paddingHorizontal:width*0.09
    },
    innerContainer:{
        flexDirection:'row',
        
    },
    listContainer:{
        paddingHorizontal:width*0.06,
        paddingVertical:height*0.02
    },
    menuHeading:{
        fontFamily:'Outfit-Bold',
        fontSize:14,
        textTransform:'uppercase'
    },
    logOut_btn:{
        marginTop:height*0.02,
        borderRadius:25,
        paddingVertical:height*0.015,
        paddingHorizontal:width*0.05,
        width:'100%',
        backgroundColor:AppColors.pink,
        
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
    textTransform:'uppercase'
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
    radioContainer: {
        backgroundColor: AppColors.white,
        borderRadius: 7,
        width: "100%",
        shadowColor: AppColors.blue_light,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        paddingVertical: 20,
        paddingHorizontal: 10,
    
        marginTop: height * 0.02,
        flexDirection: "row",
      },
      radioButton: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: AppColors.white,
        backgroundColor:AppColors.white,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        marginRight: 6,
      },
      radioButtonInner: {
        width: 15,
        height: 15,
        backgroundColor: AppColors.blue,
        borderRadius: 2,
      },
})