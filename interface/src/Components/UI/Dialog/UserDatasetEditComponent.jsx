import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useTheme } from "@mui/material/styles";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import DateTimePickers from "../../DateTimePickers/DateTimePickers";
import AllTagsListUserDataset from "../../AccordionAnalitycs/AllTagsListUserDataset/AllTagsListUserDataset";
import SelectedTagsListUserDatasets from "../../AccordionAnalitycs/SelectedTagsListUserDatasets/SelectedTagsListUserDatasets";

import getWindowDimensions from "../../../Libs/getWindowDimensions";
import binarySearch from "../../../Libs/binarySearch";
import { userDatasetUpdater } from "../../../api/userApi";

const UserDatasetEditComponent = ({ buttonStyle, disabled, tagToChange }) => {
  const [open, setOpen] = useState(false);
  const [nameFieldVavue, setNameFieldValue] = useState("");
  const [commentFieldVavue, setCommentFieldValue] = useState("");
  const [dateTimeStart, setDateTimeStart] = useState("");
  const [dateTimeEnd, setDateTimeEnd] = useState("");
  const theme = useTheme();
  const [width, height] = getWindowDimensions();
  const [checkededTags, setCheckedTags] = useState([]);

  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const tags = useSelector((state) => state.analytic.tags);
  const accessToken = useSelector((state) => state.login.token.access);

  const allTagsListStyle = {
    rowHeithCoeff: 540,
    listHeithCoeff: 340,
  };

  useEffect(() => {
    setDateTimeStart(tagToChange.date_time_start_diapason);
    setDateTimeEnd(tagToChange.date_time_end_diapason);
  }, [tagToChange.date_time_start_diapason, tagToChange.date_time_end_diapason]);

  useEffect(() => {
    setCheckedTags(tagToChange.tag);
  }, [tagToChange]);

  const checkHandler = (id) => {
    let newCheckedTags = [...checkededTags];
    const elemIndex = binarySearch(tags, id);
    const obj = checkededTags.find((el) => el.id === id);

    if (!!obj) {
      console.log("obj ", obj.id, "id ", id);
      newCheckedTags = checkededTags.filter((el) => el.id !== id);
    } else {
      newCheckedTags.push(tags[elemIndex]);
    }
    setCheckedTags(newCheckedTags);
  };

  const unCheckHandler = (id) => {
    const newCheckedTags = checkededTags.filter((el) => el.id !== id);
    setCheckedTags(newCheckedTags);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dateTimeStartHandler = (value) => {
    setDateTimeStart(value);
  };

  const dateTimeEndHandler = (value) => {
    setDateTimeEnd(value);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {/* <Box> */}
      <Button
        sx={{ ...buttonStyle }}
        variant="contained"
        color="success"
        size="large"
        onClick={handleClickOpen}
        disabled={disabled}
      >
        Change user dataset
      </Button>
      <Dialog
        fullScreen={fullScreen}
        maxWidth={"xl"}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Change a user dataset"}</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            
          </DialogContentText> */}
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <TextField
                  sx={{ marginX: "15px" }}
                  id="standard-basic"
                  label={tagToChange.name}
                  variant="standard"
                  margin="normal"
                  value={nameFieldVavue}
                  helperText="Enter new dataset name"
                  onChange={(event) => setNameFieldValue(event.currentTarget.value)}
                />
                <TextField
                  sx={{ marginX: "15px" }}
                  id="standard-basic"
                  label={tagToChange.comment}
                  variant="standard"
                  margin="normal"
                  value={commentFieldVavue}
                  helperText="Enter new comment"
                  onChange={(event) => setCommentFieldValue(event.currentTarget.value)}
                />
              </Box>
              <DateTimePickers
                labelStart={"Start date & time"}
                handlerStart={dateTimeStartHandler}
                valueStart={dateTimeStart}
                labelEnd={"End date & time"}
                handlerEnd={dateTimeEndHandler}
                valueEnd={dateTimeEnd}
              />
            </Box>
            <AllTagsListUserDataset
              height={height}
              tagsArr={tags}
              tagToChange={checkededTags}
              checkHandler={checkHandler}
              style={allTagsListStyle}
            />
            <SelectedTagsListUserDatasets
              height={height}
              unCheckHandler={unCheckHandler}
              checkededTags={checkededTags}
              style={allTagsListStyle}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ ...buttonStyle }}
            color="warning"
            variant="contained"
            size="large"
            autoFocus
            onClick={handleClose}
            // onClick={canselToggler}
          >
            Cancel
          </Button>
          <Button
            sx={{ ...buttonStyle }}
            color="error"
            variant="contained"
            size="large"
            onClick={() =>
              userDatasetUpdater(
                accessToken,
                checkededTags,
                tagToChange,
                dateTimeStart,
                dateTimeEnd,
                nameFieldVavue,
                commentFieldVavue,
              )
            }
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      {/* </Box> */}
    </div>
  );
};

export default UserDatasetEditComponent;
