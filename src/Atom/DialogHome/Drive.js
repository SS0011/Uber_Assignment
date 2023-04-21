import React from "react";
import Style from './DialogHome.module.css'
export default function Ride(){
  return(
    <div>
       <p className={Style.Text2}>Get in the driver’s seat and get paid</p>
       <p>Drive on the platform with the largest network of active riders.</p>
       <button className={Style.btn}>Sign up to drive</button>
       <p>Learn more about driving and delivering</p>
     </div>
  )
}