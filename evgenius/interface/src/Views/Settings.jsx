import { Button } from "@mui/material";
import React, { useRef, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { uploadFile } from "../api/settingsApi";
import FileUpload from "../Components/UI/FileUpload/FileUpload";

import Plot from 'react-plotly.js';
import { render } from "react-dom";
import { Scatter } from "react-chartjs-2";

const generateTata = () => {
    
    return Array(10).fill().map(() => (
        {
            y: Array(10000).fill().map(Math.random),
              "type": "scattergl",
            mode: "line",
            marker: {
                size: 4
                }
            }
        )
    )
}

const data = generateTata()

const Settings = () => {

const [revision, setRevision] = useState(false)

const hover = event => {
    event.points.forEach(point => {
      point.data.marker.size = 20;
      console.log(point.data);
    });
    setRevision(!revision);
  };

 const unhover = event => {
    event.points.forEach(point => {
      point.data.marker.size = 4;
    });
    setRevision(!revision);
  };

// console.log(data.map(trace => trace.marker));

const myPlot = useRef(null)

// console.log(myPlot.current);

return(
    <>
        <FileUpload/>
        <Plot
        ref={myPlot}
            data={data}
            onHover={hover}
            revision={1}
            onUnhover={unhover}
            layout={{
            hovermode: "closest"
            }}

        />
        {/* <Scatter */}
            {/* // data={qq} */}
            {/* // nextDataset={'sd'} */}
            {/* // onHover={hover} */}
            {/* // revision={1} */}
            {/* // onUnhover={unhover} */}
        {/* /> */}
    </>
)   
}

export default Settings

