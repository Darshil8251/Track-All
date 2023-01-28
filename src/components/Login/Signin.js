import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes,
  } from "react-router-dom";
  import './Sigin.css';
  import TrackAll from './TrackAll';

function Signin() {

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
                required
              />
            </div>

            <div className="">
              <input
                type="password"
                className="password-input"
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
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Remember Me</label>
  </div>
  <div className="">
              <button type="submit" className="btncontinue" >
              <Link to="/Dashboard" style={{textDecoration:'none'}}>Submit</Link>

              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
