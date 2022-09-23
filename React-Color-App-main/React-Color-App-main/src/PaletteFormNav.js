import React,{useState,useEffect} from 'react'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import { withStyles } from '@mui/styles';
import PaletteMetaForm from './PaletteMetaForm';
import styles from './styles/PaletteFormNavStyles'
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";

function PaletteFormNav(props) {
    const {open,handleSubmit,palette,handleDrawerOpen,classes} = props;
    const [formShowing,setFormShowing]=useState(false);

    const showForm = ()=>{
      setFormShowing(!formShowing);
    }
    return (
        <div className={classes.root}>
         
            {/* AppBar is Navbar */}
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
                {/*In the Icon Button we can place the Icons */}
              <AddToPhotosIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" color='inherit' classeName={classes.barlow}>
              Create a Palette
            </Typography>
          </Toolbar>
            <div className={classes.navBtns}>
            <Link to="/">
              <Button variant="contained" color="secondary"  className={classes.button}>Go Back</Button>
              </Link>
              <Button variant="contained" color="primary"onClick={showForm}  className={classes.button}>
                Save
              </Button>
            </div>
            {formShowing && 
            (<PaletteMetaForm palette={palette} handleSubmit={handleSubmit} showForm={showForm}/>)
            }
        </div>
    )
}

export default withStyles(styles)(PaletteFormNav)

