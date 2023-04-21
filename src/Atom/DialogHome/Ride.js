import React from "react";
import Style from './DialogHome.module.css'
export default function Ride(){
  return(
    <div>
       <p className={Style.Text2}>Request a ride now</p>
        <input  className={Style.Input1} placeholder='Enter pickup location'/>
        <div className={Style.line}></div>
        <div className={Style.circle}></div>
        <div className={Style.square}></div>
        <input className={Style.Input1}  placeholder='Enter destination'/>
        <div className={Style.button}>
          <button className={Style.btn}>
          Request now
          </button>
          <button className={Style.btn1}>
          Schedule for later
          </button>
        </div>
      </div>
  )
}