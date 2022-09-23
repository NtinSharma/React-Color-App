import sizes from "./sizes";
import chroma from 'chroma-js'
const styles = {
    root:{
        fontFamily:'Barlow !important',
        fontWeight:"600 !important",
        marginBottom: "-2.5px",
        width:"20%",
        height:"25%",
        display:"inline-block",
        position:"relative",
        cursor: "pointer",
        "&:hover svg":{
            // color:"white"
        color: props=> chroma(props.color).luminance()>0.5 ? "rgba(0,0,0,0.7)" : "white",
            // color:"rgba(255,255,255,.5)",
            transform:"scale(1.5)"
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: "20%"
          },
          [sizes.down("md")]: {
            width: "50%",
            height: "10%"
          },
          [sizes.down("sm")]: {
            width: "100%",
            height: "5%"
          }
      
    },
    boxContent:{
        width:"100%",
        position: "absolute",
        left: "10px",
        bottom: "10px",
        // color: "#fff",
        letterSpacing: "1px",
        fontSize: "1rem",
        textTransform: "uppercase",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        color: props=> chroma(props.color).luminance()>0.5 ? "rgba(0,0,0,0.7)" : "white",
        marginBottom: "-3.75px",
        "& svg":{
            marginRight:"12px",
            transition:"all 0.1s ease-in-out"
        },
        [sizes.down("sm")]: {
            top:"5px"
        }
    }
}

export default styles