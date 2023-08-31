import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Style from "./Style";
import { Avatar } from "react-native-paper";
import AppColors from "../../utils/AppColors";
const { height, width } = Dimensions.get("window");
import { useTranslation } from "react-i18next";
import MenuList from "../../components/MenuList";
import { logout } from "../../utils/authUtils";
import { getUser } from "./moreUtil";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { resetUserStateAction } from "../../Redux/Reducers/Action/UserAction/userAction";

const More = (props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const data = useSelector((state) => state.user);

  const MenuDetails = [
    {
      image: require("../../../assets/images/element3_blue.png"),
      title: t("tab-overview"),
      path: t("tab-overview"),
    },
    {
      image: require("../../../assets/images/compaigns_blue.png"),
      title: t("tab-compaign"),
      path: t("tab-compaign"),
    },
    {
      image: require("../../../assets/images/Objectives_blue.png"),
      title: t("tab-objective"),
      path: t("tab-objective"),
    },
    {
      image: require("../../../assets/images/message_blue.png"),
      title: t("message"),
      path: t("message"),
    },
    {
      image: require("../../../assets/images/notification_blue.png"),
      title: t("notificataion"),
      path: t("notificataion"),
    },
    {
      image: require("../../../assets/images/link2.png"),
      title: t("links"),
      path: t("links"),
    },
    {
      image: require("../../../assets/images/alignhorizontally.png"),
      title: t("ads"),
      path: t("ads"),
    },
    {
      image: require("../../../assets/images/convertshape2.png"),
      title: t("connect"),
      path: t("connect"),
    },
    {
      image: require("../../../assets/images/video.png"),
      title: t("tutorial"),
      path: t("tutorial"),
    },
    {
      image: require("../../../assets/images/messagequestion.png"),
      title: t("faq"),
      path: t("faq"),
    },
  ];

  const AccountList = [
    {
      image: require("../../../assets/images/edit.png"),
      title: t("edit_account"),
      path: t("edit_account"),
      propForEditAccount: data,
    },
    {
      image: require("../../../assets/images/setting3.png"),
      title: t("settings"),
      path: t("settings"),
      propForEditAccount: data,
    },
    {
      image: require("../../../assets/images/wallet.png"),
      title: t("payments"),
      path: t("payments"),
      propForEditAccount: null,
    },
    {
      image: require("../../../assets/images/medalstar.png"),
      title: t("terms"),
      path: t("terms"),
      propForEditAccount: null,
    },
  ];


  async function getUserDetails() {
    // const data = useSelector((state) => state.user);
    // if (data) {
    // setUser(data);
    console.log("User", data);
    // }
  }

  useEffect(() => {
    const willFocusSubscription = props.navigation.addListener(
      "focus",
      async () => {
        await getUserDetails();
      }
    );
    return willFocusSubscription;
  }, [data]);

  async function handleLogOut() {
    try {
      dispatch(resetUserStateAction());
      await logout();
      console.log("Logout");
    } catch (error) {
      console.log("ERROR", error);
    }
  }

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={Style.infoContainer}>
          <View style={Style.innerContainer}>
            {data.avatar ? (
              <Avatar.Image
                source={{ uri: data.avatar.image }}
                size={80}
                style={{
                  marginRight: 10,
                  marginLeft: 10,
                  position: "relative",
                }}
              />
            ) : (
              <Avatar.Image
                source={{
                  uri: "https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg",
                }}
                size={80}
                style={{
                  marginRight: 10,
                  marginLeft: 10,
                  position: "relative",
                }}
              />
            )}
            <Image
              source={require("../../../assets/images/medalstar.png")}
              style={{ position: "absolute", marginTop: height * 0.03 }}
            />
            <View style={{ paddingTop: 10 }}>
              <Text style={{ fontFamily: "Outfit-Medium", fontSize: 16 }}>
                {`${data.firstName} ${data.lastName}`}
              </Text>
              <Text style={{ fontFamily: "Outfit-Regular", fontSize: 12 }}>
                {data.email}
              </Text>
              <Text
                style={{
                  fontFamily: "Outfit-Bold",
                  fontSize: 13,
                  color: AppColors.blue_light,
                }}
              >
                Level 0{data.level}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{ paddingTop: height * 0.03 }}
            onPress={() => {
              props.navigation.navigate("Edit My Account", {
                data: data,
              });
            }}
          >
            <Image source={require("../../../assets/images/edit.png")} />
          </TouchableOpacity>
        </View>

        <View style={Style.listContainer}>
          {/* <View> */}
          <Text style={Style.menuHeading}>{t("more-menu")}</Text>

          <FlatList
            data={MenuDetails}
            renderItem={(item) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(item.item.path, {
                      // data: item.propForEditAccount,
                    });
                  }}
                >
                  <MenuList
                    image={item.item.image}
                    name={item.item.title}
                    path={item.item.path}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={Style.listContainer}>
          <Text style={[Style.menuHeading]}>{t("more-account")}</Text>
          <FlatList
            data={AccountList}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(item.path, {
                    data: item.propForEditAccount,
                  });
                }}
              >
                <MenuList
                  image={item.image}
                  name={item.title}
                  path={item.path}
                />
              </TouchableOpacity>
            )}
          />
          {/* </View> */}

          <TouchableOpacity style={Style.logOut_btn} onPress={handleLogOut}>
            <Text style={Style.login_btnText}>{t("logut_btn_text")}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default More;
