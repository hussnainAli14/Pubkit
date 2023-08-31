import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../utils/Firebase-config";

const arrangeNotificationsByDate = (notifications) => {
  const notificationsByDate = {};

  notifications.forEach((notification) => {
    const createdAt = new Date(notification.createdAt);
    const dateKey = createdAt.toDateString();

    if (!notificationsByDate[dateKey]) {
      notificationsByDate[dateKey] = [];
    }

    notificationsByDate[dateKey].push(notification);
  });

  return notificationsByDate;
};

const getNotifications = async (user) => {
  if (!user.settings.getNotifications) {
    return {};
  }
  try {
    const notificationRef = collection(db, "notification");
    const notificationQuery = query(
      notificationRef,
      where("associateId", "==", user.id)
    );
    const notificationQuerSnapshot = await getDocs(notificationQuery);
    // const user = notificationQuerSnapshot.docs.map((x) => x.data());

    const notificationsByDate = arrangeNotificationsByDate(
      notificationQuerSnapshot.docs
        .map((x) => x.data())
        .sort((a, b) => b.createdAt - a.createdAt)
    );

    // const sortedDateKeys = Object.keys(notificationsByDate)
    //   .map((dateKey) => new Date(dateKey))
    //   .sort((a, b) => b - a);

    // // Convert sorted Date objects back to formatted date strings and use for arranging objects
    // const arrangedNotifications = {};
    // sortedDateKeys.forEach((date) => {
    //   const formattedDateKey = date.toDateString();
    //   arrangedNotifications[formattedDateKey] =
    //     notificationsByDate[formattedDateKey];
    // });

    return notificationsByDate;
  } catch (error) {
    console.log("Error in listening and updating:", error);
  }
};

export { getNotifications };
