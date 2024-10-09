import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-gray-900 py-10 text-white'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Company Info */}
        <div className='text-center md:text-left'>
          <h3 className='text-xl font-semibold mb-4'>About Us</h3>
          <p className='text-gray-400'>
            We are a trusted real estate company helping people find their dream homes with ease.
          </p>
        </div>

        {/* Quick Links */}
        <div className='text-center'>
          <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
          <ul className='space-y-2'>
            <li><a href='#' className='text-gray-400 hover:text-white transition'>Home</a></li>
            <li><a href='#' className='text-gray-400 hover:text-white transition'>Properties</a></li>
            <li><a href='#' className='text-gray-400 hover:text-white transition'>Agents</a></li>
            <li><a href='#' className='text-gray-400 hover:text-white transition'>Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className='text-center md:text-right'>
          <h3 className='text-xl font-semibold mb-4'>Follow Us</h3>
          <div className='flex justify-center md:justify-end space-x-4'>
            <a href='#' className='text-gray-400 hover:text-white transition'><FaFacebookF /></a>
            <a href='#' className='text-gray-400 hover:text-white transition'><FaTwitter /></a>
            <a href='#' className='text-gray-400 hover:text-white transition'><FaInstagram /></a>
            <a href='#' className='text-gray-400 hover:text-white transition'><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className='mt-8 border-t border-gray-700 pt-4 text-center text-gray-500'>
        Copyright &copy; 2024, All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
