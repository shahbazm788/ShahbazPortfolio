import React from 'react'
import js_certifcate from "./img/js_certificate.png";
import html_certifcate from "./img/html_certifcate.png";
import frontEnd_certificate from "./img/reactCertificate.png"
import backendCertificate from "./img/backendCertificate.png"
import wordpressCertificate from "./img/wordpress-certificate.png"
import "../sass/certificate.scss";


const Certificates = () => {
  return (
   <>
      <h1 className='certificate_h1'>Certificates</h1>
      <p className='c_border_p'></p>
      <p className='c_text_p'>Here You can see my Certificates </p>

        <div className='c_images_outer'>
          <div className='certificates_images' data-aos='fade-down-right' data-aos-delay="400" data-aos-duration="1500" >
              <div className='img_1' >
              <h6 className='title_h6' >Responsive Desinge Certificates</h6>
                <div className='c_img_div' >
                  <img src={html_certifcate} alt='Js Certifcate' />
                </div>
              </div>
          </div>

          <div className='certificates_images' data-aos='fade-down-left' data-aos-delay="400" data-aos-duration="1500">
              <div className='img_2'>
              <h6 className='title_h6' >Js Certificate</h6>
                <div className='c_img_div'>
                  <img src={js_certifcate} alt='Js Certifcate' />
                </div>
              </div>
          </div>

          <div className='certificates_images'>
              <div className='img_1' data-aos='fade-down-right' data-aos-delay="400" data-aos-duration="1500">
              <h6 className='title_h6' >React & FrontEnd Developing Certificate</h6>
                <div className='c_img_div'>
                  <img src={frontEnd_certificate} alt='Js Certifcate' />
                </div>
              </div>
          </div>

          <div className='certificates_images' data-aos='fade-down-left' data-aos-delay="400" data-aos-duration="1500">
              <div className='img_2'>
              <h6 className='title_h6' >BackEnd (nodeJs/expresjs) Certificate</h6>
                <div className='c_img_div'>
                  <img src={backendCertificate} alt='Js Certifcate' />
                </div>
              </div>
          </div>
          <div className='certificates_images'>
              <div className='img_1' data-aos='fade-down-right' data-aos-delay="400" data-aos-duration="1500">
              <h6 className='title_h6' >WordPress Certificate</h6>
                <div className='c_img_div'>
                  <img src={wordpressCertificate} alt='Js Certifcate' />
                </div>
              </div>
          </div>

        </div>
    </>
  )
}

export default Certificates
