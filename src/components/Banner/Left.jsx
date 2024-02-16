import React from 'react'

const Left = () => {
  return (
    <div className='pl-10 pt-8'> <div className="space-y-5  xl:pr-40 ">
    <h1
      data-aos="fade-up"
      className="text-4xl text-white sm:text-5xl font-semibold"
      style={{ lineHeight: 1.2 }}
    >
      Getting you to {" "}
      <span className="text-mary"> Tour the World</span>
    </h1>
    <p data-aos="fade-up" data-aos-delay="100" className=" text-white text-lg">
      We get you Necesaaary Travel Ducmunets: Starting with{" "}
      <span className="text-mary font-semibold">Visa</span> and offer{" "}
      <span className=" font-semibold text-mary">Advice</span>{" "}
      On best Places to visit for "
      <span className="text-mary font-bold">_Free</span>".
    </p>
    <button
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-offset="0"
      className="primary-btn text-white "
    >
      Get Started
    </button>
  </div></div>
  )
}

export default Left