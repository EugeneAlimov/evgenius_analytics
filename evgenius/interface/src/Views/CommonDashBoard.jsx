import React from "react";
import Grid2 from '@mui/material/Unstable_Grid2'
import LineChart from "../Components/Charts/LineChart";
import DuoghntChart from "../Components/Charts/DoughnutChart";
import { Box } from "@mui/material";

let queryPrime = 'r._field == "PO_Zone 1 Pyrometer - Prime Oven" or r._field == "PO_Zone 2 Pyrometer - Prime Oven" or r._field == "PO_Zone 3 Pyrometer - Prime Oven"'
let queryFinish = 'r._field == "FO_Zone 1 Pyrometer - Finish Oven" or r._field == "FO_Zone 2 Pyrometer - Finish Oven" or r._field == "FO_Zone 3 Pyrometer - Finish Oven"'
let titlePrime = 'Prime temperature'
let titleFinish = 'Finish temperature'
const labelPrime = {
    '1': 'Zone1',
    '2': 'Zone2',
    '3': 'Zone3',
}
const labelFinish = {
    '1': 'Zone1',
    '2': 'Zone2',
    '3': 'Zone3',
}


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
                    <LineChart title={titlePrime} label={labelPrime} query={queryPrime} />
                </Box>
            </Grid2>
            <Grid2 xs={6}>
                <Box sx={{ boxShadow: 1, margin: 2, backgroundColor: '#f9f8f8', }}>
                    <LineChart title={titleFinish} label={labelFinish} query={queryFinish} />
                </Box>
            </Grid2>
        </Grid2>
    )
}

export default CommonDashBoard