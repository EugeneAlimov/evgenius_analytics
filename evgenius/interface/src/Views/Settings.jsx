import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { Button, Input } from "@mui/material";
import handleFile from "../Libs/excel-csv";
import { uploadFile } from "../api/settingsApi";

const Settings = () => {

  const [file, setFile] = useState()

  const exselToCsv = () => {
    handleFile(file)
  }

  const toAnalityc = () => {
    uploadFile(file)
  }
  
  return(
    <>
      <Paper 
        style={{
          backgroundColor: '#f9f8f8',
          maxWidth: 1600,
          minWidth: 800,
          margin: 20,
          padding: 15
        }}
      >
        <Input
          type="file"
          onChange={(event) => setFile(event.currentTarget.files[0])}
        >
        </Input>
        <Button
          sx={{ m: 2, width: "360px", height: "50px" }}
          variant="contained" size="large"
          onClick={exselToCsv}
        >
            To CSV
        </Button>
        <Button
          sx={{ m: 2, width: "360px", height: "50px" }}
          variant="contained" size="large"
          onClick={toAnalityc}
        >
            To analityc
        </Button>
      </Paper>
    </>
  )   
}

export default Settings
