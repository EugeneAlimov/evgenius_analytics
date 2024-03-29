import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { accessTokenSetter } from "../Redux/slice";
import { useNavigate } from "react-router-dom";

import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import CommentIcon from "@mui/icons-material/Comment";
import Box from "@mui/system/Box";

import UserDatasetEditComponent from "../Components/UI/Dialog/UserDatasetEditComponent";

import { logout } from "../api/userApi";
import { getUserDatasetCollection, tokenUpdater } from "../api/userApi";
import { getTagsAndGroupsQuery } from "../api/analitycApi";

const User = () => {
  const refreshToken = useSelector((state) => state.login.token.refresh);
  const userDataset = useSelector((state) => state.login.userDatasets);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userSetsHistorical, setUserSetsHistorical] = useState([]);
  const [userSetsRealtime, setUserSetsRealtime] = useState([]);
  const [historicalChecked, setHistorycalChecked] = useState([]);
  const [realtimeChecked, setRealtimeChecked] = useState([]);
  const [colorHistorical, setColorHistorical] = useState([]);
  const [colorRealtime, setcolorRealtime] = useState([]);
  const [buttonsDisabled, setButtonsDisabled] = useState(true);
  const [checkboxDisabled, setcheckboxDisabled] = useState(true);
  const [tagToChange, setTagToChange] = useState("");
  // const [historicalPreview, setHistoricalPreview] = useState();
  // const [realtimelPreview, setRealtimePreview] = useState();

  const paperStyle = {
    width: "22%",
    height: "90vh",
    marginLeft: "30px",
    mt: "10px",
  };

  const listStyle = {
    mt: "20px",
    mx: "10px",
    boxShadow: 5,
    height: "calc(90vh - 93px)",
    borderRadius: "3px",
  };

  const buttonStyle = {
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
    height: "50px",
    mt: "20px",
    mb: "20px",
  };

  useEffect(() => {
    tokenUpdater(refreshToken)
      .then((response) => {
        dispatch(accessTokenSetter(response));
        dispatch(getUserDatasetCollection(response));
      })
      .catch(() => {
        dispatch(logout(refreshToken));
        navigate("/analytics", { replace: true });
      });
  }, [navigate, dispatch, refreshToken]);

  useEffect(() => {
    dispatch(getTagsAndGroupsQuery());
  }, [dispatch]);

  useEffect(() => {
    if (!userDataset) return;
    const historical = userDataset.filter((set) => set.is_historical === true);
    const realtime = userDataset.filter((set) => set.is_historical === false);
    setUserSetsHistorical(historical);
    setUserSetsRealtime(realtime);
    setHistorycalChecked(
      Array.from(historical, () => {
        return false;
      })
    );
    setRealtimeChecked(
      Array.from(realtime, () => {
        return false;
      })
    );
  }, [userDataset]);

  // useEffect(() => {
  //   if (!userSetsHistorical.length) {
  //     return;
  //   }
  //   setHistoricalPreview(userSetsHistorical[0].dataset_image);
  // }, [userSetsHistorical]);

  // useEffect(() => {
  //   if (!userSetsRealtime.length) {
  //     return;
  //   }
  //   setRealtimePreview(userSetsRealtime[0].dataset_image);
  // }, [userSetsRealtime]);

  const datasetItemColorChangerButtonsDisabler = (
    datasetSetColor,
    datasetCleanColor,
    index = 0,
    stateChangerSetColor,
    stateChangerCleanColor,
    isCleaner,
    buttonDisabler,
    isDisabled
  ) => {
    const arr = new Array(datasetSetColor.length).fill("");
    if (!isCleaner) {
      arr[index] = "#1976d2";
    }
    stateChangerSetColor(arr);

    const newArr = new Array(datasetCleanColor.length).fill("");
    stateChangerCleanColor(newArr);

    buttonDisabler(isDisabled);
  };

  const handleHistorycalCheck = (position) => () => {
    const updateCheckedState = historicalChecked.map((item, index) =>
      index === position ? !item : item
    );
    setHistorycalChecked(updateCheckedState);
  };

  const handleRealtimeTCheck = (position) => () => {
    const updateCheckedState = realtimeChecked.map((item, index) =>
      index === position ? !item : item
    );
    setRealtimeChecked(updateCheckedState);
  };

  const handleHistoricalToggle = (index) => () => {
    // setHistoricalPreview(userSetsHistorical[index].dataset_image);

    datasetItemColorChangerButtonsDisabler(
      userSetsHistorical,
      userSetsRealtime,
      index,
      setColorHistorical,
      setcolorRealtime,
      false,
      setButtonsDisabled,
      false
    );
    setTagToChange(userSetsHistorical[index]);
  };

  const handleRealtimeToggle = (index) => () => {
    // setRealtimePreview(userSetsRealtime[index].dataset_image);

    datasetItemColorChangerButtonsDisabler(
      userSetsRealtime,
      userSetsHistorical,
      index,
      setcolorRealtime,
      setColorHistorical,
      false,
      setButtonsDisabled,
      false
    );
    setTagToChange(userSetsRealtime[index]);
  };

  const canselToggler = () => {
    const arr = new Array(userSetsHistorical.length).fill("");
    setColorHistorical(arr);

    const newArr = new Array(userSetsRealtime.length).fill("");
    setcolorRealtime(newArr);

    setButtonsDisabled(true);
  };

  const checkboxDisabledToggler = () => {
    if (!checkboxDisabled) {
      const newHistoricalChecked = historicalChecked.map(() => false);
      setHistorycalChecked(newHistoricalChecked);
    }
    setcheckboxDisabled(!checkboxDisabled);
  };

  

  return (
    <Box
      sx={{
        paddingLeft: "15px",
        paddingRight: "15px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "flex-start",
      }}
    >
      <Paper sx={{ ...paperStyle }}>
        <h2 style={{ marginLeft: 30 }}>Historical</h2>
        <List sx={{ ...listStyle }}>
          {userSetsHistorical.map((value, index) => {
            const labelId = `checkbox-list-label-${value.id}`;
            const {
              date_time_start_diapason,
              date_time_end_diapason,
              created,
              updated,
              tag,
              comment,
            } = value;

            const dateStart = new Date(date_time_start_diapason).toLocaleString(); //.split('T')[0]
            const dateEnd = new Date(date_time_end_diapason).toLocaleString(); //.split('T')[0]
            const dateCreated = new Date(created).toLocaleString();
            const dateUpdated = new Date(updated).toLocaleString();

            return (
              <ListItem key={value.id} disablePadding>
                <Checkbox
                  onClick={handleHistorycalCheck(index)}
                  checked={historicalChecked[index]}
                  disabled={checkboxDisabled}
                  inputProps={{ "aria-labelledby": labelId }}
                />
                <ListItemButton role={undefined} onClick={handleHistoricalToggle(index)} dense>
                  <ListItemText
                    sx={{ color: `${colorHistorical[index]}` }}
                    id={labelId}
                    primary={value.name}
                  />
                </ListItemButton>
                <Tooltip
                  placement="right"
                  title={
                    <Typography paragraph={true}>
                      start diapason: {dateStart} <br />
                      end diapason: {dateEnd} <br />
                      created: {dateCreated} <br />
                      updated: {dateUpdated} <br />
                      comment: {comment} <br />
                      {tag.map((t) => {
                        return <li key={t.name_tag}>tag: {t.name_tag}</li>;
                      })}
                    </Typography>
                  }
                >
                  <IconButton aria-label="comments">
                    <CommentIcon />
                  </IconButton>
                </Tooltip>
              </ListItem>
            );
          })}
        </List>
      </Paper>
      <Paper sx={{ ...paperStyle }}>
        <h2 style={{ marginLeft: 30 }}>Realtime</h2>
        <List sx={{ ...listStyle }}>
          {userSetsRealtime.map((value, index) => {
            const labelId = `checkbox-list-label-${value.id}`;
            const {
              date_time_start_diapason,
              date_time_end_diapason,
              created,
              updated,
              tag,
              comment,
            } = value;

            const dateStart = new Date(date_time_start_diapason).toLocaleString();
            const dateEnd = new Date(date_time_end_diapason).toLocaleString();
            const dateCreated = new Date(created).toLocaleString();
            const dateUpdated = new Date(updated).toLocaleString();

            return (
              <ListItem key={value.id} disablePadding>
                <Checkbox
                  onClick={handleRealtimeTCheck(index)}
                  checked={realtimeChecked[index]}
                  inputProps={{ "aria-labelledby": labelId }}
                  disabled={checkboxDisabled}
                />
                <ListItemButton role={undefined} onClick={handleRealtimeToggle(index)} dense>
                  <ListItemText
                    sx={{ color: `${colorRealtime[index]}` }}
                    id={labelId}
                    primary={value.name}
                  />
                </ListItemButton>
                <Tooltip
                  placement="right"
                  title={
                    <Typography paragraph={true}>
                      start diapason: {dateStart} <br />
                      end diapason: {dateEnd} <br />
                      created: {dateCreated} <br />
                      updated: {dateUpdated} <br />
                      comment: {comment} <br />
                      {tag.map((t) => {
                        return <li key={t.name_tag}>tag: {t.name_tag}</li>;
                      })}
                    </Typography>
                  }
                >
                  <IconButton aria-label="comments">
                    <CommentIcon />
                  </IconButton>
                </Tooltip>
              </ListItem>
            );
          })}
        </List>
      </Paper>
      <Paper sx={{ ...paperStyle }}>
        <h2 style={{ marginLeft: 30 }}>Actions</h2>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <UserDatasetEditComponent
            disabled={buttonsDisabled}
            buttonStyle={buttonStyle}
            tagToChange={tagToChange}
          />

          <Button
            sx={{
              ...buttonStyle,
              backgroundColor: "#515962",
              "&:hover": { backgroundColor: "#393c40" },
            }}
            variant="contained"
            size="large"
            disabled={buttonsDisabled}
            onClick={checkboxDisabledToggler}
          >
            Delete dataset
          </Button>
          <Button
            sx={{ ...buttonStyle }}
            color="warning"
            variant="contained"
            size="large"
            disabled={buttonsDisabled}
            onClick={canselToggler}
          >
            Cancel
          </Button>
          <Button
            sx={{ ...buttonStyle }}
            color="error"
            variant="contained"
            size="large"
            disabled={buttonsDisabled}
          >
            Confirm
          </Button>
          <Button
            sx={{ ...buttonStyle }}
            color="info"
            variant="contained"
            size="large"
            disabled={buttonsDisabled}
          >
            Show selected dataset
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default User;
