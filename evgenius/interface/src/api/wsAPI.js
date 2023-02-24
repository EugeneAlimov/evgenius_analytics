import dashDataLoader from "../Redux/wsSlice";

export const wsGetDashboardData = () => {
  const socket = new WebSocket(`ws://127.0.0.1:8000/ws/graph/`);
  let dashboardData;
  socket.onmessage = function (e) {
    dashboardData = JSON.parse(e.data);
  };
  return dashboardData;
};
