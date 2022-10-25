import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import FileUpload from "../Components/UI/FileUpload/FileUpload";


const Settings = () => {

    // const navigae = useLocation()
// console.log('navigae ', navigae);

    return(
        <>
            {/* <h2>Settings page</h2> */}
                <FileUpload/>
                {/* <Outlet /> */}
        </>
    )
}

export default Settings
