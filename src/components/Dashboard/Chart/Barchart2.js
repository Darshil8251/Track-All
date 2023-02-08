import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
  LabelList,
  Legend
} from "recharts";
import { useEffect, useState } from "react";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function Barchart2() {
   const [Data, setData] = useState([{}]);
  const [render, setreder] = useState([]);
  // const COLORS = [
  //   {nam :'#0088FE'},
  //   {nam : '#00C49F'},
  //   { nam :'#FFBB28'},
  //   {nam : '#FF8042'},
  // ];

  const FetchData = async () => {
    let res = await fetch(
      "https://TrackAll.bsite.net/api/Analytics/GetTotalSalesByMarket/71897957-87eb-45c0-8d50-a73c5490f17e",
      {
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
    let data  = await res.json();
     setData(data);
    setreder(data.salesByMarketPlace)
   
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    // <ResponsiveContainer width="80%" height="80%" >
    //   <PieChart width={500} height={500} style={{marginLeft: "34px",marginBottom : "0px"}}>
    //   <Tooltip/>
    //     <Pie
    //       data={Data.salesByMarketPlace}
    //       cx="50%"
    //       cy="50%"
    //       labelLine={false}
    //       label={Data.marketPlaceName}
    //       outerRadius={120}
    //       fill="#82ca9d"
    //       dataKey="totalSales"
    //       // label='marketPlaceName'
    //     >
    //     </Pie>
    //     <Pie dataKey={Data.marketPlaceName} data={Data.marketPlaceName} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
    //   </PieChart>
    // </ResponsiveContainer>
    // <PieChart width={500} height={500}>
    //   <Pie
    //     dataKey="totalSales"
    //     isAnimationActive={true}
    //     data={render}
    //     cx={200}
    //     cy={200}
    //     innerRadius={40}
    //     outerRadius={80}
    //     fill="#82ca9d"
    //     labelLine={false}
    //     label={renderCustomizedLabel}
    //   >
    //     {render.map((entry, index) => (
    //       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
    //     ))}
    //   </Pie>
    // </PieChart>


    <>
    <div className="dropdown"  >
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
            <div className="dropdown-menu dphover" aria-labelledby="dropdownMenuButton" style={{backgroundColor:" #ffeebf"}}>
              <a className="dropdown-item" onClick={
                ()=>{
                  setreder(Data.salesByMarketPlace)
                }
              } >
                salesByMarketPlace
              </a>
              <a className="dropdown-item" 
               onClick={
                ()=>{
                  setreder(Data.todaySalesByMarktePlace)
                }
              } >
                todaySalesByMarktePlace
              </a>
              <a className="dropdown-item" onClick={
                ()=>{
                  setreder(Data.weeklySalesByMarktePlace)
                }
              } >
                weeklySalesByMarktePlace
              </a>
              div
              <a className="dropdown-item" 
               onClick={
                ()=>{
                  setreder(Data.monthlySalesByMarktePlace)
                }
              } >
monthlySalesByMarktePlace              </a>
            </div>
            <div className="dropdown-menu dphover" aria-labelledby="dropdownMenuButton" style={{backgroundColor:" #ffeebf"}}>
              <a className="dropdown-item" onClick={
                ()=>{
                  setreder(Data.yearlySalesByMarktePlace)
                }
              } >
               yearlySalesByMarktePlace
              </a>
             
            </div>
            
          </div> 
    <PieChart width={800} height={400}>
    <Pie
      data={render}
      cx={200}
      cy={200}
      labelLine={false}
      label={renderCustomizedLabel}
      outerRadius={80}
      fill="#8884d8"
      dataKey="totalSales"
    >
      {
        render.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))
      }
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
  </>
  );
}

export default Barchart2;

// // import React, { PureComponent } from 'react';
// // import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';
// // import "./Barchart.css"
// // const data = [
// //   {
// //     name: 'Zomato',
// //     uv: 4000,
// //     pv: 2400,
// //     amt: 2400,
// //   },
// //   {
// //     name: 'Swiggy',
// //     uv: 3000,
// //     pv: 1398,
// //     amt: 2210,
// //   },
// //   {
// //     name: 'Uber Eats',
// //     uv: 2000,
// //     pv: 3000,
// //     amt: 2290,
// //   },
// // ];

// // function Barchart(){

// //     return (
// //         <>
// //       <ResponsiveContainer width="100%" height="80%">
// //         <BarChart
// //           data={data}
// //           margin={{
// //             top: 5,
// //             right: 30,
// //             left: 20,
// //             bottom: 5,
// //           }}
// //           barSize={12}

// //         >
// //           <CartesianGrid vertical={false}/>
// //           <XAxis dataKey="name" />
// //           <YAxis tickCount={6} />
// //           <Tooltip/>
// //           <Bar dataKey="pv" fill="#1b1b1bb3" radius={[3,3,0,0]}  >
// //             <LabelList dataKey="pv" position="top" />
// //           </Bar>
// //           {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
// //           {/* <Bar dataKey="amt" fill="#82ca9d" /> */}
// //         </BarChart>
// //       </ResponsiveContainer>
// //       </>
// //     );
// //   }

// // export default Barchart;
