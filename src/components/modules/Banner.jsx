import React, { useState } from 'react';

//images
import banner1 from '../../../public/images/banner1.jpg'

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
      img: banner1,
   },
   {
      id: 3,
      img: banner1,
   },
   {
      id: 4,
      img: banner1,
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
            <img key={activeBanner.id} src={activeBanner.img} className='w-full md:w-[870px] lg:w-[990px] transition-al' />
         </div>
         <div className='h-6 flex items-start justify-center mt-3
          [&_span]:w-2 [&_span]:bg-primary/50 [&_span]:ml-1 [&_span]:rounded-full [&_span]:transition-all'>
            <span className={`${activeBanner.id === 1 ? "!bg-primary h-6" : "h-2"}`}></span>
            <span className={`${activeBanner.id === 2 ? "!bg-primary h-6" : "h-2"}`}></span>
            <span className={`${activeBanner.id === 3 ? "!bg-primary h-6" : "h-2"}`}></span>
            <span className={`${activeBanner.id === 4 ? "!bg-primary h-6" : "h-2"}`}></span>
         </div>
         <ul className='my-4 grid gap-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-7 font-Yekan-Medium
         [&_li]:flex [&_li]:flex-col [&_li]:items-center [&_img]:bg-white [&_img]:p-5 [&_img]:w-20 [&_img]:h-20 [&_img]:rounded-xl [&_img]:shadow-md [&_img]:mb-4'>
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