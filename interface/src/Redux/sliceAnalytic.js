import { createSlice } from "@reduxjs/toolkit";
import { getTagsAndGroupsQuery } from "../api/analitycApi";

import _ from "lodash";
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
      const tags = state.tags;
      const id = action.payload;
      const selectedTags = state.selectedTags;

      const obj = selectedTags.find((el) => el.id === id);
      const elemIndex = binarySearch(tags, id);
      let tempArrSelectedTags = _.cloneDeep(selectedTags);

      if (!!obj) {
        tempArrSelectedTags = selectedTags.filter((el) => el.id !== id);
      } else {
        tempArrSelectedTags.push(tags[elemIndex]);
      }
      state.selectedTags = tempArrSelectedTags;
    },
    unCheckTags: (state, action) => {
      const selectedTags = state.selectedTags;
      const index = action.payload;

      let tempArrSelectedTags = _.cloneDeep(selectedTags);

      tempArrSelectedTags.splice(index, 1);

      state.selectedTags = tempArrSelectedTags;
    },
    checkTagsDashboard: (state, action) => {
      const id = action.payload;
      let tags = _.cloneDeep(state.tags);
      const elemIndex = binarySearch(tags, id);
      const tagsOnDashboard = state.tagsOnDashboard

      let tempArrSelectedTags = _.cloneDeep(state.tagsOnDashboard);
      const obj = tagsOnDashboard.find((el) => el.id === id);

      if (!!obj) {
        tempArrSelectedTags = tagsOnDashboard.filter((el) => el.id !== id);
      } else {
        tempArrSelectedTags.push(tags[elemIndex]);
      }

      tags[elemIndex]["on_dashboard"] = !tags[elemIndex]["on_dashboard"];
      
      state.tags = tags
      state.tagsOnDashboard = tempArrSelectedTags
    },
    unCheckTagsDashboard: (state, action) => {
      const tagsOnDashboard = state.tagsOnDashboard;
      const index = action.payload;

      let tags = _.cloneDeep(state.tags);
      let tempArrSelectedTags = _.cloneDeep(tagsOnDashboard);

      const id = tempArrSelectedTags[index]['id'];
      const elemIndex = binarySearch(tags, id);

      tags[elemIndex]["on_dashboard"] = false;

      tempArrSelectedTags.splice(index, 1);

      state.tagsOnDashboard = tempArrSelectedTags;
      state.tags = tags;
    },

    // unCheckTagsDashboard: (state, action) => {
    //   const tagsOnDashboard = state.tagsOnDashboard;
    //   const index = action.payload;

    //   let tags = _.cloneDeep(state.tags);
    //   let tempArrSelectedTags = _.cloneDeep(tagsOnDashboard);

    //   const id = tempArrSelectedTags[index]['id'];
    //   const elemIndex = binarySearch(tags, id);

    //   tags[elemIndex]["on_dashboard"] = false;

    //   tempArrSelectedTags.splice(index, 1);

    //   state.tagsOnDashboard = tempArrSelectedTags;
    //   state.tags = tags;
    // },
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
export const { checkTags, unCheckTags, checkTagsDashboard, unCheckTagsDashboard } =
  analyticSlice.actions;
