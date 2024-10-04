import React from 'react';
import { useContext } from 'react';
import { HouseContext } from './HouseContext';
import House from './House';
import { Link } from 'react-router-dom';
const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);
  console.log(houses);
  return (
    <section className='mb-20 '>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
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
