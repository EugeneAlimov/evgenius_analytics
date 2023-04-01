import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wsGetDashboardData: {},
};

const sliceWS = createSlice({
  name: "ws",
  initialState,
  reducers: {
    dashDataLoader: (state, action) => {
      console.log('action.payload ', action.payload);
      state.wsGetDashboardData = action.payload;
    },
  },
  extraReducers: {},
});

export default sliceWS.reducer;
export const { dashDataLoader } = sliceWS.actions;
