import { configureStore } from "@reduxjs/toolkit";
import Auth from "../pages/Auth/Reducer";
import userPostSlice from "../container/UserPostContainer/userPostSlice";
import bookmarkSlice from "../container/Bookmark/bookmarkSlice";
import ProfileSlice from "../container/Profile/ProfileSlice";
import UserSlice from "../container/User/UserSlice";
export const store = configureStore({
  reducer: {
    Auth: Auth,
    posts: userPostSlice,
    bookmark: bookmarkSlice,
    userProfile: ProfileSlice,
    userList: UserSlice,
  },
});
