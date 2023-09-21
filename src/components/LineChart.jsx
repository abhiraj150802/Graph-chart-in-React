


import { useEffect,useState } from "react";
import Chart from "react-apexcharts";

const LineChart = () => {

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
                  
                  type="line"
                  width={1100}
                  height={450}
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
                      

                    
                    ],
                    // theme:{mode:'dark'}
                    xaxis: {
                      categories: year,
                      title: {
                        text: "U.S Population (year wise)",
                        style: { color: "#f90000", fontSize: 20 }
                      }
                    },
                    
                    
                    yaxis: {
              labels: {
                formatter: function (val) {
                        return (Math.abs(Number(val)) / 1.0e+6).toFixed(1) + "M";
                      },
                
              }
                    },
                  }}
                  
                  />
              </div>
          </div>
    </>
  )
}

export default LineChart

