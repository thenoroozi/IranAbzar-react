import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';

//icons
import home from '../../../public/icons/home.svg'
import archive from '../../../public/icons/archive.svg'
import menu from '../../../public/icons/hamburgerMenu.svg'
import comment from '../../../public/icons/comment.svg'
import notification from '../../../public/icons/notification.svg'
import shopBag from '../../../public/icons/shop bag.svg'

//components
import SideMenu from '../modules/SideMenu'
import BottomMenu from '../modules/BottomMenu';

//api
import { getCategories } from '../../services/categories';
import CategoryMenu from '../modules/CategoryMenu';

const Menu = ({ setLoginPage, openSideMenu, setOpenSideMenu }) => {

   const { data, isLoading } = useQuery({
      queryKey: ["get-categories"],
      queryFn: getCategories
   })

   return (
      <div className='w-full bg-gray-100 py-2 px-4 md:px-0 flex items-center justify-between md:justify-around'>
         <div className='hidden md:flex items-center'>
            <div className='group relative'>
               <button className='menu-hover font-Yekan-Bold text-sm lg:text-base ml-4 btn'>
                  <img src={menu} className='ml-2' />
                  <p>دسته‌بندی محصولات</p>
               </button>
               <div className='invisible w-52 absolute top-10 right-0 group-hover:visible'>
                  <CategoryMenu data={data} />
               </div>
            </div>

            <ul className='flex items-center text-black transition-all 
               [&_li]:flex [&_li]:items-center [&_li]:text-sm lg:[&_li]:text-base [&_li]:ml-4 lg:[&_li]:ml-3 [&_li]:cursor-pointer [&_li]:font-Yekan-Medium
               [&_li]:content 
               [&_img]:ml-1 [&_img]:w-5 lg:[&_img]:w-6'>
               <Link to='/' >
                  <li>
                     <img src={home} />
                     <p>صفحه نخست</p>
                  </li>
               </Link>
               <Link to="/archive" >
                  <li>
                     <img src={archive} />
                     <p>آرشیو بلاگ</p>
                  </li>
               </Link>
               <Link to="/products">
                  <li>
                     <img src={shopBag} />
                     <p>فروشگاه</p>
                  </li>
               </Link>
               <Link to='/comments'>
                  <li>
                     <img src={comment} />
                     <p>سوالات متداول</p>
                  </li>
               </Link>
            </ul>
         </div>

         <button
            onClick={() => setOpenSideMenu(true)}
            className='md:hidden btn'>
            <img src={menu} className='w-4' />
         </button>
         {openSideMenu && <SideMenu data={data} isLoading={isLoading} openSideMenu={openSideMenu} setOpenSideMenu={setOpenSideMenu} />}

         <button className='bg-black font-Yekan-Bold text-sm lg:text-base btn hover:bg-black/80'>
            <img src={notification} className='ml-2 w-6 lg:w-7' />
            <p>همکاری در فروش</p>
         </button>

         <BottomMenu setLoginPage={setLoginPage} />
      </div>
   );
};

export default Menu;