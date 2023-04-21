import React from "react"
import {BsFillPeopleFill } from 'react-icons/bs';
import {AiFillHome } from 'react-icons/ai';
import {HiOutlineNewspaper } from 'react-icons/hi';
import style from "./Safety.module.css"

export default function Safety(){

  return (
    <div className={style.main}>
      <h1>Focused on safety, wherever you go</h1>
      <div className={style.content}>
      <div className={style.content1}>
        <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1613520218/assets/3e/e98625-31e6-4536-8646-976a1ee3f210/original/Safety_Home_Img2x.png"/>
        <h3>Our commitment to your safety</h3>
        <p>With every safety feature and every standard in our Community Guidelines, we're committed to helping to create a safe environment for our users.</p>
        </div>
        <div className={style.content2}>
          <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1613520285/assets/c2/91ea9c-90d7-4c36-a740-d7844536694e/original/Cities_Home_Img2x.png"/>
          <h3>Setting 10,000+ cities in motion</h3>
          <p>The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home.</p>
          </div>
          </div>
      </div>
  )
}