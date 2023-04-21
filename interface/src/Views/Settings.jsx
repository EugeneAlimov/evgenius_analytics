import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import _ from "lodash";

import getWindowDimensions from "../Libs/getWindowDimensions";
import handleFile from "../Libs/excel-csv";
import greedOptimisation from "../Libs/greedOptimisation";
import { setTagstoDashboard, uploadFile } from "../api/settingsApi";

import Paper from "@mui/material/Paper";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import AllTagsListDashboard from "../Components/AccordionAnalitycs/AllTagsListDashboard/AllTagsListDashboard";
import SelectedTagsListDashboard from "../Components/AccordionAnalitycs/SelectedTagsListDashboard/SelectedTagsListDashboard";
import FileUpload from "../Components/UI/FileUpload/FileUpload";
import binarySearch from "../Libs/binarySearch";
import { getTagsAndGroupsQuery } from "../api/analitycApi";

const Settings = () => {
  const tags = useSelector((state) => state.analytic.tags);

  const [file, setFile] = useState();
  const [width, height] = getWindowDimensions();
  const [priceFile, setPriceFile] = useState();
  const [checkededTags, setCheckedTagsList] = useState([]);
  const [comparedArr, setCompareArr] = useState([]);
  const [tagsArr, setTagsArr] = useState([]);

  const dispatch = useDispatch()

  const allTagsListStyle = {
    rowHeithCoeff: 282,
    listHeithCoeff: 64,
  }

  useEffect(() => {
    dispatch(getTagsAndGroupsQuery());
  }, [dispatch]);


  useEffect(() => {
    const dashTags = _.cloneDeep(tags);
    setCompareArr(dashTags);
  }, [tags]);

  useEffect(() => {
    const newTagsArr = _.cloneDeep(tags);
    setTagsArr(newTagsArr);
  }, [tags]);

  useEffect(() => {
    const newTagsArr = tagsArr.filter((el) => el.on_dashboard === true);
    setCheckedTagsList(newTagsArr);
  }, [tagsArr]);

  useEffect(() => {
    const selectedTags = tags.filter((el) => el.on_dashboard === true);
    setCheckedTagsList(selectedTags);
  }, [tags]);

  const toWSTags = () => {
    const tempArr = [];
    comparedArr.forEach((element, index) => {
      if (element.on_dashboard !== tagsArr[index].on_dashboard) {
        tempArr.push(tagsArr[index]);
      }
    }
    );
    setTagstoDashboard(tempArr)
    .finally(() => dispatch(getTagsAndGroupsQuery()));
  };

  const checkHandler = (id) => {
    const elemIndex = binarySearch(tagsArr, id);
    const newTagsArr = [...tagsArr];
    newTagsArr[elemIndex]["on_dashboard"] = !newTagsArr[elemIndex]["on_dashboard"];
    setTagsArr(newTagsArr);
  };

  const unCheckHandler = (id) => {
    const newTagsArr = [...tagsArr]
    const objIndex = binarySearch(newTagsArr, id)

    newTagsArr[objIndex].on_dashboard = false
    setTagsArr(newTagsArr);
  }

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
      <AllTagsListDashboard
        height={height}
        tagsArr={tagsArr}
        checkHandler={checkHandler}
        style={allTagsListStyle}
      />
      <SelectedTagsListDashboard
        height={height}
        unCheckHandler={unCheckHandler}
        checkededTags={checkededTags}
      />
    </Box>
  );
};

export default Settings;
