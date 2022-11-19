import FileUpload from "../Components/UI/FileUpload/FileUpload";
import React from "react";
import 'chartjs-adapter-luxon';
import ChartStreaming from 'chartjs-plugin-streaming';
import { format } from 'date-fns'
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
  TimeScale,
  TimeSeriesScale,
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

const options = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false
  },
  stacked: true,
  plugins: {
    title: {
      // display: true,
      text: "Chart.js Line Chart - Multi Axis"
    }
  },
  scales: {
    x: {
      type: 'timeseries',
      unit: 'hour, minute',
    },
    y1: {
      type: "linear",
      display: true,
      position: "left",
      backgroundColor: "rgba(239, 71, 111, 0.5)",
      grid: {
        drawOnChartArea: true
      }

    },
    y2: {
      type: "linear",
      display: true,
      position: "left",
      backgroundColor: "rgba(255, 209, 102, 0.5)",
      grid: {
        drawOnChartArea: false
      }
    },
    y3: {
      type: "linear",
      display: true,
      position: "left",
      backgroundColor: "rgba(164, 97, 84, 0.5)",
      grid: {
        drawOnChartArea: false
      }
    },
    y4: {
      type: "linear",
      display: true,
      position: "left",
      backgroundColor: "rgba(17, 138, 178, 0.5)",
      grid: {
        drawOnChartArea: false
      }
    },
    y5: {
      type: "linear",
      display: true,
      position: "left",
      backgroundColor: "rgba(255, 99, 30, 0.5)",
      grid: {
        drawOnChartArea: false
      }
    },
    y6: {
      type: "linear",
      display: true,
      position: "right",
      backgroundColor: "rgba(249, 248, 83, 1.0)",
      grid: {
        drawOnChartArea: false
      }
    },
    y7: {
      type: "linear",
      display: true,
      position: "right",
      backgroundColor: "rgba(53, 82, 235, 0.5)",
      grid: {
        drawOnChartArea: false
      }
    },
    y8: {
      type: "linear",
      display: true,
      position: "right",
      backgroundColor: "rgba(78, 155, 30, 0.5)",
      grid: {
        drawOnChartArea: false
      }
    },
    y9: {
      type: "linear",
      display: true,
      position: "right",
      backgroundColor: "rgba(153, 32, 135, 0.5)",
      grid: {
        drawOnChartArea: false
      }
    },
    y10: {
      type: "linear",
      display: true,
      position: "right",
      backgroundColor: "rgba(138, 155, 110, 1.0)",
      grid: {
        drawOnChartArea: false
      }
    },
  }
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "December",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "December",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "December",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "December",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "December",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "December",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "December",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "December",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "December",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "December",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "December",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "December",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "December",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "December",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "December",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "December"]

const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "December"],
  // labels,
  datasets: [
    {
      label: "Dataset 1 ",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgba(239, 71, 111, 0.5)",
      backgroundColor: "rgba(239, 71, 111, 0.7)",
      yAxisID: "y1"
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgba(255, 209, 132, 0.8)",
      backgroundColor: "rgba(255, 209, 132, 0.9)",
      yAxisID: "y2"
    },
    {
      label: "Dataset 3",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgba(164, 97, 84, 0.5)",
      backgroundColor: "rgba(164, 97, 84, 0.7)",
      yAxisID: "y3"
    },
    {
      label: "Dataset 4",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgba(17, 138, 178, 0.5)",
      backgroundColor: "rgba(17, 138, 178, 0.7)",
      yAxisID: "y4"
    },
    {
      label: "Dataset 5",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgba(255, 99, 30, 0.5)",
      backgroundColor: "rgba(255, 99, 30, 0.7)",
      yAxisID: "y5"
    },
    {
      label: "Dataset 6",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgba(249, 248, 83, 1.0)",
      backgroundColor: "rgba(249, 248, 83, 0.7)",
      yAxisID: "y6"
    },
    {
      label: "Dataset 7",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgba(53, 82, 235, 0.5)",
      backgroundColor: "rgba(53, 82, 235, 0.7)",
      yAxisID: "y7"
    },
    {
      label: "Dataset 8",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgba(78, 155, 30, 0.5)",
      backgroundColor: "rgba(78, 155, 30, 0.7)",
      yAxisID: "y8"
    },
    {
      label: "Dataset 9",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgba(153, 32, 135, 0.5)",
      backgroundColor: "rgba(153, 32, 135, 0.7)",
      yAxisID: "y9"
    },
    {
      label: "Dataset 10",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgba(138, 155, 110, 1.0)",
      backgroundColor: "rgba(138, 155, 110, 0.5)",
      yAxisID: "y10"
    },
  ]
};

const Settings = () => {

  return(
    <>
        <FileUpload/>
        <Line style={{backgroundColor: '#f2f2f2'}} options={options} data={data} />

    </>
  )   
}

export default Settings
