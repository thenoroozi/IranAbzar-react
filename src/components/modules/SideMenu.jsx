import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//icons
import close from '../../../public/icons/close.svg';
import category from '../../../public/icons/category.svg'
import arrow from '../../../public/icons/arrow.svg'

const SideMenu = ({ openSideMenu, setOpenSideMenu, setLoginPage }) => {
   const [categoryOpen, setCategoryOpen] = useState(false);

   const categoryHandler = () => {
      setCategoryOpen(!categoryOpen);
   }
   return (
      <div className={`${openSideMenu ? "right-0" : "-right-80"} z-40 fixed top-0 w-80 h-screen bg-gray-50 py-5 px-4`}>
         <div className='flex justify-end'>
            <button onClick={() => setOpenSideMenu(false)} className='p-2 rounded-full'>
               <img src={close} className=' w-4 mx-auto' />
            </button>
         </div>
         <div>
            <div className='flex items-center'>
               <img src={category} className='ml-2'/>
               <h2 className='font-Yekan-Bold text-primary'>دسته‌بندی محصولات</h2>
            </div>
            <ul className='flex flex-col items-start text-black 
               [&_a]:flex [&_a]:items-center [&_li]:w-full [&_li]:mt-4  [&_li]:py-1  [&_li]:px-2  [&_li]:rounded-md [&_li]:cursor-pointer [&_li]:font-Yekan-Medium hover:[&_li]:bg-primary/20
               [&_img]:ml-2 [&_img]:w-6'>
               <li onClick={categoryHandler} className='flex items-center justify-between'>
                  <p>دسته‌بندی 1</p>
                  <img src={arrow} className={`${categoryOpen ? "-rotate-90" : "rotate-0"} transition-all !w-3`} />
               </li>
               <li className='flex items-center justify-between'>
                  <p>دسته‌بندی 1</p>
               </li>
               <li className='flex items-center justify-between'>
                  <p>دسته‌بندی 1</p>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default SideMenu;