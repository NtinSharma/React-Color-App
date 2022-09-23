import sizes from './sizes'
import bg from './bg.svg'
const styles = {
    //! To use the Classes of the same name we have to define them in the Global Styles 
    //* These Styles are applied when we are deleting something.
    "@global": {
        ".fade-exit": {
            opacity: 1,
        },
        ".fade-exit-active": {
            opacity: 0,
            transition: "opacity 500ms ease-out",
        },
    },
    root:{
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems: "flex-start",
        // backgroundColor:"blue", 
        backgroundColor: "#0E00AA",
        backgroundImage: `url(${bg})`,
        overflow:"scroll"
    },
    container:{
        display:"flex",
        flexDirection:"column",
        alignItems: "flex-start",
        width:"50%",
        flexWrap:"wrap",
        [sizes.down("lg")]:{
            width:"80%"
        },
        [sizes.down("xs")]:{
            width:"75%"
        }
    },
    nav:{
        margin:"2rem 1.5rem 0 0 ",
        color:"white",
        width:"100%",
        display:"flex",
        justifyContent:"space-between",
        alignItems: "center",
        "& h1":{
            fontFamily:"barlow !important",
            fontWeight:"600 !important",
            color: "#fff",
            letterSpacing: "2.5px",
            textShadow: "0 1px, 1px 0, 1px 1px",
            transition: "all .2s",
            transformOrigin: "0 50%",
            lineHeight:"1.2"
        },
        "& a":{
            color:"white"
        },
        // "& h1:hover":{
        //     transform:"scale(1.5)"
        // }
    },
    palette:{
        boxSizing:"border-box",
        width:"100%",
        display:"grid",
        gridTemplateColumns:"repeat(3,30%)",
        gridGap:"2.5rem",
        [sizes.down("md")]:{
            gridTemplateColumns: "repeat(2,50%)"
        },
        [sizes.down("xs")]:{
            gridTemplateColumns:"repeat(1,100%)",
            gridGap:"1rem"
        }
    }

}

export default styles;