import React from "react";
// import "./inventory.css";
import Slider from "../Slider";
import RawIteam from "./RawIteam";
import Merchandise_Menu from "./Merchandise_Menu";
import Add from './Add'

function Inventory() {
  return (
    <>
      <Slider />
      <div
        className="maindiv"
        style={{
          marginLeft: "230px",
          height: "65rem",
          display: " block",
          flexDirection: "column",
        }}
      >
        <Merchandise_Menu />
        <RawIteam />
        <Add/>
      </div>
    </>
  );
}

export default Inventory;
