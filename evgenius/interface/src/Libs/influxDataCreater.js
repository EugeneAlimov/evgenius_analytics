const influxDataCreater = (checkedArr, dataSetArr) => {
    const data = {}
    const labels = dataSetArr.filter(el => el.table === 0).map(el => el._time.toLocaleString())
  
    const BORDERCOLORS = ["rgb(255, 99, 132)", "rgb(53, 162, 235)", "rgb(153, 62, 135)"]
    const BACKGROUNDCORORS = ["rgba(255, 99, 132, 0.5)", "rgba(53, 162, 235, 0.5)", "rgba(153, 62, 135, 0.5)"]
    const YAXISID = ["y", "y1", "y2", "y3", "y4", "y5", "y6", "y7", "y8", "y9"]
  
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
          datasets[el.table].yAxisID = YAXISID[el.table]
        }
  
      datasets[el.table].data.push(Math.round10(el._value, -2))
    })
    data.labels = labels
    data.datasets = datasets
    return data
  }

export default influxDataCreater