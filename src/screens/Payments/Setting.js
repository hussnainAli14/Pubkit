import React, { useState } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Style from "./Style";
import { useTranslation } from "react-i18next";
import AppColors from "../../utils/AppColors";
import axios from "axios";
import paypalApi from "../../apis/paypalApi";
const { height, width } = Dimensions.get("window");
// import paypal from "paypal-rest-sdk";

const Setting = () => {
  const { t } = useTranslation();

  // paypal.configure({
  //   mode: "sandbox", //sandbox or live
  //   client_id:
  //     "EJSl4qC-WYM0B187X6K4qpiLWIROy2uqHbYcJoXEoss_CGC3otx6AvHOXdLMAq7qHp7RLklpYhd8y3jN",
  //   client_secret:
  //     "AX_N-hinoJ5Kd0zKIME7QEeHOW6fcm_XwUcdQTKJmIUtwD-af-qLD6H4CTPnzJSASBR7FwIqFGaHnmlv",
  // });

  // const createPaymentJson = {
  //   intent: "sale",
  //   payer: {
  //     payment_method: "paypal",
  //   },
  //   redirect_urls: {
  //     return_url: "http://return.url",
  //     cancel_url: "http://cancel.url",
  //   },
  //   transactions: [
  //     {
  //       item_list: {
  //         items: [
  //           {
  //             name: "item",
  //             sku: "item",
  //             price: "1.00",
  //             currency: "USD",
  //             quantity: 1,
  //           },
  //         ],
  //       },
  //       amount: {
  //         currency: "USD",
  //         total: "1.00",
  //       },
  //       description: "This is the payment description.",
  //     },
  //   ],
  // };

  // async function createPayPalPayment() {
  //   try {
  //     const response = await axios.post(
  //       "https://api-m.sandbox.paypal.com/v1/payments/payment",
  //       createPaymentJson,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization:
  //             "Bearer A21AAITnjTiiTVwRQMnadYPJYFxOzBrrfP0P_5uCFUPw4LAkVC4rSm7FYpqGaww7T_aCuJDILZhwcWvo4drLOM0YirSDOqdUA", // Replace with the actual access token
  //         },
  //       }
  //     );

  //     console.log("Create Payment Response");
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Error creating payment:", error.message);
  //     throw error;
  //   }
  // }

  async function paymentMethod() {
    // await createPayPalPayment();
    try {
      const res = await paypalApi.generateToken();
      console.log("---------->>>>>>>>>>>>>>>>>", res.access_token);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ScrollView>
      <SafeAreaView style={Style.container}>
        <View style={{ marginTop: height * 0.02 }}>
          <Text
            style={{
              fontFamily: "Outfit-Bold",
              fontSize: 14,
              textTransform: "uppercase",
            }}
          >
            {t("connect_account")}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: width * 0.92,
            marginTop: 10,
          }}
        >
          <TouchableOpacity>
            <Image source={require("../../../assets/images/stripe.png")} />
          </TouchableOpacity>

          <TouchableOpacity onPress={paymentMethod}>
            <Image source={require("../../../assets/images/paypal.png")} />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", marginTop: height * 0.05 }}>
          <Text
            style={{
              fontFamily: "Outfit-Bold",
              fontSize: 14,
              textTransform: "uppercase",
            }}
          >
            {t("invite")}
          </Text>
          <Text
            style={{
              fontFamily: "Outfit-Bold",
              fontSize: 12,
              color: AppColors.blue_light,
              paddingTop: 3,
              paddingLeft: 10,
            }}
          >
            2/5
          </Text>
        </View>

        <View style={{ flexDirection: "row", marginVertical: height * 0.02 }}>
          <Text
            style={{
              fontFamily: "Outfit-Regular",
              fontSize: 16,
              paddingRight: width * 0.1,
            }}
          >
            Elihu Schitrit
          </Text>
          <Text style={{ fontFamily: "Outfit-Regular", fontSize: 16 }}>
            elihu@qwamo.com
          </Text>
        </View>

        <TouchableOpacity
          style={[
            Style.google_btn,
            {
              borderWidth: 2,
              borderColor: AppColors.blue_light,
              justifyContent: "center",
              width: width * 0.92,
            },
          ]}
          onPress={() => {
            // props.navigation.navigate("LoginScreen");
          }}
        >
          <Text style={[Style.google_btn_Text, { textTransform: "uppercase" }]}>
            {t("friends")}
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Setting;
