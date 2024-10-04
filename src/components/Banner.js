import React from 'react';
import Image from '../assets/img/house-banner.png';
import Search from '../components/Search';

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
              Your Next <span className='text-violet-700'>Chapter</span> Starts Here
          </h1>
          <p className='max-w-[480px] mb-8'>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            lorem ipsum  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        {/* Image */}
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src= {Image} alt=''/>
        </div>
      </div>
      {/* Search */}
      <Search />

  </section>
  );
};



// const Banner = () => {
//   return (
//     <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
//       <div className='flex flex-col lg:flex-row items-center'>
//         {/* Text Container */}
//         <div className='flex-1 text-center lg:text-left lg:mr-8'>
//           <h1 className='text-2xl lg:text-4xl font-bold mb-4'>
//             Your Next <span className='text-secondary'>Chapter</span> Starts <span className='text-secondary'>Here</span>
//           </h1>
//           <p className='text-gray-600 mb-4'>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>
//         </div>

//         {/* Image Container */}
//         <div className=' hidden flex-1 lg:flex justify-end item-end'>
//           <img 
//             src={Image} 
//             alt='House Banner' 
//             className='w-full h-auto object-cover rounded-lg' 
//           />
//         </div>
//       </div>
      
//       {/* Search Component */}
//       <Search />
//     </section>
//   );
// };
export default Banner;
