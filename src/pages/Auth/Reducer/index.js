import { createSlice } from "@reduxjs/toolkit";

const Auth = createSlice({
  name: "Auth",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
    token: null,
  },
  reducers: {
    Loading: (state, { payload }) => {
      state.isLoading = payload;
    },
    Error: (state, { payload }) => {
      state.isError = payload;
    },
    AuthResponse: (state, { payload }) => {
      if (payload.foundUser) {
        state.data = payload.foundUser;
      }
      if (payload.createdUser) {
        state.data = payload.createdUser;
      }
      state.token = payload.encodedToken;
    },
    Logout: (state) => {
      state.data = [];
      state.token = null;
    },
  },
});
export const { Error, Loading, AuthResponse, Logout } = Auth.actions;
export default Auth.reducer;

export const LoginAuth = (credentail) => {
  return async function getdate(dispatch) {
    dispatch(Loading(true));
    dispatch(Error(false));
    try {
      const res = await fetch("api/auth/login", {
        method: "POST",
        body: JSON.stringify(credentail),
      });
      dispatch(Loading(false));
      console.log(credentail, "@@@@@@@@@", res);
      if (!res.ok) {
        dispatch(Error(true));
      } else {
        dispatch(Error(false));
        const data = await res.json();
        localStorage.setItem("token", data.encodedToken);
        console.log("@@@@data", data);
        dispatch(AuthResponse(data));
      }
    } catch (error) {
      dispatch(Loading(false));
      dispatch(Error(true));
    }
  };
};

export const signInAuth = (credentail) => {
  return async function getdate(dispatch) {
    dispatch(Loading(true));
    dispatch(Error(false));
    try {
      const res = await fetch("api/auth/signup", {
        method: "POST",
        body: JSON.stringify(credentail),
      });
      dispatch(Loading(false));
      console.log(res, "@@@@@@@@");
      if (!res.ok) {
        dispatch(Error(true));
      } else {
        dispatch(Error(false));
        const data = await res.json();
        console.log(data, "@@@@@@@@data");
        dispatch(AuthResponse(data));
        localStorage.setItem("token", data.encodedToken);
      }
    } catch (error) {
      dispatch(Loading(false));
      dispatch(Error(true));
    }
  };
};
