import React, { useState ,useEffect} from "react";
import { Modal } from "react-bootstrap";
import "./Add.css";
import Inventory from "./Inventory";

function Add({ state }) {
  const [show, setshow] = useState(state);
  
  const handleClose = () => {
    setshow(false);
  };
 
  return (
    <>
      {/* {
        Dish.map((index, iteam) => {
          return(
            <>
            <div key={index} className="container">
          <div className="title">
            <h1 className="title" style={{ backgroundColor: "#FBB700" }}>
              Add New Iteam
            </h1>
          </div>
          <div>
            <table>
              <tr>
                <td>
                  Enter Iteam Name
                  <br />
                  <input type="text" 
                  name="Iteam Namw"
                  value={Dish.Iteam_Name}
                    onChange={handlechange}
                  />
                </td>
                <td>
                  Enter Iteam Unit
                  <br />
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td>
                  Enter Dish Name
                  <br />
                  <input type="text" /
                  
                  >
                </td>
                <td>
                  Enter unit Required
                  <br />
                  <input type="text" />
                </td>
              </tr>
            </table>
          </div>
                    <div
                      className="add-field-plus-button"
                      onClick={DishAdd}
                    >
                        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
          </svg>
          <p>Add Other Dish</p> 
                    </div>
                  
        
          <br />
          <button type="button" className="btn btn-success" onClick={()=>{
            setmerchandise(false);
          }}>
            Submit
          </button>
        </div>;
            </>

          )
       
      })} */}
      {/* <div className="container">
          <div className="title">
            <h1 className="title" style={{ backgroundColor: "#FBB700" }}>
              Add New Iteam
            </h1>
          </div>
          <div>
            <table>
              <tr>
                <td>
                  Enter Iteam Name
                  <br />
                  <input type="text" />
                </td>
                <td>
                  Enter Iteam Unit
                  <br />
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td>
                  Enter Dish Name
                  <br />
                  <input type="text" />
                </td>
                <td>
                  Enter unit Required
                  <br />
                  <input type="text" />
                </td>
              </tr>
            </table>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
          </svg>{" "}
          &nbsp; Add Other Dish
          <br />
          <button type="button" className="btn btn-success">
            Submit
          </button>
        </div>; */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        style={{ width: "420px", margin: "auto", borderRadius: "12px" }}
      >
        <div style={{ borderRadius: "3px" }}>
          <div
            style={{
              backgroundColor: "#FBB700",
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <Modal.Header>
              <div
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  fontWeight: "700",
                  fontSize: "18px",
                }}
              >
                Add New Iteam
              </div>
            </Modal.Header>
          </div>
          <div>
            <Modal.Body>
              <table >
                <tr>
                  <td>
                    Enter Iteam Name
                    <br />
                    <input
                      type="text"
                      style={{
                        background: "#F2F2F2",
                        border: " 0.3px solid #1F1F1F",
                        borderRadius: "8px",
                        marginRight:"10px"
                      }}
                    />
                  </td>
                  <td>
                    Enter Iteam Unit
                    <br />
                    <input
                      type="text"
                      style={{
                        background: "#F2F2F2",
                        border: " 0.3px solid #1F1F1F",
                        borderRadius: "8px",
                        width: "80px",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    Enter Dish Name
                    <br />
                    <input
                      type="text"
                      style={{
                        background: "#F2F2F2",
                        border: " 0.3px solid #1F1F1F",
                        borderRadius: "8px",
                      }}
                    />
                  </td>
                  <td>
                    Enter unit Required
                    <br />
                    <input
                      type="text"
                      style={{
                        background: "#F2F2F2",
                        border: " 0.3px solid #1F1F1F",
                        borderRadius: "8px",
                        width: "80px",
                      }}
                    />
                  </td>
                </tr>
              </table>
            </Modal.Body>
          </div>

          <div style={{ textAlign: "center" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
            </svg>
            &nbsp; Add Other Dish
            <br />
            <div className="button" style={{ margin: "20px" }}>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => {
                  setshow(false);

                }}
                >
                Submit
              </button>
              
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
export default Add;
