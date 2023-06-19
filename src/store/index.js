import { configureStore } from "@reduxjs/toolkit";
import Auth from "../pages/Auth/Reducer";
import userPostSlice from "../container/UserPostContainer/userPostSlice";
import bookmarkSlice from "../container/Bookmark/bookmarkSlice";
export const store = configureStore({
  reducer: {
    Auth: Auth,
    posts: userPostSlice,
    bookmark: bookmarkSlice,
  },
});
