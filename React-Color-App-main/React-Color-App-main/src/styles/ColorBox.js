import chroma from 'chroma-js'
import sizes from "./sizes";

const styles = {
    // barlow:{
    // }
    boxContent:{
        fontFamily:'Barlow',
        fontWeight:"600",
        position: "absolute",
        left: "10px",
        bottom: "10px",
        color: "#fff",
        letterSpacing: "1px",
        fontSize: "1rem",
        textTransform: "uppercase",
        "& button":{
            fontFamily:"inherit"
        }
    },
    colorBox:{
        marginBottom: "-3.5px",
        width:"20%",
        height:props=> props.isShowingFullPalette?"25%" : "50%",
        display:"inline-block",
        position:"relative",
        cursor: "pointer",
        "&:hover button":{
            opacity:"1"
        },
        // "@media (max-width: 900px)":{
        //     width:"50%",
        //     height:props=> props.isShowingFullPalette?"10%" : "50%",
        // }
        [sizes.down("lg")]: {
            width: "25%",
            height: props => (props.showingFullPalette ? "20%" : "33.3333%")
          },
        [sizes.down("md")]: {
            width: "50%",
            height: props => (props.showingFullPalette ? "10%" : "20%")
        },
        [sizes.down("xs")]: {
            width: "100%",
            height: props => (props.showingFullPalette ? "5%" : "10%")
        }
    },
    ClrName:{ 
        color: props=> chroma(props.bgColor).luminance()>0.5 ? "rgba(0,0,0,0.7)" : "white" 
    },
    seeMore:{ 
        color: props=> chroma(props.bgColor).luminance()>0.5 ? "rgba(0,0,0,0.7)" : "white",
        backgroundColor: "rgba(255,255,255,.3)",
        position: "absolute",
        right: "0px",
        bottom: "0px",
        width: "70px",
        height: "30px",
        lineHeight: "30px",
        textTransform: "uppercase",
        textAlign: "center",
        cursor: "pointer",
    },
    copyButton:{ 
        color: props=> chroma(props.bgColor).luminance()>0.5 ? "rgba(0,0,0,0.7)" : "white",
        backgroundColor: "rgba(255,255,255,.3)",
        width: "100px",
        height: "30px",
        display: "inlineBlock",
        position: "absolute",
        top: "50%",
        left: "50%",
        marginLeft: "-50px",
        marginTop: "-15px",
        textAlign: "center",
        textTransform: "uppercase",
        border: "0px",
        cursor: "pointer",
        lineHeight: "30px",
        textDecoration: "none",
        opacity:"0"
    },
    copyOverlay:{
        opacity:"0",
        zIndex:"0",
        height:"100%",
        width:"100%",
        transition: "transform 0.6s ease-in-out",
    },
    showOverlay:{ 
        opacity:"1",
        transform:"scale(50)", 
        zIndex:"10",
        position: "absolute",
    },
    overlayText:{
        position:"fixed",
        top:"0px",
        bottom:"0px",
        left:"0px",
        right:"0px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection: "column",
        opacity:"0",
        transform:"scale(0.1)",
        color:"white",
        "& h1":{ 
            width:"100%",
            backgroundColor: "rgba(255,255,255,.2)",
            fontWeight: "400",
            fontSize:"5rem",
            textAlign:"center",
            marginBottom:"0px",
            [sizes.down("xs")]: {
                fontSize: "6rem"
              }
        },
        "& p":{ 
            marginTop:"0px",
            fontWeight:"200",
        }
    },
    showText:{ 
        opacity:"1",
        transform:"scale(1)",
        zIndex:"20",
        transition: "all 0.4s ease-in-out",
        transitionDelay:"0.3s",
        }
}

export default styles