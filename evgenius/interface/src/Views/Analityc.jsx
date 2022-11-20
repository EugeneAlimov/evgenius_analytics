import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import getWindowDimensions from '../Libs/getWindowDimensions'
import { getTagsAndGroupsQuery } from "../api/analitycApi";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import SaveSetComponent from "../Components/SaveSetComponent/SaveSetCamponent";
import Button from "@mui/material/Button";
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import Grid2 from '@mui/material/Unstable_Grid2'
import AllTagsList from "../Components/AccordionAnalitycs/AllTagsList/AllTagsList";
import SelectedTagsList from "../Components/AccordionAnalitycs/SelectedTagsList/SelectedTagsList";
import DateTimePickerComponent from "../Components/DateTimePickers/DatePickerComponent/DateTimePickerComponent";
import { Divider, Stack, Typography, Paper, } from "@mui/material";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import * as htmlToImage from 'html-to-image';
import { refreshTokenHandler, userDatasetSave } from "../api/userApi";
import AlertDialog from "../Components/Notification";

import { getHours } from "date-fns";
import { Outlet } from "react-router-dom";



const Analytic = () => {

  const [isPopOpen, setPopOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [placement, setPlacement] = useState()
  const [dateTimeStart, setDateTimeStart] = useState(Date.now())
  const [dateTimeEnd, setDateTimeEnd] = useState(Date.now())
  const [isHistorical, setIsHistorical] = useState()
  const [alertOpen, setAlertOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [drawerState, setDrawerState] = React.useState({ left: false, });


  const [width, height] = getWindowDimensions()

  const dispatch = useDispatch()

  const accessToken = useSelector((state) => state.login.token.access)
  const refreshToken = useSelector((state) => state.login.token.refresh)
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

    dispatch(refreshTokenHandler(refreshToken))
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
    dispatch(getTagsAndGroupsQuery())
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


  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    border: "0px",
    height: height - 76,
    borderRadius: "0px",
    "&:hover": {
      backgroundColor: purple[700]
    }
  }));

const toggleDrawer = (anchor, open) => (event) => {
  if (
    event &&
    event.type === 'keydown' &&
    (event.key === 'Tab' || event.key === 'Shift')
  ) {
    return;
  }
  setDrawerState({ ...drawerState, [anchor]: open });
}

  return(
  <>
    <ColorButton
      onClick={toggleDrawer('left', true)}
      sx={{ boxShadow: 6, }}
      variant="contained">
        <MenuOpenOutlinedIcon />
    </ColorButton>
    <SwipeableDrawer
      sx={{width: '900px'}}
      disableBackdropTransition={ true }
      anchor={'left'}
      open={drawerState['left']}
      onClose={toggleDrawer('left', false)}
      onOpen={toggleDrawer('left', true)}
    >

    <Grid2 container >
      <Grid2 xs={4}>
        <AllTagsList height={height} width={width} />
      </Grid2>
      <Grid2 xs={4}>
        <SelectedTagsList height={height} width={width} />
      </Grid2>
      <Grid2 xs={3}>
        <Paper sx={{ m: 2, p: 3, width: '300px' }} elevation={10} square>
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
          <SaveSetComponent
            isPopOpen={ isPopOpen }
            popAnchorEl={ anchorEl }
            popPlacement={ placement }
            closePopperHandle={ closePopperHandle }
          />

        </Paper>
        <Paper sx={{ mt: 10, m: 2, p: 3, width: '300px' }} elevation={10} square>
          <Button
            onClick={ setDatasetNamehandleClick('right', true) }
            sx={{ m: 1, position: 'senter', height: '50px', marginLeft: 'auto', marginRight: 'auto' }}
            variant="contained" size="large" fullWidth={true}
          >
            Save set as historical
          </Button>
          <Button
            onClick={ setDatasetNamehandleClick('right', false) }
            sx={{ m: 1, position: 'senter', height: '50px', marginLeft: 'auto', marginRight: 'auto' }}
            variant="contained" size="large" fullWidth={true}
          >
            Save set as realtime
          </Button>
          <Button
            // onClick={influxQueryHandler}
            sx={{ m: 1, position: 'senter', height: '50px', marginLeft: 'auto', marginRight: 'auto'}}
            variant="contained" size="large" color="warning" fullWidth={true}
            // onClick={handler}
            >
              Show historical Trand
          </Button>
          <Button
              // onClick={influxQueryHandler}
            sx={{ m: 1, position: 'senter', height: '50px', marginLeft: 'auto', marginRight: 'auto'}}
            variant="contained" size="large" color="success" fullWidth={true}
            // onClick={handler}
          >
              Show realtime Trand
          </Button>
          </Paper>
      </Grid2>
      <Grid2
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          flexWrap: 'nowrap',
          alignContent: 'center',
          alignItems: 'center',
        }}
        xs={1}
      >
        <ColorButton
          onClick={toggleDrawer('left', false)}
          style={{ height: height, }}
          sx={{ boxShadow: 6, }}
          variant="contained">
            <MenuOpenOutlinedIcon
              style={{ transform: 'rotate(180deg)', }}
        />
        </ColorButton>
      </Grid2>
    </Grid2>
    </SwipeableDrawer>
    <AlertDialog alertOpen={alertOpen} setAlertStateHandler={setAlertStateHandler} alertMessage={alertMessage} />
    <Outlet />
  </>
  )
}

export default Analytic
