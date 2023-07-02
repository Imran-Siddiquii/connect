import { createSlice } from "@reduxjs/toolkit";

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState: {
    loading: false,
    bookmarkPost: [],
    error: false,
  },
  reducers: {
    load: (state, { payload }) => {
      state.loading = payload;
    },
    bookmark: (state, { payload }) => {
      state.bookmarkPost = payload;
      state.loading = false;
    },
    error: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

export const { load, error, bookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;

export const fetchBookmark = () => {
  return async function getList(dispatch) {
    dispatch(load(true));

    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      const res = await fetch("/api/users/bookmark", options);
      const data = await res.json();
      dispatch(bookmark(data.bookmarks));
      dispatch(load(false));
    } catch (err) {
      dispatch(load(false));
      dispatch(error(true));
    }
  };
};

export const AddBookmark = (_id) => {
  return async function addItem(dispatch) {
    dispatch(load(true));
    const options = {
      method: "POST",
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    try {
      const res = await fetch(`/api/users/bookmark/${_id}`, options);
      const data = await res.json();
      dispatch(load(false));
    } catch (err) {
      dispatch(load(false));
    }
  };
};

export const RemoveBookmark = (id) => {
  return async function deleteItem(dispatch) {
    dispatch(load(true));
    const options = {
      method: "DELETE",
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    try {
      const res = await fetch(`/api/users/remove-bookmark/${id}`, options);
      const data = await res.json();
      dispatch(bookmark(data.bookmarks));
      dispatch(load(false));
    } catch (error) {
      dispatch(load(false));
    }
  };
};
