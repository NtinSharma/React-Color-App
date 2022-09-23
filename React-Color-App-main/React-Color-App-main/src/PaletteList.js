import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import MiniPalette from './MiniPalette'
import { withStyles } from '@mui/styles';
import {Link} from 'react-router-dom'
import styles from './styles/PaletteList.js'
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { blue,red } from '@mui/material/colors';
import HornSound from './audioClips/HornSound.mp3'
import {Howl, Howler} from 'howler';


//* App Structure 
//* root <- In this include the photo & the Palettes
//*     container <- In this the mini Palette exist (width is 50% of size)
//*         nav <- Header of the page (contains the name & create new palette link)
//*         palette <- Wraps all the Divs , use Grid to wrap
//*                    Ratio -> 30% 5%(gap) 30% 5%(gap) 30%

function PaletteList(props) {
    const [open,setOpen] = useState(false)
    const [deleteId,setDeleteId] = useState('')
    const {palette,classes,deletePalette} = props;
    const navigate = useNavigate();
    const [isClicked, setIsClicked] = useState(false);

    let sound = new Howl({
      src: [HornSound],
      html5: true
    });
 
    const handleClick = (id)=>{ 
        // console.log("Clicked")
        navigate(`/palette/${id}`);
    }  

    const toggleOpen = (id)=>{
        setDeleteId(id);
        setOpen(!open);
    }

    const handleDelete = ()=>{
        deletePalette(deleteId);
        setDeleteId(" ");
        setOpen(false);
    }

    const Header = ()=>{
      setIsClicked(true);
      sound.play();
      setTimeout(()=>{
        setIsClicked(false);
      },300)
    }

    const headerStyles = {transform:isClicked? "scale(1.4)" :" "}

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.nav}>
                    <h1 onClick={Header} style={headerStyles}>React Colors</h1>
                    <Link to="/palette/new">Create New Palette</Link>
                </div>
                <div className={classes.palette}>
                    {/* Here we are using the `React Transition Group` for transitions */}
                    <TransitionGroup component={null}>
                    {palette.map(clr=>(
                        <CSSTransition key={clr.id} classNames="fade" timeout={5000}>
                                <MiniPalette
                                    {...clr}
                                    // onClick={()=>{handleClick(clr.id)}}
                                    onClick={handleClick}
                                    openDialog={toggleOpen}
                                    // handleDelete={deletePalette}
                                    key={clr.id}
                                    id={clr.id}
                                />
                        </CSSTransition>
                                    ))}
                    </TransitionGroup>
                </div>
                <Dialog open={open} onClose={toggleOpen}>
      <DialogTitle>Delete the Palette</DialogTitle>
      <List sx={{ pt: 0 }}>
       
          <ListItem button onClick={handleDelete}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[700] }}>
                <CheckIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Delete" />
          </ListItem>
          <ListItem button onClick={toggleOpen}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: red[100], color: red[700] }}>
                <CloseIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Cancel" />
            </ListItem>
    </List>
    </Dialog>
            </div>
        </div>
    )
}

export default withStyles(styles)(PaletteList);






