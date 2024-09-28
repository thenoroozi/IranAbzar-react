import React, { useState } from 'react';

//images
import banner1 from '../../../public/images/banner1.jpg'
import banner2 from '../../../public/images/banner2.jpg'
import banner3 from '../../../public/images/banner3.jpg'
import banner4 from '../../../public/images/banner4.jpg'

//icons
import chainsaw from '../../../public/icons/chainsaw.svg'
import bucksaw from '../../../public/icons/bucksaw.svg'
import circularsaw from '../../../public/icons/circularsaw.svg'
import chipping from '../../../public/icons/chipping.svg'
import drillpress from '../../../public/icons/drillpress.svg'
import grindingStone from '../../../public/icons/grinding-stone.svg'
import handscape from '../../../public/icons/handscape.svg'

const bannerSlider = [
   {
      id: 1,
      img: banner1,
   },
   {
      id: 2,
      img: banner2,
   },
   {
      id: 3,
      img: banner3,
   },
   {
      id: 4,
      img: banner4,
   }
];

const Banner = () => {

   const [activeBanner, setActiveBanner] = useState({
      id: 1,
      img: banner1,
   })


   let bannerId = activeBanner.id;
   setInterval(() => {
      if (bannerId === 4) {
         bannerId = 1;
      } else {
         bannerId++;
      }
      setActiveBanner({
         ...bannerSlider.find(banner => banner.id === bannerId)
      });
   }, 10000);

   return (
      <div className='my-4'>
         <div className='flex justify-center'>
            <img key={activeBanner.id} src={activeBanner.img} className='w-full h-32 sm:h-52 md:h-64 lg:h-full md:w-[870px] transition-al' />
         </div>

         <div className='h-6 flex items-start justify-center mt-3
          [&_span]:w-1.5 [&_span]:bg-primary/50 [&_span]:ml-1 [&_span]:rounded-full [&_span]:transition-all'>
            <span className={`${activeBanner.id === 1 ? "!bg-primary h-6" : "h-1.5"}`}></span>
            <span className={`${activeBanner.id === 2 ? "!bg-primary h-6" : "h-1.5"}`}></span>
            <span className={`${activeBanner.id === 3 ? "!bg-primary h-6" : "h-1.5"}`}></span>
            <span className={`${activeBanner.id === 4 ? "!bg-primary h-6" : "h-1.5"}`}></span>
         </div>
         
         <ul className='my-4 grid gap-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-7 mx-auto font-Yekan-Medium
         [&_li]:flex [&_li]:flex-col [&_li]:items-center [&_img]:bg-white [&_img]:p-5 [&_img]:w-20 [&_img]:h-20 lg:[&_img]:w-24 lg:[&_img]:h-24 [&_img]:rounded-xl [&_img]:shadow-md [&_img]:mb-4'>
            <li>
               <img src={handscape} />
               <p>اره دستی</p>
            </li>
            <li>
               <img src={grindingStone} />
               <p>سنگ فرز</p>
            </li>
            <li>
               <img src={chainsaw} />
               <p>اره برقی</p>
            </li>
            <li>
               <img src={chipping} />
               <p>پیکور</p>
            </li>
            <li>
               <img src={circularsaw} />
               <p>اره گرد بر</p>
            </li>
            <li>
               <img src={bucksaw} />
               <p>اره کمانی</p>
            </li>
            <li>
               <img src={drillpress} />
               <p>دریل</p>
            </li>
         </ul>
      </div>
   );
};

export default Banner;