import { Paper, Tooltip, Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
// import { checkTags } from "../../../Redux/sliceAnalytic";

import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const SelectedTagsList = ({ height, checkTags, selectedTags }) => {
  // const selectedTags = useSelector((state) => state.analytic.selectedTags);
console.log(selectedTags);
  const dispatch = useDispatch();

  const removeSelectedTagHandler = (index) => {
    let tempArrSelectedTags = [...selectedTags];
    tempArrSelectedTags.splice(index, 1);
    dispatch(checkTags(tempArrSelectedTags));
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
        {selectedTags.map((value, index) => {
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
                  onClick={() => removeSelectedTagHandler(index)}
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
export default SelectedTagsList;
