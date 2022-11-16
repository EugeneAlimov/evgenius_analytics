import './App.css';
import './index.css'
import NavBar from './Components/Navbar/Navbar';
import { Container, Box, Grid } from '@mui/material';
import mathRound from './Libs/mathRound';
import { Outlet } from 'react-router-dom'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

function App() {

  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box>
          <NavBar />
          <Container maxWidth={false}>
            <Grid container
              paddingTop={0}
              marginTop={0}
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
            </Grid>
          </Container>
        </Box>
      </LocalizationProvider>
      <Outlet />
    </div>
  );
}

export default App;
