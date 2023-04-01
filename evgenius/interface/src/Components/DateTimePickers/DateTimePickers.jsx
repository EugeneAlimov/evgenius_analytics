import React from "react";
import Stack from "@mui/material/Stack";
import { Paper, Grid, Divider } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import DateTimePickerComponent from "./DatePickerComponent/DateTimePickerComponent";
import Typography from "@mui/material/Typography";

const DateTimePickers = ({
  labelStart,
  handlerStart,
  valueStart,
  labelEnd,
  handlerEnd,
  valueEnd,
}) => {
  return (
    <Grid item xs={2.5}>
      <Paper sx={{ m: 2, p: 3, width: "300px" }} elevation={10} square>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <Typography>Date & Time pickers</Typography>
            <DateTimePickerComponent label={labelStart} handler={handlerStart} value={valueStart} />
            <Divider />
            <DateTimePickerComponent label={labelEnd} handler={handlerEnd} value={valueEnd} />
          </Stack>
        </LocalizationProvider>
      </Paper>
    </Grid>
  );
};

export default DateTimePickers;
