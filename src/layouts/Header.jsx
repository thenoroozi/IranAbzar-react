import { useState } from 'react'

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
import Login from '../components/Login'


const Header = () => {
   const [loginPage, setLoginPage] = useState(null);

   return (
      <header>
         <nav className='flex items-center justify-evenly py-6'>
            <div>
               <img src={iranabzar} alt="iranabzar" className='drop-shadow-md' />
            </div>

            <div className='flex items-center rounded-lg'>
               <input
                  type="search"
                  name="search"
                  placeholder='محصول مورد نظر را جستجو کنید...'
                  className='bg-gray-100 p-2 w-80 h-9 rounded-lg text-sm outline-none' />
               <button className='-mr-5 rounded-tl-lg rounded-bl-lg !rounded-r-none btn'>
                  <img src={searchIcon} alt="search" className='w-5' />
               </button>
            </div>

            <div className='flex items-center'>
               <button className='hover:bg-primary/20 w-8 h-8 p-1.5 ml-2 rounded-full'>
                  <img src={heart} className='w-6' />
               </button>
               <button
                  onClick={()=> setLoginPage(true) }
                  className='w-fit text-sm font-Yekan-Medium btn'>
                  <img src={person} className='w-5 ml-2' />
                  <p>ورود / ثبت نام</p>
               </button>
               {!!loginPage && <Login setLoginPage={setLoginPage} />}
               <button className='relative hover:bg-primary/20 w-9 h-9 p-1.5 mr-2 rounded-full'>
                  <img src={bag} className='w-6' />
                  <span className='absolute top-0 right-0 bg-primary text-white leading-1 rounded-full w-4 h-4 text-sm'>2</span>
               </button>
            </div>
         </nav>
         <div className='w-full bg-gray-100 py-2 flex items-center justify-around'>
            <div className='flex items-center'>
               <button className='font-Yekan-Bold ml-4 btn'>
                  <img src={menu} className='ml-2' />
                  <p>دسته‌بندی محصولات</p>
               </button>
               <ul className='flex items-center text-black transition-all [&_li]:flex [&_li]:items-center [&_li]:ml-3 [&_li]:cursor-pointer [&_li]:font-Yekan-Medium hover:[&_li]:text-primary [&_img]:ml-1'>
                  <li>
                     <img src={home} />
                     <p>صفحه نخست</p>
                  </li>
                  <li>
                     <img src={archive} />
                     <p>آرشیو بلاگ</p>
                  </li>
                  <li>
                     <img src={shopBag} />
                     <p>فروشگاه</p>
                  </li>
                  <li>
                     <img src={comment} />
                     <p>سوالات متداول</p>
                  </li>
               </ul>
            </div>
            <button className='bg-black  font-Yekan-Bold btn hover:bg-black/80'>
               <img src={notification} className='ml-2' />
               <p>همکاری در فروش</p>
            </button>
         </div>
      </header>
   );
};

export default Header;