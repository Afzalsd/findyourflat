import React from 'react';
import {useState,useEffect,useContext} from 'react';
import {RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';
//import headlessUi

import { Menu } from '@headlessui/react';
//housesContext
import {HouseContext} from './HouseContext';


const PriceRangeDropdown = () => {
  const {price, setPrice} = useContext(HouseContext);
 
  //console.log(properties);
  const [isOpen, setIsOpen] = useState(false);
  const prices = [
    {
      value: 'Price range (Any)',
    },
    {
      value: '1000000 - 1300000',
    },
    {
      value: '1300000 - 1600000',
    },
    {
      value: '1600000 - 1900000',
    },
    {
      value: '1900000 - 2200000',
    },
    {
      value: '100000 - 300000',
    },
    {
      value: '300000 - 600000',
    }
  ]

  return <Menu as='div' className='dropdown  relative'>
    <Menu.Button  onClick={() => setIsOpen(!isOpen)}
    className='dropdown-btn w-full text-left'>
      <RiWallet3Line className='dropdown-icon-primary' />
      <div>
        <div className='text-[15px] font-medium leasing-tight'>{price}</div>
        <div className='text-[13px]'>Choose your Budget</div>
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
        prices.map((price, index) => {
          return <Menu.Item onClick={() => setPrice(price.value)} className='w-full cursor-pointer hover:text-violet-700
          transition relative' as='li' key={index}>
            {price.value}
          </Menu.Item>;
        })
      }
    </Menu.Items>
  </Menu>;
};

export default PriceRangeDropdown;
