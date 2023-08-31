import { StyleSheet, Platform, Dimensions } from "react-native";
import AppColors from "../../utils/AppColors";
const { height, width } = Dimensions.get("window");
export default StyleSheet.create({
  container: {
    paddingHorizontal: width * 0.06,
    flex: 1,
  },
  listContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: height * 0.01,
    backgroundColor: AppColors.white,
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.03,
    borderRadius: 12,
    shadowColor: AppColors.black,
    shadowOffset: 2,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.6,
    elevation: 3,
  },
  text: {
    width: width * 0.7,
    borderWidth: 1,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: `rgba(137, 196, 244,0.6)`,
    borderColor: "rgba(137, 196, 244,0.6)",
  },
  text_reverse: {
    width: width * 0.7,
    borderWidth: 1,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "rgba(210, 238, 130,0.8)",
    borderColor: "rgba(210, 238, 130,1)",
  },

  chatContiner: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: AppColors.blue_light,
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02,
    // position: "absolute",
    width: "100%",
    // top: "100%",
  },

  textInput: {
    fontFamily: "Outfit-Light",
    fontSize: 16,
    borderRadius: 25,
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.05,
    width: "90%",
    backgroundColor: AppColors.white,
    borderWidth: 1,
    borderColor: AppColors.gray_light,
  },

  //Partner Lists Divider

  divider: {
    marginTop: 7, // Add margin to bring the divider down
    backgroundColor: AppColors.black,
    height: 1,
    width: 10,
    transform: [{ rotate: "90deg" }],
  },
});
