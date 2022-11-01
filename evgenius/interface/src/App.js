import './App.css';
import './index.css'
import NavBar from './Components/Navbar/Navbar';
import { Container, Box, Grid } from '@mui/material';

import { Routes, Route } from 'react-router-dom'
import Analytic from './Views/Analityc';
import Settings from './Views/Settings';
import User from './Views/User';
import PageNotFound from './Views/PageNotFound';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

function App() {

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <div className="App">
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
        <Routes>
            <Route path="/" element={<Analytic  />} />
            <Route path="settings" element={<Settings />} />
            <Route path="/user" element={<User />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Box>
    </div>
    </LocalizationProvider>
  );
}

export default App;
