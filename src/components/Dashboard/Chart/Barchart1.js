
import React, { PureComponent} from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';
import "./Barchart.css";
import { useEffect, useState } from "react";
import '../Dashboard.css';


function Barchart(){
  
  const [Data , setData] = useState([{}]);
  const [resetdata,setresetdata]=useState([{}]);
  const [y,sety]=useState("date");


const FetchData = async () => {
  let res = await fetch(
    "https://TrackAll.bsite.net/api/Analytics/GetTotalSales/71897957-87eb-45c0-8d50-a73c5490f17e",
    {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    }
  );
  let data = await res.json();
  setData(data.weekDaysSales);
  setresetdata(data);
};

useEffect(() => {
  FetchData();
}, []);


    return (
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
                  setData(resetdata.weekDaysSales);
                }
              } >
                Weekly
              </a>
              <a className="dropdown-item" 
               onClick={
                ()=>{
                  setData(resetdata.yearlySaleOverMonth);
                  sety("month");
                }
              } >
                Yearly
              </a>
            </div>
          </div> 
        <ResponsiveContainer width="100%" height="80%"  >
        <BarChart
          data={Data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
            
          }}
          barSize={12}
          
          
            >
          <CartesianGrid vertical={false}/>
          <XAxis dataKey={y} />
          <YAxis tickCount={6} />
          <Tooltip/>
          <Bar dataKey="totalSales" fill="#1b1b1bb3" radius={[3,3,0,0]}  style={{backgroundColor:"#FFF7E1"}} >
          
          </Bar>
         
        </BarChart>
      </ResponsiveContainer>
        
        
      
      </>
    );
  }


export default Barchart;



// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// function Barchart1() {
  

//     return (
//       <ResponsiveContainer width="200%" height="90%">
//         <LineChart
//           width={500}
//           height={300}
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
//           {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
//         </LineChart>
//       </ResponsiveContainer>
//     );
  
// }

// export default Barchart1;