import React, { useState } from 'react';
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdFavorite, MdHelp } from 'react-icons/md';
import { FaUserFriends, FaWallet } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/* left side */}
      <div className='flex items-center'>
        <div className='cursor-pointer'>
          <AiOutlineMenu size={30} onClick={() => setNav(!nav)}/>
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl'>
          Best <span className='font-bold'>Eats</span>
        </h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='p-2 text-white bg-black rounded-full'>Delivery</p>
          <p className='p-2'>pickup</p>
        </div>
      </div>
      {/* Search input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={20} />
        <input
          type='text'
          placeholder='Search Food'
          className='w-full p-2 bg-transparent'
        />
      </div>

      {/* Cart button */}
      <button className='hidden p-2 text-white bg-black rounded-full item-center md:flex'>
        <BsFillCartFill size={20} className='mr-2' />
        Cart
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className='fixed top-0 left-0 z-10 w-full h-screen bg-black/80'></div>
      ) : (
        ''
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'
            : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
        }
      >
        <AiOutlineClose
          size={30}
          className='absolute top-0 pt-2 cursor-pointer right-4'
          onClick={()=> setNav(!nav)}
        />
        <h2 className='p-4 text-2xl'>
          Best <span className='font-bold'>Eats</span>
        </h2>
        <nav>
          <ui className='flex flex-col p-4 texxt-gray-800'>
            <li className='flex py-4 text-xl'>
              <TbTruckDelivery size={25} className='mr-4' />
              Orders
            </li>
            <li className='flex py-4 text-xl'>
              <MdFavorite size={25} className='mr-4' />
              Faverites
            </li>
            <li className='flex py-4 text-xl'>
              <FaWallet size={25} className='mr-4' />
              Wallet
            </li>
            <li className='flex py-4 text-xl'>
              <MdHelp size={25} className='mr-4' />
              Help
            </li>
            <li className='flex py-4 text-xl'>
              <AiFillTag size={25} className='mr-4' />
              Promotions
            </li>
            <li className='flex py-4 text-xl'>
              <BsFillSaveFill size={25} className='mr-4' />
              Best Ones
            </li>
            <li className='flex py-4 text-xl'>
              <FaUserFriends size={25} className='mr-4' />
              Invite Friend
            </li>
          </ui>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
