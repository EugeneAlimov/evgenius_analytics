import { useDispatch } from "react-redux";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import DeleteIcon from "@mui/icons-material/Delete";

const SelectedTagsList = ({ height, unCheckTags, selectedTags }) => {

  const dispatch = useDispatch();

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
                  onClick={() => dispatch(unCheckTags(index))}
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
