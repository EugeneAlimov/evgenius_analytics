import { InfluxDB } from '@influxdata/influxdb-client-browser'

const influxRequest = (checkedArr, dateTimeStart, dateTimeEnd, groupsQuery) => {
  const dateTimeStartUTC = dateTimeStart.toISOString()
  const dateTimeEndUTC = dateTimeEnd.toISOString()
  let str = ''
  checkedArr.forEach(element => {
    const group = groupsQuery.find(el => el.id === element.label)
    str = str + `r._field == "${element.name_tag} - ${group.label}" or `
  })

  str = str.slice(0, str.length - 4)
    const URL = 'http://192.168.8.166:8086/'
    const TOKEN = 'AYxGUOAj0Ho1vqmyMeQDpHPaSPYNcTZznrQ9bDJCvNM9fvF6tAepPH6jyxuTaalmbqgZKe98efDVoCFAyu6kJw=='
    const ORG = 'evgenius'
    const BUCKET = 'LineDB'
    const MEASUREMENT = 'LineDB'
    const queryApi = new InfluxDB({url: URL, token: TOKEN}).getQueryApi(ORG)
    
    const fluxQuery = 
        `from(bucket: "${BUCKET}")
        |> range(start: ${dateTimeStartUTC}, stop: ${dateTimeEndUTC})
        |> filter(fn: (r) => r._measurement == "${MEASUREMENT}")
        |> filter(fn: (r) => ${str})
        `
  console.log('fluxQuery ', fluxQuery);
    const dataSetArr = []
    const fluxObserver = {
        next(row, tableMeta) {
            const o = tableMeta.toObject(row)
            dataSetArr.push(o)
            },
            error(error) {
              console.error(error)
              console.log('\nFinished ERROR')
            },
            complete() {
              console.log('\nFinished SUCCESS')
            }
          }
    
    queryApi.queryRows(fluxQuery, fluxObserver)

    return dataSetArr
  
  }

  export default influxRequest