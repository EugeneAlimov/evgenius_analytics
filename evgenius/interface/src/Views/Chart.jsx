import React, { useRef, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import { annotationLine } from "../Libs/chartJsPlugins";

import "chartjs-adapter-luxon";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  TimeSeriesScale,
  Decimation,
} from "chart.js";
import {
  // getElementAtEvent,
  Line,
} from "react-chartjs-2";
import * as zoom from "chartjs-plugin-zoom";
import zoomPlugin from "chartjs-plugin-zoom";
import { Button } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  TimeSeriesScale,
  Decimation
);

const Chart = ({ data }) => {
  const chartRef = useRef();

  const [tableData, setTableData] = useState([]);

  // const onClick = (event) => {
  //   const elementArray = getElementAtEvent(chartRef.current, event);
  //   const getdatasetAndElementIndexes = (elementArray) => {
  //     let datasetIndex = null;
  //     let elementIndex = null;
  //     if (elementArray.length > 0) {
  //       datasetIndex = getElementAtEvent(chartRef.current, event)[0].datasetIndex;
  //       elementIndex = getElementAtEvent(chartRef.current, event)[0].index;
  //       return [datasetIndex, elementIndex];
  //     }
  //     return [datasetIndex, elementIndex];
  //   };

  // const [datasetIndex, elementIndex] = getdatasetAndElementIndexes(elementArray);
  // if (datasetIndex !== null && elementIndex !== null) {
  //   console.log("datasetIndex: ", datasetIndex, "elementIndex: ", elementIndex);
  // }

  //   console.log(chartRef.current.scales);
  //   console.table(chartRef.current.chartArea);
  //   const { canvas } = chartRef.current;
  //   let rect = canvas.getBoundingClientRect();
  //   const x = event.clientX - rect.left;
  //   const y = event.clientY - rect.top;
  // };

  const tableDataCreating = (currentArr) => {
    const newTableArr = currentArr.map((el) => {
      const yArr = el.dataset.data.map((el) => {
        return el.y;
      });

      const min = (arr) => arr.reduce((x, y) => Math.min(x, y));
      const max = (arr) => arr.reduce((x, y) => Math.max(x, y));
      const summ = (arr) =>
        arr.reduce((x, y) => {
          return x + y;
        }, 0);
      return {
        name: el.dataset.label,
        current: el.raw.y,
        time: el.label,
        minimum: min(yArr),
        maximum: max(yArr),
        average: Math.round10(summ(yArr) / el.dataset.data.length, -2),
      };
    });
    setTableData(newTableArr);
  };

  const annotationLine = {
    id: "annotationLine",
    beforeDraw: (chartRef) => {
      if (chartRef.tooltip._active && chartRef.tooltip._active.length) {
        const ctx = chartRef.ctx;
        const { top, bottom } = chartRef.chartArea;
        ctx.save();
        const activePoint = chartRef.tooltip._active[0];

        ctx.beginPath();
        ctx.setLineDash([5, 7]);
        ctx.moveTo(activePoint.element.x, top);
        ctx.lineTo(activePoint.element.x, bottom);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "rgba(255,99,132, 1)";
        ctx.stroke();
        ctx.restore();
        tableDataCreating(chartRef.tooltip.dataPoints);
      }
    },
  };

  const resetChartZoom = () => {
    chartRef.current.resetZoom();
  };

  return (
    <>
      <Paper
        elevation={10}
        style={{
          backgroundColor: "#f9f8f8",
          maxWidth: 1000,
          minWidth: 800,
          margin: 20,
          padding: 15,
        }}
      >
        <Button variant="contained" size="small" onClick={resetChartZoom}>
          Reset zoom
        </Button>
        <Line
          data={data.data}
          options={data.options}
          // onClick={onClick}
          ref={chartRef}
          plugins={[annotationLine, zoomPlugin, zoom, Decimation]}
        />

        <TableContainer component={Paper}>
          <Table size="small" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ width: "40px" }} align="left">
                  Name
                </TableCell>
                <TableCell style={{ width: "40px" }} align="right">
                  Current
                </TableCell>
                <TableCell style={{ width: "40px" }} align="right">
                  time
                </TableCell>
                <TableCell style={{ width: "40px" }} align="right">
                  Minimum
                </TableCell>
                <TableCell style={{ width: "40px" }} align="right">
                  Averrage
                </TableCell>
                <TableCell style={{ width: "40px" }} align="right">
                  Maximum
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row, index) => (
                <TableRow key={index} style={{ width: 40 }}>
                  <TableCell
                    style={{ width: "40px" }}
                    variant="string"
                    align="left"
                    component="th"
                    scope="row"
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    style={{ width: "40px" }}
                    variant="string"
                    align="right"
                    component="th"
                    scope="row"
                  >
                    {row.current}
                  </TableCell>
                  <TableCell
                    style={{ width: "40px" }}
                    variant="string"
                    align="right"
                    component="th"
                    scope="row"
                  >
                    {row.time}
                  </TableCell>
                  <TableCell
                    style={{ width: "40px" }}
                    variant="string"
                    align="right"
                    component="th"
                    scope="row"
                  >
                    {row.minimum}
                  </TableCell>
                  <TableCell
                    style={{ width: "40px" }}
                    variant="string"
                    align="right"
                    component="th"
                    scope="row"
                  >
                    {row.maximum}
                  </TableCell>
                  <TableCell
                    style={{ width: "40px" }}
                    variant="string"
                    align="right"
                    component="th"
                    scope="row"
                  >
                    {row.average}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default Chart;
