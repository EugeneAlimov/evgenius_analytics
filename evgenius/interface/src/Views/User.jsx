import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDatasetCollection, tokenUpdater } from "../api/userApi";
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
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import CommentIcon from "@mui/icons-material/Comment";
import Grid2 from "@mui/material/Unstable_Grid2";
import { logout } from "../api/userApi";
import UserDatasetEditComponent from "../Components/UI/Dialog/UserDatasetEditComponent";

const User = () => {
  const refreshToken = useSelector((state) => state.login.token.refresh);
  const userDataset = useSelector((state) => state.login.userDatasets);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userSetsHistorical, setUserSetsHistorical] = useState([]);
  const [userSetsRealtime, setUserSetsRealtime] = useState([]);
  const [historicalChecked, setHistorycalChecked] = useState([]);
  const [realtimeChecked, setRealtimeChecked] = useState([]);
  const [colorHistorical, setColorHistorical] = useState(["#1976d2"]);
  const [colorRealtime, setcolorRealtime] = useState(["#1976d2"]);
  const [historicalPreview, setHistoricalPreview] = useState();
  const [realtimelPreview, setRealtimePreview] = useState();

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
    if (!userDataset) return;
    const historical = userDataset.filter((set) => set.is_historical === true);
    const realtime = userDataset.filter((set) => set.is_historical === false);
    setUserSetsHistorical(historical);
    setUserSetsRealtime(realtime);
  }, [userDataset]);

  useEffect(() => {
    if (!userSetsHistorical.length) {
      return;
    }
    setHistoricalPreview(userSetsHistorical[0].dataset_image);
  }, [userSetsHistorical]);

  useEffect(() => {
    if (!userSetsRealtime.length) {
      return;
    }
    setRealtimePreview(userSetsRealtime[0].dataset_image);
  }, [userSetsRealtime]);

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
    setHistoricalPreview(userSetsHistorical[index].dataset_image);
    const arr = new Array(userSetsHistorical.length).fill("");
    arr[index] = "#1976d2";
    setColorHistorical(arr);
  };

  const handleRealtimeToggle = (index) => () => {
    setRealtimePreview(userSetsRealtime[index].dataset_image);
    const arr = new Array(userSetsRealtime.length).fill("");
    arr[index] = "#1976d2";
    setcolorRealtime(arr);
  };

  return (
    <Grid2 container sx={{}} spacing={{ xs: 2 }}>
      <Grid2 style={{ display: "flex" }} item xs={8}>
        <Paper sx={{ marginLeft: "30px", width: "400px", height: "380px" }}>
          <h2 style={{ marginLeft: 30 }}>Historical</h2>
          <List
            sx={{
              mt: 2,
              ml: 2,
              boxShadow: 5,
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
            }}
          >
            {userSetsHistorical.map((value, index) => {
              const labelId = `checkbox-list-label-${value.id}`;
              const { date_time_start_diapason, date_time_end_diapason, created, updated, tag } =
                value;

              const dateStart = new Date(date_time_start_diapason).toLocaleString(); //.split('T')[0]
              const dateEnd = new Date(date_time_end_diapason).toLocaleString(); //.split('T')[0]
              const dateCreated = new Date(created).toLocaleString();
              const dateUpdated = new Date(updated).toLocaleString();

              return (
                <ListItem key={value.id} disablePadding>
                  <Checkbox
                    onClick={handleHistorycalCheck(index)}
                    checked={historicalChecked[index]}
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
                        {tag.map((t) => {
                          return <li key={t}>tag: {t}</li>;
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
          <Button sx={{ m: 2, width: "360px", height: "50px" }} variant="contained" size="large">
            Show
          </Button>
        </Paper>
        <UserDatasetEditComponent />
      </Grid2>
      <Grid2 item md={4}>
        <Card sx={{ p: 2, mt: 2, boxShadow: 5, width: 400, height: 300 }}>
          <img src={historicalPreview} alt="img" width={"400px"} height={"300px"}></img>
        </Card>
      </Grid2>
      <Grid2 item md={8}>
        <Paper sx={{ marginLeft: "30px", width: "400px", height: "380px" }}>
          <h2 style={{ marginLeft: 30 }}>Realtime</h2>
          <List
            sx={{
              mt: 2,
              ml: 2,
              boxShadow: 5,
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
            }}
          >
            {userSetsRealtime.map((value, index) => {
              const labelId = `checkbox-list-label-${value.id}`;
              const { date_time_start_diapason, date_time_end_diapason, created, updated } = value;

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
                        start diapason: {dateStart} <br /> end diapason: {dateEnd} <br /> created:{" "}
                        {dateCreated} <br /> updated: {dateUpdated}
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
          <Button sx={{ m: 2, width: "360px", height: "50px" }} variant="contained" size="large">
            Show
          </Button>
        </Paper>
      </Grid2>
      <Grid2 item md={4}>
        <Card sx={{ p: 2, mt: 2, boxShadow: 5, width: 400, height: 300 }}>
          <img src={realtimelPreview} alt="img" width={"400px"} height={"300px"}></img>
        </Card>
      </Grid2>
    </Grid2>
  );
};

export default User;
