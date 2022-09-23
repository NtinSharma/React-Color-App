import React,{useEffect,useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

function PaletteMetaForm(props){
    const [paletteName,setPaletteName] = useState("");
    const {palette,handleSubmit,showForm} = props;
    const [stage,setStage] = useState("paletteName");
  
    const handleChange = (e)=>{
        setPaletteName(e.target.value);
    }

    const changeStage = ()=>{
      setStage("emoji");
    }

    const savePalette = (emoji)=>{
      // console.log(emoji);
      const newPalette = {
        name:paletteName,
        emoji:emoji.native
      };
      // console.log(newPalette)
      handleSubmit(newPalette);
      setStage(" ");
    }

    useEffect(() => {
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) =>
        palette.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
        );
    },)
  
    return (
      <div>
        <Dialog open={stage=== "emoji" && true} onClose={showForm}>
        <DialogTitle>Pick a Emoji</DialogTitle>
        <Picker onSelect={savePalette} title='Pick your Emoji'/>
        </Dialog>
        <Dialog open={stage=== "paletteName"&& true} onClose={showForm}>
          <DialogTitle>Create a Palette</DialogTitle>
        <ValidatorForm onSubmit={changeStage}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your palette. Make Sure that Palette Name Must be Unique.
            </DialogContentText>
            
              <TextValidator
                 name="PaletteName" 
                 value={paletteName} 
                 onChange={handleChange}
                 fullWidth
                 margin='normal'
                 validators={['required','isPaletteNameUnique']}
                 errorMessages={['Palette Name is required','Name is not Unique']}
              />
           
              
          </DialogContent>
          <DialogActions>
            <Button onClick={showForm}>Cancel</Button>
          <Button variant="contained" color="secondary" type="Submit" >Save Palette</Button>

          </DialogActions>

        </ValidatorForm>
        </Dialog>

      </div>
    );
}

export default PaletteMetaForm