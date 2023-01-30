import React, { useState, useEffect } from "react";
import "./Merchandise.css";
import Add from "./Add";

function Merchandise_Menu() {
  const [merchandise, setmerchandise] = useState(false);
  const [Data, setData] = useState([{}]);


   // Use for Data fetch from A
  useEffect(() => {
    const url = "https://heyq.bsite.net/api/api/GetZomatoProduct/71897957-87eb-45c0-8d50-a73c5490f17e";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setData(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
}, []);

  return (
    <>
      <div className="Merchandise_Menu">Merchandise Menu</div>
      <div>
        <div
          className="second_divs"
          style={{ borderRadius: "5px", marginTop: "17px" }}
        >
          <div>
            <ul className="Merchandise_Name">
              <li className="Merchandise">
                <a href="/" className="Name">
                  Zomato
                </a>
              </li>
              <li className="Merchandise">
                <a href="/" className="Name">
                  Swiggy
                </a>
              </li>
              <li className="Merchandise">
                <a href="/" className="Name">
                  Uber Eats
                </a>
              </li>
              <li className="Merchandise">
                <a href="/" className="Name">
                  Food Panda
                </a>
              </li>
            </ul>
            <hr style={{ marginLeft: "20px", marginTop: "3px" }} />
          </div>
          <div className="second_divs_searchbox_buttin">
            <div className="container-fluid">
              <form className="d-flex my-2">
                <input
                  className="form-control me-2 second_divs_search_box "
                  type="search"
                  placeholder="Search for Item"
                />
                <button
                  className="second_divs_search_button btn btn-success"
                  type="submit"
                  onClick={() => {
                    setmerchandise(true);
                  }}
                >
                  + Add New Item
                </button>
                {merchandise && <Add state={merchandise} />}
              </form>
            </div>
          </div>
          <div>
            
              <table
               
                className="Merchandise_Table"
                style={{ textAlign: "center" }}
              >
                <thead>
                  <tr className="p-1">
                    <th className="p-1 tableitem header">Item</th>
                    <th className="pS-3 tableitem header">Stock Status</th>
                  </tr>
                  {
                    Data.map((iteam,index)=>{
                      return(
                        <>
                        <tr  key={index} className="ps-1">
                    <td className="p-1">{iteam.name}</td>
                    <td>
                      <div className="form-check form-switch pS-3">
                        <input
                          className="form-check-input border border-success border-2"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                          // style={{background:"#279500"}}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckDefault"
                        ></label>
                      </div>
                    </td>
                  </tr>
                        </>
                      )
                    })
                  }
                  
                  
                 
                  
                 
                  
                </thead>
                <tbody></tbody>
              </table>;
        
          </div>
          <div className="second_divs_change_table_buttons">
            <a href="" style={{ marginLeft: "550px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="500"
                fill="currentColor"
                className="bi bi-chevron-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </a>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Merchandise_Menu;
