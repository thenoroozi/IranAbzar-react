import { useState } from 'react'
import { Link } from 'react-router-dom'

//icons
import iranabzar from '../../public/images/iranabzar.svg'
import searchIcon from '../../public/icons/search.svg'
import person from '../../public/icons/person.svg'
import heart from '../../public/icons/heart.svg'
import bag from '../../public/icons/bag.svg'
import home from '../../public/icons/home.svg'
import archive from '../../public/icons/archive.svg'
import menu from '../../public/icons/hamburgerMenu.svg'
import comment from '../../public/icons/comment.svg'
import notification from '../../public/icons/notification.svg'
import shopBag from '../../public/icons/shop bag.svg'

//components
import Login from '../components/templates/Login'
import SideMenu from '../components/templates/SideMenu'


const Header = () => {
   const [loginPage, setLoginPage] = useState(null);
   const [openSideMenu, setOpenSideMenu] = useState(false);

   return (
      <header>
         <nav className='flex items-center justify-between md:justify-evenly px-4 md:px-0 py-4 md:py-6'>
            <div>
               <img src={iranabzar} alt="iranabzar" className='w-32 md:w-40 lg:w-52 drop-shadow-md' />
            </div>

            <div className='flex items-center rounded-lg'>
               <input
                  type="search"
                  name="search"
                  placeholder='محصول مورد نظر را جستجو کنید...'
                  className='hidden md:block bg-gray-100 p-2 w-64 md:w-72 lg:w-80 h-9 rounded-lg text-sm outline-none' />
               <button className='w-8 h-8 md:w-9 md:h-9 p-1.5 md:p-2 md:-mr-5 md:rounded-tl-lg md:rounded-bl-lg md:!rounded-r-none btn'>
                  <img src={searchIcon} alt="search" className='w-full' />
               </button>
               <button className='md:hidden relative hover:bg-primary/20 w-8 h-8 p-1.5 mr-1 rounded-full'>
                  <img src={bag} className='w-6' />
                  <span className='absolute top-0 right-0 bg-primary text-white leading-1 rounded-full w-4 h-4 text-sm'>2</span>
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
         
         {!!loginPage && <Login setLoginPage={setLoginPage} />}

         <div className='w-full bg-gray-100 py-2 px-4 md:px-0 flex items-center justify-between md:justify-around'>
            <div className='hidden md:flex items-center'>
               <button className='font-Yekan-Bold text-sm lg:text-base ml-4 btn'>
                  <img src={menu} className='ml-2' />
                  <p>دسته‌بندی محصولات</p>
               </button>

               <ul className='flex items-center text-black transition-all 
               [&_li]:flex [&_li]:items-center [&_li]:text-sm lg:[&_li]:text-base [&_li]:ml-2 lg:[&_li]:ml-3 [&_li]:cursor-pointer [&_li]:font-Yekan-Medium
               [&_li]:content hover:[&_li]:before:animate-content-opent
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
                  <li>
                     <img src={comment} />
                     <p>سوالات متداول</p>
                  </li>
               </ul>
            </div>

            <button
               onClick={() => setOpenSideMenu(true)}
               className='md:hidden btn'>
               <img src={menu} className='w-4' />
            </button>
            {openSideMenu && <SideMenu setLoginPage={setLoginPage} openSideMenu={openSideMenu} setOpenSideMenu={setOpenSideMenu} />}

            <button className='bg-black font-Yekan-Bold text-sm lg:text-base btn hover:bg-black/80'>
               <img src={notification} className='ml-2 w-6 lg:w-7' />
               <p>همکاری در فروش</p>
            </button>
         </div>
      </header>
   );
};

export default Header;