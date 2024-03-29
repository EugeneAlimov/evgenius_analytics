import React from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import ParametersItem from "./ParametersItem";

const Parameters = () => {
  const parameters = useSelector((state) => state.ws.wsGetDashboardData);

  const entry = [
    {
      name: "Thinkness",
      value: !!parameters["STRIP_THICKNESS - ENTRY"] ? parameters["STRIP_THICKNESS - ENTRY"] : 0,
      unit: "mm",
    },
    {
      name: "Width",
      value: !!parameters["STRIP_WIDTH - ENTRY"] ? parameters["STRIP_WIDTH - ENTRY"] : 0,
      unit: "mm",
    },
    {
      name: "Tention",
      value: !!Math.round10(parameters["SET_TENSION - ENTRY"], -1)
        ? Math.round10(parameters["SET_TENSION - ENTRY"], -1)
        : 0,
      unit: "kN",
    },
    {
      name: "Unc 1 len",
      value: !!Math.round10(parameters["UNCOILER1_ACT_LENGTH - Length_Measurement_DB"], -1)
        ? Math.round10(parameters["UNCOILER1_ACT_LENGTH - Length_Measurement_DB"], -1)
        : 0,
      unit: "m",
    },
    {
      name: "Unc 2 len",
      value: !!Math.round10(parameters["UNCOILER2_ACT_LENGTH - Length_Measurement_DB"], -1)
        ? Math.round10(parameters["UNCOILER2_ACT_LENGTH - Length_Measurement_DB"], -1)
        : 0,
      unit: "m",
    },
    {
      name: "Bridle 1 load",
      value: !!Math.round10(parameters["ROLL1_ACT_CURRENT - ENTRY - BRIDLE1"], -1)
        ? Math.round10(parameters["ROLL1_ACT_CURRENT - ENTRY - BRIDLE1"], -1)
        : 0,
      unit: "%",
    },
    {
      name: "Bridle 2 load",
      value: !!Math.round10(parameters["ROLL1_ACT_CURRENT - PROCESS - BRIDLE2"], -1)
        ? Math.round10(parameters["ROLL1_ACT_CURRENT - PROCESS - BRIDLE2"], -1)
        : 0,
      unit: "%",
    },
    {
      name: "Acc tention",
      value: !!Math.round10(parameters["ACT_TEnSIOn - ENTRY - ACCUMULATOR"], -1)
        ? Math.round10(parameters["ACT_TEnSIOn - ENTRY - ACCUMULATOR"], -1)
        : 0,
      unit: "kN",
    },
    {
      name: "Acc position",
      value: !!Math.round10(parameters["ACT_HEIGHT - ENTRY - ACCUMULATOR"], -2)
        ? Math.round10(parameters["ACT_HEIGHT - ENTRY - ACCUMULATOR"], -2)
        : 0,
      unit: "%",
    },
  ];

  const process = [
    {
      name: "Tention",
      value: !!Math.round10(parameters["set_tension - PROCESS"], -1)
        ? Math.round10(parameters["set_tension - PROCESS"], -1)
        : 0,
      unit: "kN",
    },
    {
      name: "Bridle 3 load",
      value: !!Math.round10(parameters["ROLL1_ACT_CURRENT - PROCESS - BRIDLE3"], -1)
        ? Math.round10(parameters["ROLL1_ACT_CURRENT - PROCESS - BRIDLE3"], -1)
        : 0,
      unit: "%",
    },
    {
      name: "Bridle 4 load",
      value: !!Math.round10(parameters["ROLL1_ACT_CURRENT - PROCESS - BRIDLE4"], -1)
        ? Math.round10(parameters["ROLL1_ACT_CURRENT - PROCESS - BRIDLE4"], -1)
        : 0,
      unit: "%",
    },
    {
      name: "PO carenary",
      value: !!Math.round10(parameters["prime_oven_catenary_act - PROCESS"])
        ? Math.round10(parameters["prime_oven_catenary_act - PROCESS"])
        : 0,
      unit: "%",
    },
    {
      name: "FO catenary",
      value: !!Math.round10(parameters["finish_oven_catenary_act - PROCESS"])
        ? Math.round10(parameters["finish_oven_catenary_act - PROCESS"])
        : 0,
      unit: "%",
    },
  ];

  const exit = [
    {
      name: "Thinkness",
      value: !!parameters["EXIT_THICKNESS - LINE_TENSION"]
        ? parameters["EXIT_THICKNESS - LINE_TENSION"]
        : 0,
      unit: "mm",
    },
    {
      name: "Width",
      value: !!parameters["EXIT_WIDTH - LINE_TENSION"]
        ? parameters["EXIT_WIDTH - LINE_TENSION"]
        : 0,
      unit: "mm",
    },
    {
      name: "Tention",
      value: !!Math.round10(parameters["ACTIVE_TENSIOT_SET - LINE_AXIS_DATA - RECOILER"] / 1000)
        ? Math.round10(parameters["ACTIVE_TENSIOT_SET - LINE_AXIS_DATA - RECOILER"] / 1000)
        : 0,
      unit: "kN",
    },
    {
      name: "Bridle 5 load",
      value: !!Math.round10(parameters["ROLL1_ACT_CURRENT - EXIT - BRIDLE5"], -1)
        ? Math.round10(parameters["ROLL1_ACT_CURRENT - EXIT - BRIDLE5"], -1)
        : 0,
      unit: "%",
    },
    {
      name: "Recoiler load",
      value: !!Math.round10(parameters["ACT_CURRENT - EXIT - RECOILER"], -1)
        ? Math.round10(parameters["ACT_CURRENT - EXIT - RECOILER"], -1)
        : 0,
      unit: "%",
    },
    {
      name: "Diam.",
      value:
        !!parameters["ACT_DIAMETER - EXIT - RECOILER"] * 1000
          ? parameters["ACT_DIAMETER - EXIT - RECOILER"] * 1000
          : 0,
      unit: "mm",
    },
    {
      name: "Acc tention",
      value: !!Math.round10(parameters["ACT_TENSION - EXIT - ACCUMULATOR"], -1)
        ? Math.round10(parameters["ACT_TENSION - EXIT - ACCUMULATOR"], -1)
        : 0,
      unit: "kN",
    },
    {
      name: "Acc position",
      value: !!Math.round10(parameters["ACT_HEIGHT - EXIT - ACCUMULATOR"], -1)
        ? Math.round10(parameters["ACT_HEIGHT - EXIT - ACCUMULATOR"], -1)
        : 0,
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
    <Box sx={{ ...style }}>
      <ParametersItem section={"Entry"} content={entry} />
      <ParametersItem section={"Process"} content={process} />
      <ParametersItem section={"Exit"} content={exit} />
    </Box>
  );
};

export default Parameters;
