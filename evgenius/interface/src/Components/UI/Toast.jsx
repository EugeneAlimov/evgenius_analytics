import React from "react";
import { Button, Snackbar } from '@mui/material'

const Toast = ({ message }) => {

    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
      });
    
      const { vertical, horizontal, open } = state;
    
      const handleClick = (newState) => () => {
        setState({ open: true, ...newState });
      };
    
      const handleClose = () => {
        setState({ ...state, open: false });
      };
    
      const buttons = (
        <React.Fragment>
          <Button
            onClick={handleClick({
              vertical: 'top',
              horizontal: 'right',
            })}
          >
            Top-Right
          </Button>
        </React.Fragment>
      );

    return (
        <div>
        {buttons}
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            message={message}
            key={vertical + horizontal}
        />
        </div>
    )
}

export default Toast