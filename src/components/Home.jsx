import React , {useEffect} from 'react'
import "../sass/home.scss";
import Hero from './Hero';
import AOS from 'aos';
// import About from './About';
import Aboutcontent from './Aboutcontent';
import Certificates from './Certificates';
import Footer from './Footer';
import Sites from './Sites';

function Home() {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='home_div'>
      <Hero />
      <Aboutcontent />
      <div className='certificate_outer'>
      <Certificates />
      </div>
      <div className='site_home_outer'>
      <Sites />
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Home