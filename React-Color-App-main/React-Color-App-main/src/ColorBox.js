import React,{useState} from 'react'
import CopytoClipboard from "react-copy-to-clipboard"
import {Link} from 'react-router-dom'
import { withStyles } from '@mui/styles';
import styles from './styles/ColorBox'
import {Howl, Howler} from 'howler';
import CopySound from "./audioClips/CopySound.m4a"



function ColorBox(props) {
    const [isCopied,setIsCopied] = useState(false);
    const {name,bgColor,classes,isShowingFullPalette} = props;

    let sound = new Howl({
        src: [CopySound],
        html5: true
      });
    const handleCopy = ()=>{ 
        console.log("handleCopy called")
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1500);
        setTimeout(() => {
            sound.play();
        },390)
        // sound.fade(1, 0, 1000, sound1);
    }
    //* console.log(chroma(bgColor).luminance())
    //* If the Color is white then it will give us value 1 & for black 0.
    //* So if our value got greater than 5 then we will changing the text color to greyish
    // const isLight = chroma(bgColor).luminance()>0.5;
    const toShow = isCopied===true? true : false ;
    const Text = ["GOT IT!","PASTE ME!","WILL DO!","It'll ROCK!","COPIED!"];
    const textToShow = Text[Math.floor(Math.random()*Text.length)];
    return (
        <CopytoClipboard text={bgColor} onCopy={handleCopy}>
        <div className={classes.colorBox} style={{backgroundColor:bgColor}}>
            <div className={`${classes.copyOverlay}  ${toShow && classes.showOverlay}`} style={{backgroundColor:bgColor}}></div>
            <div className={`${classes.overlayText} ${toShow && classes.showText}`}>
                <h1>{textToShow}</h1>
                <p className={classes.ClrName}>{bgColor}</p>
            </div>
            <div className="copy-container">
                {/*As the user Hover over the colorbox so it should show the Copy button, So all other things will be in this div */}
            <div className={classes.boxContent}>
                <span className={classes.ClrName}>{name}</span>
            </div>  
            <button className={classes.copyButton}>Copy</button>
            </div>
            {/* //! As we click on the More Option the Copy event is also triggered so to stop that we have to use the StopPropagation (It will stop the further events from happening) */}
            {/* //! To Link the More Button we need the Palette Id & Color ID
                //* So we need to pass them as a props or we can also use the useParams hook but then also we have to pass the color id
            */}
            {isShowingFullPalette &&
            <Link to={`/palette/${props.paletteId}/${props.colorId}`} onClick={e=>e.stopPropagation()}>
            <span className={classes.seeMore}>More</span>
            </Link>
            }
        </div>
        </CopytoClipboard>

    )
}

export default withStyles(styles)(ColorBox)
