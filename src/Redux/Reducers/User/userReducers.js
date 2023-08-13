const userInitialReducer = {
  id: "",
  uuid: "",
  firstName: "",
  lastName: "",
  email: "",
  createdAt: Date.now(),
  avatar: {
    image: "https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg",
    isPrivate: false,
  },
  level: 0,
  gender: "",
  xp: 100,
  dob: "",
  settings: {
    uilanguage: "eng",
    isPublishInNetwork: false,
    getNotifications: false,
    getDailySummary: "",
  },
  contact: {
    mobile: "",
    city: "",
    country: "",
  },
};

const userReducer = (state = userInitialReducer, action) => {
  switch (action.type) {
    case "setIdd":
      return {
        ...state,
        id: action.id,
      };
    case "setUuid":
      return {
        ...state,
        uuid: action.uuid,
      };
    case "setFirstName":
      return {
        ...state,
        firstName: action.firstName,
      };
    case "setLastName":
      return {
        ...state,
        lastName: action.lastName,
      };
    case "setAvatar":
      return {
        ...state,
        avatar: action.avatar,
      };
    case "setLevel":
      return {
        ...state,
        level: action.level,
      };
    case "setGender":
      return {
        ...state,
        gender: action.gender,
      };
    case "setXp":
      return {
        ...state,
        xp: action.xp,
      };
    case "setSettings":
      return {
        ...state,
        settings: action.settings,
      };
    case "setContact":
      return {
        ...state,
        contact: action.contact,
      };
    case "setUser":
      return {
        ...state,
        ...action.user,
      };
    case "setEditMyAccountDetails":
      return {
        ...state,
        firstName: action.firstName,
        lastName: action.lastName,
        dob: action.dob,
        gender: action.gender,
        contact: action.contact,
      };
    case "resetUserData":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default userReducer;
