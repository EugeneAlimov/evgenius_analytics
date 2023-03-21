import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import _ from "lodash";

import getWindowDimensions from "../Libs/getWindowDimensions";
import handleFile from "../Libs/excel-csv";
import { setTagstoDashboard, uploadFile } from "../api/settingsApi";

import Paper from "@mui/material/Paper";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import AllTagsListDashboard from "../Components/AccordionAnalitycs/AllTagsListDashboard/AllTagsListDashboard";
import SelectedTagsListDashboard from "../Components/AccordionAnalitycs/SelectedTagsListDashboard/SelectedTagsListDashboard";
import FileUpload from "../Components/UI/FileUpload/FileUpload";

const Settings = () => {
  const [comparedArr, setCompareArr] = useState([]);

  const tags = useSelector((state) => state.analytic.tags);

  const [file, setFile] = useState();
  const [width, height] = getWindowDimensions();

  const toWSTags = () => {
    const tempArr = [];
    console.log('comparedArr ', comparedArr);
    console.log('tags ', tags);
    comparedArr.forEach((element, index) => {
      if (element.on_dashboard !== tags[index].on_dashboard) {
        tempArr.push(tags[index]);
      }
    });
    console.log("tempArr ", tempArr);
    setTagstoDashboard(tempArr).finally();
  };

  useEffect(() => {
    const dashTags = _.cloneDeep(tags);

    setCompareArr(dashTags);
  }, []);

  const exselToCsv = () => {
    handleFile(file);
  };

  const toAnalityc = () => {
    uploadFile(file);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Paper
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f9f8f8",
          margin: 20,
          padding: 15,
        }}
      >
        <Input type="file" onChange={(event) => setFile(event.currentTarget.files[0])}></Input>
        <Button
          sx={{ m: 2, width: "360px", height: "50px" }}
          variant="contained"
          size="large"
          onClick={exselToCsv}
        >
          To CSV
        </Button>
        <Button
          sx={{ m: 2, width: "360px", height: "50px" }}
          variant="contained"
          size="large"
          onClick={toAnalityc}
        >
          To analityc
        </Button>
        <Button
          sx={{ m: 2, width: "360px", height: "50px" }}
          variant="contained"
          size="large"
          onClick={toWSTags}
        >
          To dashboard
        </Button>
        <FileUpload />
      </Paper>
      <AllTagsListDashboard height={height} />
      <SelectedTagsListDashboard height={height} />
    </Box>
  );
};

export default Settings;
