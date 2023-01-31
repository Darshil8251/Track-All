import React, { useState } from "react";
import "./Singup.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import axios from "axios";

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
  // const storeData = () => {
  //   const Owner = document.getElementsByClassName("first-name-input").value;
  //   const Restaurent = document.getElementsByClassName("Restaurent-name").value;

  //   localStorage.setItem("Owner", Owner);
  //   localStorage.setItem("Restaurent", Restaurent);
  // };

  const handlechange = (e) => {
    setowner({ ...owner, [e.target.name]: e.target.value });
    // console.log("heyeyye",{...owner,[e.target.name]:e.target.value});
  };
  // const validateform=()=>{

  //   const owner=owner.Name;
  //   const Rname=owner.RestaurantName;
  //   const email=owner.Email;
  //   const password=owner.password;
  //   const cpassword=owner.ConfirmPassword;

  //       if(owner==null){
  //         alert("Please Enter the Name:");
  //           return false
  //       }
  //       else{
  //         handlesubmit();
  //       }

  // }

  const handlesubmit = (e) => {
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
    }
    localStorage.setItem("Owner", JSON.stringify(owner));
    var stringify = JSON.stringify(owner);
    console.log(stringify);
    fetch("https://trackall.bsite.net/api/Authorization/SignUp/", {
      method: "POST",
      mode: "cors",
      headers: { "Content-type": "application/json" },
      body: stringify,
    })
      .then((r) => r.json())
      .then((res) => {
        if (res) {
          console.log(res);
          setvalidate(true);
        } else {
          setvalidate(false);
        }
      });
  };

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
                onChange={handlechange}
                required
              />
            </div>
            <div>
              <input
                type="text"
                className="Restaurent-name"
                placeholder="Restaurant Name"
                name="RestaurantName"
                value={owner.restaurent}
                onChange={handlechange}
                required
              />
            </div>

            <div>
              <input
                type="text"
                className="mobile-no-input"
                placeholder="Mobile No"
                value={owner.mobile}
                onChange={handlechange}
                name="Number"
                required
              />
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
                onChange={handlechange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="confirm-password-input"
                placeholder="Confirm Password"
                name="ConfirmPassword"
                value={owner.cpassword}
                onChange={handlechange}
                required
              />
            </div>
            <div>
              {/* onClick={validateform?<Link/>:<Signup/>} */}

              <button className="btncontinue" onClick={handlesubmit}>
                {validate ? (
                  <Link to="/setup" style={{ textDecoration: "none" }}>
                    Continue
                  </Link>
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
