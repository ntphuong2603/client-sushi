import { Box, Button, FormControlLabel, makeStyles, MenuItem, Switch, TextField } from '@material-ui/core'
import React from 'react'
import { getSentenceCase } from '../tools/stringFunc'
import AddCircleIcon from '@material-ui/icons/AddCircle'

const styles = makeStyles((theme)=>({
    root:{
        padding: theme.spacing(2,3)
    },
    sortName:{
        padding: theme.spacing(1,5)
    },
    sortBy:{
        margin: theme.spacing(0,3),
    },
}))

const TableOption = (props) => {
    const classes = styles()
    const { tableHeaders } = props
    const { sortName, handleSortName } = props
    const { sortBy, handleSortBy } = props
    const { open, setOpen } = props

    return(
        <Box display="flex" className={classes.root}>
            <Box flexGrow={1}>
                <TextField select
                    label="Item selection"
                    variant="outlined"
                    helperText="Please select header item to sort"
                    size="small"
                    onChange={(event)=>{handleSortName(event)}}
                >
                    {tableHeaders().map(item=>(
                        <MenuItem key={item.id} value={item.label}>{getSentenceCase(item.label)}</MenuItem>
                    ))}
                </TextField>
                {sortName && <FormControlLabel
                    value="Asc"
                    control={<Switch color="primary" onClick={()=>(handleSortBy())}/>}
                    label={`order by ${sortBy}`}
                    labelPlacement='end'
                    className={classes.sortBy}
                />}
            </Box>
            <Box>
                <Button size="large" color="primary" variant="contained" startIcon={<AddCircleIcon/>} onClick={()=>setOpen(!open)}>
                    Recepi
                </Button>
            </Box>
        </Box>
    )
}

export default TableOption;