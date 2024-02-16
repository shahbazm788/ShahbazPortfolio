import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../sass/about.scss"
const Aboutcontent = () => {
  return (
    <div className='about_outer'>
      <Container>
        {/* <h1 className='about_heading'>Are You need A "React" or "MERN" Developer ???</h1> */}
        <h1 className='about_heading'>Who Am I ?</h1>
        <p className='heading_border_p'></p>
        <Row>
          <Col sm={12}>
          <div className='about_text'>
            <p>Are You need A <span>"React"</span> or <span>"MERN"</span> Developer ???</p>
            
            <p>If yes, Then You are on right place. I Am <span>Shahbaz</span> A certifide Mern stack developer with the couple of years experience of REACT and MERN developing You can finde my portfolio bleow. If you want to hire me you can contect me on any freelance plateform  like Freelance, Fiver, Upwork. or Find  me on Linkdin, facebook, X or Whatsapp etc. Thanks to reading </p>
          </div>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Aboutcontent
