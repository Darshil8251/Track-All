import React from "react";
import "./Ordered.css";
import { useEffect, useRef, useState } from "react";
import Swiggy from "../Image/Swiggy.svg";
import Ubereat from "../Image/Uber_Eats.svg";
import "bootstrap/dist/css/bootstrap.css";
import Zomato from "../Image/Zomato.svg";
import Slider from "../Slider";
import "../Searchbar.css";
import Foodpanda from "../Image/Foodpanda.svg";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./History.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt,faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

function Ordered() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [Details, setDetails] = useState([{}]); //State to render the fetched or Filtered Data
  const [resetdata, setresetdata] = useState([{}]); //To filter The data
  const [currentPage, setcurrentPage] = useState(1); // Use for pagination to set pages
  const [postsPerPage, setpostsPerPage] = useState(5); // set postperpage
  const [show, setshow] = useState(false);
  const [loading,setloading]=useState(false);
  // const [currentPosts,setcurrentPosts]=useState([{}]);

  // Fetching Data From API
  const FetchData = async () => {
    let res = await fetch(
      "https://heyq.bsite.net/api/api/Orders/71897957-87eb-45c0-8d50-a73c5490f17e",
      {
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
    let data = await res.json();
    setDetails(data);
    setresetdata(data);
     setloading(true);
  };
  useEffect(() => {
    FetchData();
  }, []);

  const lastIndex = currentPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  const currentPosts = Details.slice(firstIndex, lastIndex);

  const handlePageClick = (event) => {
    console.log(event, typeof event.selected);
    setcurrentPage(Number(event.selected + 1));
  };

  // Image Import

  const image = (supplier) => {
    if (supplier == "Swiggy") return Swiggy;
    if (supplier == "Uber Eats") return Ubereat;
    if (supplier == "Zomato") return Zomato;
    if (supplier == "Food Panda")
      return "https://play-lh.googleusercontent.com/1keEOkk2GrxZpaRH73-vDqpAXhJNU9tbP5mfk82X6YxH8EhnU2JPOb5w1FLUJiqkEg";
  };
  const [searchInput, setsearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setsearchInput(e.target.value);
    if (e.target.value == "") {
      return setDetails(resetdata);
    }
    let searchData = resetdata.filter((data) => {
      return data.location.toLowerCase().includes(searchInput.toLowerCase());
    });
    console.log("Method Called");
    setDetails(searchData);
  };

  const handleCalendarChange = (date) => {
    setshow(false);
    setDetails(
      resetdata.filter((a) => new Date(a.orderTime).getDate() == date.getDate())
    );
    setSelectedDate(date);
  };

  return (
    <>
      <Slider />
      <div style={{ float: "right", marginTop: "-69px" }}>
        <input
          className="divinput"
          type="text"
          placeholder="Search Name, Order ID or Items"
          onChange={handleChange}
          value={searchInput}
        />
        <p
          style={{
            marginLeft: "500px",
            display: "inline",
            marginRight: "115px",
          }}
        ></p>
        <br />
      </div>
      <Button
        variant="secondary"
        className="back_btn"
        style={{ marginLeft: "282px", marginTop: "96px" }}
      >
      <FontAwesomeIcon icon={faArrowLeft} />
        <Link to="/ordered" style={{ textDecoration: "none",color:'white' }}>
          Back
        </Link>
      </Button>
{  loading?(
      <div className="maincontainer" style={{ marginTop: "35px" }}>
        <div>
          <div className="navbar">
            <header>
              <div className="brand">
                <a>Order List</a>
              </div>

              <div className="dropdown">
                <button className="dropbtn">
                  <p className="dropname">Filter by</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                    className="dropicon"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </button>
                <div className="dropdown-content">
                  <a
                    onClick={() => {
                      setDetails(resetdata);
                      setcurrentPage(1);
                    }}
                  >
                    All
                  </a>
                  <a
                    onClick={() => {
                      setDetails(
                        resetdata.filter(
                          (item) => item.marketPlaceName == "Zomato"
                        )
                      );
                      setcurrentPage(1);
                    }}
                  >
                    Zomato
                  </a>
                  <a
                    onClick={() => {
                      setDetails(
                        resetdata.filter(
                          (item) => item.marketPlaceName === "Swiggy"
                        )
                      );
                      setcurrentPage(1);
                    }}
                  >
                    Swiggy
                  </a>
                  <a
                    onClick={() => {
                      setDetails(
                        resetdata.filter(
                          (item) => item.marketPlaceName === "Uber Eats"
                        )
                      );
                      setcurrentPage(1);
                    }}
                  >
                    Uber Eats
                  </a>
                </div>
              </div>

              <div className="entry">
                <p className="select">
                  Entrie per page:{" "}
                  <select
                    className=""
                    value={postsPerPage}
                    onChange={(e) => {
                      setpostsPerPage(parseInt(e.target.value));
                      const pageset = () => {
                        setcurrentPage(1);
                      };
                      pageset();
                    }}
                  >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                  </select>
                  <div className="20"></div>
                </p>

                <div style={{ marginLeft: "165px" }}>
                  <button
                    onClick={() => {
                      setshow(true);
                    }}
                  >
                    {show ? (
                      <Modal
                        show={show}
                        onHide={() => {
                          setshow(false);
                        }}
                        backdrop="static"
                        keyboard={false}
                        centered
                        style={{
                          width: "374px",
                          margin: "auto",
                          borderRadius: "12px",
                        }}
                      >
                        <div style={{ borderRadius: "3px" }}>
                          <div
                            style={{
                              backgroundColor: "#FBB700",
                              borderRadius: "12px",
                              textAlign: "center",
                            }}
                          >
                            <Calendar
                              onChange={handleCalendarChange}
                              value={selectedDate}
                              style={{ marginTop: "50px" }}
                            />
                          </div>
                        </div>
                      </Modal>
                    ) : (
                      <FontAwesomeIcon icon={faCalendarAlt} />
                    )}
                  </button>
                </div>
              </div>

              <nav className="navbarstatus">
                <ul className="ulcss">
                  <li className="statuscss">
                    <p href="/" className="statusbuttonname">
                      Status :
                    </p>
                  </li>
                  <li className="statuscss statuscolor">
                    <a
                      className="statusbutton"
                      onClick={() => setDetails(resetdata)}
                    >
                      All
                    </a>
                  </li>
                  <li className="statuscss statuscolor">
                    <a
                      className="statusbutton"
                      onClick={() =>
                        setDetails(
                          resetdata.filter(
                            (item) =>
                              item.status == "Accepted" ||
                              item.status == "Ready"
                          )
                        )
                      }
                    >
                      Accepted
                    </a>
                  </li>
                  <li className="statuscss statuscolor">
                    <a
                      className="statusbutton"
                      onClick={() =>
                        setDetails(
                          resetdata.filter(
                            (item) => item.status === "Completed"
                          )
                        )
                      }
                    >
                      Completed
                    </a>
                  </li>
                  <li className="statuscss statuscolor">
                    <a
                      className="statusbutton"
                      onClick={() =>
                        setDetails(
                          resetdata.filter(
                            (item) => item.status === "Cancelled"
                          )
                        )
                      }
                    >
                      Cancelled
                    </a>
                  </li>
                </ul>
              </nav>
            </header>
          </div>
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
                          {/* <img
                            className="table_order_details_img"
                            src="logo192.png"
                          />{" "} */}
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
            pageCount={Details.length / postsPerPage}
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
            forcePage={currentPage - 1}
          />
        </div>
      </div>):(<div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
      <Spinner animation="border" />
    </div>)
}
    </>
  );
}
export default Ordered;
