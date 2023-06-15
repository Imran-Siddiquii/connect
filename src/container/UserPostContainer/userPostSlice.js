import { createSlice } from "@reduxjs/toolkit";

const userPostSlice = createSlice({
  name: "user_post",
  initialState: {
    isLoading: false,
    posts: [],
    isError: false,
  },
  reducers: {
    loading: (state, { payload }) => {
      state.isLoading = payload;
    },
    error: (state, action) => {
      state.isError = action.payload;
    },
    userPost: (state, { payload }) => {
      state.posts = payload.posts;
    },
  },
});

export const { loading, error, userPost } = userPostSlice.actions;
export default userPostSlice.reducer;

export const fetchUserPost = () => {
  console.log("ghghdfg");
  return async function get(dispatch) {
    dispatch(loading(true));

    try {
      const response = await fetch("api/posts");
      const data = await response.json();
      dispatch(userPost(data));
      dispatch(loading(false));
      console.log("ghgh", response, data);
    } catch (err) {
      console.log("ghghdfg");
      dispatch(loading(false));
      dispatch(error(true));
    }
  };
};
