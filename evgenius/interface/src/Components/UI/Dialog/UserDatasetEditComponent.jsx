import { useEffect, useState } from "react";

import { useTheme } from "@mui/material/styles";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import DateTimePickers from "../../DateTimePickers/DateTimePickers";

const UserDatasetEditComponent = ({ buttonStyle, disabled, tagToChange }) => {
  const [open, setOpen] = useState(false);
  const [nameFieldVavue, setNameFieldValue] = useState("");
  const [commentFieldVavue, setCommentFieldValue] = useState("");
  const [dateTimeStart, setDateTimeStart] = useState("");
  const [dateTimeEnd, setDateTimeEnd] = useState("");
  const theme = useTheme();

  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setDateTimeStart(tagToChange.date_time_start_diapason);
    setDateTimeEnd(tagToChange.date_time_end_diapason);
  }, [tagToChange.date_time_start_diapason, tagToChange.date_time_end_diapason]);

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

  console.log("tagToChange ", tagToChange);

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
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Change a user dataset"}</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            
          </DialogContentText> */}
          <Box>
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
            // onClick={handleClose}
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
