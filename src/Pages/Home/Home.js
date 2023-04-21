import React,{useState} from "react"
import "../../style.css"
import Navbar from "../../Atom/Navbar/Navbar"
import DialogHome from "../../Atom/DialogHome/DialogHome"
import Bussiness from "../Bussiness/Bussiness"
import Ride from "../Ride/Ride"
import Safety from "../Safety/Safety"
import SignUp from "../SignUp/SignUp"
import Footer from "../../Atom/Footer/Footer"
import style from "./Home.module.css"


export default function Home(){

  const [ imageIndex, setImageIndex] = useState(0)

  const image=[{
    pic:"https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1349,h_644/v1613521692/assets/d9/ce6c00-32b0-4b93-9f0d-6f927d93da08/original/Rider_Home_bg_desktop2x.png",
  },
  {
  pic:"https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1349,h_667/v1613521435/assets/bc/0529b6-c37a-416b-9907-2cb44c4c2888/original/Earner_Home_bg_desktop2x.png",
  },
  {
  pic:"https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1349,h_623/v1677102595/assets/66/2853af-061f-4176-8c6b-f2ddef091599/original/UberIM_002309-%281%29.jpg",
  },
  ]

  return (
    <>
    <Navbar />
    <img src={image[imageIndex].pic} className={style.img}/>
    <DialogHome setImageIndex={setImageIndex}/>
    <Bussiness />
    <Ride />
    <Safety />
    <SignUp />
    <Footer />
    </>
  )
}