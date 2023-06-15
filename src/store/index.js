import { configureStore } from "@reduxjs/toolkit";
import Auth from "../pages/Auth/Reducer";
import userPostSlice from "../container/UserPostContainer/userPostSlice";
export const store = configureStore({
  reducer: {
    Auth: Auth,
    posts: userPostSlice,
  },
});
