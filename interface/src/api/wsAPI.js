import dashDataLoader from "../Redux/wsSlice";

export const wsGetDashboardData = () => {
  const socket = new WebSocket(`ws://192.168.8.167:8001/ws/graph/`);
  let dashboardData;
  socket.onmessage = function (e) {
    dashboardData = JSON.parse(e.data);
  };
  console.log('dashboardData ', dashboardData);
  return dashboardData;
};
