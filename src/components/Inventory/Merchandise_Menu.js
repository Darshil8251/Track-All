import React, { useState, useEffect } from "react";
import "./Merchandise.css";
import Add from "./Add";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { faL } from "@fortawesome/free-solid-svg-icons";
import Switch from "react-switch";

const select = {
  textDecoration:' none',
  position: 'absolute',
  color:' #666666',
  textAlign: 'center',
  borderRadius: '8px 8px 0px 0px',
  width: '132px',
  height: '35px'
}
function Merchandise_Menu() {
  const [merchandise, setmerchandise] = useState(false);
  const [Data, setData] = useState([{}]);
  const [resetdata, setresetdata] = useState([{}]);
  const[zomato,setzomato]=useState(true);
  const[swiggy,setswiggy]=useState(false);
  const[Ubereat,setUbereat]=useState(false);
  const[foodpanda,setfoodpanda]=useState(false);
  const[isset,setisset]=useState(false);
    
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
        setData(json);
        setresetdata(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  const fetchswiggy = () => {
    const url =
      "https://heyq.bsite.net/api/api/GetSwiggyProduct/71897957-87eb-45c0-8d50-a73c5490f17e";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setresetdata(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
    setzomato(false);
    setUbereat(false);
    setswiggy(true);
    setfoodpanda(false);
    
  };
  const fetchzomato = () => {
    const url =
      "https://heyq.bsite.net/api/api/GetZomatoProduct/71897957-87eb-45c0-8d50-a73c5490f17e";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setresetdata(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
    setzomato(true);
    setUbereat(false);
    setswiggy(false);
    setfoodpanda(false);
  };
  const fetchUber = () => {
    const url =
      "https://heyq.bsite.net/api/api/GetUberEatsProduct/71897957-87eb-45c0-8d50-a73c5490f17e";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setresetdata(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
    setzomato(false);
    setUbereat(true);
    setswiggy(false);
    setfoodpanda(false);
  };

  const fetchfoodpandas = () => {
    const url =
      "https://heyq.bsite.net/api/api/GetFoodPandaProduct/71897957-87eb-45c0-8d50-a73c5490f17e";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setresetdata(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
    setzomato(false);
    setUbereat(false);
    setswiggy(false);
    setfoodpanda(true);
  };

  const itemTab = Math.ceil(Data.length / 6);

  const tabNumber = [...Array(itemTab + 1).keys()].slice(1);

  const [searchInput, setsearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setsearchInput(e.target.value);
    if (e.target.value == "") {
      return setData(resetdata);
    }
    let searchData = resetdata.filter((data) => {
      return data.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    // setDetails(searchData);
    setData(searchData);
  };

  const handletoggle=()=>{

  }

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
                <button className="Name" onClick={fetchzomato} style={zomato?{...select,background:'#FBB700'}:select}>
                  Zomato
                </button>
              </li>
              <li className="Merchandise">
                <button className="Name" onClick={fetchswiggy} style={swiggy?{...select,background:'#FBB700'}:select}>
                  swiggy
                </button>
              </li>
              <li className="Merchandise">
                <button className="Name" onClick={fetchUber} style={Ubereat?{...select,background:'#FBB700'}:select}>
                  Uber Eatas
                </button>
              </li>
              <li className="Merchandise">
                <button className="Name" onClick={fetchfoodpandas} style={foodpanda?{...select,background:'#FBB700'}:select}>
                  food Pandas
                </button>
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
                  onChange={handleChange}
                  value={searchInput}
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
                                <td>
                                  <div className="form-check form-switch pS-3">
                                    <input
                                      className="form-check-input border border-success border-2"
                                      type="checkbox"
                                      role="switch"
                                      checked={a.stock==1?true:false}
                                      id="flexSwitchCheckDefault"
                                      onClick={handletoggle}
                                    />
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
