import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import _ from "lodash";

import getWindowDimensions from "../Libs/getWindowDimensions";
import handleFile from "../Libs/excel-csv";
import greedOptimisation from "../Libs/greedOptimisation";
import { setTagstoDashboard, uploadFile } from "../api/settingsApi";

import { checkTagsDashboard, unCheckTagsDashboard } from "../Redux/sliceAnalytic";

import Paper from "@mui/material/Paper";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import AllTagsListDashboard from "../Components/AccordionAnalitycs/AllTagsListDashboard/AllTagsListDashboard";
import SelectedTagsListDashboard from "../Components/AccordionAnalitycs/SelectedTagsListDashboard/SelectedTagsListDashboard";
import FileUpload from "../Components/UI/FileUpload/FileUpload";
import AllTagsList from "../Components/AccordionAnalitycs/AllTagsList/AllTagsList";
import SelectedTagsList from "../Components/AccordionAnalitycs/SelectedTagsList/SelectedTagsList";

const Settings = () => {
  const [comparedArr, setCompareArr] = useState([]);

  const tags = useSelector((state) => state.analytic.tags);
  const tagsOnDashboard = useSelector((state) => state.analytic.tagsOnDashboard);

  const [file, setFile] = useState();
  const [width, height] = getWindowDimensions();
  const [priceFile, setPriceFile] = useState();

  const toWSTags = () => {
    const tempArr = [];
    comparedArr.forEach((element, index) => {
      if (element.on_dashboard !== tags[index].on_dashboard) {
        tempArr.push(tags[index]);
      }
    });
    setTagstoDashboard(tagsOnDashboard).finally();
  };
console.log('qwere');
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
        <Input type="file" onChange={(event) => setPriceFile(event.currentTarget.files[0])}></Input>
        <Button
          sx={{ m: 2, width: "360px", height: "50px" }}
          variant="contained"
          size="large"
          onClick={() => greedOptimisation(priceFile)}
        >
          Разобрать файл
        </Button>
      </Paper>
      <AllTagsList
        height={height}
        checkTags={checkTagsDashboard}
        selectedTags={tagsOnDashboard}
        checked={'on_dashboard'}
      />
      <SelectedTagsList
        height={height}
        unCheckTags={unCheckTagsDashboard}
        selectedTags={tagsOnDashboard}
      />
      {/* <AllTagsListDashboard
        height={height}
        checkTags={checkTagsDashboard}
        selectedTags={tagsOnDashboard}
      />
      <SelectedTagsListDashboard
        height={height}
        unCheckTags={unCheckTagsDashboard}
        selectedTags={tagsOnDashboard}
      /> */}
    </Box>
  );
};

export default Settings;
