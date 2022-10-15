import React from 'react';
import  { useEffect, useState } from "react";
import './Pending.css';

function Pending() {

  const [pending, setpending] = useState([{}]);
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage,setpostsPerPage] = useState(5);
  
 
  const FetchData = async () => {
    let res = await fetch(
      "https://heyq.bsite.net/api/api/getstatusproduct/1be95880-5a7f-4ff2-a28a-d3db56423854/NotAccepted",
      {
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
    let data = await res.json();
    setpending(data);
  };

  useEffect(() => {
    FetchData();
  }, []);
 
  const lastIndex = currentPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  const currentPosts = pending.slice(firstIndex, lastIndex);

  const numberOfPages=Math.ceil(pending.length/postsPerPage);

  const pageNumbers = [...Array(numberOfPages + 1).keys()].slice(1)


  const nextPage = () => {
    if(currentPage !== numberOfPages) setcurrentPage(currentPage + 1)
}
const prevPage = () => {
if(currentPage !== 1) setcurrentPage(currentPage - 1)
}
  return (
    <div>
      <div>
        <table id="example" className="table table-striped">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Order Details</th>
              <th scope="col">Items</th>
              <th scope="col">Totle price</th>
              <th scope="col">Delivery Details</th>
              <th scope="col">Location</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>

                  <td className="table_order_details_orderidname">
                    <div className="table_order_details">
                      <img
                        className="table_order_details_img"
                        src="logo192.png"
                      />
                      {item.id} <br />
                      {item.clientId}
                    </div>
                  </td>
                  <td>{item.itemName}</td>
                  <td>{item.price}</td>
                  <td>{item.marketPlaceId}</td>
                  <td>{item.location}</td>
                  <td className="order_status">{item.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
       

        <nav>
            <ul className='pagination justify-content-center'>
                <li className="page-item">
                    <a className="page-link" 
                        onClick={prevPage} 
                        href='#'>
                        
                        Previous
                    </a>
                </li>
                {pageNumbers.map(pgNumber => (
                    <li key={pgNumber} 
                        className= {`page-item ${currentPage == pgNumber ? 'active' : ''} `} >

                        <a onClick={() => setcurrentPage(pgNumber)}  
                            className='page-link' 
                            href='#'>
                            
                            {pgNumber}
                        </a>
                    </li>
                ))}
                <li className="page-item">
                    <a className="page-link" 
                        onClick={nextPage}
                        href='#'>
                        
                        Next
                    </a>
                </li>
            </ul>
        </nav>


      </div>
    </div>
  );
}

export default Pending;
