import React from "react";
import Stack from '@mui/material/Stack';
import { Paper, Grid, Divider } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import DateTimePickerComponent from "./DatePickerComponent/DateTimePickerComponent";
import Typography from '@mui/material/Typography';

const DateTimePickers = ({ dateTimeStartHandler, dateTimeStart, dateTimeEndHandler, dateTimeEnd }) => {

  return (
      <Grid item xs={2.5}>
        <Paper sx={{ boxShadow: 5, mt: 1, ml: 1, mr: 1, p: 3 }} elevation={10} square>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
          <Typography>Date & Time pickers</Typography>
            <DateTimePickerComponent
              label={'Start date & time'}
              // handler={dateTimeStartHandler}
              // value={dateTimeStart}
            />
            <Divider/>
            <DateTimePickerComponent
              label={'End date & time'}
              // handler={dateTimeEndHandler}
              // value={dateTimeEnd}
            />
          </Stack>
        </LocalizationProvider>
      </Paper>  
    </Grid>
  )
}

export default DateTimePickers
