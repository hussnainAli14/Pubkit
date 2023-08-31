import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  View,
} from "react-native";
import { Avatar } from "react-native-paper";
import Style from "./Style";
const { height, width } = Dimensions.get("window");

import { sendMessage, listenForMessages } from "./messagesUtils";
import { useSelector } from "react-redux";

// Initialize Firestore

const Chat = (props) => {
  const data = useSelector((state) => state.user);

  const [user, setUser] = useState(data);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const receiverId = props.route.params.id; 
  // Listen for incoming chat messages on component mount
  useEffect(() => {
    if (user) {
      const unsubscribe = listenForMessages(
        user.id,
        receiverId,
        (newMessages) => {
          setMessages(newMessages);
        }
      );

      return () => {
        // Clean up the listener when the component unmounts
        unsubscribe();
      };
    }
  }, [user]);

  const handleSendMessage = () => {
    if (message.trim() === "") return;

    // Assuming receiverId is the id of the other user you are chatting with

    // Send the message using the sendMessage function
    sendMessage(message, user.id, receiverId);
    setMessage(""); // Clear the message input field after sending
  };

  const renderMessage = ({ item }) => {
    return (
      <View>
        {item.senderId === user.id ? (
          <View
            style={{
              flexDirection: "row-reverse",
              justifyContent: "space-around",
              paddingHorizontal: width * 0.05,
            }}
          >
            {props.route.params.myAvatar ? (
              <Avatar.Image
                source={{ uri: props.route.params.myAvatar.image }}
              />
            ) : (
              <Avatar.Image
                source={{
                  uri: "https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg",
                }}
              />
            )}
            <View style={Style.text}>
              <Text style={{ fontFamily: "Outfit-Light", fontSize: 14 }}>
                {" "}
                {item.content}
              </Text>
            </View>
          </View>
        ) : (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginBottom: 10,
              paddingHorizontal: width * 0.05,
            }}
          >
            {!props.route.params.avatar.isPrivate ? (
              <Avatar.Image
                source={{ uri: props.route.params.avatar.image }}
              />
            ) : (
              <Avatar.Image
                source={{
                  uri: "https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg",
                }}
              />
            )}
            <View style={Style.text_reverse}>
              <Text style={{ fontFamily: "Outfit-Light", fontSize: 14 }}>
                {" "}
                {item.content}
              </Text>
            </View>
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={{ marginTop: height * 0.05, flex: 1 }}>
      <ScrollView contentContainerStyle={{ justifyContent: "space-between" }}>
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.messagesList}
        />
      </ScrollView>

      <View style={Style.chatContiner}>
        <TextInput
          keyboardType="default"
          style={Style.textInput}
          value={message}
          onChangeText={(text) => {
            setMessage(text);
          }}
          placeholder="Type your message..."
        />
        <TouchableOpacity
          style={{ alignSelf: "center" }}
          onPress={handleSendMessage}
        >
          <Image source={require("../../../assets/images/send2.png")} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  messagesList: {
    flexGrow: 1,
  },
  messageContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 8,
    marginVertical: 8,
  },
  messageSender: {
    fontWeight: "bold",
  },
  messageContent: {
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 8,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  sendButton: {
    marginLeft: 8,
    backgroundColor: "#007bff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  sendButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Chat;
