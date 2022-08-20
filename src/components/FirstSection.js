import React from 'react'
import "./FirstSection.css"
import logo1 from "../images/svgexport-4.svg"
import img2 from "../images/Hero-removebg-preview.png"
const FirstSection = () => {
  return (
    <>
      <section >
         <div>
            <h1 className='h1-text'>
            Get your groceries <br/>
            delivered same-day
            </h1>
            <p className='p-text'>
            Order what you want from grocery stores and local market near you <br/>
            and get it delivered right to your door.
            </p>
            <input type="text" placeholder='Enter your address' className='search-input'/>
            <img src={logo1} alt="" className='img-sec'/>
         </div>
            <img src={img2} alt="" className='img-min'/>
      </section>
    </>
  )
}

export default FirstSection;