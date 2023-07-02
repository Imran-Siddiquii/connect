import { createSlice } from "@reduxjs/toolkit";

const SingleUserSlice = createSlice({
  name: "single-users",
  initialState: {
    isLoading: false,
    user: [],
    isError: false,
  },
  reducers: {
    loading: (state, { payload }) => {
      state.isLoading = payload;
    },
    error: (state, action) => {
      state.isError = action.payload;
    },
    userDetail: (state, { payload }) => {
      state.user = payload;
    },
    // userFollow: (state, { payload }) => {
    //   const followUser = state?.users?.map((ele) => {
    //     if (ele._id === payload) {
    //       return { ...ele, isFollow: true };
    //     }
    //     return ele;
    //   });
    //   state.users = followUser;
    // },
    // userUnfollow: (state, { payload }) => {
    //   const followUser = state?.users?.map((ele) => {
    //     if (ele._id === payload) {
    //       return { ...ele, isFollow: false };
    //     }
    //     return ele;
    //   });
    //   state.users = followUser;
    // },
  },
});

export const { loading, error, userDetail, userFollow, userUnfollow } =
  SingleUserSlice.actions;
export default SingleUserSlice.reducer;

export const fetchSingleUserDetails = (id) => {
  return async function getData(dispatch) {
    dispatch(loading(true));
    try {
      const response = await fetch(`/api/users/${id}`);
      const { user } = await response.json();
      dispatch(userDetail(user));
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
      // dispatch(updateUserDetails(details.editProfile));
      dispatch(loading(false));
    } catch (err) {
      dispatch(loading(false));
      dispatch(error(true));
    }
  };
};
