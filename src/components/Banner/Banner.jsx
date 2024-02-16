import React from 'react'
import Left from './Left'
import Right from './Right'

const Banner = () => {
  return (
    <div className="dark:bg-gray-950 dark:text-white duration-300 ">
    <div className="container min-h-[620px] flex sm:t-0">
  
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center ">
        <div className="order-1 sm:order-1 sm:pt-40"><Left/></div>
        <div className="order-1 sm:order-2"><Right/></div>
        
        </div>
        </div></div>
  )
}

export default Banner