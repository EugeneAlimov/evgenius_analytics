import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wsGetDashboardData: {},
};

const wsSlice = createSlice({
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

export default wsSlice.reducer;
export const { dashDataLoader } = wsSlice.actions;
