import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wsGetDashboardData: {},
};

const wsSlice = createSlice({
  name: "ws",
  initialState,
  reducers: {
    dashDataLoader: (state, action) => {
      state.wsGetDashboardData = action.payload;
    },
  },
  extraReducers: {},
});

export default wsSlice.reducer;
export const { dashDataLoader } = wsSlice.actions;
