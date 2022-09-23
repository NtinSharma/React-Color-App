import React from 'react'
import { withStyles } from '@mui/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import {SortableElement} from 'react-sortable-hoc';
import styles from './styles/DraggableColorBoxStyles'

const DraggableColorBox =  SortableElement((props)=>{
    const {classes,name,color} = props;
    const handleClick = ()=>{
        props.handleClick();
    }
    return (
        <div className={classes.root} style={{backgroundColor:color}}>
            <div className={classes.boxContent}>
                <span>
                    {name}
                </span>
                <DeleteIcon onClick={handleClick}/>
            </div>
        </div>
    )
})
export default withStyles(styles)(DraggableColorBox)
