import { configureStore } from "@reduxjs/toolkit";
import Auth from "../pages/Auth/Reducer";
export const store = configureStore({
  reducer: {
    Auth: Auth,
  },
});
