



import React from 'react'

const ExportDataToTbl = () => {
  
    
  
    useEffect(()=>{
      const label=[];
      const popvalue=[];
      const getData = async () => {
        const dataReq = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        const dataResp = await dataReq.json();
  
      }
      getData();
  
  
     },[])  
  
    
  
    return (
  
  
      <>
        <div className="mian_container">
                <h1 className="heading">Fetch data from Api to table</h1>
                <div className="graph">
                    
                </div>
            </div>
    </>
  )
}

export default ExportDataToTbl



// import React, { useState } from "react";
// import { Container } from "react-bootstrap";
// import *as xlsx from 'xlsx';

// // npm install xlsx

// function Fetchexceldata() 
// {
//    const [excelData, setExcelData]= useState([]);
//   const readExcel = async(e)=>{
//    const file= e.target.files[0];
//    const data= await file.arrayBuffer(file);
//    const excelfile= xlsx.read(data);
//    const excelsheet= excelfile.Sheets[excelfile.SheetNames[0]];
//    const exceljson= xlsx.utils.sheet_to_json(excelsheet);
//    //console.log(exceljson);
//    setExcelData(exceljson);


//   }
//     return(
//         <React.Fragment>
//               <Container className="content">
//                <div className="row fthight">               
//                <div className="col-md-4 ">
//                <h3 className='mt-3'>Fetch Excel Data in React js</h3>
//                <label className="form-label">File </label>
//                <input type="file" className="form-control" onChange={ (e)=>readExcel(e)}  />
//                </div>
              
//                <div className="col-md-12 mt-3">   
//                {   excelData.length > 1 && (
//                 <table className="table">
//                   <thead>
//                      <tr>
//                         <th>Sr. No</th>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Phone No</th>
//                      </tr>
//                   </thead>
//                   <tbody>
//                     {                     
//                     excelData.map( (getdata, index)=>(
//                      <tr key={index}>
//                         <td>{ index+1 }</td>
//                         <td>{ getdata.name} </td>
//                         <td>{ getdata.email} </td>
//                         <td>{ getdata.phoneno} </td>
//                      </tr>
//                      ) ) }
//                   </tbody>
//                 </table>
//                )
// }

//                </div>
//                </div>
//              </Container>
//         </React.Fragment>
//     );
// }
// export default Fetchexceldata;