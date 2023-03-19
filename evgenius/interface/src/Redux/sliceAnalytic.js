import { createSlice } from "@reduxjs/toolkit";
import { getTagsAndGroupsQuery } from "../api/analitycApi";

import _ from "lodash"
import binarySearch from "../Libs/binarySearch";

const initialState = {
  userDatasets: [],
  tags: [],
  groups: [],
  selectedTags: [],
  tagsOnDashboard: [],
};

const analyticSlice = createSlice({
  name: "analytic",
  initialState,
  reducers: {
    checkTags: (state, action) => {
      state.selectedTags = action.payload;
    },
    saveTagsDashboard: (state, action) => {
      const tags = state.tags
      const id = action.payload
      const newTags = _.cloneDeep(tags)
      const elemIndex = binarySearch(newTags, id);
  
      const onDash = newTags[elemIndex].on_dashboard;
      newTags[elemIndex].on_dashboard = !onDash;
  
      state.tags = newTags;
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
export const { checkTags, saveTagsDashboard } = analyticSlice.actions;
