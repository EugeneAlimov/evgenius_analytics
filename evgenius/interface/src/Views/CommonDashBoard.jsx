import React, { useEffect } from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { dashDataLoader } from "../Redux/wsSlice";
import Ovens from "../Components/Charts/Ovens";
import { Container, Stack } from "@mui/material";
import Speed from "../Components/Charts/Speed";

const CommonDashBoard = () => {
  const dispatch = useDispatch();
  const DashValue = useSelector((state) => state.ws.wsGetDashboardData);

  useEffect(() => {
    const socket = new WebSocket(`ws://127.0.0.1:8000/ws/graph/`);

    socket.onmessage = function (e) {
      const dashboardData = JSON.parse(e.data);
      dispatch(dashDataLoader(dashboardData));
    };
  }, [dispatch]);

  // const speedRequest = () => {
  //   let speed = [];
  //   const URL = "http://192.168.8.167:8086/";
  //   const TOKEN =
  //     "AYxGUOAj0Ho1vqmyMeQDpHPaSPYNcTZznrQ9bDJCvNM9fvF6tAepPH6jyxuTaalmbqgZKe98efDVoCFAyu6kJw==";
  //   const ORG = "evgenius";
  //   const BUCKET = "Line";
  //   const MEASUREMENT = "Line";
  //   const queryApi = new InfluxDB({ url: URL, token: TOKEN }).getQueryApi(ORG);
  //   const fluxQuery = `from(bucket: "${BUCKET}")
  //               |> range(start: -600ms, stop: -100ms)
  //               |> filter(fn: (r) => r._measurement == "${MEASUREMENT}")
  //               |> filter(fn: (r) => ${speedQuery})
  //               `;
  //   const fluxObserver = {
  //     next(row, tableMeta) {
  //       const o = tableMeta.toObject(row);
  //       speed.push(Math.round10(o._value, 0));
  //     },
  //     error(error) {
  //       console.error(error);
  //       console.log("\nFinished ERROR");
  //     },
  //     complete() {
  //       // console.log(speed);
  //     },
  //   };
  //   /** Execute a query and receive line table metadata and rows. */
  //   queryApi.queryRows(fluxQuery, fluxObserver);
  //   return speed;
  // };

  return (
    <Stack flexDirection={'column'} spacing={3} >
      <Speed />
      <Ovens />
    </Stack>
  );
};

export default CommonDashBoard;
