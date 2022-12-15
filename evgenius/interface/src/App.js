import "./App.css";
import "./index.css";
import NavBar from "./Components/Navbar/Navbar";
import mathRound from "./Libs/mathRound";
import { Outlet } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function App() {
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <NavBar />
        <div style={{ marginTop: "76px" }}></div>
      </LocalizationProvider>
      <Outlet />
    </div>
  );
}

export default App;
