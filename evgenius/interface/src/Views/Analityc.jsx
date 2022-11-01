import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import getWindowDimensions from '../Libs/getWindowDimensions'
import { getGroupsQuery, getTagsQuery } from "../api/analitycApi";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import SaveSetComponent from "../Components/SaveSetComponent/SaveSetCamponent";
import Button from "@mui/material/Button";
import Grid2 from '@mui/material/Unstable_Grid2'
import AllTagsList from "../Components/AccordionAnalitycs/AllTagsList/AllTagsList";
import SelectedTagsList from "../Components/AccordionAnalitycs/SelectedTagsList/SelectedTagsList";
import DateTimePickerComponent from "../Components/DateTimePickers/DatePickerComponent/DateTimePickerComponent";
import { Divider, Stack, Typography, Paper, } from "@mui/material";


import * as htmlToImage from 'html-to-image';
import { userDatasetSave } from "../api/userApi";
import AlertDialog from "../Components/Notification";

const Analytic = () => {

  const [isPopOpen, setPopOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [placement, setPlacement] = useState()
  const [dateTimeStart, setDateTimeStart] = useState()
  const [dateTimeEnd, setDateTimeEnd] = useState()
  const [isHistorical, setIsHistorical] = useState()
  const [alertOpen, setAlertOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')

  const [width, height] = getWindowDimensions()

  const dispatch = useDispatch()

  
  const accessToken = useSelector((state) => state.login.token.access)
  const selectedTags = useSelector((state) => state.login.selectedTags)

  const domEl = useRef(null)

  const setAlertStateHandler = (value) => {
    setAlertOpen(value)
  }

  const formStateCheck = (startTime, endTime) => {

    if (!!!startTime) {
      console.log(true);
      setAlertStateHandler(true)
      setAlertMessage('Check if you have set the range start time!')
      return false
    }

    if (!!!endTime) {
      console.log(true);
      setAlertStateHandler(true)
      setAlertMessage('Check if you have set the range end time!')
      return false
    }
  }

  const saveUserDatasetToServer = async (value) => {

    const setName = value

    const dataUrl = await htmlToImage.toPng(domEl.current, { cacheBust: true, });
    const imageName = value
    const link = document.createElement('a');

    link.download = `${imageName}.jpeg`
    link.href = dataUrl;

    const dataURLtoFile = (dataurl, filename) => {
 
    let arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), 
      n = bstr.length, 
      u8arr = new Uint8Array(n);
        
    while(n--){
      u8arr[n] = bstr.charCodeAt(n);
    }
    
    return new File([u8arr], filename, {type:mime});
    }

    const file = dataURLtoFile(dataUrl, link.download);

    formStateCheck(dateTimeStart, dateTimeEnd, setName)

    userDatasetSave(
        accessToken,
        file,
        selectedTags,
        dateTimeStart,
        dateTimeEnd,
        isHistorical,
        setName
      )
  }

  useEffect(() => {
    dispatch(getTagsQuery())
    dispatch(getGroupsQuery())
  }, [dispatch])

  const setDatasetNamehandleClick = (newPlacement, isHistorical) => (event) => {
    setAnchorEl(event.currentTarget)
    setPopOpen(true)
    setPlacement(newPlacement)
    setIsHistorical(isHistorical)
  }

  const closePopperHandle = (value, _) => {
    if (_) {
      if (!!value) {
      saveUserDatasetToServer(value)
      setPopOpen(false)
      return
      } else {
        setAlertStateHandler(true)
        setAlertMessage('Check if you have set the dataset name!')
        return
      }
    }
    setPopOpen(false)
    return
  }

  const dateTimeStartHandler = (value) => {
    setDateTimeStart(value)
  }

  const dateTimeEndHandler = (value) => {
    setDateTimeEnd(value)
  }

  return(
    <Grid2 container spacing={2} sx={{m: 0}}>
      <Grid2 xs={4}>
        <div id='domEl' ref={domEl} >
      <AllTagsList height={height} width={width} />
      </div>
      </Grid2>
      <Grid2 xs={4}>
      <SelectedTagsList height={height} width={width} />
      </Grid2>
      <Grid2 xs={4}>
        <Paper sx={{ boxShadow: 5, mt: 1, ml: 1, mr: 1, p: 3 }} elevation={10} square>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
          <Typography>Date & Time pickers</Typography>
            <DateTimePickerComponent
              label={'Start date & time'}
              handler={dateTimeStartHandler}
              value={dateTimeStart}
            />
            <Divider/>
            <DateTimePickerComponent
              label={'End date & time'}
              handler={dateTimeEndHandler}
              value={dateTimeEnd}
            />
          </Stack>
        </LocalizationProvider>
      </Paper>
        <SaveSetComponent
          isPopOpen={ isPopOpen }
          popAnchorEl={ anchorEl }
          popPlacement={ placement }
          closePopperHandle={ closePopperHandle }
        />
        <Button
          onClick={ setDatasetNamehandleClick('right', true) }
          sx={{ m: 1, position: 'senter', width: '29vw', height: '50px', marginLeft: 'auto', marginRight: 'auto' }}
          variant="contained" size="large"
        >
          Save set as historical
        </Button>
        <Button
          onClick={ setDatasetNamehandleClick('right', false) }
          sx={{ m: 1, position: 'senter', width: '29vw', height: '50px', marginLeft: 'auto', marginRight: 'auto' }}
          variant="contained" size="large"
        >
            Save set as realtime
        </Button>
        <Button
          // onClick={influxQueryHandler}
          sx={{ m: 1, position: 'senter', width: '29vw', height: '50px', marginLeft: 'auto', marginRight: 'auto'}}
          variant="contained" size="large"
        >
            Show Trand
        </Button>
      </Grid2>
      <AlertDialog alertOpen={alertOpen} setAlertStateHandler={setAlertStateHandler} alertMessage={alertMessage} />
    </Grid2>
  )
}

export default Analytic
