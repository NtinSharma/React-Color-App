import React,{useState} from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Button from '@mui/material/Button';
import DraggableColorList from './DraggableColorList'
import {useNavigate} from 'react-router-dom'
import {arrayMoveImmutable} from 'array-move';
import PaletteFormNav from './PaletteFormNav'
import ColorPickerForm from './ColorPickerForm'
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import styles from './styles/NewPaletteFormStyles'
import seedClr from './seedColor'

// * We Have Imported the `Drawer` code from the material ui library. 

const drawerWidth = 400;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    height:"calc(100vh - 64px)",
    // height:"calc(100vh-64px)",
    flexGrow: 1,
    padding: "0",
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width:"100%",
  padding: theme.spacing(0, 1),
  // padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));



function NewPaletteForm(props) {
  const {palette,classes} = props;

    // const [clr,setClr] = useState("");
    const [newPalette,setNewPalette] = useState(seedClr[0].colors);
    // const [ClrName,setClrName] = useState("");
    // const [paletteName,setPaletteName] = useState("");
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);


    const navigate = useNavigate();
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    const addNewClr = (Item)=>{
        // const Item = {color:clr,name:ClrName}
        // console.log(Item);
        setNewPalette([...newPalette, Item])
    }
    // const handleChange = (e)=>{
    //     if(e.target.name==="ColorName"){
    //       setClrName(e.target.value);
    //     }
    // }
   

    const handleSubmit = (Palette)=>{
      // console.log(Palette);
      const palette = {
        paletteName:Palette.name,
        id: Palette.name.toLowerCase().replace(/ /g,"-"),
        emoji:Palette.emoji,
        colors:newPalette
      }
      // console.log(palette);
      props.addPalette(palette);
      navigate("/");
    }

    const removeColor = (colorName)=>{
       setNewPalette(newPalette.filter(clr=>clr.name!==colorName))
    }

    const onSortEnd = ({oldIndex, newIndex}) => {
      // this.setState(({items}) => ({
      //   items: arrayMove(items, oldIndex, newIndex),
      // }));
      setNewPalette(arrayMoveImmutable(newPalette, oldIndex, newIndex))
    };
    
    const randomColor = ()=>{
      //! flat() is used to make a single array out of many array Objects
      const allColors = seedClr.map(color=>(color.colors)).flat();
      let isDuplicateColor = true;
      let randNum;
      while(isDuplicateColor){
        randNum = Math.floor(Math.random() * allColors.length);
        isDuplicateColor = newPalette.some(clr=>clr.name===allColors[randNum].name);
      }
      setNewPalette([...newPalette,allColors[randNum]]);
    }
    
    const clearPalette = ()=>{
      setNewPalette([]);
    }

    // console.log(newPalette.length)
    const isFull = newPalette.length >=props.maxNum
    return (
      <Box sx={{ display: 'flex' }}>
          <CssBaseline />
        <AppBar position="fixed" open={open}   color='default'>  
        <PaletteFormNav open={open} handleSubmit={handleSubmit} palette={palette} handleDrawerOpen={handleDrawerOpen} />
        {/* <Typography variant="h6" noWrap component="div">
            Create a Palette
          </Typography> */}
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper:classes.drawerPaper
          }}
        >
          <DrawerHeader> 
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
            {/* <Typography variant="h6" noWrap component="div">
            Create a Palette
          </Typography> */}
          {/* <Divider /> */}
          <div className={classes.container}>
            <Typography variant='h4' gutterBottom>
              Design Your Palette
            </Typography>
          <div className={classes.buttons}>
          <Button variant="contained" color="secondary" onClick={clearPalette}  className={classes.button}>Clear Palette</Button>
          <Button variant="contained" color="primary" onClick={randomColor} disabled={isFull} className={classes.button}>Random Color</Button>
          </div>
          {/* Read the `react-color` docs to know how to use this */}
          <ColorPickerForm addNewClr={addNewClr} isFull={isFull} newPalette={newPalette}/>
          </div>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />     
           <DraggableColorList newPalette={newPalette} removeColor={removeColor} axis="xy" onSortEnd={onSortEnd} distance={20}/>
        </Main>
      </Box>
    );
}

NewPaletteForm.defaultProps = {
  maxNum:"20"
}
export default withStyles(styles)(NewPaletteForm);

