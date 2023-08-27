import React from "react";
import './App.css';

import Home from "./pages/Home";
import Properties from "./pages/Properties";
import SingleProperty from "./pages/SingleProperty";
import Error from  "./pages/Error";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
    <Navbar />
      <Routes>
          <Route exact path="/" element = {<Home/>}/>
          <Route exact path="/properties/" element = {<Properties/>}/>
          <Route exact path="/properties/:slug" element = {<SingleProperty/>}/> 
          <Route path="*" element = {<Error/>}/> 
      </Routes>
    </>
  );
}

export default App;
