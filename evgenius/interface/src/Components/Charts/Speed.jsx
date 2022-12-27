import React, { useState } from "react";
import { Chart as ChartJS, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import ChartStreaming from "chartjs-plugin-streaming";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import CoaterHeadRollsSpeed from "../TextProcessData/CoaterHeadRollsSpeed";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

ChartJS.register(ArcElement, ChartStreaming);

const style = {
  padding: "5px",
  marginX: "5px",
  minWidth: "214px",
  maxWidth: "332px",
  width: "20vw",
  backgroundColor: "f9f8f800",
  boxShadow: 2,
};

const Speed = ({ matchesDownMD, matchesDownLG, matchesDownXL }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const speed = useSelector((state) => state.ws.wsGetDashboardData.speed);
  const { speedEntry, speedProcess, speedExit } = speed;

  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  const gaugeChartText = {
    id: "gaugeChartText",
    afterDatasetsDraw(chartRef) {
      const {
        ctx,
        data,
        chartArea: { left, right },
      } = chartRef;

      ctx.save();

      const xCoords = chartRef.getDatasetMeta(0).data[0].x;
      const yCoords = chartRef.getDatasetMeta(0).data[0].y;
      const score = data.datasets[0].data[0];

      const textLabel = (text, x, y, fontSize, textBaseLine, textAlign) => {
        ctx.font = `${fontSize}px sans-serif`;
        ctx.fillStyle = "#666";
        ctx.textBaseLine = textBaseLine;
        ctx.textAlign = textAlign;
        ctx.fillText(text, x, y);
      };

      textLabel("0", left + 2, yCoords + 20, 20, "top", "left");
      textLabel("50", right, yCoords + 20, 20, "top", "right");
      textLabel(score, xCoords, yCoords, matchesDownLG ? 50 : 120, "bottom", "center");
    },
  };

  const dataEntry = {
    labels: [],
    datasets: [
      {
        data: [speedEntry, 50 - speedEntry],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(153, 102, 255, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(153, 102, 255, 1)"],
        borderWidth: 1,
        cutout: "90%",
        circumference: 180,
        rotation: -90,
      },
    ],
  };

  const dataProcess = {
    labels: [],
    datasets: [
      {
        data: [speedProcess, 50 - speedProcess],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(153, 102, 255, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(153, 102, 255, 1)"],
        borderWidth: 1,
        cutout: "90%",
        circumference: 180,
        rotation: -90,
      },
    ],
  };

  const dataExit = {
    labels: [],
    datasets: [
      {
        data: [speedExit, 50 - speedExit],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(153, 102, 255, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(153, 102, 255, 1)"],
        borderWidth: 1,
        cutout: "90%",
        circumference: 180,
        rotation: -90,
      },
    ],
  };

  const optionsEntry = {
    aspecrRatio: 1.5,
    plugins: {
      labels: {
        display: false,
      },
      legend: {
        display: false,
      },
      title: {
        font: {
          size: 34,
        },
        display: true,
        text: "Speed Entry",
      },
      tooltip: {
        enabled: false,
      },
      streaming: {
        duration: 20000,
      },
    },
  };

  const optionsProcess = {
    aspecrRatio: 1.5,
    plugins: {
      labels: {
        display: false,
      },
      legend: {
        display: false,
      },
      title: {
        font: {
          size: 34,
        },
        display: true,
        text: "Speed Process",
      },
      tooltip: {
        enabled: false,
      },
      streaming: {
        duration: 20000,
      },
    },
  };

  const optionsExit = {
    aspecrRatio: 1.5,
    plugins: {
      labels: {
        display: false,
      },
      legend: {
        display: false,
      },
      title: {
        font: {
          size: 34,
        },
        display: true,
        text: "Speed Exit",
      },
      tooltip: {
        enabled: false,
      },
      streaming: {
        duration: 20000,
      },
    },
  };

  const SpeedDialog = () => (
    <Dialog
      open={dialogOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="md"
    >
      {/* <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle> */}
      <DialogContent>
        {
          <CoaterHeadRollsSpeed matchesDownXL={false} />
        }
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );

  const ButtonsBlockSpeed = () => (
    <Box
      mt={1}
      display={"flex"}
      minWidth={"24vw"}
      height={matchesDownMD ? "40px" : "226px"}
      justifyContent={"space-between"}
      flexDirection={matchesDownMD ? "row" : "column"}
    >
      <Button
        variant="contained"
        sx={{ marginX: "2px", width: "100%" }}
        size={matchesDownMD ? "small" : "medium"}
        onClick={handleClickOpen}
      >
        Coater rolls
      </Button>
      <Button
        variant="contained"
        sx={{ marginX: "2px", width: "100%" }}
        size={matchesDownMD ? "small" : "medium"}
        onClick={handleClickOpen}
      >
        Pretritment Temperature
      </Button>
      <Button
        variant="contained"
        sx={{ marginX: "2px", width: "100%" }}
        size={matchesDownMD ? "small" : "medium"}
        onClick={handleClickOpen}
      >
        Pretritment Motors
      </Button>
      <Button
        variant="contained"
        sx={{ marginX: "2px", width: "100%" }}
        size={matchesDownMD ? "small" : "medium"}
        onClick={handleClickOpen}
      >
        Pretritment Temperature
      </Button>
      <Button
        variant="contained"
        sx={{ marginX: "2px", width: "100%" }}
        size={matchesDownMD ? "small" : "medium"}
        onClick={handleClickOpen}
      >
        Pretritment Motors
      </Button>
    </Box>
  );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          width: "100vw",
        }}
      >
        <Box sx={{ ...style }}>
          <Doughnut options={optionsEntry} data={dataEntry} plugins={[gaugeChartText]} />
        </Box>
        <Box sx={{ ...style }}>
          <Doughnut options={optionsProcess} data={dataProcess} plugins={[gaugeChartText]} />
        </Box>
        <Box sx={{ ...style }}>
          <Doughnut options={optionsExit} data={dataExit} plugins={[gaugeChartText]} />
        </Box>
        {matchesDownLG ? (
          <ButtonsBlockSpeed />
        ) : (
          <CoaterHeadRollsSpeed matchesDownXL={matchesDownXL} />
        )}
      </Box>
      <SpeedDialog />
    </>
  );
};

export default Speed;
