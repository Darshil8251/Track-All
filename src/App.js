import React from "react";
import "./App.css";

// import Ordered from "./components/Ordered/Ordered";
// import Dashboard from "./components/Dashboard/Dashboard";
// import Inventory from "./components/Inventory/Inventory";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Slider from "../src/components/Slider";
// import Resources from "./components/Resources/Resources";
// import NotAccepted from './components/Ordered/NotAccepted';
import { useEffect, useState } from "react";
import Signup from "./components/Login/Singup";
import Setup from './components/Login/Setup';
import Signin from "./components/Login/Signin";
import TrackAll from "./components/Login/TrackAll";
import Dashboard  from "./components/Dashboard/Dashboard";
import Ordered from "./components/Ordered/Ordered";
import Inventory from "./components/Inventory/Inventory";
import Resources from "./components/Resources/Resources";


function App() {

  
  return (
    <>

    <Router>
    <div className="app">
       <Routes>
        <Route path="signup" exact element={<Signup/>}></Route>
        <Route path="/" exact element={<Signup/>}></Route>
        <Route path="Setup" element={<Setup/>}></Route>
        <Route path="Signin" element={<Signin/>}></Route>
         <Route path="order" element={<Ordered/>}/>
         <Route path="dashboard" exact element={<Dashboard />}></Route>
            <Route path="ordered" element={<Ordered/>}></Route>
            <Route path="inventory" element={<Inventory />}></Route>
            <Route path="Resources" element={<Resources />}></Route>
         </Routes>
    
    </div>

      </Router>


    
    </>
  );
}

export default App;
