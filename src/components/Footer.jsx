import React from 'react'
import "../sass/footer.scss"
import whatsapp from "./img/icons8-whatsapp-96.png";
import fb from "./img/icons8-facebook-96.png"
import insta from "./img/icons8-instagram-96.png"
import linkdin from "./img/icons8-linkedin-96.png"
import twiter from "./img/twiter x.jpeg"
const Footer = () => {
  return (
    <div>
      
      <div className='footer_div'>
        <hr />
     <div className='footer_row'>
     <div className='footer_about'>
      <h3>Follow Or Contect Me</h3>
      <div  className='images_div'>
        <div className='footer_img_div' ><a href ="https://www.facebook.com/eagles.king.10?mibextid=ZbWKwL" ><img src={fb} alt='facebook' /></a></div>
      </div>
      <div  className='images_div'>
        <div className='footer_img_div'><a href='https://wa.me/+923408628219'><img src={whatsapp} alt='whatsapp' /></a></div>
      </div>
      <div  className='images_div'>
        <div className='footer_img_div'><a href='https://www.linkedin.com/in/mohammad-shahbaz-3332272b6'><img src={linkdin} alt='linkdin' /></a></div>
      </div>
      <div  className='images_div'>
        <div className='footer_img_div'><a href='https://www.instagram.com/shhbz_ywns?igsh=MTZoMDhxdG4zbWNuYw=='><img src={insta} alt='instagram' /></a></div>
      </div>
      <div  className='images_div'>
        <div className='footer_img_div'><a href='https://twitter.com/ShahBaz01820568'><img src={twiter} alt='twiter' /></a></div>
      </div>
     </div>
     </div>
      <div className='design_outer'> Design & Develpod by <span>Mohammed Shahbaz</span> </div>
        
        </div>
    </div>
  )
}

export default Footer
