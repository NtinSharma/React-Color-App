import sizes from "./sizes";

const styles = {
    Navbar:{
        display: "flex",
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '6vh',
    },
    logo:{
        marginRight: '15px',
        padding: '0 13px',
        fontSize: '22px',
        backgroundColor: '#eceff1',
        fontFamily: 'Roboto',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        "& a":{
            textDecoration: 'none',
            color: 'black',
        },
        [sizes.down("xs")]: {
            display: "none"
          }
    },
    Slider:{
        width: '340px',
        margin: '0px 10px',
        display: 'inline-block',
        //  !It is the path the handle have Covered 
        "& .rc-slider-track":{
            backgroundColor:"transparent"
        }, 
        // !It is the Full path  
        "& rc-slider-rail":{
            height:"8px"
        },
        " & .rc-slider-handle, .rc-slider-handle:focus, .rc-slider-handle:active, .rc-slider-handle:hover ":
        {
            backgroundColor:"green",
            outline:"none",
            border:"2px solid green",
            boxShadow:"none"
        },
        [sizes.down("sm")]: {
            width: "150px"
          }
    },
    selectContainer:{
        marginLeft: 'auto',
        marginRight: '1rem',
        
    },
    barlow:{
        fontFamily:'Barlow !important',
        fontWeight:"600 !important",
    }
    
}



export default styles