import axios from "axios";

// export const baseURL = "http://127.0.0.1"
// export const basePort = "8000"
// export const influxUrl = "http://127.0.0.1:8086/"
// export default axios.defaults.baseURL = "http://127.0.0.1:8000/";
// export const wsURL = "127.0.0.1:8000"

export const wsURL = "192.168.8.101:8001"
export const baseURL = "http://192.168.8.101"
export const basePort = ":80"
export const influxUrl = "192.168.8.101:8086/"
export default  axios.defaults.baseURL = "http://192.168.8.101/";
