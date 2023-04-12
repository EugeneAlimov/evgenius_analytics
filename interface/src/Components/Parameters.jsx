import React from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import ParametersItem from "./ParametersItem";

const Parameters = () => {
  const parameters = useSelector((state) => state.ws.wsGetDashboardData);
  console.log('parameters ', parameters);
  const entry = [
    {
      name: "Thinkness",
      value: parameters["STRIP_THICKNESS - ENTRY"],
      unit: "mm",
    },
    {
      name: "Width",
      value: parameters["STRIP_WIDTH - ENTRY"],
      unit: "mm",
    },
    {
      name: "Tention",
      value: parameters["ACT_TEnSIOn - ENTRY - ACCUMULATOR"],
      unit: "kN",
    },
    {
      name: "Unc 1 len",
      value: parameters["UNCOILER1_ACT_LENGTH - Length_Measurement_DB"],
      unit: "m",
    },
    {
      name: "Unc 2 len",
      value: parameters["UNCOILER2_ACT_LENGTH - Length_Measurement_DB"],
      unit: "m",
    },
    {
      name: "Bridle 1 load",
      value: parameters["ROLL1_ACT_CURRENT - ENTRY - BRIDLE1"],
      unit: "%",
    },
    {
      name: "Bridle 2 load",
      value: parameters["ROLL1_ACT_CURRENT - PROCESS - BRIDLE2"],
      unit: "%",
    },
    {
      name: "Acc tention",
      value: parameters["ACT_TEnSIOn - ENTRY - ACCUMULATOR"],
      unit: "kN",
    },
    {
      name: "Acc position",
      value: parameters["ACT_HEIGHT - ENTRY - ACCUMULATOR"],
      unit: "%",
    },
  ];

  const process = [
    {
      name: "Tention",
      value: parameters["set_tension - PROCESS"],
      unit: "kN",
    },
    {
      name: "Bridle 3 load",
      value: parameters["ROLL1_ACT_CURRENT - PROCESS - BRIDLE3"],
      unit: "%",
    },
    {
      name: "Bridle 4 load",
      value: parameters["ROLL1_ACT_CURRENT - PROCESS - BRIDLE4"],
      unit: "%",
    },
    {
      name: "PO carenary",
      value: parameters["prime_oven_catenary_act - PROCESS"],
      unit: "%",
    },
    {
      name: "FO catenary",
      value: parameters["finish_oven_catenary_act - PROCESS"],
      unit: "%",
    },
  ];

  const exit = [
    {
      name: "Thinkness",
      value: parameters["EXIT_THICKNESS - LINE_TENSION"],
      unit: "mm",
    },
    {
      name: "Width",
      value: parameters["EXIT_WIDTH - LINE_TENSION"],
      unit: "mm",
    },
    {
      name: "Tention",
      value: parameters["ACT_TENSION - EXIT - ACCUMULATOR"],
      unit: "kN",
    },
    {
      name: "Bridle 5 load",
      value: parameters["ROLL1_ACT_CURRENT - EXIT - BRIDLE5"],
      unit: "%",
    },
    {
      name: "Recoiler load",
      value: parameters["ACT_CURRENT - EXIT - RECOILER"],
      unit: "%",
    },
    {
      name: "Diam.",
      value: parameters["ACT_DIAMETER - EXIT - RECOILER"],
      unit: "mm",
    },
    {
      name: "Acc tention",
      value: parameters["ACT_TENSION - EXIT - ACCUMULATOR"],
      unit: "kN",
    },
    {
      name: "Acc position",
      value: parameters["ACT_HEIGHT - EXIT - ACCUMULATOR"],
      unit: "%",
    },
  ];

  const style = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    marginRight: "5px",
    marginY: "5px",
    height: "286px",
    backgroundColor: "f9f8f800",
  };

  return (
    <Box
      sx={{ ...style }}
    >
      <ParametersItem section={"Entry"} content={entry} />
      <ParametersItem section={"Process"} content={process} />
      <ParametersItem section={"Exit"} content={exit} />
    </Box>
  );
};

export default Parameters;
