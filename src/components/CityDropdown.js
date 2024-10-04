import React from 'react';
import {useState,useEffect,useContext} from 'react';
import {RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';
//import headlessUi

import { Menu } from '@headlessui/react';
//housesContext
import {HouseContext} from './HouseContext';

const CityDropdown = () => {
  const {city, setCity, cities} = useContext(HouseContext);
  //console.log(city);
  //console.log(cities);
  const [isOpen, setIsOpen] = useState(false);
  return <Menu as='div' className='dropdown  relative'>
    <Menu.Button  onClick={() => setIsOpen(!isOpen)}
    className='dropdown-btn w-full text-left'>
      <RiMapPinLine className='dropdown-icon-primary' />
      <div>
        <div className='text-[15px] font-medium leasing-tight'>{city}</div>
        <div className='text-[13px]'>Choose your place</div>
      </div>
      {
        isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )
      }
    </Menu.Button>

    <Menu.Items className='dropdown-menu'>
      {
        cities.map((city, index) => {
          return <Menu.Item onClick={() => setCity(city)} className='w-full cursor-pointer hover:text-violet-700
          transition relative' as='li' key={index}>
            {city}
          </Menu.Item>;
        })
      }
    </Menu.Items>
  </Menu>;
};

export default CityDropdown;
