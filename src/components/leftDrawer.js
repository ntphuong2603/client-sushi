import { Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core'
import React from 'react'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu'
import ListAltIcon from '@material-ui/icons/ListAlt'
import DescriptionIcon from '@material-ui/icons/Description'
import { useDispatch, useSelector } from 'react-redux'
import { handleDrawer } from '../store/actions/actionIndex'
import {Link as RouterLink} from 'react-router-dom'

const LeftDrawer = () => {
    const { isDrawerOpen, drawerWidth } = useSelector(state=>state.sites)
    const dispatch = useDispatch()

    const styles = makeStyles((theme)=>({
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper:{
            width: drawerWidth,
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
        hoverButton:{
            '&:hover':{
                color: 'white',
                backgroundColor:'#3f51b5'
            }
        }
    }))

    const classes = styles()

    return(
        <Drawer anchor="left" variant="persistent" open={isDrawerOpen} className={classes.drawer} classes={{paper:classes.drawerPaper}}>
            <div className={classes.drawerHeader}>
                <IconButton onClick={()=>{dispatch(handleDrawer(isDrawerOpen))}}>
                    <ChevronLeftIcon/>
                </IconButton>
            </div>
            <Divider/>
            <List>
                <ListItem button component={RouterLink} to="/orders" className={classes.hoverButton}>
                    <ListItemIcon className={classes.hoverButton}><ListAltIcon/></ListItemIcon>
                    <ListItemText primary={'Orders'}/>
                </ListItem>
            </List>
            <Divider/>
            <List>
                <ListItem button component={RouterLink} to="/menus" className={classes.hoverButton}>
                    <ListItemIcon><RestaurantMenuIcon/></ListItemIcon>
                    <ListItemText primary={'Menus'}/>
                </ListItem>
            </List>
            <Divider/>
            <List>
                <ListItem button component={RouterLink} to="/reports" className={classes.hoverButton}>
                    <ListItemIcon><DescriptionIcon/></ListItemIcon>
                    <ListItemText primary={'Reports'}/>
                </ListItem>
            </List>
            <Divider/>
        </Drawer>
    )
}

export default LeftDrawer