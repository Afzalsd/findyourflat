import React from 'react';
import {BiBed,BiBath,BiArea} from 'react-icons/bi';

const House = ( { house } ) => {
  const { image, type, city, address, bedrooms, bathrooms, surface, price } = house
  return (
    <>
      <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
        <img className='mb-8' src={image} alt='' />
        
        {/* Type and City */}
        <div className='mb-4 flex gap-x-2 text-sm'>
          <div className='bg-green-500 rounded-full text-white px-3'>{type}</div>
          <div className='bg-violet-500 rounded-full text-white px-3'>{city}</div>
        </div>
        
        {/* Address */}
        <div className='text-lg font-semibold text-gray-700 mb-4'>{address}</div>

        {/* Bedrooms, Bathrooms, and Surface Area */}
        <div className='flex items-center gap-x-4 my-4'>
          <div className='flex items-center text-gray-600'>
            <BiBed className='mr-2' />
            <span>{bedrooms} Beds</span>
          </div>
          <div className='flex items-center text-gray-600'>
            <BiBath className='mr-2' />
            <span>{bathrooms} Baths</span>
          </div>
          <div className='flex items-center text-gray-600'>
            <BiArea className='mr-2' />
            <span>{surface} sqft</span>
          </div>
        </div>

        {/* Price */}
        <div className='mb-4 text-lg font-semibold text-violet-600'>{price}</div>
      </div>
    </>
  );
};

export default House;
