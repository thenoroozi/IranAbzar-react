import React, { useState } from 'react';

//images
import banner1 from '../../../public/images/banner1.jpg'

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
         <div className='flex items-start justify-center mt-3
          [&_span]:w-2 [&_span]:bg-primary/50 [&_span]:ml-1 [&_span]:rounded-full [&_span]:transition-all'>
            <span className={`${activeBanner.id === 1 ? "!bg-primary h-6" : "h-2"}`}></span>
            <span className={`${activeBanner.id === 2 ? "!bg-primary h-6" : "h-2"}`}></span>
            <span className={`${activeBanner.id === 3 ? "!bg-primary h-6" : "h-2"}`}></span>
            <span className={`${activeBanner.id === 4 ? "!bg-primary h-6" : "h-2"}`}></span>
         </div>
      </div>
   );
};

export default Banner;