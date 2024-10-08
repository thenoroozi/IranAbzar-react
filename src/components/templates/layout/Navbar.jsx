import React from 'react';

//icons
import iranabzar from '../../../../public/images/iranabzar.svg'
import searchIcon from '../../../../public/icons/search.svg'
import person from '../../../../public/icons/person.svg'
import heart from '../../../../public/icons/heart.svg'
import bag from '../../../../public/icons/bag.svg'

const Navbar = ({ setLoginPage }) => {
   return (
      <nav className='flex items-center justify-between md:justify-evenly px-4 md:px-0 py-4 md:py-6'>
         <div>
            <img src={iranabzar} alt="iranabzar" className='w-32 md:w-40 lg:w-52 drop-shadow-md' />
         </div>

         <form className='md:hidden flex items-center rounded-lg'>
            <input
               type="search"
               name="search"
               placeholder='جستجو کنید...'
               className='block bg-gray-100 p-2 w-48 h-8 rounded-lg text-sm outline-none' />
            <button type='submit' className='w-8 h-8 p-1.5 -mr-5 rounded-tl-lg rounded-bl-lg !rounded-r-none btn'>
               <img src={searchIcon} alt="search" className='w-full' />
            </button>
            <button className='md:hidden relative hover:bg-primary/20 w-8 h-8 p-1.5 mr-1 rounded-full'>
               <img src={bag} className='w-6' />
               <span className='absolute top-0 right-0 bg-primary text-white leading-1 rounded-full w-4 h-4 text-sm'>2</span>
            </button>
         </form>

         <div className='hidden md:flex items-center rounded-lg'>
            <input
               type="search"
               name="search"
               placeholder='محصول مورد نظر را جستجو کنید...'
               className='bg-gray-100 p-2 md:w-72 lg:w-80 h-9 rounded-lg text-sm outline-none' />
            <button className='md:w-9 md:h-9 md:p-2 md:-mr-5 md:rounded-tl-lg md:rounded-bl-lg md:!rounded-r-none btn'>
               <img src={searchIcon} alt="search" className='w-full' />
            </button>
         </div>

         <div className='md:flex items-center hidden'>
            <button className='hover:bg-primary/20 w-8 h-8 p-1.5 ml-2 rounded-full'>
               <img src={heart} className='w-6' />
            </button>
            <button
               onClick={() => setLoginPage(true)}
               className='w-fit text-sm font-Yekan-Medium btn'>
               <img src={person} className='w-5 ml-2' />
               <p>ورود / ثبت نام</p>
            </button>
            <button className='relative hover:bg-primary/20 w-9 h-9 p-1.5 mr-2 rounded-full'>
               <img src={bag} className='w-6' />
               <span className='absolute top-0 right-0 bg-primary text-white leading-1 rounded-full w-4 h-4 text-sm'>2</span>
            </button>
         </div>
      </nav>
   );
};

export default Navbar;