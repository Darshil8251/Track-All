import "../App.css";
import React from "react";

const PWDRequisite = (
  capsLetterCheckFlag,
  numberCheckFlag,
  pwdLengthCheckFlag,
  specialCharCheckFlag,
) => {
  return (
    <div>
      <p className={capsLetterCheckFlag} >Must be 1 capital </p>
      <p className={numberCheckFlag}>Must be 1 capital</p>
      <p className={pwdLengthCheckFlag}>Must be 1 capital</p>
      <p className={specialCharCheckFlag}>Must be 1 capital</p>
    </div>
  );
};

export default PWDRequisite;
