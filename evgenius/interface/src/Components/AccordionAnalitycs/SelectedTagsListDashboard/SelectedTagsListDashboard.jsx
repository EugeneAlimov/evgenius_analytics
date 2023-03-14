import { Paper, Tooltip, Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import binarySearch from "../../../Libs/binarySearch";
import { checkTagsDashboard } from "../../../Redux/sliceAnalytic";

const SelectedTagsListDashboard = ({ height, checkTags, selectedTags }) => {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.analytic.tags);

  const [tagsOnDashboard, setTagsOnDashboard] = useState([]);

  useEffect(() => {
    const dashTags = tags.filter((el) => el.on_dashboard === true);

    setTagsOnDashboard(dashTags);
  }, [tags]);

  const removeSelectedTagHandler = (id) => {
    const newTags = JSON.parse(JSON.stringify(tags));
    const elemIndex = binarySearch(newTags, id);

    const onDash = newTags[elemIndex].on_dashboard;
    newTags[elemIndex].on_dashboard = !onDash;

    dispatch(checkTagsDashboard(newTags));
  };

  return (
    <Paper sx={{ p: 2, m: 2, height: height - 64, width: "420px" }} elevation={10} square>
      <Box component="div" mb={0} p={1} sx={{ border: "none", minHeight: "10px" }}>
        <Typography display="block" sx={{ color: "#666666", fontSize: 26, ml: 2 }}>
          Selected tags
        </Typography>
      </Box>
      <List
        style={{
          overflowY: "scroll",
          height: `${height - 146}px`,
          paddingRight: "12px",
          bgcolor: "background.paper",
        }}
      >
        {tagsOnDashboard.map((value, index) => {
          const labelId = `checkbox-list-label-${value}`;
          const { id, name_tag, tag_table, address, data_type, comment, label } = value;

          return (
            <Tooltip
              key={id}
              placement="right"
              title={
                <Typography sx={{ m: 0, overflowWrap: "break-word" }} paragraph={true}>
                  Address: {address}
                  <br />
                  Datatype: {data_type}
                  <br />
                  Tagtable: {tag_table}
                  <br />
                  Comment: {comment}
                </Typography>
              }
            >
              <ListItem divider dense={true}>
                <ListItemText
                  id={labelId}
                  primary={
                    <Typography sx={{ m: 0, overflowWrap: "break-word" }} paragraph={true}>
                      TAG: {name_tag}
                      <br />
                      GROUP: {label}
                    </Typography>
                  }
                />
                <IconButton
                  onClick={() => removeSelectedTagHandler(id)}
                  edge="end"
                  aria-label="comments"
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            </Tooltip>
          );
        })}
      </List>
    </Paper>
  );
};
export default SelectedTagsListDashboard;
