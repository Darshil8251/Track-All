import React from "react";
import Slider from "../Slider";
import Ordered from "../Ordered/Ordered";
import Dashboard from "../Dashboard/Dashboard";
import Inventory from "../Inventory/Inventory";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Resources from "../Resources/Resources";

function TrackAll() {
  return (
    <div>
      <Router>
        <div className="App">
          {/* <Routes></Routes> */}
          <Slider />
          <Routes>
            <Route path="dashboard" exact element={<Dashboard />}></Route>
            <Route path="ordered" element={<Ordered />}></Route>
            <Route path="inventory" element={<Inventory />}></Route>
            <Route path="Resources" element={<Resources />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default TrackAll;
