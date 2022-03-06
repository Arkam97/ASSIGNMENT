import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Newproduct from './Pages/Newproduct';
import { createBrowserHistory } from "history";
import {BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";


function App() {
 
  return (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/newproduct" element={<Newproduct/>}></Route>    
    </Routes>
  </Router>
  );
}

export default App;
