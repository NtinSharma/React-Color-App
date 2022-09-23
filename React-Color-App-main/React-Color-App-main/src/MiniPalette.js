import React,{useState,useEffect} from 'react'
import { withStyles } from '@mui/styles';
import styles from './styles/MiniPaletteStyles'
import DeleteIcon from '@mui/icons-material/Delete';

//! As as props we are getting each a palette
function MiniPalettte(props) {
  // let intervalId;
  const [intervalId,setIntervalId] = useState(0);
  const {paletteName,emoji,colors,classes,openDialog} = props;
  const [Emoji,setEmoji] = useState(emoji[0]);
  const [isHovered,setIsHovered] = useState(false);
    const miniClrDivs = colors.map(color=>(<div style={{backgroundColor:color.color}} className={classes.box} key={color.name} id={color.name}></div>))
    const deletePalette = (e)=>{
      e.stopPropagation();
      //* In order to  delete a Palette we need to delete from the App.js so we have to make a delete function there & pass it down here
      openDialog(props.id);
    }
    const handleClick = ()=>{
      props.onClick(props.id)
    }
    const emojiChanger = ()=>{
      if(intervalId){
        // console.log(intervalId);
        clearInterval(intervalId);
        // console.log("Cleared the Interval")
      }
     
      setIntervalId(setInterval(()=>{
        setEmoji(emoji[Math.floor(Math.random()*emoji.length)]);
      },500));
      // console.log(intervalId);
    
    }
  
    const stopInterval = ()=>{
      // setIsHovered(false);
      clearInterval(intervalId);
      // console.log(intervalId);
      setEmoji(emoji[0]);
    }
    return (
        // * In this store a the Minipalette
        <div className={classes.root} onClick={handleClick} onMouseOver={emojiChanger} onMouseOut={stopInterval}>
              <DeleteIcon
          className={classes.deleteIcon}
          style={{ transition: "all 0.3s ease-in-out" }}
          onClick={deletePalette}
        />
            {/* In this div we are storing all the small colors  */}
          <div className={classes.colors}>
              {/* In this we render small colors */}
                {/* <img src={`https://source.unsplash.com/random/200x70`} alt="img"/> */}
                {miniClrDivs}
          </div> 
          {/* Here we Display all the text */}
          <h5 className={classes.title}>{paletteName} <span className={classes.emoji} >{Emoji}</span></h5>
        </div>
    )
}

export default withStyles(styles)(MiniPalettte);