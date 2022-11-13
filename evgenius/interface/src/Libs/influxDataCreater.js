import { format } from 'date-fns'

const chartDataAndOptionsCreater = (checkedArr, dataSetArr) => {

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
        ]

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
        ]

    const data = {}

    const options = {
        responsive: true,
        interaction: {
            mode: "index",
            intersect: false
        },
        stacked: false,
        plugins: {
            title: {
            // display: true,
            text: "Chart.js Line Chart - Multi Axis"
            }
        },
        scales: {
          y1: {
            type: "linear",
            display: true,
            position: "left",
            backgroundColor: "rgba(239, 71, 111, 0.5)",
            grid: {
              drawOnChartArea: true
                }
            }
        }
    }

    const labels = dataSetArr.filter(el => el.table === 0).map(el => format(new Date(el._time), 'MMM do, hh:mm:ss'))
  
    let numbersOfArrays = checkedArr.length
    let label = ''
  
    const datasets = Array.from({length: numbersOfArrays}, () => {
      return {data: []}
    })
  
    dataSetArr.forEach(el => {
  
        if (label !== el._field) {
          datasets[el.table].label = el._field
          label = el._field
          datasets[el.table].borderColor = BORDERCOLORS[el.table]
          datasets[el.table].backgroundColor = BACKGROUNDCORORS[el.table]
          datasets[el.table].yAxisID = label

          options.label = {
            type: "linear",
            display: true,
            position: el.table % 2 ? "left" : "right",
            backgroundColor: BORDERCOLORS[el.table],
            grid: {
              drawOnChartArea: true
            }
          }
        }
  
      datasets[el.table].data.push(Math.round10(el._value, -2))
    })
    data.labels = labels
    data.datasets = datasets



    return [data, options]
  }

export default chartDataAndOptionsCreater
