import React from "react"
import {BsArrowRight } from 'react-icons/bs';
import style from "./SignUp.module.css"

export default function SignUp(){

  return (
    <div className={style.main}>
      <div className={style.drive}>
      <h1>Sign up to drive</h1> <BsArrowRight className={style.icon}/>
      </div>
      <div className={style.ride}>
      <h1>Sign up to ride</h1> <BsArrowRight className={style.icon}/>
      </div>
      </div>
  )
}