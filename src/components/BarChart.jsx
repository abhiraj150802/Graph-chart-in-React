// npm install react-apexcharts apexcharts

import { useEffect, useState } from "react";
import Chart from "react-apexcharts";




const BarChart = () => {
   const [year,setYear]=useState([]);
   const [popValue,setPopValue]=useState([]);

   
    useEffect(()=>{
      const label=[];
      const popvalue=[];
      const getData = async () => {
        const dataReq = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        const dataResp = await dataReq.json();

        const length = dataResp.data.length;

        for (let i = 0; i < length; i++) {
          label.push(dataResp.data[i].Year)
          popvalue.push(dataResp.data[i].Population)
        }
        
        setYear(label);
        setPopValue(popvalue);
      }
      getData();


     },[])  


   


  return (
    <>
          <div className="mian_container">
              <h1 className="heading">BarChart</h1>
              <div className="graph">
                  <Chart
                  type="bar"
                  width={700}
                  series={[
                    {
                        name:"population",
                        data:popValue,
                      
                    }
                  ]}
                  options={{
                   
                    title: {
                      text: " BarChart representation",
                      style: { fontSize: 10, color: "red" }
                    },
                    // a dataPointIndex series se compare kar rahe hai stack overflow se a color mapping ka idea liye hai
                    colors: [
                      function ({ dataPointIndex }) {
                        if (dataPointIndex === 0)
                          return "#40E0D0";
                        else if (dataPointIndex === 1)
                          return "#3cba9f";
                        else if (dataPointIndex === 2)
                          return "#8e5ea2";
                        else if (dataPointIndex === 3)
                          return "#CD5C5C";
                        else if (dataPointIndex === 4)
                          return "#e8c3b9";
                        else if (dataPointIndex === 5)
                          return "#c45850";
                        else if (dataPointIndex === 6)
                          return "#3e95cd";
                        else if (dataPointIndex === 7)
                          return "#7E36AF";


                      }
                    ],
                    // theme:{mode:'dark'}
                    xaxis: {
                      categories: year,
                      title: {
                        text: "U.S Population (year wise)",
                        style: { color: "#f90000", fontSize: 20 }
                      }
                    },

                    dataLabels: {
                      enabled: true,
                      formatter: function (val) {
                        return (Math.abs(Number(val)) / 1.0e+6).toFixed(3) + "M";
                      },
                      offsetY: -20,
                      style: {
                        fontSize: '10px',
                        colors: ["white"]
                      }
                    },

                  }}
                  />
              </div>
          </div>

    </>
  )
}

export default BarChart
