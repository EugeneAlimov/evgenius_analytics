import React from "react";
import Box from "@mui/material/Box";
import ParametersItem from "./ParametersItem";

const Parameters = () => {
  const entry = [
    {
      name: "Thinkness",
      value: "0.41",
      unit: "mm",
    },
    {
      name: "Width",
      value: "1250",
      unit: "mm",
    },
    {
      name: "Tention",
      value: "6.5",
      unit: "kN",
    },
    {
      name: "Unc 1 len",
      value: "2000",
      unit: "m",
    },
    {
      name: "Unc 2 len",
      value: "2000",
      unit: "m",
    },
    {
      name: "Bridle 1 load",
      value: "23",
      unit: "%",
    },
    {
      name: "Bridle 2 load",
      value: "23",
      unit: "%",
    },
    {
      name: "Acc tention",
      value: "6.5",
      unit: "kN",
    },
    {
      name: "Acc position",
      value: "60",
      unit: "%",
    },
  ];

  const process = [
    {
      name: "Tention",
      value: "6.5",
      unit: "kN",
    },
    {
      name: "Bridle 3 load",
      value: "23",
      unit: "%",
    },
    {
      name: "Bridle 4 load",
      value: "23",
      unit: "%",
    },
    {
      name: "PO carenary",
      value: "50",
      unit: "%",
    },
    {
      name: "FO catenary",
      value: "50",
      unit: "%",
    },
  ];

  const exit = [
    {
      name: "Thinkness",
      value: "0.41",
      unit: "mm",
    },
    {
      name: "Width",
      value: "1250",
      unit: "mm",
    },
    {
      name: "Tention",
      value: "6.5",
      unit: "kN",
    },
    {
      name: "Bridle 4 load",
      value: "23",
      unit: "%",
    },
    {
      name: "Bridle 5 load",
      value: "23",
      unit: "%",
    },
    {
      name: "Recoiler load",
      value: "23",
      unit: "%",
    },
    {
      name: "Diam.",
      value: "1234",
      unit: "mm",
    },
    {
      name: "Acc tention",
      value: "6.5",
      unit: "kN",
    },
    {
      name: "Acc position",
      value: "60",
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
