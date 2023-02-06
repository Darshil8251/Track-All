import React, { useState } from "react";
import "./Singup.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  Navigate,
} from "react-router-dom";
import axios from "axios";
import { createLogger } from "@microsoft/signalr/dist/esm/Utils";

function Signup() {
  const [owner, setowner] = useState({
    Name: "",
    RestaurantName: "",
    Email: "",
    Number: "",
    password: "",
    ConfirmPassword: "",
  });
  const [validate, setvalidate] = useState(false);
  const [message, setMessage] = useState(false);
  const [restaurantNameErrr, setRestaurantNameErrr] = useState(false);
  const [mobileNoErrr, setMobileNoErrr] = useState(false);
  const [emailErrr, setEmailErrr] = useState(false);
  const [passErrr, setPassErrr] = useState(true);
  const [cpassErrr, setCPassErrr] = useState(false);
  const [Cpass, setCpass] = useState("");
  const [pass, setPass] = useState("");
  

  const handlechange = (e) => {
    setowner({ ...owner, [e.target.name]: e.target.value });
    // console.log("heyeyye",{...owner,[e.target.name]:e.target.value});
  };
 
  function nameHandle(e) {
    if (e.target.value.length < 2) {
      setMessage(true);
    } else {
      setMessage(false);
    }

    e.preventDefault();
  }

  function restaurantNameHandle(e) {
    if (e.target.value.length < 1) {
      setRestaurantNameErrr(true);
    } else {
      setRestaurantNameErrr(false);
      // console.log(user);
    }
    e.preventDefault();
  }

  function mobileNoHandle(e) {
    if (e.target.value.length == 10) {
      setMobileNoErrr(false);
    } else {
      setMobileNoErrr(true);
    }
    e.preventDefault();
  }

  function passHandle(e) {
    // console.log(e.target.value);
    if (e.target.value.length > 8) {
      setPassErrr(false);
      setPass(e.target.value);
    } else {
      setPassErrr(true);
    }

    e.preventDefault();
  }

  function cpassHandle(e) {
    if (e.target.value == pass) {
      setCPassErrr(false);
      setCpass(e.target.value);
    } else {
      setCPassErrr(true);
    }
    e.preventDefault();
  }

  const handlesubmit = async(e) => {
    e.preventDefault();

    if (owner.Name == "") {
      alert("Please Enter Restaurant Owner name");
      setvalidate(false);
    } else if (owner.RestaurantName == "") {
      alert("Please Enter Correct Restaurent Name");
      setvalidate(false);
    } else if (owner.Email == "") {
      alert("Please Enter email");
      setvalidate(false);
    } else if (owner.Number == "") {
      alert("please Enter Phone Number");
      setvalidate(false);
    } else {
      setvalidate(true);
    }
    var stringify = JSON.stringify(owner);
    // console.log(stringify);
    const response=await fetch('https://trackall.bsite.net/api/Authorization/SignUp/',{
        method: 'POST',
        mode: 'cors',
        headers:{'Content-type':'application/json'},
        body:stringify
      }).then(r=>r.json()).then(res=>{
        if(res){
           console.log(res);
        }
      });

      localStorage.setItem('Email',owner.Email);
     console.log(response);
  //   axios
  //     .post("https://trackall.bsite.net/api/Authorization/SignUp/", stringify)
  //     .then((response) => {
  //       console.log(response);
  //       e.target.reset();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
    }

  return (
    <>
      <div className="fullbody border">
        <div>
          <form>
            <div className="form-title-1">
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
              <input
                type="text"
                className="first-name-input"
                placeholder="Restaurent Owner Name"
                name="Name"
                value={owner.Owner}
                onChange={(e) => {
                  handlechange(e);
                  nameHandle(e);
                }}
                required
              />
              <br />
              {message ? (
                <span>Name is not valid(Contains more than 1 character)</span>
              ) : (
                ""
              )}
            </div>
            <div>
              <input
                type="text"
                className="Restaurent-name"
                placeholder="Restaurant Name"
                name="RestaurantName"
                value={owner.restaurent}
                onChange={(e) => {
                  handlechange(e);
                  restaurantNameHandle(e);
                }}
                required
              />
              <br />
              {restaurantNameErrr ? (
                <span>
                  Restuarant name is not valid(Contains more than 1 character)
                </span>
              ) : (
                ""
              )}
            </div>

            <div>
              <input
                type="text"
                className="mobile-no-input"
                placeholder="Mobile No"
                value={owner.mobile}
                onChange={(e) => {
                  handlechange(e);
                  mobileNoHandle(e);
                }}
                name="Number"
                required
              />
              <br />
              {mobileNoErrr ? (
                <span>Mobile No is not valid(only 10 digit)</span>
              ) : (
                ""
              )}
            </div>

            <div className="">
              <input
                type="email"
                className="email-input"
                placeholder="Email"
                name="Email"
                value={owner.Email}
                onChange={handlechange}
                required
              />
            </div>

            <div className="">
              <input
                type="password"
                className="password-input"
                name="password"
                placeholder="Password"
                value={owner.password}
                onChange={(e) => {
                  handlechange(e);
                  passHandle(e);
                }}
                required
              />
              <br />
              {passErrr ? (
                <span>
                  Password must more than 8 digit or alphabate or symbol{" "}
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="confirm-password-input"
                placeholder="Confirm Password"
                name="ConfirmPassword"
                value={owner.cpassword}
                onChange={(e) => {
                  handlechange(e);
                  cpassHandle(e);
                }}
                required
              />
              <br />
              {cpassErrr ? <span>Confirm password not match</span> : ""}
            </div>
            <div>
              <button className="btncontinue" onClick={handlesubmit}>
                {validate ? (
                  <Navigate to="/setup" />
                ) : (
                  <Link to="/signup" style={{ textDecoration: "none" }}>
                    Continue
                  </Link>
                )}
              </button>
            </div>
            <hr />
            <div>
              <label className="signin-link">
                Already have an account ?{" "}
                <Link to="signin" style={{ textDecoration: "none" }}>
                  Sign in
                </Link>
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
