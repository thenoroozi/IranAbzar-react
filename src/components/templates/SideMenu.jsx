import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//icons
import close from '../../../public/icons/close.svg';
import home from '../../../public/icons/home.svg'
import archive from '../../../public/icons/archive.svg'
import comment from '../../../public/icons/comment.svg'
import shopBag from '../../../public/icons/shop bag.svg'
import category from '../../../public/icons/category.svg'
import arrow from '../../../public/icons/arrow.svg'

const SideMenu = ({ openSideMenu, setOpenSideMenu, setLoginPage }) => {
   const [categoryOpen, setCategoryOpen] = useState(false);

   const categoryHandler = () => {
      setCategoryOpen(!categoryOpen);
   }
   return (
      <div className={`${openSideMenu ? "right-0" : "-right-80"} fixed top-0 w-80 h-screen bg-gray-50 py-5 px-4`}>
         <div className='flex justify-end'>
            <button onClick={() => setOpenSideMenu(false)} className='p-2 rounded-full'>
               <img src={close} className=' w-4 mx-auto' />
            </button>
         </div>
         <div>
            <button
               onClick={() => setLoginPage(true)}
               className='w-full mt-2 font-Yekan-Bold btn justify-center'>
               ورود / ثبت نام
            </button>
            <ul className='flex flex-col items-start text-black 
               [&_a]:flex [&_a]:items-center [&_li]:w-full [&_li]:mt-4  [&_li]:py-1  [&_li]:px-2  [&_li]:rounded-md [&_li]:cursor-pointer [&_li]:font-Yekan-Medium 
               [&_img]:ml-2 [&_img]:w-6'>
               <li>
                  <Link to='/' >
                     <img src={home} />
                     <p>صفحه نخست</p>
                  </Link>
               </li>
               <li>
                  <Link to="/archive" >
                     <img src={archive} />
                     <p>آرشیو بلاگ</p>
                  </Link>
               </li>
               <li>
                  <Link to="/products">
                     <img src={shopBag} />
                     <p>فروشگاه</p>
                  </Link>
               </li>
               <li>
                  <Link to='/'>
                     <img src={comment} />
                     <p>سوالات متداول</p>
                  </Link>
               </li>
               <li onClick={categoryHandler} className='flex items-center justify-between'>
                  <div className='flex items-center'>
                     <img src={category} />
                     <p>دسته‌بندی محصولات</p>
                  </div>
                  <img src={arrow} className={`${categoryOpen ? "-rotate-90" : "rotate-0"} transition-all !w-3`} />
               </li>
            </ul>
         </div>
      </div>
   );
};

export default SideMenu;