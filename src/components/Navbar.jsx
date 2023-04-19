import {
  FaFacebook,
  FaGooglePlusG,
  FaInstagram
} from 'react-icons/fa';

import { BsChatSquareDots } from 'react-icons/bs';
import { TiThMenu } from 'react-icons/ti';
import { useState } from 'react';

const Navbar = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => {
    setShow(!show)
  }
  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/70'>
      <ul className='hidden sm:flex px-4'>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#booking">Deals</a>
        </li>
        <li>
          <a href="#contacts">Contact</a>
        </li>
      </ul>
      <div className='flex justify-between'>
        <FaFacebook  className='mx-4'/>
        <FaGooglePlusG  className='mx-4'/>
        <FaInstagram className='mx-4'/>
      </div>
      {/* mobile */}
      <div onClick={handleClick} className='sm:hidden z-10'>
        <TiThMenu size={20} className='mr-4 cursor-pointer'/>
      </div>
      <div onClick={handleClick} className={show ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col' : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
        <ul className='h-full w-full text-center pt-12'>
        <li className='text-2xl py-8'>
          <a href="/">Home</a>
        </li>
        <li className='text-2xl py-8'>
          <a href="#gallery">Gallery</a>
        </li>
        <li className='text-2xl py-8'>
          <a href="#deals">Deals</a>
        </li>
        <li className='text-2xl py-8'>
          <a href="#contacts">Contact</a>
        </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar