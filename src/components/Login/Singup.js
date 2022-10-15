import React, { useState } from "react";
import  './Singup.css';
import PWDRequisite from "./PWDRequisite";

function Signup() {
  // const [firstname, setfirstname] = useState("");
  const [firstnameerr, setfirstnameerr] = useState(false);
  const [monoerr, setmonoerr] = useState(false);
  // const [passworderr, setpassworderr] = useState("");
  const [PWDRequiste, setPWDRequisite] = useState(false);
  const [password, setpassword] = useState("");
  const [passcheaks, setpasscheaks] = useState({
    capsLetterCheck: false,
    numberCheck: false,
    pwdLengthCheck: false,
    specialCharCheck: false,
  });
  const [emailerr, setemailerr] = useState("");
  const [confirmpassworderr, setconfirmpassworderr] = useState("");
  const loginHandle = (e) => {
    e.preventDefault();
  };

  // first name error
  const firstnameHandler = (e) => {
    let val = e.target.value;

    const namepattren = /[a-zA-Z]{3,8}/g;
    if (namepattren.test(val)) {
      setfirstnameerr("");
    } else if (!namepattren.test(val) && val !== "") {
      setfirstnameerr("Name is not valid");
    } else {
      setfirstnameerr("");
    }

    console.warn(e.target.value);
  };



  // Mobile no  error
  function monoHandler(e) {
    let val = e.target.value;

    const numberpattren = /[0-9]{10}/g;
    if (numberpattren.test(val)) {
      setmonoerr("");
    } else if (!numberpattren.test(val) && val !== "") {
      setmonoerr("Mobile No is not valid");
    } else {
      setmonoerr("");
    }
    console.warn(e.target.value);
  }

  // email  error
  const emailHandler = (e) => {
    let val = e.target.value;
    const emailpattren =
      /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (emailpattren.test(val)) {
      setemailerr("");
    } else if (!emailpattren.test(val) && val !== "") {
      setemailerr("Email is not valid");
    } else {
      setemailerr("");
    }
    console.warn(e.target.value);
  };

  // password error
  const passwordHandler = (e) => {
    // setpassworderr(e.target.value);
    setpassword(e.target.value);
  };

  const passwordonfocushandle = () => {
    setPWDRequisite(true);
  };

  const passwordonblurhandle = () => {
    setPWDRequisite(false);
  };

  const passwordOnKeyUp = (e) => {
    const { value } = e.target;
    const capsLetterCheck = /[A-Z]/.test(value);
    const numberCheck = /[0-9]/.test(value);
    const pwdLengthCheck = value.length >= 8;
    const specialCharCheck = /[!@#$%^&*]/.test(value);
    setpasscheaks({
      capsLetterCheck,
      numberCheck,
      pwdLengthCheck,
      specialCharCheck,
    });
  };

  // confirm password error
  function confirmpasswordHandler(e) {
    let val = e.target.value;
    if (val !== password) {
      setconfirmpassworderr("Password are Not Match");
    } else {
      setconfirmpassworderr(" ");
    }
    console.warn(e.target.value);
  }
  return (
    <>
      <div className="fullbody border">
          <div>
            <form onSubmit={loginHandle}>
              <div className="form-title-1">
                <h1><p>
                  <b>Set up your account</b>
                </p></h1>
              </div>
              <div >
                <p>
                  Login or Register now and get access to the best food order
                  traking app
                </p>
              </div>
              <div>
                <input
                  type="text"
                  className="first-name-input"
                  placeholder="Harsh"
                  pattern="[A-Za-z]+"
                  onChange={firstnameHandler}
                  required
                />

                {<div className="validateerror">{firstnameerr}</div>}
              </div>
                            <div>
                <input
                  type="text"
                  className="mobile-no-input"
                  placeholder="Mobile No"
                  onChange={monoHandler}
                  required
                />
              </div>

              {<div className="validateerror">{monoerr}</div>}
              <div className="">
                <input
                  type="email"
                  className="email-input"
                  placeholder="Email"
                  required
                  onChange={emailHandler}
                />
                {<div className="validateerror">{emailerr}</div>}
              </div>

              {/* // Pass word error cheaking */}
              <div className="">
                <input
                  type="password"
                  className="password-input"
                  placeholder="Password"
                  required
                  onChange={passwordHandler}
                  onFocus={passwordonfocushandle}
                  onBlur={passwordonblurhandle}
                  onKeyUp={passwordOnKeyUp}
                />
                {PWDRequiste ? (
                  <PWDRequisite
                    capsLetterCheckFlag={
                      passcheaks.capsLetterCheck ? "valid" : "invalid"
                    }
                    numberCheckFlag={
                      passcheaks.numberCheck ? "valid" : "invalid"
                    }
                    pwdLengthCheckFlag={
                      passcheaks.pwdLengthCheck ? "valid" : "invalid"
                    }
                    specialCharCheckFlag={
                      passcheaks.specialCharCheck ? "valid" : "invalid"
                    }
                  />
                ) : null}
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="confirm-password-input"
                  placeholder="Confirm Password"
                  required
                  onChange={confirmpasswordHandler}
                />

                {
                  <div className=" validateerror">
                    {confirmpassworderr}
                  </div>
                }
              </div>
              <div className="">
                <button type="submit" className="signup-submit-button">
                  Submit
                </button>
              </div>
              <hr />
              <div className="">
                <label className="signin-link">
                  Already have an account ? <a href="/">Sign in</a>
                </label>
              </div>
            </form>
          </div>
        </div>
    </>
  );
}

export default Signup;
