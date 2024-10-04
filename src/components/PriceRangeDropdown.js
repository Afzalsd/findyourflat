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
      value: '1,000,000 - 1,300,000',
    },
    {
      value: '1,300,000 - 1,600,000',
    },
    {
      value: '1,600,000 - 1,900,000',
    },
    {
      value: '1,900,000 - 2,200,000',
    },
    {
      value: '100,000 - 300,000',
    },
    {
      value: '300,000 - 600,000',
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
