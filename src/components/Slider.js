
import React from 'react';
import './Slider.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
// import trackall from "./Image/";
import Dashboard_Image from "./Image/Dashboard.svg";
import Order from "./Image/Ordered.svg";
import Inventory from "./Image/Inventory.svg";
import Resources from "./Image/Resources.svg";
import Dashboard from './Dashboard/Dashboard';
import Logo from './Image/Logo.svg';
import { useHistory } from "react-router-dom";






const Navbar = () => {
  return (
    <>
      <div className="left">
      <img src={Logo} alt="track all" style={{marginLeft: "50px"}}/>
      <hr style={{
        position: "absolute",
        width: "226px",
        height: "0px",
        left: "0px",
        top: "85px",
        border: "0.4px solid rgba(31, 31, 31, 0.5)"
      }
      } />

      <div className='Navbar'>
        <ul>
          <li className="linavbarcss" ><Link to="/dashboard" ><img src={Dashboard_Image} alt="Dashboard" style={{marginLeft:"8px"}}/> Dashboard</Link></li>
          <li className="linavbarcss" style={{marginRight:"10px"}}><Link to="/ordered" ><img src={Order} alt="Ordered" style={{marginRight:"10px"}}/> Ordered</Link></li>
          <li className="linavbarcss" ><Link to="/inventory" ><img src={Inventory} alt="Inventory" /> Inventory</Link></li>
          <li className="linavbarcss" ><Link to="/resources" ><img src={Resources} alt="Resources" /> Resource</Link></li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default Navbar
