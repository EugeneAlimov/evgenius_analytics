import React, { useRef } from "react";
import Grid2 from '@mui/material/Unstable_Grid2'
import LineChart from "../Components/Charts/LineChart";
import DuoghntChart from "../Components/Charts/DoughnutChart";
import { Box } from "@mui/material";



const CommonDashBoard = () => {

    return (
        <Grid2 container>
            <Grid2 xs={12}>
                <Box sx={{
                    display: 'inline-flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    alignContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    justifyContent: 'space-around',
                    }}
                >
                    <Box sx={{ boxShadow: 1, margin: 2, padding: '16px', backgroundColor: '#f9f8f8', width:'18vw' }}>
                        <DuoghntChart  />
                    </Box>
                    <Box sx={{ boxShadow: 1, margin: 2, padding: '16px', backgroundColor: '#f9f8f8', width:'18vw' }}>
                        <DuoghntChart  />
                    </Box>
                    <Box sx={{ boxShadow: 1, margin: 2, padding: '16px', backgroundColor: '#f9f8f8', width:'18vw' }}>
                        <DuoghntChart  />
                    </Box>
                </Box>
            </Grid2>
            <Grid2 xs={6}>
                <Box sx={{ boxShadow: 1, margin: 2, backgroundColor: '#f9f8f8', }}>
                    <LineChart />
                </Box>
            </Grid2>
            <Grid2 xs={6}>
                <Box sx={{ boxShadow: 1, margin: 2, backgroundColor: '#f9f8f8', }}>
                    <LineChart />
                </Box>
            </Grid2>
        </Grid2>
    )
}

export default CommonDashBoard