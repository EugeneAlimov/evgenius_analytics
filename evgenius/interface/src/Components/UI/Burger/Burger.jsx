import React from "react";
import { Button, Grid } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


const Burger = ({ ...props }) => {

    return (
        <Grid item xs={2.5}>
            <Button { ...props } variant="contained" startIcon={<MenuIcon />} color='success' >Open Menu</Button>
        </Grid>
    )
}

export default Burger
