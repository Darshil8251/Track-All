import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import "./Sigin.css";
import TrackAll from "./TrackAll";

function Signin() {
  const [user, setuser] = useState({
    Email: "",
    password: "",
    RememberMe: "",
  });
  const [validate, setvalidate] = useState(false);

  const handlechange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
    // console.log("heyeyye",{...owner,[e.target.name]:e.target.value});
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    if (user.Email == "") {
      alert("Please Enter User Name");
      setvalidate(false);
    } else if (user.password == "") {
      alert("Please Enter Password");
      setvalidate(false);
    }
    localStorage.setItem("Owner", JSON.stringify(user));
    var stringify = JSON.stringify(user);
    console.log(stringify);
    fetch("https://trackall.bsite.net/api/Authorization/SignIn/", {
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
    <div>
      <div className="fullbody border">
        <div>
          <form>
            <div className="form-title-1">
              <h1>
                <p>
                  <b>Continue To your Account</b>
                </p>
              </h1>
            </div>
            <div>
              <p>
                Login or Register now and get access to the best food order
                traking app
              </p>
            </div>

            <div className="">
              <input
                type="email"
                className="email-input"
                placeholder="Email"
                name="Email"
                value={user.Email}
                onChange={handlechange}
                required
              />
            </div>

            <div className="">
              <input
                type="password"
                className="password-input"
                name="password"
                value={user.password}
                onChange={handlechange}
                placeholder="Password"
                required
              />
            </div>

            <div className="">
              {/* <button type="submit" className="btncontinue" > */}
              {/* <Link to="/Setup"  >Continue</Link> */}

              {/* </button> */}
            </div>
            <hr />
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="RememberMe"
                value={user.RememberMe}
                onChange={handlechange}
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Remember Me
              </label>
            </div>
            <div className="">
              <button
                type="submit"
                className="btncontinue"
                onClick={handlesubmit}
              >
                {validate ? (
                  <Link to="/Dashboard" style={{ textDecoration: "none" }}>
                    Continue
                  </Link>
                ) : (
                  <Link to="/signin" style={{ textDecoration: "none" }}>
                    Continue
                  </Link>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
