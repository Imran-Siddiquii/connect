import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    users: [],
    isError: false,
  },
  reducers: {
    loading: (state, { payload }) => {
      state.isLoading = payload;
    },
    error: (state, action) => {
      state.isError = action.payload;
    },
    userList: (state, { payload }) => {
      state.users = payload;
    },
    userFollow: (state, { payload }) => {
      const followUser = state?.users?.map((ele) => {
        if (ele._id === payload) {
          return { ...ele, isFollow: true };
        }
        return ele;
      });
      state.users = followUser;
    },
    userUnfollow: (state, { payload }) => {
      const followUser = state?.users?.map((ele) => {
        if (ele._id === payload) {
          return { ...ele, isFollow: false };
        }
        return ele;
      });
      state.users = followUser;
    },
  },
});

export const { loading, error, userList, userFollow, userUnfollow } =
  UserSlice.actions;
export default UserSlice.reducer;

export const fetchUserList = () => {
  return async function get(dispatch) {
    dispatch(loading(true));
    try {
      const response = await fetch("api/users");
      const { users } = await response.json();
      dispatch(userList(users));
      dispatch(loading(false));
    } catch (err) {
      dispatch(loading(false));
      dispatch(error(true));
    }
  };
};
export const followUser = (id) => {
  return async function getList(dispatch) {
    dispatch(loading(true));
    try {
      const options = {
        method: "POST",
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      const res = await fetch(`/api/users/follow/${id}/`, options);
      const data = await res.json();
      console.log("🚀 ~ file: ProfileSlice.js:84 ~ getList ~ data:", data);
      // dispatch(updateUserDetails(details.editProfile));
      dispatch(loading(false));
    } catch (err) {
      dispatch(loading(false));
      dispatch(error(true));
    }
  };
};

export const unfollowUser = (id) => {
  return async function getList(dispatch) {
    dispatch(loading(true));
    try {
      const options = {
        method: "POST",
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      const res = await fetch(`/api/users/follow/${id}/`, options);
      const data = await res.json();
      console.log("🚀 ~ file: ProfileSlice.js:84 ~ getList ~ data:", data);
      // dispatch(updateUserDetails(details.editProfile));
      dispatch(loading(false));
    } catch (err) {
      dispatch(loading(false));
      dispatch(error(true));
    }
  };
};
