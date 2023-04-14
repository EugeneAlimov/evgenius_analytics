import React from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import AlcalyItem from "./AlcalyItem";

const Alcaly = () => {
  const alcalyData = useSelector((state) => state.ws.wsGetDashboardData);

  const tank = [
    {
      name: "Alcaly 1",
      setTemp: Math.round10(alcalyData["temp_setpoint - PRETREATMENT - ALKALITANK1 - heater"]),
      actTemp: Math.round10(alcalyData["temp_actual - PRETREATMENT - ALKALITANK1 - heater"]),
      heSetTemp: Math.round10(alcalyData["he_temp_set - PRETREATMENT - ALKALITANK1 - heater"]),
      heActTemp: Math.round10(alcalyData["he_temp_act - PRETREATMENT - ALKALITANK1 - heater"]),
      pump: alcalyData["status - PRETREATMENT - ALKALITANK1 - pump"],
    },
    {
      name: "Alcaly 2",
      setTemp: Math.round10(alcalyData["temp_setpoint - PRETREATMENT - ALKALITANK2 - heater"]),
      actTemp: Math.round10(alcalyData["temp_actual - PRETREATMENT - ALKALITANK2 - heater"]),
      heSetTemp: Math.round10(alcalyData["he_temp_set - PRETREATMENT - ALKALITANK2 - heater"]),
      heActTemp: Math.round10(alcalyData["he_temp_act - PRETREATMENT - ALKALITANK2 - heater"]),
      pump: alcalyData["status - PRETREATMENT - ALKALITANK2 - pump"],
    },
    {
      name: "Alcaly 3",
      setTemp: Math.round10(alcalyData["temp_setpoint - PRETREATMENT - ALKALITANK3 - heater"]),
      actTemp: Math.round10(alcalyData["temp_actual - PRETREATMENT - ALKALITANK3 - heater"]),
      heSetTemp: Math.round10(alcalyData["he_temp_set - PRETREATMENT - ALKALITANK3 - heater"]),
      heActTemp: Math.round10(alcalyData["he_temp_act - PRETREATMENT - ALKALITANK3 - heater"]),
      pump: alcalyData["status - PRETREATMENT - ALKALITANK3 - pump"],
    },
    {
      name: "Hot Rinse 1",
      setTemp: Math.round10(alcalyData["temp_setpoint - PRETREATMENT - HOTRINSETANK1 - heater"]),
      actTemp: Math.round10(alcalyData["temp_actual - PRETREATMENT - HOTRINSETANK1 - heater"]),
      heSetTemp: Math.round10(alcalyData["he_temp_set - PRETREATMENT - HOTRINSETANK1 - heater"]),
      heActTemp: Math.round10(alcalyData["he_temp_act - PRETREATMENT - HOTRINSETANK1 - heater"]),
      pump: alcalyData["status - PRETREATMENT - HOTRINSETANK1 - pump"],
    },
    {
      name: "Hot Rinse 2",
      setTemp: Math.round10(alcalyData["temp_setpoint - PRETREATMENT - HOTRINSETANK2 - heater"]),
      actTemp: Math.round10(alcalyData["temp_actual - PRETREATMENT - HOTRINSETANK2 - heater"]),
      heSetTemp: Math.round10(alcalyData["he_temp_set - PRETREATMENT - HOTRINSETANK2 - heater"]),
      heActTemp: Math.round10(alcalyData["he_temp_act - PRETREATMENT - HOTRINSETANK2 - heater"]),
      pump: alcalyData["status - PRETREATMENT - HOTRINSETANK2 - pump"],
    },
    {
      name: "Hot Rinse 3",
      setTemp: Math.round10(alcalyData["temp_setpoint - PRETREATMENT - HOTRINSETANK3 - heater"]),
      actTemp: Math.round10(alcalyData["temp_actual - PRETREATMENT - HOTRINSETANK3 - heater"]),
      heSetTemp: Math.round10(alcalyData["he_temp_set - PRETREATMENT - HOTRINSETANK3 - heater"]),
      heActTemp: Math.round10(alcalyData["he_temp_act - PRETREATMENT - HOTRINSETANK3 - heater"]),
      pump: alcalyData["status - PRETREATMENT - HOTRINSETANK3 - pump"],
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "900px",
        // justifyContent: "space-between",
      }}
    >
      {tank.map((el) => (
        <AlcalyItem data={el} key={el.name} />
      ))}
    </Box>
  );
};

export default Alcaly;
