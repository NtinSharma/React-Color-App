import React,{useEffect, useState} from 'react'
import color from './seedColor'
import Palette from './Palette'
import {generatePalette} from './colorHelpers';
import {Routes,Route,useLocation} from 'react-router-dom';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import { TransitionGroup, CSSTransition } from "react-transition-group";
// import "./App.css";
import Page from "./Page";


function App() {
  const LocalStorage = JSON.parse(window.localStorage.getItem("palettes"));
  const [List,setList] = useState( LocalStorage || color);
  const addPalette = (palette)=>{
    setList([...List,palette]);
  }
  useEffect(()=>{
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(List)
    );
  },[List])
  const deletePalette = (id)=>{
    setList(List.filter(palette=>(
      palette.id !== id
    ))
  )}
  const location = useLocation();
  return (
    <div>
     {/* <Palette palette={generatePalette(color[2])}/> */}
     <TransitionGroup component={null}>
     <CSSTransition key={location.key} classNames="page" timeout={500}>
     <Routes location={location}>
       <Route path="/" element={
              //! As our some of content were fading earlier & some take time so we wrap it in the a Component/div  
                <Page>
                  <PaletteList palette={List} deletePalette={deletePalette}/>
                </Page>}/>
       <Route path="/palette/new" element={
                <Page>
                  <NewPaletteForm addPalette={addPalette} palette={List}/>
                </Page>}/>
       <Route path="/palette/:id" element={
                <Page>
                  <Palette seedClr={List} />
                </Page>}/>
       <Route path="/palette/:paletteId/:colorId" element={
                <Page>
                  <SingleColorPalette seedClr={List}/>
                </Page>}/>
        <Route path="*" element={
        <Page>
          <PaletteList palette={List} deletePalette={deletePalette}/>
        </Page>}/>
     </Routes>
        
     </CSSTransition>
     </TransitionGroup>
    </div>
  );
}

export default App;
