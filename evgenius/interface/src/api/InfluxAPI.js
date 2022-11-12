import { InfluxDB } from '@influxdata/influxdb-client-browser'
import influxDataCreater from '../Libs/influxDataCreater'

async function influxRequest(checkedArr, dateTimeStart, dateTimeEnd) {
  const dateTimeStartUTC = dateTimeStart.toISOString()
  const dateTimeEndUTC = dateTimeEnd.toISOString()
  const datasets = []

  const requestArr = checkedArr.map( el => `${el.name_tag} - ${el.label}` )
  let str = ''
  requestArr.forEach(element => {
    str = str + `r._field == "${element}" or `
  })
  str = str.slice(0, str.length - 4)
    const URL = 'http://192.168.8.166:8086/'
    const TOKEN = 'AYxGUOAj0Ho1vqmyMeQDpHPaSPYNcTZznrQ9bDJCvNM9fvF6tAepPH6jyxuTaalmbqgZKe98efDVoCFAyu6kJw=='
    const ORG = 'evgenius'
    const BUCKET = 'Line'
    const MEASUREMENT = 'Line'
    const queryApi = new InfluxDB({url: URL, token: TOKEN}).getQueryApi(ORG)
    
    const fluxQuery = 
        `from(bucket: "${BUCKET}")
        |> range(start: ${dateTimeStartUTC}, stop: ${dateTimeEndUTC})
        |> filter(fn: (r) => r._measurement == "${MEASUREMENT}")
        |> filter(fn: (r) => ${str})
        `

  for await (const {values, tableMeta} of queryApi.iterateRows(fluxQuery)) {
    const obj = tableMeta.toObject(values)
    const {table, _field, _value, _time } = obj

    datasets.push({ table, _field, _value, _time  })
  }
  console.log('\nIterateRows SUCCESS')
  const data = influxDataCreater(checkedArr, datasets)
  return data
}

// const influxRequest111 = (checkedArr, dateTimeStart, dateTimeEnd) => {
//   const dateTimeStartUTC = dateTimeStart.toISOString()
//   const dateTimeEndUTC = dateTimeEnd.toISOString()
//   const datasets = []

//   const requestArr = checkedArr.map( el => `${el.name_tag} - ${el.label}` )
//   let str = ''
//   requestArr.forEach(element => {
//     str = str + `r._field == "${element}" or `
//   })
//   str = str.slice(0, str.length - 4)
//     const URL = 'http://192.168.8.166:8086/'
//     const TOKEN = 'AYxGUOAj0Ho1vqmyMeQDpHPaSPYNcTZznrQ9bDJCvNM9fvF6tAepPH6jyxuTaalmbqgZKe98efDVoCFAyu6kJw=='
//     const ORG = 'evgenius'
//     const BUCKET = 'Line'
//     const MEASUREMENT = 'Line'
//     const queryApi = new InfluxDB({url: URL, token: TOKEN}).getQueryApi(ORG)
    
//     const fluxQuery = 
//         `from(bucket: "${BUCKET}")
//         |> range(start: ${dateTimeStartUTC}, stop: ${dateTimeEndUTC})
//         |> filter(fn: (r) => r._measurement == "${MEASUREMENT}")
//         |> filter(fn: (r) => ${str})
//         `

//     const fluxObserver = {
//         next(row, tableMeta) {
//           const obj = tableMeta.toObject(row)
//           const {table, _field, _value, _time } = obj

//           datasets.push({ table, _field, _value, _time  })

//           },
//           error(error) {
//             console.error(error)
//             console.log('\nFinished ERROR')
//           },
//           complete() {
//             influxDataCreater(datasets, checkedArr)
//             console.log('\nFinished SUCCESS')
//           }
//         }
    
//     queryApi.queryRows(fluxQuery, fluxObserver)
//     return datasets
//   }


export default influxRequest
