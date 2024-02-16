import { useState,useEffect } from 'react';
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Contect from './components/Contect';
import Hire from './components/Hire';
import 'aos/dist/aos.css';
import Footer from './components/Footer';
import  Certificatepage  from './components/Certificatepage';



function App() {

 


 

  return (
    <>
 <div className='app_outer' >

 <Router>
  <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/certificatepage" element={<Certificatepage />} />
        <Route  path="/about" element={<About />} />
        <Route  path="/contect" element={<Contect />} />
        

        <Route  path="/hire" element={<Hire />} />



      </Routes>

<Footer />
    </Router> 
 </div>
    </>
  );
}

export default App;
