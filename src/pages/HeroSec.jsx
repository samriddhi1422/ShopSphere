import React, { useEffect, useState } from "react";


import './herosec.css' 

import slide1 from "../assets/Untitled design.png"

import slide3 from "../assets/Untitled design (2).png"
import slide4 from "../assets/Untitled design (4).png"

function HeroSec() {
    const [slider ,setSlider] =useState(0);
    const handlePlus=()=>{
         setSlider(slider==data.length-1? 0: slider+1)
    }
   
    useEffect(()=>{
        const slideClear =setInterval(()=>{
            handlePlus()
        },2000)
     return ()=> clearInterval(slideClear)
    },[slider])
    
 const data =[slide1,slide3,slide4]
  return (
    <>
    <div className="hero">

   
    <div className="slider">
        <div className="slider-img">
            <img src={data[slider]}></img>
        </div>
       
       
    </div>
    

    </div>
    </>
  );
}

export default HeroSec;