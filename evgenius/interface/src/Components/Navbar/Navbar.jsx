import React from "react";
import { useNavigate } from "react-router-dom";
import classes from './NavBar.module.css'
import { Grid, Typography } from '@mui/material';
import { NavLink, Outlet } from "react-router-dom";
import ResponsiveDialog from "../../Components/UI/Dialog/DialogComponent";
import { logout } from "../../api/userApi";
import { useDispatch, useSelector } from 'react-redux';

const NavBar = () => {

    const isLoggedIn = useSelector((state) => state.login.isLoggedIn)
    const refreshToken = useSelector((state) => state.login.token.refresh)
    const userName = useSelector((state) => state.login.user.username)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandler = () => {
        dispatch(logout({ refresh: refreshToken }))
        navigate('/')
    }

    return(
        <Grid item xs={12}>
            <div className={classes.Wraper}>
                <Typography variant="button" display="block" sx={{ color: 'white', fontSize: 30, ml: 2 }} >
                    Evgenius
                </Typography>
                <ul className={classes.Ul}>
                    <li>
                        <NavLink to='/'
                            className={({ isActive }) => isActive ? classes.LinkItemActive : classes.LinkItem}
                        >
                            <Typography variant="overline" display="block" sx={{ mr: 1, fontSize: 18, }} >
                                Analityc
                            </Typography>
                        </NavLink>
                    </li>
                    <li >
                        <a href='/admin/' className={classes.LinkItem} >
                            <Typography variant="overline" display="block" sx={{ ml: 1, mr: 1, fontSize: 18, }} >
                                Admin
                            </Typography>
                        </a>
                    </li>
                    <li>
                        <NavLink to='/settings'
                            className={({ isActive }) => isActive ? classes.LinkItemActive : classes.LinkItem}
                        >
                            <Typography variant="overline" display="block" sx={{ ml: 1, mr: 1, fontSize: 18, }} >
                            Settings
                            </Typography>
                        </NavLink>
                    </li>
                    {
                    isLoggedIn
                    ?
                    <>
                        <li>
                            <NavLink to='/user' className={({ isActive }) => isActive ? classes.LinkItemActive : classes.LinkItem} >
                                <Typography variant="overline" display="block" sx={{ ml: 1, mr: 1, fontSize: 18, }} >
                                    {userName} Page
                                </Typography>
                            </NavLink>
                        </li>
                        <li>
                            <Typography className={classes.LinkItem} variant="overline" display="block"
                                sx={{ ml: 1, fontSize: 18, cursor: 'pointer' }}
                                onClick={logoutHandler}
                            >
                                Log out
                            </Typography>
                        </li>
                    </>
                        :
                    <li>
                        <ResponsiveDialog/>
                    </li>
                    }
                    </ul>
                <Outlet />
            </div>
        </Grid>
    )
}

export default NavBar
