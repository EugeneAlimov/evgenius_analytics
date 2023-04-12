import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Paper,
  ListItem,
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Tooltip,
  TextField,
  Stack,
  Autocomplete,
  Typography,
} from "@mui/material";
import { FixedSizeList } from "react-window";
import { useEffect } from "react";
import getWindowDimentions from "../../../Libs/getWindowDimensions";

const AllTagsListDashboard = ({ checkHandler, tagsArr }) => {
  const groups = useSelector((state) => state.analytic.groups);

  const [groupFilter, setGroupFilter] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [value, setValue] = useState(null);
  const [filteredByGroupTags, setFilteredByGroupsTags] = useState([]);
  const [searchedAndFilteredByGroupTags, setSearchedAndFilteredByGroupTags] = useState([]);
  const [width, height] = getWindowDimentions();

  useEffect(() => {
    setGroupFilter(value);
  }, [value]);

  //Filter tags array by group
  useEffect(() => {
    if (groupFilter === null) {
      setFilteredByGroupsTags(tagsArr);
      return;
    }

    const newTagsArr = tagsArr.filter((tag) => tag.label === groupFilter.label);
    setFilteredByGroupsTags(newTagsArr);
  }, [groupFilter, tagsArr]);

  //Search tag on a filtered array
  useEffect(() => {
    const tagsArr = filteredByGroupTags.filter((tag) =>
      tag.name_tag.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchedAndFilteredByGroupTags(tagsArr);
  }, [filteredByGroupTags, searchValue]);

  const lisTtagsLength = searchedAndFilteredByGroupTags.length;
  const rowHeith = height - 282;

  const Row = ({ index, style }) => (
    <Tooltip
      key={index}
      placement="right"
      title={
        <Typography sx={{ m: 0 }} paragraph={true}>
          Address: {searchedAndFilteredByGroupTags[index].address}
          <br />
          Datatype: {searchedAndFilteredByGroupTags[index].data_type}
          <br />
          Tagtable: {searchedAndFilteredByGroupTags[index].tag_table}
          <br />
          Comment: {searchedAndFilteredByGroupTags[index].comment}
          <br />
          Group: {searchedAndFilteredByGroupTags[index].label}
        </Typography>
      }
      style={style}
    >
      <ListItem divider dense={true}>
        <ListItemButton
          role={undefined}
          onClick={() => checkHandler(searchedAndFilteredByGroupTags[index].id)}
          dense={true}
        >
          <ListItemIcon sx={{ minWidth: "35px" }}>
            <Checkbox
              edge="start"
              checked={searchedAndFilteredByGroupTags[index].on_dashboard}
              tabIndex={-1}
              disableRipple={true}
              inputProps={{ "aria-labelledby": searchedAndFilteredByGroupTags[index].id }}
            />
          </ListItemIcon>
          <ListItemText
            id={searchedAndFilteredByGroupTags[index].id}
            primary={
              <Typography sx={{ m: 0, overflowWrap: "break-word" }} paragraph={true} noWrap={false}>
                {searchedAndFilteredByGroupTags[index].name_tag} <br />
              </Typography>
            }
          />
        </ListItemButton>
      </ListItem>
    </Tooltip>
  );

  return (
    <Paper sx={{ p: 2, m: 2, height: height - 64, width: "420px" }} elevation={10} square>
      <Box component="div" mb={0} p={1} sx={{ border: "none", minHeight: "10px" }}>
        <Typography display="block" sx={{ color: "#666666", fontSize: 26, ml: 2 }}>
          Please, select a tags from list
        </Typography>
      </Box>
      <Paper sx={{ m: 0 }} elevation={5} square>
        <Box component="div" mb={2} p={2} sx={{ border: "none", minHeight: "10px" }}>
          <Stack direction="column" spacing={3}>
            <TextField
              value={searchValue}
              onChange={(event) => setSearchValue(event.currentTarget.value)}
              sx={{ offset: 100 }}
              id="outlined-search"
              label="Search tag"
              type="search"
              size="small"
            />
            <Autocomplete
              size="small"
              disablePortal
              id="combo-box-demo"
              options={groups}
              sx={{ offset: 100 }}
              freeSolo
              value={value}
              onChange={(_, newText) => {
                setValue(newText);
              }}
              renderInput={(params) => <TextField {...params} label="Filter by group" />}
            />
          </Stack>
        </Box>
      </Paper>
      <FixedSizeList
        height={rowHeith}
        width={"100%"}
        itemSize={64}
        itemCount={lisTtagsLength}
        layout="vertical"
        overscanCount={8}
      >
        {Row}
      </FixedSizeList>
    </Paper>
  );
};

export default AllTagsListDashboard;
