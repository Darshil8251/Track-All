import react, { useState } from 'react'
import ReactPaginate from "react-paginate";
import Zomato from "../Image/Zomato.svg";
import Swiggy from "../Image/Swiggy.svg";
import Ubereat from "../Image/Uber_Eats.svg";

export default function Table(props){

    const datastate=props.Details;
    const Noofposestate=props.postsPerPage;
    const pageStatusstate=props.currentPage;

    const [data,setdata]=useState(datastate);
    const[Noofpost,setNoofpost]=useState(Noofposestate);
    const [pagestatus,setpagestatus]=useState(pageStatusstate);

    const lastIndex = pagestatus * Noofpost;
    const firstIndex = lastIndex - Noofpost;
    let currentPosts = data.slice(firstIndex, lastIndex);
  
    const handlePageClick = (event) => {
      console.log(event, typeof event.selected);
      setpagestatus(Number(event.selected + 1));
    }

    const image = (supplier) => {
    if (supplier == "Swiggy") return Swiggy;
    if (supplier == "Uber Eats") return Ubereat;
    if (supplier == "Zomato") return Zomato;
    if (supplier == "Food Panda")
      return "https://play-lh.googleusercontent.com/1keEOkk2GrxZpaRH73-vDqpAXhJNU9tbP5mfk82X6YxH8EhnU2JPOb5w1FLUJiqkEg";
  };
    return (
        <>
             <table id="example" className="tablecss">
            <thead>
              <tr className="trhead">
                <th scope="col">No</th>
                <th scope="col">Order Details</th>
                <th scope="col">Items</th>
                <th scope="col">Total price</th>
                <th scope="col">Delivery Details</th>
                <th scope="col">Location</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody style={{ marginTop: "100px" }}>
              {currentPosts.map((item, index) => {
                return (
                  <>
                    <tr key={index + 1 + firstIndex} className="trborder">
                      <th scope="row">{index + 1 + firstIndex}</th>

                      <td className="table_order_details_orderidname">
                        <div
                          className="table_order_details"
                          style={{ marginRight: "-80px" }}
                        >
                          <img
                            className="table_order_details_img"
                            src={image(item.marketPlaceName)}
                            style={{ borderRadius: "12px" }}
                          />
                          &nbsp;&nbsp; &nbsp;
                          {item.customerName}
                          <br />
                          {item.orderId}
                        </div>
                      </td>
                      <td>{item.itemName}</td>
                      <td>&#8377;{item.price}</td>
                      <td>{item.deliveryBoyName}</td>
                      <td>{item.location}</td>
                      <td className="order_status">
                        {item.status}
                        <br /> {item.toPrepare}
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
          <br />
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            pageCount={data.length / Noofpost}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
            forcePage={pagestatus - 1}
          />
        </>
    )
}