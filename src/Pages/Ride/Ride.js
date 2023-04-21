import React,{useState} from "react";
import Data from '../../Data'
import Style from './Ride.module.css'

export default function Ride() {

  const [data , setData] = useState(Data)
  return (
    <div className={Style.Main} >
    {data.map( (x) => 
    <div className={Style.Card}>
     <img src ={x.image}  alt='Auto'/> 
    <div className={Style.Details}>
      <h1>{x.DriveName}</h1>
      <p>{x.Discription}</p>
     </div>
     <div className={Style.Arrow} > <span> → </span>   </div>
     </div>
     )}
    </div>
  );
}
