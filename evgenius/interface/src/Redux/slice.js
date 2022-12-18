import { createSlice } from "@reduxjs/toolkit";
import { login, logout, getUserDatasetCollection, refreshTokenHandler } from "../api/userApi";

const initialState = {
  user: { username: null, password: null },
  token: { refresh: null, access: null },
  isLoggedIn: false,
  userDatasets: [],
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    checkTags: (state, action) => {
      state.selectedTags = action.payload;
    },
    accessTokenSetter: (state, action) => {
      state.token.access = action.payload;
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      const user = JSON.parse(action.payload.user);
      const token = action.payload.authToken;
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
    },
    [login.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [logout.fulfilled]: (state) => {
      console.log("logout");
      state.user = { username: null, password: null };
      state.token = { refresh: null, access: null };
      state.isLoggedIn = false;
      state.userDatasets = [];
      state.selectedTags = [];
    },
    [refreshTokenHandler.fulfilled]: (state, action) => {
      const accessToken = action.payload.access;
      state.token.access = accessToken;
      state.isLoggedIn = true;
    },
    [getUserDatasetCollection.fulfilled]: (state, action) => {
      state.userDatasets = action.payload;
    },
  },
});

export default slice.reducer;
export const { checkTags, accessTokenSetter } = slice.actions;
