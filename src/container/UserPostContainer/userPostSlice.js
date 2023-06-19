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
    // likePost: (state, { payload }) => {
    //   const likePostCount = state?.posts?.map((ele) => {
    //     if (ele._id == payload._id) {
    //       return {
    //         ...ele,
    //         likes: {
    //           ...ele.likes,
    //           likeCount: ele.likes.likeCount + 1,
    //           likedBy: [payload],
    //         },
    //       };
    //     } else {
    //       return ele;
    //     }
    //   });
    //   state.posts = likePostCount;
    // },
    dislikePost: (state, { payload }) => {
      const dislikePostCount = state?.posts?.map((ele) => {
        if (ele._id == payload._id) {
          return {
            ...ele,
            likes: {
              ...ele.likes,
              dislikeCount: ele.likes.dislikeCount - 1,
              dislikedBy: [payload],
            },
          };
        } else {
          return ele;
        }
      });
      state.posts = dislikePostCount;
    },
    likePost: (state, { payload }) => {
      const likePostCount = state?.posts?.map((ele) => {
        if (ele._id === payload) {
          return {
            ...ele,
            isCart: true,
            likes: {
              ...ele.likes,
              likeCount: ele.likes.likeCount + 1,
              likedBy: [payload],
            },
          };
        }
        return ele;
      });
      state.posts = likePostCount;
    },
    addToBookmarkPost: (state, { payload }) => {
      console.log("🚀 ~ file: userPostSlice.js:81 ~ payload:", payload);
      const bookmarkPost = state?.posts?.map((ele) => {
        if (ele._id === payload) {
          return { ...ele, isBookmark: true };
        }
        return ele;
      });
      console.log(
        "🚀 ~ file: userPostSlice.js:80 ~ bookmarkPost:",
        bookmarkPost
      );
      state.posts = bookmarkPost;
    },
    removeToBookmarkPost: (state, { payload }) => {
      const unbookmark = state?.posts?.map((ele) => {
        if (ele._id === payload) {
          return { ...ele, isBookmark: false };
        }
        return ele;
      });
      state.posts = unbookmark;
    },
  },
});

export const {
  loading,
  error,
  userPost,
  likePost,
  dislikePost,
  addToBookmarkPost,
  removeToBookmarkPost,
} = userPostSlice.actions;
export default userPostSlice.reducer;

export const fetchUserPost = () => {
  return async function get(dispatch) {
    dispatch(loading(true));

    try {
      const response = await fetch("api/posts");
      const data = await response.json();
      dispatch(userPost(data));
      dispatch(loading(false));
    } catch (err) {
      dispatch(loading(false));
      dispatch(error(true));
    }
  };
};
