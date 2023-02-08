import React, { useState } from 'react';
import  './RawIteam.css';
import Add from './Add';





function RawIteam(){

  const[merchandise,setmerchandise]=useState(false);
    return (
        <>
            
            <div className="Raw_Items_Stock">Raw Items Stock</div>
            <div className="fourth_divs">
  <div>
    <ul className="fourth_divs_navbar ">
      <li className="Iteam"><a href="/" className='Name'>Vegies</a></li>
      <li className="Iteam"><a href="/" className='Name'>Dairy</a></li>
      <li className="Iteam"><a href="/" className='Name'>Fruits</a></li>
      <li className="Iteam"><a href="/" className='Name'>Others</a></li>
    </ul>
    <hr style={{ marginTop: "3px" ,marginLeft:"20px"}} />
  </div>
  <div className="fourth_divs_searchbox_buttin">
    <div className="container-fluid">
      <form className="d-flex my-2">
        <input
          className="form-control me-2 fourth_divs_search_box "
          type="search"
          placeholder="Search for Item"
        />
        <button className="fourth_divs_search_button btn btn-success" type="submit" onClick={()=>{setmerchandise(true)}}>
          + Add New Item
        </button>
        {merchandise && <Add state={merchandise}/>}
      </form>
    </div>
  </div>
  <div>
    {/* <table className="Iteam_table" style={{textAlign:"center"}}>
      <thead>
        <tr className="pS-1">
          <th className="pS-3 tableitem">Item</th>
          <th className="pS-3 ms-3 tableitem">Stock Status</th>
        </tr>
        <tr className="ps-0">
          <td className="ps-0 tdcontent">Potato</td>
          <td className="ms-3 me-0 pe-0 ">
            <p>12kg</p>
          </td>
        </tr>
        <tr className="ps- ">
          <td className="ps-0 ">Ginger</td>
          <td className="ms-3 me-0 pe-0 ">
            <p>12kg</p>
          </td>
        </tr> <tr className="ps-0 ">
          <td className="ps-0 ">Cabbage</td>
          <td className="ms-3 me-0 pe-0 ">
            <p>12kg</p>
          </td>
        </tr> <tr className="ps-0">
          <td className="ps-0">Carrot</td>
          <td className="ms-3 me-0 pe-0">
            <p>12kg</p>
          </td>
        </tr> <tr className="ps-0">
          <td className="ps-0">Capsicum</td>
          <td className="ms-3 me-0 pe-0">
            <p>12kg</p>
          </td>
        </tr> <tr className="ps-0">
          <td className="ps-0">Brinjal</td>
          <td className="ms-3 me-0 pe-0">
            <p>12kg</p>
          </td>
        </tr>
      </thead>
      <tbody></tbody>
    </table> */}
  </div>
  <div className="fourth_divs_change_table_buttons">
    <a href="" style={{marginLeft:"550px"}}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="680"
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
    <a href="">
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

        </>
    )
}
export default RawIteam;