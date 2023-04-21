import React from "react";
import Style from './DialogHome.module.css'
export default function Rent(){
  return(
    <div>
        <p className={Style.Text2}>Make money by renting out your car</p>
        <p className={Style.Text3}>Connect with thousands of drivers and earn more per week with Uber’s free fleet management tools</p>
        <button className={Style.btn}>Get Started</button>
     </div>
  )
}