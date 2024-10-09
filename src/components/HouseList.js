import React from 'react';
import { useContext } from 'react';
import { HouseContext } from './HouseContext';
import House from './House';
import { Link } from 'react-router-dom';
import {ImSpinner2} from 'react-icons/im';
const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);
  //console.log(houses);

  //if loading is true
  if(loading) {
    return ( <ImSpinner2 className=" mx-auto animate-spin text-4xl text-violet-700 mt-[200px] "/>
    );
  }

  if (houses.length < 1 ) {
    return <div className='text-center text-3xl text-gray-400 mt-48'>sorry, nothing found</div>
  }

  return (
    <section className='mb-20 '>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8'>
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
