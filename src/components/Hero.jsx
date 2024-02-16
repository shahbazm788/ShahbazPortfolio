import React from 'react'
import Typedtext from './Typedtext'
import "../sass/hero.scss";

import shahbaz from "./img/shahbaz.jpg"

function Hero() {
  return (
    <div className='hero_outer' >
        <div className='hero_text_div'>
          <h1 data-aos='fade-down-right' data-aos-delay="400" data-aos-duration="1500">Hi There, Wellcom</h1>
          <Typedtext />
          <button className='hire_me_btn' data-aos='fade-up-right' data-aos-delay="400" data-aos-duration="1500">Hire me </button> 
          <button className='portfolio_btn' data-aos='fade-up-left' data-aos-delay="400" data-aos-duration="1500">Portfolio</button>
        </div>
        <div className='img_div' data-aos='fade-up' data-aos-delay="400" data-aos-duration="1500">
          <img src={shahbaz} alt='Owner Image' />
          
        </div>

        
    </div>
  )
}

export default Hero