import React, { useState } from "react";
import { Stack, TextField, Popper, Fade, Button, Paper } from "@mui/material";


const SaveSetComponent = ({
  closePopperHandle,
  isPopOpen,
  popAnchorEl,
  popPlacement,
}) => {

  const [datasetName, setDatasetName] = useState('')

  return (
    <Popper open={ isPopOpen } anchorEl={popAnchorEl} placement={popPlacement} transition >
      {({ TransitionProps }) => (
      <Fade {...TransitionProps} timeout={350}>
        <Paper sx={{ p: 2, m: 2  }} elevation={10}>
          <Stack spacing={2}>
            <TextField
              value={datasetName}
              onChange={(event) => (setDatasetName(event.currentTarget.value))}
              id="outlined-search"
              label="Enter dataset name"
              type="search"
              size="large"
              autoFocus={true}
            />
            <Button
              onClick={() => {
                closePopperHandle(datasetName)
                setDatasetName('')
                }
              }
              sx={{ width: '100%', height: '50px' }}
              variant="contained" size="large"
            >
        Save
            </Button>
            <Button
              onClick={() => {
                closePopperHandle()
                setDatasetName('')
                }
              }
              sx={{ width: '100%', height: '50px' }}
              variant="contained" size="large"
            >
        Cansel
            </Button>
          </Stack>
        </Paper>
      </Fade>
    )}
  </Popper>
  )
}

export default SaveSetComponent