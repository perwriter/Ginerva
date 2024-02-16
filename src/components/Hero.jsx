import React from 'react'
import Design from './Design'
import Banner from './Banner/Banner'
import '.././index.css'


const Hero = () => {
  return (<>
    <div className='relative h-screen bg-banner-bg'> 
      
      <div className="w-full h-screen absolute top-0 left-0">
        <Design />
        
        
      </div>
      <Banner/>
      
  </div>
  

 
  </>
  )
}

export default Hero