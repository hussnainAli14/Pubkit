import React from "react";
import PartnerList from "../../components/PartnerList";
import { Dimensions, SafeAreaView, ScrollView } from "react-native";
import Style from "../Payments/Style";
import { useState } from "react";
import { Text } from "react-native-paper";
import { useSelector } from "react-redux";
const { height, width } = Dimensions.get("window");
const Connect = (props) => {
  const data = useSelector((state) => state.user);

  const [partner, setPartner] = useState(
    props.route.params?.partners.filter((x) => x.id != data.id)
  );

  return (
    <ScrollView>
      <SafeAreaView
        style={{
          paddingHorizontal: width * 0.04,
          paddingVertical: height * 0.04,
        }}
      >
        {partner.length > 0 ? (
          partner.map((x) => {
            return (
              <PartnerList
                name={`${x.firstName} ${x.lastName}`}
                level={x.level}
                points={x.xp}
                since={new Date(x.createdAt).getFullYear()}
                area={x.contact.country}
                partner={x}
              />
            );
          })
        ) : (
          <>
            <Text>no partner...</Text>
          </>
        )}
      </SafeAreaView>
    </ScrollView>
  );
};

export default Connect;
