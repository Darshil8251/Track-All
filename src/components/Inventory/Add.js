import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./Add.css";

function Add() {
  const [Dish, setDish] = useState([
    {
      Iteam_Name: "panner",
      Iteam_Unit: "",
      Dish_Name: "",
      Units_Required: "",
    },
  ]);
  const handlechange=(e)=>{
    const Name=e.target.value;
    
              console.log(Dish.Iteam_Name);
         if(Name==Dish.Iteam_Name){
                   setDish([{Iteam_Name:Name}]);
                   console.log(Name);
         }
         else if(Name==Dish.Iteam_Unit){
          setDish([{Iteam_Unit:Name}]);
          console.log(Name);
         }
         else if(Name==Dish.Dish_Name){
          setDish([{Dish_Name:Name}]);
          console.log(Name);
         }
         else if(Name==Dish.Units_Required){
          setDish([{Units_Required:Name}]);
          console.log(Name);
         }
    
      }
      const DishAdd = () => {
        setDish([...Dish, { Iteam_Name: "",
        Iteam_Unit:"",
        Dish_Name:"",
        Units_Required:"" 
      }]);
      };
  
  
  return (
    <>
      {
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
          <button type="button" className="btn btn-success">
            Submit
          </button>
        </div>;
            </>

          )
       
      })}
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

    </>
  );
}
export default Add;
