import React,{useState} from 'react';
import Navbar from './Navbar'
import ColorBox from './ColorBox'
import {useParams} from 'react-router-dom'
import {generatePalette} from './colorHelpers';
// import seedClr from './seedColor'
import { withStyles } from '@mui/styles';
import styles from './styles/Palette'


function Palette(props) {
  // console.log(props);
  const {classes,seedClr} = props;
   const params = useParams();
   const id = params.id;
   function findArray(id){ 
     return seedClr.find((clr)=>{
       return clr.id===id;
     })
   }
   const palette=generatePalette(findArray(id));
  //  console.log(palette);
   const [format,setFormat] = useState("hex");
   const [level,setLevel] = useState(500);
   const changeFormat = (e)=>{ 
     setFormat(e.target.value);
   }
  const color = palette.colors[level].map(color=>(<ColorBox bgColor={color[format]} name={color.name} key={color.id} paletteId={id} colorId={color.id} isShowingFullPalette={true}></ColorBox>))
  const handleChange =(value)=>{ 
    // console.log(value);
    setLevel(value)
  }
  return <div className={classes.palette}>
      {/* Navbar */}
      <Navbar level={level} handleChange={handleChange} format={format} changeFormat={changeFormat} isShowingAllColors/>
      <div className={classes.color}>
          {/* bunch of Color Boxes */}
          {color}
      </div>
      {/* Footer */}
      <div className={classes.footer}>
        Made By Jayant <span className={classes.emoji}>💓</span>
      </div>
  </div>;
}

export default withStyles(styles)(Palette);
