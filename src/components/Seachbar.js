import React from "react";
import "./Searchbar.css";
import { useEffect, useState } from "react";

function Right({Details}) {
  const[searchInput,setsearchInput]=useState('');
  const [Data,setData]=useState('');
  
 

  useEffect(()=>{
    const detail = localStorage.getItem("Owner");
    setData(JSON.parse(detail));
     
  },[])
  
  
  const handleChange = (e) => {
    e.preventDefault();
    setsearchInput(e.target.value);
  };
  if (searchInput.length > 0) {
    Details.filter((country) => {
    return Details.location.match(searchInput);
});
}

 
  

  return (
    <>
      <div style={{    float: "right",marginTop: "-69px"}}>
      <input className="divinput" type="text" placeholder="Search Name, Order ID or Items" value={searchInput} onChange={handleChange} />
       <p style={{marginLeft:"500px",display:"inline",marginRight: "115px"}}>{Data.Name}</p> 
      
     
      {/* <button className="Login">Login</button> */}
    </div>
   
    </>
    
  );
}

export default Right;
