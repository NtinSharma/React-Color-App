import React from 'react'
import DraggableColorBox from './DraggableColorBox'
import {SortableContainer} from 'react-sortable-hoc'

const DraggableColorList= SortableContainer((props)=>{
    const {removeColor,newPalette} = props;
    // console.log(newPalette);
    // console.log(newPalette);
    return (
        <div style={{height:"100%",marginTop:"3px",overflow:"scroll"}}>
            {newPalette.map((color, i)=>(
                <DraggableColorBox index={i} key={color.name} color={color.color} name={color.name} handleClick={()=>{removeColor(color.name)}}/>
            ))} 
        </div>
    )
});

export default DraggableColorList
