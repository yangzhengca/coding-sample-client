import { BarChart, CartesianGrid, XAxis, YAxis, Bar, LabelList } from "recharts";
import React from "react";



const Histogram = ({vehicles}) => {
  let liveCount=0
  let soldCount=0
  
  for(let i=0; i<vehicles.length; i++){
    if(vehicles[i].isSold){
      soldCount=soldCount+1
    }else{
      liveCount=liveCount+1
    }
  }

  const data =[
    {
      name:'Live',
      pv:liveCount
    },
    {
      name:'Sold',
      pv:soldCount
    },
  ]

  return (
    <BarChart
      width={290}
      height={160}
      data={data}
      margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name">
        {/* <Label value="Pages of my website" offset={0} position="insideBottom" /> */}
      </XAxis>
      <YAxis
        // label={{ value: "pv of page", angle: -90, position: "insideLeft" }}
      />
      <Bar dataKey="pv" fill="#8884d8">
        <LabelList dataKey="pv" position="top" />
      </Bar>
    </BarChart>
  );
};

export default Histogram