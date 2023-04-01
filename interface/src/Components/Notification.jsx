import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({alertOpen, setAlertStateHandler, alertMessage}) {

  return (
    <div>
      <Dialog
        open={alertOpen}
        onClose={() => {setAlertStateHandler(false)}}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'You fogot something'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {alertMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {setAlertStateHandler(false)}} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
