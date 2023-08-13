import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
  onSnapshot,
  orderBy,
  limit,
  collectionGroup,
} from "firebase/firestore";
import { auth, db } from "./../../utils/Firebase-config";

// Function to fetch the user's details
const getUser = async () => {
  try {
    const accountRef = collection(db, "accounts");
    const accountQuery = query(
      accountRef,
      where("uuid", "==", auth.currentUser.uid)
    );
    const accountQuerySnapshot = await getDocs(accountQuery);
    const user = accountQuerySnapshot.docs.map((x) => ({
      ...x.data(),
      id: x.id,
    }));
    return user[0];
  } catch (error) {
    console.log("There is an error in Fetching User", error);
  }
};

// Function to update the user's details
const updateUserDetails = async (
  userId,
  firstName,
  lastName,
  dob,
  gender,
  country
) => {
  try {
    const accountRef = doc(db, "accounts", userId);
    await updateDoc(accountRef, {
      firstName: firstName,
      lastName: lastName,
      dob: dob,
      gender: gender,
      "contact.country": country,
    });
  } catch (error) {
    console.log("There is an error in Updating Details", error);
  }
};

// Function to send a chat message
const sendMessage = async (content, senderId, receiverId) => {
  try {
    await addDoc(collection(db, "messages"), {
      content: content,
      senderId: senderId,
      receiverId: receiverId,
      timestamp: new Date(),
    });
  } catch (error) {
    console.log("There is an error in Sending Message", error);
  }
};

// Function to listen for incoming chat messages
const listenForMessages = (userId, otherUserId, callback) => {
  try {
    const q = query(
      collection(db, "messages"),
      orderBy("timestamp", "asc") // Change "asc" to "desc" if you want the latest messages to appear at the bottom
    );

    return onSnapshot(q, (snapshot) => {
      const newMessages = [];
      snapshot.docs.forEach((doc) => {
        const message = doc.data();
        if (
          (message.senderId === userId && message.receiverId === otherUserId) ||
          (message.senderId === otherUserId && message.receiverId === userId)
        ) {
          newMessages.push(message);
        }
      });
      callback(newMessages);
    });
  } catch (error) {
    console.log("There is an error in Listening for Messages", error);
  }
};

const getChatList = async (userId) => {
  try {
    const chatList = [];
    // Get the list of unique users (persons) that the current user has chatted with
    const usersRef = collection(db, "accounts");
    // const usersQuery = query(
    //   usersRef,
    //   where("id", "!=", userId) // Exclude the current user from the list
    // );
    const usersQuerySnapshot = await getDocs(usersRef);
    const uniqueUsers = usersQuerySnapshot.docs
      .map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      .filter((x) => x.id != userId);
    // For each unique user, get the latest message in the chat

    for (const user of uniqueUsers) {
      const chatRef = collection(db, "messages");
      const chatQuery = query(
        chatRef,
        (where("senderId", "==", userId) &&
          where("receiverId", "==", user.id)) ||
          (where("receiverId", "==", userId) &&
            where("senderId", "==", user.id)),
        orderBy("timestamp", "desc"),
        limit(1)
      );

      const chatQuerySnapshot = await getDocs(chatQuery);
      const latestMessage = chatQuerySnapshot.docs.map((doc) => doc.data())[0];

      console.log("latestMessage=====>>>>", latestMessage);
      // Add the person's name and latest message to the chatList array
      chatList.push({
        avatar: user.avatar,
        id: user.id,
        name: user.lastName,
        latestMessage: latestMessage ? latestMessage.content : "No messages",
      });
    }

    return chatList;
  } catch (error) {
    console.log("There is an error in fetching chat list", error);
    return [];
  }
};

export {
  getUser,
  updateUserDetails,
  sendMessage,
  listenForMessages,
  getChatList,
};
