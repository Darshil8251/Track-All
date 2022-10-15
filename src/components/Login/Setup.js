import React, { useState } from "react";
import "./setup.css";

function Body() {
  const [serviceList, SetserviceList] = useState([{ service: "" }]);

  const serviceHandleAdd = () => {
    SetserviceList([...serviceList, { service: "" }]);
  };

  const serviceHandleRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    SetserviceList(list);
  };
  const [idValue, setIdValue] = useState("");
  const idonchangehandler = (e) => {
    let id_value = e.target.value;
    const id_pattren = /[0-9]{10}/g;
    if (id_pattren.test(id_value)) {
      setIdValue("");
    } else if (!id_pattren.test(id_value) && id_value !== "") {
      setIdValue("Id is not valid");
    } else {
      setIdValue("");
    }
    console.warn(e.target.value);
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

              {serviceList.map((singleService, index) => (
                <div>
                  <div key={index} className="setup-inputfield-remove ">
                    <input
                      type="text"
                      className="merchandise-input"
                      placeholder="Add your Zometo Merchandise ID"
                      onChange={idonchangehandler}
                    />

                    {serviceList.length > 1 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        class="bi bi-calendar-x mx-1"
                        viewBox="0 0 16 16"
                        onClick={() => serviceHandleRemove(index)}
                      >
                        <path d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708z" />
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                      </svg>
                    )}
                  </div>
                  {<div className=" setup-validateerror">{idValue}</div>}

                  {serviceList.length - 1 === index && serviceList.length < 4 && (
                    <div
                      className="add-field-plus-button"
                      onClick={serviceHandleAdd}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-plus-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                      </svg>
                      <p className="add-plus-button-text">Add another id</p>
                    </div>
                  )}
                </div>
              ))}

              <div>
                <button type="submit" className="setup-submit-button">
                  Register
                </button>
              </div>
              <hr />
              <div>
                <label>
                  Already have an account ? <a href="/">Sign in</a>
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
