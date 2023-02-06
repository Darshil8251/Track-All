import React, { useState } from "react";
import "./setup.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Navigate,
  Routes,
} from "react-router-dom";
import { createLogger } from "@microsoft/signalr/dist/esm/Utils";


function Body() {
  const [serviceList, SetserviceList] = useState([{ service: "" }]);
  const [marketPlace, setmarketPlace] = useState(
    {
      RestaurantEmail: "",
      Zomato: "",
      Swiggy:"",
      UberEats:"",
      FoodPanda:""
    }
  );
  const [validate,setvalidate]=useState(false);
  const serviceHandleAdd = () => {
    SetserviceList([...serviceList, { service: "" }]);
  };

  const serviceHandleRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    SetserviceList(list);
  };
  const [idValue, setIdValue] = useState("");
  // const idonchangehandler = (e) => {
  //   let id_value = e.target.value;
  //   const id_pattren = /[0-9]{10}/g;
  //   if (id_pattren.test(id_value)) {
  //     setIdValue("");
  //   } else if (!id_pattren.test(id_value) && id_value !== "") {
  //   } else {
  //     setIdValue("");
  //   }
  //   console.warn(e.target.value);
  // };
  const handleonchange=(e)=>{
        console.log(typeof e.target.name)
         setmarketPlace({...marketPlace,[e.target.name]:e.target.value})
         
  }

  const handlechange = async () => {
                 const email=localStorage.getItem('Email');
                 marketPlace.RestaurantEmail = email;
                 console.log(marketPlace.RestaurantEmail);
           console.log(marketPlace);
       const response=await fetch('https://trackall.bsite.net/api/Authorization/MarketPlaces',{
        method: 'POST',
        mode: 'cors',
        headers:{'Content-type':'application/json'},
        body:marketPlace
      }).then(r=>r.json()).then(res=>{
        if(res==true){
           console.log(res);
           setvalidate(true);
        }
        else{
          console.log(res);
        }
      });

      console.log(response);
  };
  return (
    <>
      <div className="setup-fullbody">
        <div>
          <div>
            <form>
              <div>
                <h1>
                  <p>
                    <b>Set up your account</b>
                  </p>
                </h1>
              </div>
              <div>
                <p>
                  Login or Register now and get access to the best food order
                  traking app
                </p>
              </div>
              <div>
                <div className="setup-inputfield-remove ">
                  <input
                    type="text"
                    className="merchandise-input"
                    placeholder="Please Enter Zomato ID"
                    name="Zomato"
                    value={marketPlace.Zomato}
                    onChange={handleonchange}
                  />
                          <br />
                </div>
                </div>
                <div className="setup-inputfield-remove">
                <input
                    type="text"
                    className="merchandise-input"
                    placeholder="Plese Enter Swiggy ID"
                    name="Swiggy"
                    value={marketPlace.Swiggy}
                    onChange={handleonchange}
                  />
                </div>
                  
                <div className="setup-inputfield-remove">
                <input
                    type="text"
                    className="merchandise-input"
                    placeholder="Please Enter UberEats ID"
                    name="UberEats"
                    value={marketPlace.UberEats}
                    onChange={handleonchange}
                  />
                </div>
                <div className="setup-inputfield-remove">
                <input
                    type="text"
                    className="merchandise-input"
                    placeholder="Please Enter FoodPanda ID"
                    name="FoodPanda"
                    value={marketPlace.FoodPanda}
                    onChange={handleonchange}
                  />
                </div>
            

              <div>
                <button type="submit" className="setup-submit-button" onClick={handlechange}>

                  {/* <Link to="../signin" style={{ textDecoration: "none" }}>
                    Submit
                  </Link> */}
                  {validate ? 
                    (
                  <Navigate to="/signin" />
                ):
                  (<Link to="/setup" style={{ textDecoration: "none" }}>
                    Continue
                  </Link>) }
                </button>
              </div>
              <hr />
              <div>
                <label>
                  Already have an account ?{" "}
                  <Link to="../signin" style={{ textDecoration: "none" }}>
                    Sign in
                  </Link>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
