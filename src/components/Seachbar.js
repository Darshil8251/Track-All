import React from "react";
import "./Searchbar.css";
import { useEffect, useState } from "react";

function Right({Details}) {
  const[search,setsearch]=useState('');
  return (
    <>
      <div>
      <input type="text" placeholder="Search Name, Order ID or Items" onChange={event =>{
        setsearch(event.target.value)
      }} />
     
      {/* <button className="Login">Login</button> */}
    </div>
   
    </>
    
  );
}

export default Right;
