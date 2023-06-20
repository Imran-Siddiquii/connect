import { createSlice } from "@reduxjs/toolkit";

const ProfileSlice = createSlice({
  name: "user-profile",
  initialState: {
    isLoading: false,
    profile: [],
    isError: false,
  },

  reducers: {
    load: (state, { payload }) => {
      state.isLoading = payload;
    },
    userProfileUpdate: (state, { payload }) => {
      state.profile = payload;
      state.isLoading = false;
    },
    error: (state, { payload }) => {
      state.isError = payload;
      state.isLoading = false;
    },
  },
});

export const { load, error, userProfileUpdate } = ProfileSlice.actions;
export default ProfileSlice.reducer;

export const updateUser = () => {
  return async function getList(dispatch) {
    dispatch(load(true));
    try {
      const options = {
        method: "POST",
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      const res = await fetch("/api/users/edit", options);
      const data = await res.json();
      dispatch(userProfileUpdate(data));
      dispatch(load(false));
    } catch (err) {
      dispatch(load(false));
      dispatch(error(true));
    }
  };
};
