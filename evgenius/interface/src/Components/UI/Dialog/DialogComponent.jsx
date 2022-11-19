import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import classes from '../../../Components/Navbar/NavBar.module.css'
import { Typography } from '@mui/material';
import { login } from '../../../api/userApi';
import { useNavigate } from 'react-router-dom';

export default function FormDialog() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleClickOpen = () => {
    setOpen(true)
  };
  
  const handleClose = () => {
    if (username !== '') {
      dispatch(login({ username: username, password: password }))
    }
    setUsername('')
    setPassword('')
    setOpen(false)
  }

  return (
    <div>
    <Typography className={classes.LinkItem}
      variant="overline"
      display="block"
        sx={{
        fontSize: 18,
        cursor: 'pointer',
      }}
      onClick={handleClickOpen}>
      Log in
    </Typography>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Log In</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter your email and password to log in.
          </DialogContentText>
          <TextField
            value={username}
            onChange={(event) => setUsername(event.currentTarget.value)}
            autoFocus
            margin="dense"
            label="Login name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Login</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}