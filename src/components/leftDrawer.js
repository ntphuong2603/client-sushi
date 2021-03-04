import { Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core'
import React from 'react'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { useDispatch, useSelector } from 'react-redux'
import { handleDrawer } from '../store/actions/actionIndex'
import {Link as RouterLink} from 'react-router-dom'
import { drawerMenu, menuIcons } from '../constant/drawerMenu'
import { getSentenceCase } from '../tools/stringFunc'

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
            {drawerMenu.map((menu,index)=>(
                <>
                    <Divider/>
                    <List key={menu}>
                        <ListItem button component={RouterLink} to={`/${menu}`} className={classes.hoverButton}>
                            <ListItemIcon>{menuIcons[index]}</ListItemIcon>
                            <ListItemText primary={getSentenceCase(menu)}/>
                        </ListItem>
                    </List>
                </>
            ))}
            <Divider/>
            
        </Drawer>
    )
}

export default LeftDrawer