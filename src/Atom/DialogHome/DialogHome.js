import React,{useState} from "react";
import  car from './car.svg'
import  Earn from './Earn.svg'
import keys from './keys.svg'
import Style from './DialogHome.module.css'
import Ride from "./Ride.js"
import  Drive from './Drive.js'
import  Rent from './Rent.js'

export default function  DialogHome({setImageIndex}) {
  const [ index , setIndex] = useState(0)
  const iconsArr =[
    { image : car,
      text : "Ride", 
    },
    { image : Earn,
      text : "Drive or deliver", 
    },
    { image : keys,
      text : "Rent your fleet",  
    }
  ]
  const Content = [
  {
    id : 1,
    element : <Ride/>
  },
  {
    id : 2,
    element : <Drive />
  },
  {
    id : 3,
    element : <Rent/>
  }
  ]

  function handleClick(idx){
  setIndex(idx)
  setImageIndex(idx)
  }
  return (
    <div className={Style.box}>
      <div className={Style.mainBox}>
        {iconsArr.map((x,idx)=>
         <div onClick={()=>handleClick(idx)} className={Style.icons} style={{borderBottom:index===idx ? "4px solid black":null}}>
          <img src={x.image} />
          <p className={Style.Text } >{x.text}</p>
         </div>
           )}
      </div>
      <div>
        {Content[index].element}
      </div>
       
    </div>
  );
}
