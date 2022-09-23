import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import ColorBox from './ColorBox';
import {generatePalette} from './colorHelpers';
import Navbar from './Navbar'
import {Link} from 'react-router-dom'
import { withStyles } from '@mui/styles';
import styles from './styles/Palette'


function SingleColorPalette(props) {
    const {classes,seedClr} = props;
    const [format,setFormat] = useState("hex");

    const changeFormat = (e)=>{ 
        setFormat(e.target.value);
      }

    //! Same Code as In Palette
    const params = useParams();
    const {colorId,paletteId} = params;
    function findArray(paletteId){ 
        return seedClr.find((clr)=>{
          return clr.id===paletteId;
        })
      }
    const palette=generatePalette(findArray(paletteId));
    // console.log(palette);
    //! Ends Here
    function generateShades(palette,colorId){ 
        let shades =[];
        //* In this function we are picking out all the shades
        const allColors = palette.colors;
        //* [  50:[],100:[],200:[]....... ]
        for(let key in allColors){
            shades=shades.concat(
            allColors[key].filter(color=>(color.id===colorId))
            );
        }

        return shades.slice(1); //*This gives us array starting from lvl 100 cuz lvl is white.
    }
    const shades =generateShades(palette,colorId);
    // console.log(shades);
    const showClr = shades.map(shade=>(<ColorBox bgColor={shade[format]} name={shade.name} key={shade.name} isShowingFullPalette={false}/>))

    return (
        <div className={classes.palette}>
            <Navbar  format={format} changeFormat={changeFormat} isShowingAllColors={false}/>
            <div className={classes.color}>
                {showClr}
                <div className={classes.goBack}>
                    <Link to={`/palette/${paletteId}`}>Go Back</Link>
                </div>
            </div>
            <div className={classes.footer}>
                Made By Jayant <span className={classes.emoji}>💓</span>
            </div>
        </div>
    )
}

export default withStyles(styles)(SingleColorPalette)
