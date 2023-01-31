import React, { useState, useEffect } from "react";
import "./Merchandise.css";
import Add from "./Add";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Merchandise_Menu() {
  const [merchandise, setmerchandise] = useState(false);
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

  // Use for Data fetch from A
  useEffect(() => {
    const url =
      "https://heyq.bsite.net/api/api/GetZomatoProduct/71897957-87eb-45c0-8d50-a73c5490f17e";

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
  const itemTab = Math.ceil(Data.length / 6);

  const tabNumber = [...Array(itemTab + 1).keys()].slice(1);
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
                        style={{ textAlign: "center" }}
                      >
                        <thead>
                          <tr className="p-1">
                            <th className="p-1 tableitem header">Item</th>
                            <th className="pS-3 tableitem header">
                              Stock Status
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {Data.slice(index * 6, iteam * 6).map((a, b) => {
                            return (
                              <tr key={b} className="ps-1">
                                <td className="p-1 item">{a.name}</td>
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
      </div>
    </>
  );
}

export default Merchandise_Menu;
