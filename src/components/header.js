import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import clsx from 'clsx'
import { LinkContainer } from 'react-router-bootstrap'
import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import LeftDrawer from './leftDrawer'
import { handleDrawer } from '../store/actions/actionIndex'
import NotificationsIcon from '@material-ui/icons/Notifications'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'

const Header = () => {
    const {isDrawerOpen, drawerWidth} = useSelector(state=>state.sites)
    const notifications = useSelector(state=>state.notifications)
    const dispatch = useDispatch()

    const styles = makeStyles((theme)=>({
        root:{
            flexGrow:1,
        },
        menuButton:{
            marginRight: theme.spacing(2),
        },
        title:{
            flexGrow:1,
        },
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        hoverButton:{
            '&:hover':{
                color: '#f50057'
            }
        }
    }))

    const classes = styles()

    return(
        <div className={classes.root}>
            <LeftDrawer/>
            <AppBar position="static" className={clsx(classes.appBar, {[classes.appBarShift] : isDrawerOpen})}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={()=>{dispatch(handleDrawer(isDrawerOpen))}}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h5" className={classes.title}>Mr. Sushi PEI</Typography>
                    <IconButton color="inherit">
                        <NotificationsIcon/>
                    </IconButton>
                    <LinkContainer to="/login" className={classes.hoverButton}>
                        <Button color="inherit">Login</Button>
                    </LinkContainer>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header