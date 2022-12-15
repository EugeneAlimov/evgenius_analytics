// import { format } from 'date-fns'

const chartDataAndOptionsCreater = (checkedArr, dataSetArr) => {
  console.log("dataSetArr: ", dataSetArr);
  console.log("checkedArr: ", checkedArr);
  const BORDERCOLORS = [
    "rgba(239, 71, 111, 0.5)",
    "rgba(255, 209, 102, 0.5)",
    "rgba(64, 97, 84, 0.5)",
    "rgba(17, 138, 178, 0.5)",
    "rgba(255, 99, 30, 0.5)",
    "rgba(249, 248, 83, 1.0)",
    "rgba(53, 82, 235, 0.5)",
    "rgba(78, 155, 30, 0.5)",
    "rgba(153, 32, 135, 0.5)",
    "rgba(138, 155, 110, 1.0)",
  ];

  const BACKGROUNDCORORS = [
    "rgba(239, 71, 111, 0.7)",
    "rgba(255, 209, 132, 0.9)",
    "rgba(164, 97, 84, 0.7)",
    "rgba(17, 138, 178, 0.7)",
    "rgba(255, 99, 30, 0.7)",
    "rgba(249, 248, 83, 0.7)",
    "rgba(53, 82, 235, 0.7)",
    "rgba(78, 155, 30, 0.7)",
    "rgba(153, 32, 135, 0.7)",
    "rgba(138, 155, 110, 0.5)",
  ];

  const data = {};

  const options = {
    animation: false,
    // parsing: true,
    parsing: false,
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      decimation: {
        enabled: true,
        // algorithm: 'min-max',
        algorithm: "lttb",
        samples: 80,
        threshold: 80,
      },
      title: {
        text: "Chart.js Line Chart - Multi Axis",
      },
      zoom: {
        pan: {
          enabled: true,
          mode: "xy",
          overScaleMode: "xy",
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          mode: "xy",
          overScaleMode: "xy",
        },
      },
    },
    scales: {
      x: {
        type: "timeseries",
      },
      // y: {
      //   beginAtZero: true,
      // },
    },
  };

  let numbersOfArrays = checkedArr.length;
  let label = "";

  const datasets = Array.from({ length: numbersOfArrays }, () => {
    return { data: [] };
  });

  dataSetArr.forEach((el) => {
    if (label !== el._field) {
      datasets[el.table].label = el._field;
      label = el._field;
      datasets[el.table].borderColor = BORDERCOLORS[el.table];
      datasets[el.table].backgroundColor = BACKGROUNDCORORS[el.table];
      datasets[el.table].yAxisID = label;
      datasets[el.table].radius = 0;

      options.scales[label] = {
        beginAtZero: true,
        type: "linear",
        display: true,
        position: el.table % 2 ? "left" : "right",
        backgroundColor: BORDERCOLORS[el.table],
        grid: {
          drawOnChartArea: true,
        },
        min: 0,
      };
    }
    datasets[el.table].data.push({
      x: new Date(el._time).getTime(),
      y: Math.round10(el._value, -2),
    });
  });
  data.datasets = datasets;

  return { data: data, options: options };
};

export default chartDataAndOptionsCreater;
