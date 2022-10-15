
import React from 'react';
import './Zomato.css';

function Zomato({Details}) {
  return (
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
            {Details.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>

                  <td className="table_order_details_orderidname">
                    <div className="table_order_details">
                      <img
                        className="table_order_details_img"
                        src="logo192.png"/>
                      {item.orderId} <br />
                      {item.customerName}
                    </div>
                  </td>
                  <td>{item.itemName}</td>
                  <td>{item.price}</td>
                  <td>{item.deliveryBoyName}</td>
                  <td>{item.location}</td>
                  <td className="order_status">{item.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>  
      
    </div>
  );
}

export default Zomato;
