import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dashDataLoader } from "../Redux/wsSlice";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Ovens from "../Components/Charts/Ovens";
import Stack from "@mui/material/Stack";
import Speed from "../Components/Charts/Speed";

const CommonDashBoard = () => {
  const theme = useTheme();
  const matchesDownMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesDownLG = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesDownXL = useMediaQuery(theme.breakpoints.down("xl"));

  console.log(theme.breakpoints);
  const dispatch = useDispatch();

  // xs: 0
  // sm: 600
  // md: 900
  // lg: 1200
  // xl: 1536

  useEffect(() => {
    const socket = new WebSocket(`ws://192.168.8.167:8000/ws/graph/`);

    socket.onmessage = function (e) {
      const dashboardData = JSON.parse(e.data);
      dispatch(dashDataLoader(dashboardData));
    };
  }, [dispatch]);

  return (
    <Stack width={"100vw"} flexDirection={"column"} spacing={3}>
      <Speed matchesDownMD={matchesDownMD} matchesDownLG={matchesDownLG} matchesDownXL={matchesDownXL} />
      <Ovens matchesDownLG={matchesDownLG} />
    </Stack>
  );
};

export default CommonDashBoard;
