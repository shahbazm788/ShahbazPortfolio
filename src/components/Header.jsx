import React, { useEffect, useState } from 'react'
import "../sass/header.scss"
import { FaBarsStaggered } from "react-icons/fa6";
import logo from  "./img/logo.png"
import { NavLink } from 'react-router-dom';
import About from './About';

function Header() {

 const [navHide,setNavHide] = useState("nav_hide")

const toggleNav = () => {
  return  navHide === "nav_hide" ? setNavHide("nav_active") : setNavHide("nav_hide");
} 

useEffect( () => {

},[navHide]);
  return (
    <div className='full_header_outer'>
    <div className='heder_outer'>
      <div><img src={logo} alt='' />
      <button className='nav_btn' 
      onClick={() => {
        // toggleNav()
        // alert("yes")
  return  navHide === "nav_hide" ? setNavHide("nav_active") : setNavHide("nav_hide");

      }}
      ><FaBarsStaggered /></button>
      </div>
      <div className={`nav_div ${navHide}`}>
        <nav>
        <NavLink to="/" 
        onClick={() => {
          toggleNav()
        }}
        >Home</NavLink>

      

        <NavLink to="/about" 
        onClick={() => {
          toggleNav()
        }}
        >About</NavLink>

<NavLink to="/certificatepage" 
        onClick={() => {
          toggleNav()
        }}
        >Certificates</NavLink>
        
        <NavLink to="/contect" 
        onClick={() => {
          toggleNav()
        }}
        >Contect</NavLink>
        {/* <NavLink to="/hire" 
        onClick={() => {
          toggleNav()
        }}
        >Hire Me</NavLink> */}

        </nav>
      </div>

    </div>
    </div>
  )
}

export default Header
