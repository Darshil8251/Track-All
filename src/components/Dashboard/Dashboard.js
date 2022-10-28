import { useEffect, useState } from "react";
import React from "react";
// import PieChart from './PieChart';
import Totalsales from "./img/Totalsales.svg";
import Ordericon from "./img/Ordericon.svg";
import Cancelledorder from "./img/Cancelledorder.svg";
import Newcustomers from "./img/Newcustomers.svg";
//  import Zomato from './img/';
import "./Dashboard.css";
import Barchart1 from "./Chart/Barchart1";
import Barchart2 from "./Chart/Barchart2";
// import Piechart1 from "./chart/Piechart";
import ProgressBar from "react-bootstrap/ProgressBar";
import Slider from '../Slider';

const Dashboard = () => {
  const [Data, setData] = useState([]);
  const [Dashboard, setDashboard] = useState([]);
  const [popularity, setpopularity] = useState([]);
  const [Details, setDetails] = useState([]);

  const FetchData = async () => {
    let res = await fetch(
      "https://TrackAll.bsite.net/api/analytics/GetNumberAnalytics/71897957-87eb-45c0-8d50-a73c5490f17e",
      {
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
    let pop = await fetch(
      "https://trackall.bsite.net/api/Analytics/GetTopProduct/71897957-87eb-45c0-8d50-a73c5490f17e",
      {
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
    let data = await res.json();
    let second = await pop.json();
    setData(data.allData);
    setDashboard(data);
    setpopularity(second.topProduct);
    setDetails(second);
    console.log(second.weeklyTopProduct);
  };
 
  useEffect(() => {
    FetchData();
  }, []);

  return (
    <>
    <Slider/>
    <div className="col main pt-4 dashboard">
      <h3 className= "topheading" style={{fontWeight : "bold"}}>Sales Summary</h3>
      <div className="dropdown" style={{margin : "0px"}} >
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Filter By
        </button>
        <div
          className="dropdown-menu   dropdownhover" style={{backgroundColor:" #ffeebf"}}
          aria-labelledby="dropdownMenuButton"
        >
          <a
            className="dropdown-item "
            onClick={() => {
              setData(Dashboard.allData);
            }}
          >
            All Data
          </a>
          <a
            className="dropdown-item"
            onClick={() => {
              setData(Dashboard.todayData);
            }}
          >
            Today Data
          </a>
          <a
            className="dropdown-item"
            onClick={() => {
              setData(Dashboard.monthlyData);
            }}
          >
            Monthly Data
          </a>
          <a
            className="dropdown-item"
            onClick={() => {
              setData(Dashboard.yearlyData);
            }}
          >
            Yearly Data
          </a>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-xl-3 col-sm-6 py-2 cardmargin">
          <div
            className="card text-black h-100 cardstyle"
            style={{ backgroundColor: "#FFAFAF" }}
          >
            <div className="card-body cardcontent">
              <div className="rotate">
                <img src={Totalsales} alt="totalorder" />
              </div>
              <br />
              <h3 style={{ fontSize: "24px" }}>&#8377;{Data.totalSales}</h3>
              <h6>Total Sales</h6>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 py-2 cardmargin">
          <div
            className="card text-black h-100 cardstyle"
            style={{ backgroundColor: "#FFEA7E" }}
          >
            <div className="card-body cardcontent">
              <div className="rotate">
                <img src={Ordericon} alt="order" />
              </div>
              <br />
              <h3 className="display-4" style={{ fontSize: "24px" }}>
                {Data.totalOrders}
              </h3>
              <h6>Total Order</h6>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 py-2 cardmargin">
          <div
            className="card text-black  h-100 cardstyle"
            style={{ backgroundColor: "#8AFFA4" }}
          >
            <div className="card-body cardcontent">
              <div className="rotate">
                <img src={Cancelledorder} alt="cancelledorder" />
              </div>
              <br />
              <h3 className="display-4" style={{ fontSize: "24px" }}>
                {Data.cancelledOrder}
              </h3>
              <h6>Cancelled Order</h6>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 py-2 cardmargin">
          <div
            className="card text-black h-100 cardstyle"
            style={{ backgroundColor: "#80E0FE" }}
          >
            <div className="card-body cardcontent">
              <div className="rotate">
                <img src={Newcustomers} alt="" />
              </div>
              <br />
              <h3 className="display-4" style={{ fontSize: "24px" }}>
                {Data.newCustomer}
              </h3>
              <h6>New Customers</h6>
            </div>
          </div>
        </div>
      </div>

      <hr className="horizontalline" />

      <div className="row charts">
        <div className="col-xl-7 col-sm-7 firstchart">
          <h5 className="mt-3 mb-4 headingchart">Total Revenue</h5>
          
          <Barchart1 />
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="col-xl-4 col-sm-4 secondchart">
          <h5 className="mt-3 mb-4 ">Merchandise Sales</h5>
          <Barchart2 className="piechart" />
        </div>
      </div>
      <hr className="horizontalline" />

      {/* <ProgressBar now={45}   variant="success" style={{height :"5px" }} /> */}

      <div className="popularity">
        <div className="topproductdiv">
          <h1 className="topproduct" tyle={{ marginRight: "710px" }}>
            Top Product
          </h1>
          <div className="dropdown ">
            <button
              className="btn btn-secondary dropdown-toggle ddowntopprofuct"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Filter By
            </button>
            <div className="dropdown-menu popularityhover" aria-labelledby="dropdownMenuButton" style={{backgroundColor:" #ffeebf"}}>
              <a
                className="dropdown-item"
                onClick={() => {
                  setpopularity(Details.topProduct);
                }}
              >
                All
              </a>
              <a
                className="dropdown-item"
                onClick={() => {
                  setpopularity(Details.todayTopProduct);
                }}
              >
                Today Product
              </a>
              <a
                className="dropdown-item"
                onClick={() => {
                  setpopularity(Details.weeklyTopProduct);
                }}
              >
                WeeklyTopProduct
              </a>
              <a
                className="dropdown-item"
                onClick={() => {
                  setpopularity(Details.monthlyTopProduct);
                }}
              >
                MonthlyTopProduct
              </a>
              <a
                className="dropdown-item"
                onClick={() => {
                  setpopularity(Details.yearlyTopProduct);
                }}
              >
                YearlyTopProduct
              </a>
            </div>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Popularity</th>
                <th scope="col">Sales</th>
              </tr>
            </thead>
            <tbody>
              {popularity.map((item, index) => {
                return (
                  <>
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.productName}</td>
                      <td>
                        <ProgressBar
                          now={item.percentage}
                          variant="secondary"
                          style={{ height: "5px", background: "lightgray" }}
                        />
                      </td>
                      <td className="progressSalestd">
                        <div className="progressSales">{item.percentage}%</div>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
