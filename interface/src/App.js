import React from "react";
import "./App.css";
import "./index.css";
import NavBar from "./Components/Navbar/Navbar";
import axioxDefault from "./api/axioxDefault";
import mathRound from "./Libs/mathRound";
import { Outlet } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getTagsAndGroupsQuery());
  // }, [dispatch]);

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
