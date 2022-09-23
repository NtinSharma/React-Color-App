import React,{useState} from 'react'

import {Link} from 'react-router-dom'
import { withStyles } from '@mui/styles';

import Slider from "rc-slider";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import "rc-slider/assets/index.css";
import styles from './styles/Navbar';



function Navbar(props) {
    const [open,setOpen] = useState(false);
    const [format,setFormat]  = useState("hex");
    const {level,handleChange,isShowingAllColors,classes} = props;
    const handleFormat = (e)=>{ 
        setFormat(e.target.value);
        setOpen(true);
        props.changeFormat(e);
    }
    const handleClose = ()=>{ 
        setOpen(false);
    }
    return (
        <header className={classes.Navbar}>
            <div className={classes.logo}>
                <Link to="/">reactColorPicker</Link>
            </div>
            {isShowingAllColors && 
            <div >
                <span className={classes.barlow}>Level : {level}</span>
                <div className={classes.Slider}>
                    <Slider min={100} max={900} step={100} defaultValue={level} onAfterChange={handleChange}/>
                    </div>
            </div>
            }
            <div className={classes.selectContainer}>
                <Select value={format} onChange={handleFormat} className={classes.barlow}>
                    <MenuItem className={classes.barlow} value="hex">HEX - #fff</MenuItem>
                    <MenuItem className={classes.barlow} value="rgb">RGB - rgb(255,255,255)</MenuItem>
                    <MenuItem className={classes.barlow} value="rgba">RGBA - rgba(255,255,255,1.0) </MenuItem>
                </Select>
            </div>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                message="Format Changed 🎉"
                onClose={handleClose}
                action={[
                    <IconButton onClick={handleClose} color='inherit' key="close">
                        <CloseIcon/>
                    </IconButton>
                ]}
            />
        </header>
    )
}

export default withStyles(styles)(Navbar)
