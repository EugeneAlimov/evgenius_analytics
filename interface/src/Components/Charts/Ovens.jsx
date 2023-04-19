import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import "chartjs-adapter-luxon";
import ChartStreaming from "chartjs-plugin-streaming";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartStreaming
);

const primeOptions = {
  animation: false,
  stacked: false,
  responsive: true,
  scales: {
    xAxes: {
      type: "realtime",
      distribution: "linear",
      realtime: {
        duration: 120000,
        delay: 2500,
        refresh: 1000,
        frameRate: 60,
      },
    },
    y: {
      min: 0,
      max: 320,
    },
  },
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Prime oven",
    },
    streaming: {
      duration: 20000,
    },
  },
};

const finishOptions = {
  animation: false,
  stacked: false,
  responsive: true,
  scales: {
    xAxes: {
      type: "realtime",
      distribution: "linear",
      realtime: {
        duration: 600000,
        delay: 2500,
        refresh: 1000,
        frameRate: 60,
      },
    },
    y: {
      min: 0,
      max: 320,
    },
  },
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Finish oven",
    },
    streaming: {
      duration: 50000,
    },
  },
};

const dataPrime = {
  datasets: [
    {
      label: "Zone1",
      borderWidth: 1,
      data: [],
      radius: 0,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Zone2",
      data: [],
      borderWidth: 1,
      radius: 0,
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Zone3",
      data: [],
      borderWidth: 1,
      radius: 0,
      borderColor: "rgb(153, 62, 235)",
      backgroundColor: "rgba(153, 62, 235, 0.5)",
    },
  ],
};

const dataFinish = {
  datasets: [
    {
      label: "Zone1",
      borderWidth: 1,
      data: [],
      radius: 0,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Zone2",
      data: [],
      borderWidth: 1,
      radius: 0,
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Zone3",
      data: [],
      borderWidth: 1,
      radius: 0,
      borderColor: "rgb(153, 62, 235)",
      backgroundColor: "rgba(153, 62, 235, 0.5)",
    },
  ],
};

const Ovens = ({ matchesDownLG }) => {
  const style = {
    width: matchesDownLG ? "95vw" : "48.5vw",
    marginTop: "5px",
    marginBottom: "5px",
    backgroundColor: "f9f8f800",
  };

  const ovensTemperature = useSelector((state) => state.ws.wsGetDashboardData);

  const temperaturePrime = [
    Math.round10(ovensTemperature["PO_Zone 1 Pyrometer - RTO_TO_LINE"]),
    Math.round10(ovensTemperature["PO_Zone 2 Pyrometer - RTO_TO_LINE"]),
    Math.round10(ovensTemperature["PO_Zone 3 Pyrometer - RTO_TO_LINE"]),
  ];

  const temperatureFinish = [
    Math.round10(ovensTemperature["FO_Zone 1 Pyrometer - RTO_TO_LINE"]),
    Math.round10(ovensTemperature["FO_Zone 2 Pyrometer - RTO_TO_LINE"]),
    Math.round10(ovensTemperature["FO_Zone 3 Pyrometer - RTO_TO_LINE"]),
  ];

  useEffect(() => {
    const time = Date.now();
    dataPrime.datasets.forEach((element, index) => {
      element.data.push({
        x: time,
        y: temperaturePrime[index],
      });
    });

    dataFinish.datasets.forEach((element, index) => {
      element.data.push({
        x: time,
        y: temperatureFinish[index],
      });
    });
  });

  return (
    <Stack
      direction={matchesDownLG ? "column" : "row"}
      sx={{
        justifyContent: matchesDownLG ? "center" : "space-between",
        alignItems: "center",
        paddingLeft: "15px",
        paddingRight: "15px",
      }}

      // spacing={2}
    >
      <Box boxShadow={2} sx={{ ...style }}>
        <Line height={90} options={primeOptions} data={dataPrime} />
      </Box>
      <Box boxShadow={2} sx={{ ...style }}>
        <Line height={90} options={finishOptions} data={dataFinish} />
      </Box>
    </Stack>
  );
};

export default Ovens;
