import React,{useState,useEffect} from 'react'
import {ChromePicker} from 'react-color'
import Button from '@mui/material/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { withStyles } from "@material-ui/core/styles";
import styles from './styles/ColorPickerFormStyles'

function ColorPickerForm(props) {
    const [clr,setClr] = useState("teal");
    const [ClrName,setClrName] = useState("");
    const {isFull,addNewClr,newPalette,classes} = props

    const handleChange = (e)=>{
        if(e.target.name==="ColorName"){
          setClrName(e.target.value);
        }
    }

    const handleSubmit = ()=>{
        const Item = {color:clr,name:ClrName}
        addNewClr(Item);
        setClrName("");
    }

     // ! The Validation code Must be in the useEffect Hook , all code copied from the documentation expect the logic. 
     useEffect(()=>{
        //* Value here is the Name that we type
        ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
        newPalette.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
        );
        ValidatorForm.addValidationRule('isColorUnique', (value) =>
        newPalette.every(({ color }) => color !== clr)
        );
       
    })
    const bgClr = isFull ? "grey":clr;
    return (
        <div>
            <ChromePicker color={clr}  onChangeComplete={(newClr)=>{setClr(newClr.hex)}} className={classes.picker}/>
          <ValidatorForm onSubmit={handleSubmit}  instantValidate={false}>
            <TextValidator 
                name="ColorName" 
                value={ClrName}
                className={classes.colorNameInput}
                placeholder='Color Name'
                varient='filled' 
                margin='normal'
                onChange={handleChange}
                validators={['required','isColorNameUnique','isColorUnique']}
                errorMessages={['this field is required','Name is not Unique','Color is Not Unique']}
                />
          <Button variant="contained" style={{backgroundColor:bgClr}} type="Submit" disabled={isFull} className={classes.addColor}>Add Color</Button>
          </ValidatorForm>
          
        </div>
    )
}

export default withStyles(styles)(ColorPickerForm);
