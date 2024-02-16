import React from 'react'
import Design from './Design'
import Banner from '../components/Banner/Banner'
import '.././index.css'


const Hero = () => {
  return (<>
    <div id='home' className='relative h-screen bg-banner-bg'> 
      
      <div className="w-full h-screen absolute top-0 left-0">
        <Design />
      </div>
      <Banner/>
  </div>
  

 
  </>
  )
}

export default Hero