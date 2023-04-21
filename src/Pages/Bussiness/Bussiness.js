import React from "react"
import Button from "../../Atom/Button/Button"
import style from "./Bussiness.module.css"

export default function Bussiness(){

  return(
    <div className={style.main}>
      <h1>Uber for Business</h1>
      <p>Transform the way your company moves and feeds its people.</p>
      <Button textName="See How" className={style.btn}/>
      </div>
  )
}