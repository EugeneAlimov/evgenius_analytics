import React, {
   useRef,
   useMemo,
   useEffect,
   useState
} from "react";
import * as zoom from 'chartjs-plugin-zoom'
import zoomPlugin from 'chartjs-plugin-zoom';

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
  DecimationAlgorithm,
} from "chart.js";
import { annotationLine } from "../Libs/chartJsPlugins";
import { getElementAtEvent, Line } from "react-chartjs-2";
import { faker } from '@faker-js/faker'
import { Paper } from "@mui/material";

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
  annotationLine,
  zoom,
  zoomPlugin,
  Decimation,
);

const options = {
  interaction: {
    mode: "nearest",
    axis: "x",
    intersect: false
  },
  parsing: false,
  animation: false,
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "Chart.js Line Chart - Multi Axis"
      },
    annotationLine,
    zoom: {
      pan: {
        enabled: true,
        mode: 'xy',
        overScaleMode: 'xy',
        },
      zoom: {
        wheel: {
          enabled: true,
          },
        mode: 'xy',
        overScaleMode: 'xy',
        },
      },
      decimation: {
        enabled: true,
        // algorithm: "lttb",
        // samples: 1300,
        algorithm: "min-max",
        },
    },
   scales: {
    x: {
      type: "linear",
    },
    // y: {
    //   type: "linear",
    //   display: true,
    //   position: "left",
    //   backgroundColor: "rgba(0, 63, 92, 0.5)",
    //   grid: {
    //     drawOnChartArea: true
    //     }
    //   },
      "Large Dataset": {
      type: "linear",
      display: true,
      position: "left",
      backgroundColor: "rgba(255, 166, 0, 0.5)",
      grid: {
        drawOnChartArea: false
        }
      },
      "Large Dataset": {
      type: "linear",
      display: true,
      position: "left",
      backgroundColor: "rgba(160, 81, 149, 0.7)",
      grid: {
        drawOnChartArea: false
        }
      },
    //  y3: {
    //    type: "linear",
    //    display: true,
    //    position: "left",
    //    backgroundColor: "rgba(17, 138, 178, 0.5)",
    //    grid: {
    //      drawOnChartArea: false
    //    }
    //  },
   }
 };


//  const labels = []

//  for (let i = 1; i <= 10000; i++) {
//   labels.push(i)
//  }

//  const data111 = {
//    labels,
//    datasets: [
//      {
//        label: "Dataset 1 ",
//        borderWidth: 1,
//        radius: 0,
//        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//        borderColor: "rgba(0, 63, 92, 0.5)",
//        backgroundColor: "rgba(0, 63, 92, 0.7)",
//        yAxisID: "y"
//      },
//      {
//        label: "Dataset 2",
//        borderWidth: 1,
//        radius: 0,
//        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//        borderColor: "rgba(255, 166, 0, 0.8)",
//        backgroundColor: "rgba(255, 166, 0, 0.9)",
//        yAxisID: "y1"
//      },
//      {
//        label: "Dataset 3",
//        borderWidth: 1,
//        radius: 0,
//        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//        borderColor: "rgba(160, 81, 149, 0.7)",
//        backgroundColor: "rgba(160, 81, 149, 0.9)",
//        yAxisID: "y2"
//      },
//      {
//        label: "Dataset 4",
//        borderWidth: 1,
//        radius: 0,
//        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//        borderColor: "rgba(17, 138, 178, 0.5)",
//        backgroundColor: "rgba(17, 138, 178, 0.7)",
//        yAxisID: "y3"
//      },
//    ]
//  };
function valueOrDefault(value, defaultValue) {
  return value === "undefined" ? defaultValue : value;
}

var _seed = 10;

function rand(min, max) {
  min = valueOrDefault(min, 0);
  max = valueOrDefault(max, 0);
  _seed = (_seed * 9301 + 49297) % 233280;
  return min + (_seed / 233280) * (max - min);
}


const Settings = () => {

  const chartRef = useRef()
  const [numPoints, setNumPoints] = React.useState(20);


  const data = useMemo(() => {
    const pointData = [];
    for (let i = 0; i < numPoints; ++i) {
      // Most data will be in the range [0, 20) but some rare data will be in the range [0, 100)
      const max = Math.random() < 0.001 ? 100 : 20;
      pointData.push({ x: i, y: rand(0, max) });
    }

    const pointData1 = [];
    for (let i = 0; i < numPoints; ++i) {
      // Most data will be in the range [0, 20) but some rare data will be in the range [0, 100)
      const max = Math.random() < 0.001 ? 100 : 20;
      pointData1.push({ x: i, y: rand(0, max) });
    }

    return {
      datasets: [
        {
          // id: 1,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          borderWidth: 1,
          data: pointData,
          label: "Large Dataset",
          radius: 0,
          yAxisID: 'Large Dataset',
        },
        {
          // id: 2,
          borderColor: "rgb(205, 199, 12)",
          backgroundColor: "rgba(205, 199, 12, 0.5)",
          borderWidth: 1,
          data: pointData1,
          label: "Large Dataset 1",
          radius: 0,
          yAxisID: 'Large Dataset 1',
        }

      ]
    }
  }, [numPoints])

   const onClick = (event) => {
     const elementArray = getElementAtEvent(chartRef.current, event)
     const getdatasetAndElementIndexes = (elementArray) => {
       let datasetIndex = null
       let elementIndex = null
       if (elementArray.length > 0) {
         datasetIndex = getElementAtEvent(chartRef.current, event)[0].datasetIndex
         elementIndex = getElementAtEvent(chartRef.current, event)[0].index
         return [datasetIndex, elementIndex]
       }
       return [datasetIndex, elementIndex]
     }

     const [datasetIndex, elementIndex] = getdatasetAndElementIndexes(elementArray)
       if (datasetIndex !== null && elementIndex !== null) {
         console.log('datasetIndex: ', datasetIndex, 'elementIndex: ', elementIndex);
       }
// console.log(chartRef);


      //  console.log(chartRef.current.scales);
      //  console.table(chartRef.current.chartArea);
       const { canvas } = chartRef.current
       let rect = canvas.getBoundingClientRect()
       const x = event.clientX - rect.left
       const y = event.clientY - rect.top
 }

   const tableDataCreating = (currentArr) => {
     const newTableArr = currentArr.map((el) => {
       const min = arr => arr.reduce((x, y) => Math.min(x, y))
       const max = arr => arr.reduce((x, y) => Math.max(x, y))
       const summ = arr => arr.reduce((x, y) => {return x + y}, 0)

       return {
         'name': el.dataset.label,
         'current': el.raw,
         'time': el.label,
         'minimum': min(el.dataset.data),
         'maximum': max(el.dataset.data),
         'average': summ(el.dataset.data) / el.dataset.data.length,
       }
     })
      //  setTableData(newTableArr)

   }

   const annotationLine = {
     id: 'annotationLine',
     beforeDraw: (chartRef) => {
       if (chartRef.tooltip._active && chartRef.tooltip._active.length) {
         const ctx = chartRef.ctx
         const { top, bottom } = chartRef.chartArea        
         ctx.save()
         const activePoint = chartRef.tooltip._active[0]

         ctx.beginPath()
         ctx.setLineDash([5, 7])
         ctx.moveTo(activePoint.element.x, top)
         ctx.lineTo(activePoint.element.x, bottom)
         ctx.lineWidth = 2
         ctx.strokeStyle = 'rgba(255,99,132, 1)'
         ctx.stroke()
         ctx.restore()

         tableDataCreating(chartRef.tooltip.dataPoints)
       }
     }
   }
  //  console.log('Settings data: ', data);
  //  console.log('Settings options: ', options);

  return(
    <>
      <Paper 
        style={{
          backgroundColor: '#f9f8f8',
          maxWidth: 1600,
          minWidth: 800,
          margin: 20,
          padding: 15
        }}
      >
        <Line
          data={data}
          options={options}
          onClick={onClick}
          ref={chartRef}
          plugins={[annotationLine, zoomPlugin, Decimation]}
        />
      </Paper>
    </>
  )   
}

export default Settings
