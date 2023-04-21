import React from "react"
import {BsGlobe } from 'react-icons/bs';
import {TbGridDots } from 'react-icons/tb';
import {SiUber } from 'react-icons/si';
import style from "./Navbar.module.css"

export default function Navbar(){

  return (
    <div className={style.main}>
      <div className={style.sec1}>
     <SiUber className={style.icon}/>
      <h4>Company </h4>
      <h4>Safety </h4>
      <h4>Help </h4>
      </div>
      <div className={style.sec2}>
        <h4><BsGlobe />EN</h4>
        <h4><TbGridDots />Products</h4>
        </div>
      </div>
  )

}