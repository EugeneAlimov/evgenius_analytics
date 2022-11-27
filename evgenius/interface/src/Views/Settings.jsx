import React, {
  // useRef,
  // useEffect,
  // useState
} from "react";
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import FileUpload from "../Components/UI/FileUpload/FileUpload";

// // import influxRequest from "../api/InfluxAPI";
// // import { useDispatch, useSelector } from 'react-redux';

// import 'chartjs-adapter-luxon';
// // import ChartStreaming from 'chartjs-plugin-streaming';
// // import { format } from 'date-fns'
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   TimeScale,
//   TimeSeriesScale,
// } from "chart.js";
// import { annotationLine } from "../Libs/chartJsPlugins";
// import { getElementAtEvent, Line } from "react-chartjs-2";
// import { faker } from '@faker-js/faker'
// // import { zoom, zoomScale } from "chartjs-plugin-zoom";
// import * as zoom from 'chartjs-plugin-zoom'
// import zoomPlugin from 'chartjs-plugin-zoom';



// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   TimeScale,
//   TimeSeriesScale,
//   annotationLine,
//   zoom,
//   zoomPlugin,
// );

// // const actions = [
// //   {
// //     name: 'Randomize',
// //     handler(chart) {
// //       chart.data.datasets.forEach(dataset => {
// //         dataset.data.forEach(dataObj => {
// //           dataObj.y = Utils.rand(-100, 100);
// //         });
// //       });
// //       chart.update();
// //     }
// //   },
// //   {
// //     name: 'Add Dataset',
// //     handler(chart) {
// //       const datasets = chart.data.datasets;
// //       const dsColor = Utils.namedColor(datasets.length);
// //       const newDataset = {
// //         label: 'Dataset ' + (datasets.length + 1),
// //         backgroundColor: Utils.transparentize(dsColor, 0.5),
// //         borderColor: dsColor,
// //         data: []
// //       };
// //       datasets.push(newDataset);
// //       chart.update();
// //     }
// //   },
// //   {
// //     name: 'Add Data',
// //     handler(chart) {
// //       onRefresh(chart);
// //       chart.update();
// //     }
// //   },
// //   {
// //     name: 'Remove Dataset',
// //     handler(chart) {
// //       chart.data.datasets.pop();
// //       chart.update();
// //     }
// //   },
// //   {
// //     name: 'Remove Data',
// //     handler(chart) {
// //       chart.data.datasets.forEach(dataset => {
// //         dataset.data.shift();
// //       });
// //       chart.update();
// //     }
// //   }
// // ];

// const options = {
//   responsive: true,
//   interaction: {
//     mode: "index",
//     intersect: false
//   },
//   stacked: true,
//   plugins: {
//     title: {
//       // display: true,
//       text: "Chart.js Line Chart - Multi Axis"
//     },
//     annotationLine,
//     zoom: {
//         zoom: {
//           wheel: {
//             enabled: true,
//           },
//           pinch: {
//             enabled: true,
//           },
//           drag: {
//             enabled: true,
//           },
//           // pan: {
//           //   enabled: true,
//           //   mode: 'x',
//           // },
//         mode: 'xy',
//       },
//     },
//   },
//   scales: {
//     y1: {
//       type: "linear",
//       display: true,
//       position: "left",
//       backgroundColor: "rgba(0, 63, 92, 0.5)",
//       grid: {
//         drawOnChartArea: true
//       }

//     },
//     y2: {
//       type: "linear",
//       display: true,
//       position: "left",
//       backgroundColor: "rgba(255, 166, 0, 0.5)",
//       grid: {
//         drawOnChartArea: false
//       }
//     },
//     y3: {
//       type: "linear",
//       display: true,
//       position: "left",
//       backgroundColor: "rgba(160, 81, 149, 0.7)",
//       grid: {
//         drawOnChartArea: false
//       }
//     },
//     y4: {
//       type: "linear",
//       display: true,
//       position: "left",
//       backgroundColor: "rgba(17, 138, 178, 0.5)",
//       grid: {
//         drawOnChartArea: false
//       }
//     },
//     // y5: {
//     //   type: "linear",
//     //   display: true,
//     //   position: "left",
//     //   backgroundColor: "rgba(255, 99, 30, 0.5)",
//     //   grid: {
//     //     drawOnChartArea: false
//     //   }
//     // },
//     // y6: {
//     //   type: "linear",
//     //   display: true,
//     //   position: "right",
//     //   backgroundColor: "rgba(249, 248, 83, 1.0)",
//     //   grid: {
//     //     drawOnChartArea: false
//     //   }
//     // },
//     // y7: {
//     //   type: "linear",
//     //   display: true,
//     //   position: "right",
//     //   backgroundColor: "rgba(53, 82, 235, 0.5)",
//     //   grid: {
//     //     drawOnChartArea: false
//     //   }
//     // },
//     // y8: {
//     //   type: "linear",
//     //   display: true,
//     //   position: "right",
//     //   backgroundColor: "rgba(78, 155, 30, 0.5)",
//     //   grid: {
//     //     drawOnChartArea: false
//     //   }
//     // },
//     // y9: {
//     //   type: "linear",
//     //   display: true,
//     //   position: "right",
//     //   backgroundColor: "rgba(153, 32, 135, 0.5)",
//     //   grid: {
//     //     drawOnChartArea: false
//     //   }
//     // },
//     // y10: {
//     //   type: "linear",
//     //   display: true,
//     //   position: "right",
//     //   backgroundColor: "rgba(138, 155, 110, 1.0)",
//     //   grid: {
//     //     drawOnChartArea: false
//     //   }
//     // },
//   }
// };

// const labels = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "December",
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "December",
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "December",
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "December",
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "December",
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "December",
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "December",
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "December",
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "December",
//   "January",
//   "February",
// ]

// const data = {
//   labels,
//   datasets: [
//     {
//       label: "Dataset 1 ",
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: "rgba(0, 63, 92, 0.5)",
//       backgroundColor: "rgba(0, 63, 92, 0.7)",
//       yAxisID: "y1"
//     },
//     {
//       label: "Dataset 2",
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: "rgba(255, 166, 0, 0.8)",
//       backgroundColor: "rgba(255, 166, 0, 0.9)",
//       yAxisID: "y2"
//     },
//     {
//       label: "Dataset 3",
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: "rgba(160, 81, 149, 0.7)",
//       backgroundColor: "rgba(160, 81, 149, 0.9)",
//       yAxisID: "y3"
//     },
//     {
//       label: "Dataset 4",
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: "rgba(17, 138, 178, 0.5)",
//       backgroundColor: "rgba(17, 138, 178, 0.7)",
//       yAxisID: "y4"
//     },
//     // {
//     //   label: "Dataset 5",
//     //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//     //   borderColor: "rgba(255, 99, 30, 0.5)",
//     //   backgroundColor: "rgba(255, 99, 30, 0.7)",
//     //   yAxisID: "y5"
//     // },
//     // {
//     //   label: "Dataset 6",
//     //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//     //   borderColor: "rgba(249, 248, 83, 1.0)",
//     //   backgroundColor: "rgba(249, 248, 83, 0.7)",
//     //   yAxisID: "y6"
//     // },
//     // {
//     //   label: "Dataset 7",
//     //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//     //   borderColor: "rgba(53, 82, 235, 0.5)",
//     //   backgroundColor: "rgba(53, 82, 235, 0.7)",
//     //   yAxisID: "y7"
//     // },
//     // {
//     //   label: "Dataset 8",
//     //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//     //   borderColor: "rgba(78, 155, 30, 0.5)",
//     //   backgroundColor: "rgba(78, 155, 30, 0.7)",
//     //   yAxisID: "y8"
//     // },
//     // {
//     //   label: "Dataset 9",
//     //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//     //   borderColor: "rgba(153, 32, 135, 0.5)",
//     //   backgroundColor: "rgba(153, 32, 135, 0.7)",
//     //   yAxisID: "y9"
//     // },
//     // {
//     //   label: "Dataset 10",
//     //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//     //   borderColor: "rgba(138, 155, 110, 1.0)",
//     //   backgroundColor: "rgba(138, 155, 110, 0.5)",
//     //   yAxisID: "y10"
//     // },
//   ]
// };


const Settings = () => {

//   const chartRef = useRef()

//   // const [data, setData] = useState([])
//   // const [dateTimeStart, setDateTimeStart] = useState(Date.now())
//   // const [dateTimeEnd, setDateTimeEnd] = useState(Date.now())
//   const [tableData, setTableData] = useState([])

//   // const selectedTags = useSelector((state) => state.login.selectedTags)


//   // const handler = () => {
//   //   influxRequest(selectedTags, dateTimeStart, dateTimeEnd)
//   //   .then((response) => setData(response))
//   // }

//   const onClick = (event) => {
//     const elementArray = getElementAtEvent(chartRef.current, event)
//     const getdatasetAndElementIndexes = (elementArray) => {
//       let datasetIndex = null
//       let elementIndex = null
//       if (elementArray.length > 0) {
//         datasetIndex = getElementAtEvent(chartRef.current, event)[0].datasetIndex
//         elementIndex = getElementAtEvent(chartRef.current, event)[0].index
//         return [datasetIndex, elementIndex]
//       }
//       return [datasetIndex, elementIndex]
//     }

//     const [datasetIndex, elementIndex] = getdatasetAndElementIndexes(elementArray)
//       if (datasetIndex !== null && elementIndex !== null) {
//         console.log('datasetIndex: ', datasetIndex, 'elementIndex: ', elementIndex);
//       }

//       console.log(chartRef.current.scales);
//       console.table(chartRef.current.chartArea);
//       const { canvas } = chartRef.current
//       let rect = canvas.getBoundingClientRect()
//       const x = event.clientX - rect.left
//       const y = event.clientY - rect.top
// }

//   const tableDataCreating = (currentArr) => {
//     const newTableArr = currentArr.map((el) => {
//       const min = arr => arr.reduce((x, y) => Math.min(x, y))
//       const max = arr => arr.reduce((x, y) => Math.max(x, y))
//       const summ = arr => arr.reduce((x, y) => {return x + y}, 0)

//       return {
//         'name': el.dataset.label,
//         'current': el.raw,
//         'time': el.label,
//         'minimum': min(el.dataset.data),
//         'maximum': max(el.dataset.data),
//         'average': summ(el.dataset.data) / el.dataset.data.length,
//       }
//     })
//       setTableData(newTableArr)

//   }

//   const annotationLine = {
//     id: 'annotationLine',
//     beforeDraw: (chartRef) => {
//       if (chartRef.tooltip._active && chartRef.tooltip._active.length) {
//         const ctx = chartRef.ctx
//         const { top, bottom } = chartRef.chartArea        
//         ctx.save()
//         const activePoint = chartRef.tooltip._active[0]

//         ctx.beginPath()
//         ctx.setLineDash([5, 7])
//         ctx.moveTo(activePoint.element.x, top)
//         ctx.lineTo(activePoint.element.x, bottom)
//         ctx.lineWidth = 2
//         ctx.strokeStyle = 'rgba(255,99,132, 1)'
//         ctx.stroke()
//         ctx.restore()

//         tableDataCreating(chartRef.tooltip.dataPoints)
//       }
//     }
//   }

  return(
    <>
      <FileUpload/>
{/* //       <Paper elevation={10}
//         style={{
//           backgroundColor: '#f9f8f8',
//           maxWidth: 1200,
//           minWidth: 800,
//           margin: 20,
//           padding: 15
//         }}
//       >
//       <Line
//         options={options} data={data}
//         onClick={onClick}
//         ref={chartRef}
//         plugins={[annotationLine, zoomPlugin]}
//       />

// <TableContainer component={Paper}>
//       <Table  size="small" aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell style={{ width: '40px' }} align="left">Name</TableCell>
//             <TableCell style={{ width: '40px' }} align="right" >Current</TableCell>
//             <TableCell style={{ width: '40px' }} align="right">time</TableCell>
//             <TableCell style={{ width: '40px' }} align="right">Minimum</TableCell>
//             <TableCell style={{ width: '40px' }} align="right">Averrage</TableCell>
//             <TableCell style={{ width: '40px' }} align="right">Maximum</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {
//             tableData.map((row, index) => (
//               <TableRow key={index} style={{ width: 40 }}  >
//               <TableCell style={{ width: '40px' }} variant='string' align="left" component="th" scope="row">{row.name}</TableCell>
//               <TableCell style={{ width: '40px' }} variant='string' align="right" component="th" scope="row">{row.current}</TableCell>
//               <TableCell style={{ width: '40px' }} variant='string' align="right" component="th" scope="row">{row.time}</TableCell>
//               <TableCell style={{ width: '40px' }} variant='string' align="right" component="th" scope="row">{row.minimum}</TableCell>
//               <TableCell style={{ width: '40px' }} variant='string' align="right" component="th" scope="row">{row.maximum}</TableCell>
//               <TableCell style={{ width: '40px' }} variant='string' align="right" component="th" scope="row">{row.average}</TableCell>
//               </TableRow>
//             ))
//           }
//         </TableBody>
//       </Table>
//     </TableContainer> 
//       </Paper> */}
    </>
  )   
}

export default Settings
