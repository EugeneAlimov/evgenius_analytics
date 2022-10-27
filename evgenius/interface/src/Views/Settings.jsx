import { Button } from "@mui/material";
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { uploadFile } from "../api/settingsApi";
import FileUpload from "../Components/UI/FileUpload/FileUpload";


const Settings = () => {

    // const navigae = useLocation()
// console.log('navigae ', navigae);

    return(
        <>
            {/* <h2>Settings page</h2> */}
                <FileUpload/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Button
                    variant="contained"
                    component="span"
                    onClick={uploadFile}
                >
                    Upload groups
                </Button>

                {/* <Outlet /> */}
        </>
    )
}

export default Settings
