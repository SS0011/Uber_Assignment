import React,{useState} from "react";
import {Data1,Data2,Data3,Data4} from "../../Data"
import {SiUber } from 'react-icons/si';
import Style from './Footer.module.css'

export default function Footer() {

  const [Company]= useState(Data1)
  const [Product]= useState(Data2)
  const [GlobalCitizenship]= useState(Data3)
  const [Travel]= useState(Data4)
  return (
    <div className={Style.Main}>
   <div className={Style.Footer}>
     <SiUber className={Style.logo}/>
     <p>Visit Help Center</p>
     <div className={Style.content}>
     <div>
     <h3>Company</h3>
  {
    Company.map((x)=>
      <p>{x}</p>) 
  }
 </div>
 <div>
   <h3>Product</h3>
 {
   Product.map((x) => <p>{x}</p>) 
 }
   </div>
   <div>
   <h3>Global citizenship</h3>
  {
     GlobalCitizenship.map((x) => <p>{x}</p>)
  }
     </div>
     <div>
     <h3>Travel</h3>
{
   Travel.map( (x) => <p>{x}</p>)
}     </div>
   </div><br/>
   © Shubhali Shah &#10084; 2023
   </div>
 
    </div>
  );
}
