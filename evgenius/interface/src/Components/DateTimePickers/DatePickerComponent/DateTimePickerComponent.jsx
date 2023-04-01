import React from "react";
import { DesktopDateTimePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';

const DateTimePickerComponent = ({ label, handler, value }) => {
console.log('value ', value);
    return (
      <DesktopDateTimePicker
        inputFormat="yy:MM:dd-HH:mm:ss"
        views={['year', 'month', 'day', 'hours', 'minutes', 'seconds']}
        ampm={false}
        label={label}
        value={value}
        onChange={(value) => { handler(value) }}
        renderInput={(params) => <TextField {...params} />}
        maxDateTime={Date.now()}
      />
    )
}

export default DateTimePickerComponent
