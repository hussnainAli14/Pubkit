import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, View } from "react-native";
import MessageList from "../../components/MessageList";
import Style from "./Style";
const { height } = Dimensions.get("window");
import { getChatList } from "./messagesUtils";
import { useSelector } from "react-redux";
import { Text } from "react-native";
import AppColors from "../../utils/AppColors";

const Messages = () => {
  const [chatList, setChatList] = useState([]);
  const data = useSelector((state) => state.user);

  useEffect(() => {
    async function fetchChatList() {
      // Assuming you have the userId of the current user
      const userId = data.id;
      const chatListData = await getChatList(userId);
      setChatList(chatListData);
    }

    fetchChatList();
  }, []);

  return (
    <View style={[Style.container, { paddingVertical: height * 0.04 }]}>
      {chatList.length > 0 ? (
        <FlatList
          data={chatList}
          renderItem={({ item }) => (
            <MessageList
              name={item.name}
              msg={item.latestMessage}
              id={item.id}
              avatar={item.avatar}
              myAvatar={data.avatar}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text
          style={{
            textAlign: "center",
            color: AppColors.pink,
            fontFamily: "Outfit-SemiBold",
            fontSize: 20,
          }}
        >
          No Chats To Show
        </Text>
      )}
    </View>
  );
};

export default Messages;
