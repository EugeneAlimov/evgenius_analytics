import { InfluxDB } from "@influxdata/influxdb-client-browser";
import chartDataAndOptionsCreater from "../Libs/influxDataCreater";
import { influxUrl } from "./axioxDefault";

async function influxRequest(checkedArr, dateTimeStart, dateTimeEnd) {
  const dateTimeStartUTC = dateTimeStart.toISOString();

  const dateTimeEndUTC = dateTimeEnd.toISOString();
  const datasets = [];

  const requestArr = checkedArr.map((el) => `${el.name_tag} - ${el.label}`);
  let str = "";
  requestArr.forEach((element) => {
    str = str + `r._field == "${element}" or `;
  });
  str = str.slice(0, str.length - 4);
  const URL = `http://${influxUrl}`;
  const TOKEN =
    "U7e0IXVqgxfD_obXQTce9qi2b7v-bBLs2rJNT1egYoq-4jq9Z5lfODfAwvpTroIKeab-osnFOV7bxRWOyP5svw==";
  const ORG = "evgenius";
  const BUCKET = "Line";
  const MEASUREMENT = "Line";
  const queryApi = new InfluxDB({ url: URL, token: TOKEN }).getQueryApi(ORG);

  const fluxQuery = `from(bucket: "${BUCKET}")
        |> range(start: ${dateTimeStartUTC}, stop: ${dateTimeEndUTC})
        |> filter(fn: (r) => r._measurement == "${MEASUREMENT}")
        |> filter(fn: (r) => ${str})
        `;
console.log(fluxQuery);
  for await (const { values, tableMeta } of queryApi.iterateRows(fluxQuery)) {
    const obj = tableMeta.toObject(values);
    const { table, _field, _value, _time } = obj;

    datasets.push({ table, _field, _value, _time });
  }
  console.log("\nIterateRows SUCCESS");
  const data = chartDataAndOptionsCreater(checkedArr, datasets);
  return data;
}

// export const dashRequest = () => {
//   const URL = "http://192.168.8.101:8086/";
//   const TOKEN =
//     "AYxGUOAj0Ho1vqmyMeQDpHPaSPYNcTZznrQ9bDJCvNM9fvF6tAepPH6jyxuTaalmbqgZKe98efDVoCFAyu6kJw==";
//   const ORG = "evgenius";
//   const BUCKET = "Line";
//   const MEASUREMENT = "Line";
//   const queryApi = new InfluxDB({ url: URL, token: TOKEN }).getQueryApi(ORG);
//   let str =
//     'r._field == "FO_Zone 1 Pyrometer - Finish Oven" or r._field == "FO_Zone 2 Pyrometer - Finish Oven" or r._field == "FO_Zone 3 Pyrometer - Finish Oven"';
//   const fluxQuery = `from(bucket: "${BUCKET}")
//   |> range(start: -500ms, stop: -100ms)
//   |> filter(fn: (r) => r._measurement == "${MEASUREMENT}")
//   |> filter(fn: (r) => ${str})
//   `;
//   // console.log(fluxQuery);
//   const response = [];
//   const fluxObserver = {
//     next(row, tableMeta) {
//       const o = tableMeta.toObject(row);
//       // console.log('o: ', o)
//       response.push({ y: Math.round10(o._value, -1), x: o._time, field: o._field });
//       // return response

//       // console.log(`${Math.round10(o._value, -1)}`);
//     },
//     error(error) {
//       console.error(error);
//       console.log("\nFinished ERROR");
//     },
//     complete() {
//       console.log("\nFinished SUCCESS");
//     },
//   };
//   // console.log(fluxObserver);
//   /** Execute a query and receive line table metadata and rows. */
//   queryApi.queryRows(fluxQuery, fluxObserver);

//   return response;
// };

export default influxRequest;
