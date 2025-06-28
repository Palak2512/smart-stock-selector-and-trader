
import React,{useState,useEffect} from "react";
import axios from 'axios';
// import { positions } from "../data/data";
import VerticalGraph from './VerticalGraph'; 

const Positions = () => {
  const[allPositions,setAllPositions] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3002/allPositions").then((res)=>{
      console.log(res.data);
      setAllPositions(res.data);
    });
  },[]);

  const labels = allPositions.map((subArray) => subArray.name);
   const data = {
  labels,
  datasets:[
    {
      label: 'Stock name',
      data: allPositions.map((stock) => stock.price),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ]
}


  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          {allPositions.map((stock,index)=>{
            const currVal = stock.qty * stock.price;
            const totCost = stock.qty * stock.avg;
            const isProfit = currVal - totCost >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";
            return(
               <tr key={index}>
            <td>{stock.product}</td>
            <td>{stock.name}</td>
            <td>{stock.qty}</td>
            <td>{stock.avg}</td>
            <td>{stock.price}</td>
            <td className={profClass}>{(currVal - totCost).toFixed(2)}</td>
            <td className={dayClass}>{stock.day}</td>
          </tr>
            )
          })}
        </table>
      </div>
         <VerticalGraph data={data} />
    </>
  );
};

export default Positions;
