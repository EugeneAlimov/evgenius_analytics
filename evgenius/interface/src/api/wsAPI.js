import dashDataLoader from "../Redux/wsSlice";

export const wsGetDashboardData = () => {
  const socket = new WebSocket(`ws://192.168.8.167/ws/graph/`);
  let dashboardData;
  socket.onmessage = function (e) {
    dashboardData = JSON.parse(e.data);
  };
  return dashboardData;
};
