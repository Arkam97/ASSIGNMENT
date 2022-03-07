import React from 'react'
import './App.css';
import Home from './Pages/Home';
import Newproduct from './Pages/Newproduct';

import {BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";


function App(){
  return (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/newproduct" element={<Newproduct/>}/>    
    </Routes>
  </Router>
  );
}

export default App;
