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
  },
});

export const { loading, error, userList } = UserSlice.actions;
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
