import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GridList, GridListTile, GridListTileBar, IconButton, makeStyles } from '@material-ui/core'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import * as menuAction from '../../../store/actions/menu-action'

const styles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon:{
        color:'white'
    },
  }));

const GridGatogory = () => {
    const classes = styles()
    const menus = useSelector(state=>state.menus)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(menuAction.getAllMenus())
    },[])

    return(
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={3.5}>
                {menus.length && menus.map((item) => (
                    <GridListTile key={item._id}>
                        <img src={`https://picsum.photos/350?random=${item.code}`} alt={item.code} />
                        <GridListTileBar
                            title={item.name}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            actionIcon={
                                <IconButton aria-label={`Price ${item.price}`} >
                                    <StarBorderIcon className={classes.title} />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    )
}

export default GridGatogory;