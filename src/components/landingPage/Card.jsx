import React from 'react';
import dummy from '../../assets/dummy.png';

function Card({ number, heading, description }) {
  return (
    <> 
      <div className="w-full flex flex-col items-center sm:items-start mt-8 sm:mt-16">
        {/* Image */}
        <div className="w-full sm:w-auto">
          <img 
            src={dummy} 
            className="h-40 sm:h-52 w-full sm:w-auto rounded-3xl mb-2" 
            alt="Card Thumbnail" 
          />
        </div>

        {/* Number and Heading */}
        <div className="flex justify-center sm:justify-start items-center w-full sm:w-80">
          <div className="font-pop text-3xl sm:text-4xl font-semibold mr-2">{number}</div>
          <span className="font-pop font-semibold text-xl sm:text-2xl mt-1">{heading}</span>
        </div>

        {/* Description */}
        <p className="mt-1 font-pop text-base sm:text-xl text-center sm:text-left w-full sm:w-80 pb-6 sm:pb-10 px-2 sm:pl-9">
          {description}
        </p>
      </div>
    </>
  );
}

export default Card;
