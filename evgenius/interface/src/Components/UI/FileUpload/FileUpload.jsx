import React from "react";
import { Button, Snackbar, Alert } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useState, useEffect } from "react";
import handleFile from "../../../Libs/excel-csv";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { uploadFile } from "../../../api/settingsApi";


const FileUpload = () => {

    const accessToken = useSelector((state) => state.login.token.refresh)
    const dispatch = useDispatch()



    const Input = styled('input')({
        display: 'none',
      });
    // const csrftoken = getCookie('csrftoken');
    
    const [file, setFile] = useState(null)

    const [snakState, setSnakState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'right',
        message: '',
      });

    useEffect(() => {        
        if (!file) return

        const snakBarShow = (message) => {
            setSnakState({
                open: true,
                message: message ,
                vertical: 'top',
                horizontal: 'left',
            })
          }
    
        uploadFile(file, accessToken)
        .then(response => {
            console.log('response: ', response)
            snakBarShow('File uploaded')})
        .catch(error => {
            snakBarShow('File upload failed')
            console.error(error)
            }
        )

        handleFile(file)
        uploadFile(file, accessToken)
    }, [accessToken, dispatch, file])

    const { vertical, horizontal, open, message } = snakState;
    
    const snakBarClose = () => {
        setSnakState({ ...snakState, open: false });
    };

    return (
        <>
            <form encType="multipart/form-data" method="post">
                <label htmlFor="contained-button-file">
                    <Input accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                        id="contained-button-file"
                        multiple={false}
                        type="file"
                        value={undefined}
                        hiden='true'
                        onChange={(event) => setFile(event.currentTarget.files[0])}
                    />
                    <Button
                        variant="contained"
                        component="span"
                    >
                        Upload excel file
                    </Button>
                </label>
            </form>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={snakBarClose}
                autoHideDuration={6000}
                key={vertical + horizontal}
            >
                <Alert onClose={snakBarClose} severity="success" sx={{ width: '100%', mt: '210px' }}>
                    {message}
                </Alert>
            </Snackbar>
        </>
    )
}

export default FileUpload
