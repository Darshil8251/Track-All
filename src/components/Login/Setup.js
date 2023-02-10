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
  const [marketPlace, setmarketPlace] = useState({
    RestaurantEmail: "",
    Zomato: "",
    Swiggy: "",
    UberEats: "",
    FoodPanda: "",
  });
  const [validate, setvalidate] = useState(false);
  const serviceHandleAdd = () => {
    SetserviceList([...serviceList, { service: "" }]);
  };

  const serviceHandleRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    SetserviceList(list);
  };
  const [idValue, setIdValue] = useState("");
 
  const handleonchange = (e) => {
    console.log(typeof e.target.name);
    setmarketPlace({ ...marketPlace, [e.target.name]: e.target.value });
  };

  const handlechange = async () => {
    const email = localStorage.getItem("Email");
    marketPlace.RestaurantEmail = email;
    let stringify = JSON.stringify(marketPlace);
    const response = await fetch(
      "https://trackall.bsite.net/api/Authorization/MarketPlaces",
      {
        method: "POST",
        mode: "cors",
        headers: { "Content-type": "application/json" },
        body: stringify,
      }
    )
      .then((r) => r.json())
      .then((res) => {
        if (res.Success == "Market Place Mapped") {
          setvalidate(true);
          console.log(res);
          
        } else {
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
                <button
                  type="submit"
                  className="setup-submit-button"
                  onClick={handlechange}
                >
                 
                  {validate ? (
                    <Navigate to="/signin" />
                  ) : (
                    <Link to="/setup" style={{ textDecoration: "none" }}>
                      Continue
                    </Link>
                  )}
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
