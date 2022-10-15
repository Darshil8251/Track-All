import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip, LabelList } from 'recharts';
import { useEffect, useState } from "react";

// const data = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
// ];



// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

  // return (
//     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

function Barchart2() {
  const [Data , setData] = useState([{}]);
  const COLORS = [
    {nam :'#0088FE'},
    {nam : '#00C49F'},
    { nam :'#FFBB28'},
    {nam : '#FF8042'},
  ];

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
    let data = await res.json();
    setData(data);
  };
  
  useEffect(() => {
    FetchData();
  }, []);

    return (
      <ResponsiveContainer width="80%" height="80%" >
        <PieChart width={500} height={500} style={{marginLeft: "34px",marginBottom : "0px"}}>
        <Tooltip/>
          <Pie
            data={Data.salesByMarketPlace}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={Data.marketPlaceName}
            outerRadius={120}
            fill="#82ca9d"
            dataKey="totalSales"
            // label='marketPlaceName'
          >
            {/* {Data.map((entry, index) => ( */}
              {/* <Cell key={Data.marketPlaceName} fill={['#0088FE'] ,['#0088FE'] } /> */}
            {/* ))} */}
            {/* <LabelList data={Data.salesByMarketPlace} position="outside"></LabelList> */}
          </Pie>
          <Pie dataKey={Data.marketPlaceName} data={Data.marketPlaceName} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
        </PieChart>
      </ResponsiveContainer>


    //   <ResponsiveContainer width="80%" height="80%">
    //   <PieChart width={400} height={400}>
    //     <Pie
    //      data={Data.salesByMarketPlace}
    //       isAnimationActive={false}
    //       cx="50%"
    //       cy="50%"
    //       outerRadius={120}
    //       fill={}
    //       dataKey="totalSales"
           
    //     />
    //     <Pie dataKey="marketPlaceName" data={Data.marketPlaceName} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" >
    //     <LabelList dataKey="marketPlaceName" position="inside"></LabelList>
    //     </Pie>
    //     <Tooltip />
    //   </PieChart>
    // </ResponsiveContainer>
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