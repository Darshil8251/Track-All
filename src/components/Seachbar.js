import React from "react";
import "./Searchbar.css";
import { useEffect, useState } from "react";

function Right({Details}) {
  const[search,setsearch]=useState('');
  const [Data,setData]=useState('');
  
 

  useEffect(()=>{
    const detail = localStorage.getItem("Owner");
    setData(JSON.parse(detail));
     
  },[])
 
  

  return (
    <>
      <div style={{    float: "right",marginTop: "-69px"}}>
      <input className="divinput" type="text" placeholder="Search Name, Order ID or Items" onChange={event =>{
        setsearch(event.target.value)
      }} />
       <p style={{marginLeft:"500px",display:"inline",marginRight: "115px"}}>{Data.Name}</p> 
      
     
      {/* <button className="Login">Login</button> */}
    </div>
   
    </>
    
  );
}

export default Right;
