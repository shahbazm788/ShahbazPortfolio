import React from 'react'
import "../sass/sites.scss"
import admin from  "./img/admin.png";
import zscolon from "./img/zscolon.png"
import blog from "./img/blog.png"

const Sites = () => {
  return (
    <div>
        <h1 className='sites_heading'>Portfolio Sites</h1>
        <div  className='sites_outer'>
            <div className='site' data-aos='fade-down' data-aos-delay="400" data-aos-duration="1500">
            <div className='site_img'>
                    <img src={admin} />
                </div>
                <h6>React Admin Dashnoard</h6>
                
            </div>

            <div className='site'>
            <div className='site_img' data-aos='fade-up' data-aos-delay="400" data-aos-duration="1500">
                    <img src={blog} />
                </div>
                <h6>MERN Blog</h6>
               
            </div>

            <div className='site' data-aos='fade-down' data-aos-delay="400" data-aos-duration="1500">
            <div className='site_img'>
                    <img src={zscolon} />
                </div>
                <h6>React ZSclone</h6>
                
            </div>

        </div>
    </div>
  )
}

export default Sites
