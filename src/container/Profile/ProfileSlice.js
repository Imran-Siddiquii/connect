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
    clearUserDetail: (state, { payload }) => {
      state.profile = [];
    },

    updateAvatar: (state, { payload }) => {
      state.isLoading = true;
      state.profile = { ...state.profile, avatar: payload };
      state.isLoading = false;
    },
    updateUserDetails: (state, { payload }) => {
      state.profile = {
        ...state.profile,
        firstName: payload.firstName,
        lastName: payload.lastName,
        bio: payload.bio,
        portfolio_url: payload.portfolio_url,
      };
    },
    followCount: (state, { payload }) => {
      state.profile = {
        ...state.profile,
        following: state.profile.following + 1,
      };
    },
    unfollowCount: (state, { payload }) => {
      state.profile = {
        ...state.profile,
        following: state.profile.following - 1,
      };
    },
  },
});

export const {
  load,
  error,
  userProfileUpdate,
  updateAvatar,
  updateUserDetails,
  followCount,
  unfollowCount,
  clearUserDetail,
} = ProfileSlice.actions;
export default ProfileSlice.reducer;

export const updateUser = (details) => {
  return async function getList(dispatch) {
    dispatch(load(true));
    try {
      const options = {
        method: "POST",
        headers: {
          authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({ details }),
      };
      const res = await fetch("/api/users/edit", options);
      const data = await res.json();
      dispatch(updateUserDetails(details.editProfile));
      dispatch(load(false));
    } catch (err) {
      dispatch(load(false));
      dispatch(error(true));
    }
  };
};
