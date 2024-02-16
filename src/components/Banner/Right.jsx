import React from 'react';
import Image from '../../assets/plane.png';

const Right = () => {
  return (
    <div className="space-y-5 sm:pt-40 xl:pr-40 z-1">
      <img
        src={Image}
        alt=""
        className="w-full h-auto sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-full"
      />
    </div>
  );
};

export default Right;
