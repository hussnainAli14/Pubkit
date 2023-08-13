import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, Text, View } from "react-native";
import MessageList from "../../components/MessageList";
import Style from "./Style";
const { height, width } = Dimensions.get("window");
import { getChatList } from "./messagesUtils";
import { auth } from "../../utils/Firebase-config";
import { useSelector } from "react-redux";

const Messages = () => {
  const [chatList, setChatList] = useState([]);
  const data = useSelector((state) => state.user);

  useEffect(() => {
    async function fetchChatList() {
      // Assuming you have the userId of the current user
      const userId = data.id;
      const chatListData = await getChatList(userId);
      setChatList(chatListData);
      console.log("===>>>", chatListData);
    }

    fetchChatList();
  }, []);

  return (
    <View style={[Style.container, { paddingVertical: height * 0.04 }]}>
      <FlatList
        data={chatList}
        renderItem={({ item }) => (
          <MessageList
            name={item.name}
            msg={item.latestMessage}
            id={item.id}
            avatar={item.avatar}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Messages;
