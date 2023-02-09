import React, { useEffect, useState } from "react";
import "./RawIteam.css";
import Add from "./Add";
import Cookies from "js-cookie";
import Carousel from "react-multi-carousel";
import { Modal } from "react-bootstrap";

function RawIteam() {
  // it is use to show popup
  const [show, setshow] = useState(false);
  const [RawItem, setRawIteam] = useState({
    Name: "",
    Price: "",
    Stock: "",
    Category: "",
  });

  const [Data, setData] = useState([{}]);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const handleClose = () => {
    setshow(false);
  };
  const handlechange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    setRawIteam({ ...RawItem, [e.target.name]: e.target.value });
  };

  const handlesubmit = async () => {
    var stringify = JSON.stringify(RawItem);
    const response = await fetch(
      "https://trackall.bsite.net/api/Inventory/Post",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: stringify,
      }
    )
      .then((r) => r.json())
      .then((res) => {
        if(res.succeeded==true){
        alert("Item add Successfully");
        fetchdata()}
      });
  };

  // It is use to fetch data from backen
  const token = Cookies.get("token");
  const fetchdata = async () => {
    let res = await fetch("https://trackall.bsite.net/api/Inventory/get", {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const data = await res.json();

    setData(data);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  const itemTab = Math.ceil(Data.length / 6);
  const tabNumber = [...Array(itemTab + 1).keys()].slice(1);

  return (
    <>
      <div className="Raw_Items_Stock">Raw Items Stock</div>
      <div className="fourth_divs">
        <div>
          <ul className="fourth_divs_navbar ">
            <li className="Iteam">
              <a href="/" className="Name">
                Vegies
              </a>
            </li>
            <li className="Iteam">
              <a href="/" className="Name">
                Dairy
              </a>
            </li>
            <li className="Iteam">
              <a href="/" className="Name">
                Fruits
              </a>
            </li>
            <li className="Iteam">
              <a href="/" className="Name">
                Others
              </a>
            </li>
          </ul>
          <hr style={{ marginTop: "3px", marginLeft: "20px" }} />
        </div>

        <div className="fourth_divs_searchbox_buttin">
          <div className="container-fluid">
            <form className="d-flex my-2">
              <input
                className="form-control me-2 fourth_divs_search_box "
                type="search"
                placeholder="Search for Item"
              />
              <button
                className="fourth_divs_search_button btn btn-success"
                type="submit"
                onClick={() => {
                  setshow(true);
                }}
              >
                + Add New Item
              </button>
            </form>
          </div>
        </div>
        <div>
          <Carousel
            responsive={responsive}
            showDots={false}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {tabNumber.map((iteam, index) => {
              return (
                <>
                  <div>
                    <table
                      className="Merchandise_Table"
                      style={{ textAlign: "center", marginLeft: "46px" }}
                    >
                      <thead>
                        <tr className="p-1">
                          <th
                            className="p-1 tableitem header"
                            style={{ textAlign: "center" }}
                          >
                            Item
                          </th>
                          <th
                            className="pS-3 tableitem header"
                            style={{ textAlign: "center" }}
                          >
                            Stock Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {Data.slice(index * 6, iteam * 6).map((a, b) => {
                          return (
                            <tr key={b} className="ps-1">
                              <td className="p-1 item">{a.name}</td>
                              <td style={{ textAlign: "center" }}>
                                {a.stock}Kg
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </>
              );
            })}
          </Carousel>
        </div>
      </div>
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
              <table>
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
                        marginRight: "10px",
                      }}
                      name="Name"
                      value={RawIteam.Name}
                      onChange={handlechange}
                    />
                  </td>
                  <td>
                    Enter Price
                    <br />
                    <input
                      type="text"
                      style={{
                        background: "#F2F2F2",
                        border: " 0.3px solid #1F1F1F",
                        borderRadius: "8px",
                        width: "80px",
                      }}
                      name="Price"
                      value={RawIteam.Price}
                      onChange={handlechange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    Enter Stock
                    <br />
                    <input
                      type="text"
                      style={{
                        background: "#F2F2F2",
                        border: " 0.3px solid #1F1F1F",
                        borderRadius: "8px",
                      }}
                      name="Stock"
                      value={RawIteam.Stock}
                      onChange={handlechange}
                    />
                  </td>
                  <td>
                    Enter Category
                    <br />
                    <input
                      type="text"
                      style={{
                        background: "#F2F2F2",
                        border: " 0.3px solid #1F1F1F",
                        borderRadius: "8px",
                        width: "80px",
                      }}
                      name="Category"
                      value={RawIteam.Category}
                      onChange={handlechange}
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
                  handleClose();
                  handlesubmit();
                }}
              >
                submit
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
export default RawIteam;
