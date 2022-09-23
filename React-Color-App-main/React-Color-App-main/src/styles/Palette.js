import sizes from "./sizes";

const styles = {
    palette:{
      height:"100vh",
      display:"flex",
      flexDirection: "column",
    },
    color:{
      height:"90%"
    },
    footer:{
      height:"5vh",
      backgroundColor:"white",
      display:"flex",
      justifyContent:"flex-end",
      alignItems:"center",
      fontWeight:"600",
      color:"#000"
    },
    emoji:{
      fontSize:"1.5rem",
      margin:"0 0.75rem"
    },
    goBack:{
        marginBottom: "-3.5px",
        width:"20%",
        height:"50%",
        display:"inline-block",
        position:"relative",
        cursor: "pointer",
        backgroundColor:"black",
        "& a":{
            backgroundColor: "rgba(255,255,255,.3)",
            color:"white",
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
        },
        [sizes.down("lg")]: {
          width: "25%",
          height: "33.3333%"
        },
        [sizes.down("md")]: {
          width: "50%",
          height: "20%"
        },
        [sizes.down("xs")]: {
          width: "100%",
          height: "10%"
        }
    }
}

export default styles