import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Typedtext = () => {
  return (
    <div>
       <TypeAnimation
      sequence={[
     
       2000,
        'I am SHAHBAZ, a MERN stack web Developer',
        2000,
        'I can create beutifull and eye cathing  website for you ',
        2000,
        'If you want to hire me please conntect me ',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
    </div>
  )
}

export default Typedtext
