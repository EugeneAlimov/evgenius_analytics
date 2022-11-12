import FileUpload from "../Components/UI/FileUpload/FileUpload";
import React from "react";
import 'chartjs-adapter-luxon';
import ChartStreaming from 'chartjs-plugin-streaming';

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
import { faker } from '@faker-js/faker'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);


// const actions = [
//   {
//     name: 'Randomize',
//     handler(chart) {
//       chart.data.datasets.forEach(dataset => {
//         dataset.data.forEach(dataObj => {
//           dataObj.y = Utils.rand(-100, 100);
//         });
//       });
//       chart.update();
//     }
//   },
//   {
//     name: 'Add Dataset',
//     handler(chart) {
//       const datasets = chart.data.datasets;
//       const dsColor = Utils.namedColor(datasets.length);
//       const newDataset = {
//         label: 'Dataset ' + (datasets.length + 1),
//         backgroundColor: Utils.transparentize(dsColor, 0.5),
//         borderColor: dsColor,
//         data: []
//       };
//       datasets.push(newDataset);
//       chart.update();
//     }
//   },
//   {
//     name: 'Add Data',
//     handler(chart) {
//       onRefresh(chart);
//       chart.update();
//     }
//   },
//   {
//     name: 'Remove Dataset',
//     handler(chart) {
//       chart.data.datasets.pop();
//       chart.update();
//     }
//   },
//   {
//     name: 'Remove Data',
//     handler(chart) {
//       chart.data.datasets.forEach(dataset => {
//         dataset.data.shift();
//       });
//       chart.update();
//     }
//   }
// ];

// export const options = {
//   responsive: true,
//   interaction: {
//     mode: "index",
//     intersect: false
//   },
//   stacked: false,
//   plugins: {
//     title: {
//       display: true,
//       text: "Chart.js Line Chart - Multi Axis"
//     }
//   },
//   scales: {
//     y: {
//       type: "linear",
//       display: true,
//       position: "left",
//       backgroundColor: "rgba(255, 99, 132, 0.7)"
//     },
//     y1: {
//       type: "linear",
//       display: true,
//       position: "right",
//       backgroundColor: "rgba(53, 162, 235, 0.7)",
//       grid: {
//         drawOnChartArea: false
//       }
//     },
//     y2: {
//       type: "linear",
//       display: true,
//       position: "right",
//       backgroundColor: "rgba(153, 62, 135, 0.7)",
//       grid: {
//         drawOnChartArea: false
//       }
//     }
//   }
// };

// const labels = ["January", "February", "March", "April", "May", "June", "July"];

// export const data = {
//   labels: ["January", "February", "March", "April", "May", "June", "July"],
//   // labels,
//   datasets: [
//     {
//       label: "Dataset 1",
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: "rgb(255, 99, 132)",
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//       yAxisID: "y"
//     },
//     {
//       label: "Dataset 2",
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: "rgb(53, 162, 235)",
//       backgroundColor: "rgba(53, 162, 235, 0.5)",
//       yAxisID: "y1"
//     },
//     {
//       label: "Dataset 3",
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: "rgb(153, 62, 135)",
//       backgroundColor: "rgba(153, 62, 135, 0.5)",
//       yAxisID: "y2"
//     }
//   ]
  
// };

const Settings = () => {

  return(
    <>
        <FileUpload/>
        {/* <Line options={options} data={data} />; */}

    </>
  )   
}

export default Settings

