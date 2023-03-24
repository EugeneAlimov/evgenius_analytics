import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dashDataLoader } from "../Redux/wsSlice";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Ovens from "../Components/Charts/Ovens";
import Stack from "@mui/material/Stack";
import Speed from "../Components/Charts/Speed";
import Alcaly from "../Components/Alcaly";
import Box from "@mui/material/Box";

import Parameters from "../Components/Parameters";
import CoaterHeadRollsSpeed from "../Components/TextProcessData/CoaterHeadRollsSpeed";

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
    const socket = new WebSocket(`ws://192.168.8.167:8001/ws/graph/`);

    socket.onmessage = function (e) {
      const dashboardData = JSON.parse(e.data);

      console.log('dashboardData ', dashboardData);

      dispatch(dashDataLoader(dashboardData));
    };
  }, [dispatch]);

  return (
    <Stack paddingBottom={"10px"} width={"100%"} flexDirection={"column"} spacing={3}>
      <Box
        sx={{
          // paddingLeft: "15px",
          // paddingRight: "15px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Speed
          matchesDownMD={matchesDownMD}
          matchesDownLG={matchesDownLG}
          matchesDownXL={matchesDownXL}
        />
        <Parameters />
      </Box>
      <Ovens matchesDownLG={matchesDownXL} />
      <Box
        sx={{
          paddingLeft: "15px",
          paddingRight: "15px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Alcaly matchesDownLG={matchesDownLG} />
        <CoaterHeadRollsSpeed matchesDownLG={false} />
      </Box>
    </Stack>
  );
};

export default CommonDashBoard;
