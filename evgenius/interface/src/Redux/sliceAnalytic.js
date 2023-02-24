import { createSlice } from "@reduxjs/toolkit";
import { getTagsAndGroupsQuery } from "../api/analitycApi";

const initialState = {
  userDatasets: [],
  tags: [],
  groups: [],
  selectedTags: [],
};

const analyticSlice = createSlice({
  name: "analytic",
  initialState,
  reducers: {
    checkTags: (state, action) => {
      state.selectedTags = action.payload;
    },
  },
  extraReducers: {
    [getTagsAndGroupsQuery.fulfilled]: (state, action) => {
      state.tags = action.payload.tags;
      state.groups = action.payload.groups.map((el) => {
        let obj = {
          id: el.id,
          label: el.name,
        };
        return obj;
      });
    },
  },
});

export default analyticSlice.reducer;
export const { checkTags } = analyticSlice.actions;
