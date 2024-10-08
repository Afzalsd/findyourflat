import React from 'react';
import {useState,useEffect,useContext} from 'react';
import {RiHome5Line, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';
//import headlessUi

import { Menu } from '@headlessui/react';
//housesContext
import {HouseContext} from './HouseContext';


const PropertyDropdown = () => {
  const {property, setProperty, properties} = useContext(HouseContext);
 
  //console.log(properties);
  const [isOpen, setIsOpen] = useState(false);
  return <Menu as='div' className='dropdown  relative'>
    <Menu.Button  onClick={() => setIsOpen(!isOpen)}
    className='dropdown-btn w-full text-left'>
      <RiHome5Line className='dropdown-icon-primary' />
      <div>
        <div className='text-[15px] font-medium leasing-tight'>{property}</div>
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
        properties.map((property, index) => {
          return <Menu.Item onClick={() => setProperty(property)} className='w-full cursor-pointer hover:text-violet-700
          transition relative' as='li' key={index}>
            {property}
          </Menu.Item>;
        })
      }
    </Menu.Items>
  </Menu>;
};

export default PropertyDropdown;
