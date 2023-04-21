import React from "react"

export default function Button({className, onClick, textName}){
  return(
    <button className={className} onClick={onClick}>{textName}</button>
  )
}