import React, { useState } from 'react'
import { IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Popover } from '@material-ui/core'
import { MENU_BAR, MENU_ICON } from '../../constant/drawerMenu'
import NotificationsIcon from '@material-ui/icons/Notifications'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import MenuIcon from '@material-ui/icons/Menu'
import {Link as RouterLink} from 'react-router-dom'
import { getSentenceCase } from '../../tools/stringFunc'

const styles = makeStyles((theme)=>({
    hoverButton:{
        '&:hover':{
            color: 'white',
            backgroundColor:'#3f51b5'
        }
    },
    hoverProfile:{
        '&:hover':{
            color: 'white',
            backgroundColor:'#3f51b5'
        }
    }
}))

const MenuMobile = (props) => {
    const [anchorEle, setAnchorEle] = useState(null)
    const [menuID, setMenuID] = useState(null)
    
    const handleMenuMobile = (event = null) => {
        if (event === null){
            setAnchorEle(null)
            setMenuID(null)
        } else {
            setAnchorEle(event.currentTarget)
            setMenuID('menu1234567890')
        }
    }

    const getPopoverPosition = () => ({
        anchorOrigin:{
            vertical: 'bottom',
            horizontal: 'right',
        },
        transformOrigin:{
            vertical: 'top',
            horizontal: 'right',
        }
    })
    
    const classes = styles()

    return(
        <>
        <IconButton color="inherit" component={RouterLink} to="/orders" className={classes.hoverProfile}>
            <NotificationsIcon/>
        </IconButton>
        <IconButton color="inherit" component={RouterLink} to="/profile" className={classes.hoverProfile}>
            <AccountCircleIcon/>
        </IconButton>
        <IconButton color="inherit" aria-describedby={menuID} onClick={event=>handleMenuMobile(event)}>
            <MenuIcon/>
        </IconButton>
        <Popover 
            id={menuID} 
            open={Boolean(anchorEle)}
            anchorEl={anchorEle} 
            onClose={()=>{handleMenuMobile()}}
            {...getPopoverPosition()}
            >
            <List>
                {MENU_BAR.map((menu,index)=>(
                    <ListItem key={menu} button component={RouterLink} to={`/${menu}`} className={classes.hoverButton} onClick={()=>{handleMenuMobile()}}>
                        <ListItemIcon>{MENU_ICON[index]}</ListItemIcon>
                        <ListItemText>{getSentenceCase(menu)}</ListItemText>
                    </ListItem>
                ))}
            </List>
        </Popover>
        <IconButton color="inherit" onClick={()=>{props.setOpenDialog(!props.openDialog)}}>
            <ExitToAppIcon/>
        </IconButton>
        </>
    )
}

export default MenuMobile