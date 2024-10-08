import React from 'react';

//icons
import arrowLeft from '/public/icons/arrow-left.svg'
import arrowRight from '/public/icons/arrow-right.svg'

const DiscountProducts = () => {
   return (
      <div className='my-2 lg:px-4'>
         <div className='flex items-center justify-between mb-2'>
            <h1 className='text-primary font-bold md:text-lg lg:text-xl lg:font-Yekan-Heavy'>تخفیف شگفت‌انگیز</h1>
            <div className='flex items-center gap-1 [&_img]:bg-primary/25 [&_img]:p-1 [&_img]:rounded-md [&_img]:cursor-pointer [&_img]:w-6'>
               <img src={arrowRight} />
               <img src={arrowLeft} />
            </div>
         </div>

         <div className='flex flex-col md:flex-row items-center md:items-start justify-center'>
            <div className="w-full md:w-1/3 h-full mx-auto py-2 px-5 md:py-4 md:pb-0 bg-black rounded-xl md:rounded-2xl bg-bg-circularsaw bg-cover md:bg-contain">
               <div className='flex items-center justify-center mx-auto w-52 text-sm md:text-base font-Yekan-Medium
               [&_p]:flex [&_p]:flex-col [&_p]:items-center [&_p]:bg-white [&_p]:w-10 md:[&_p]:w-12 [&_p]:h-fit [&_p]:rounded [&_p]:ml-1.5  [&_p]:overflow-hidden last:[&_p]:ml-0
               last:[&_span]:bg-gray-200 [&_span]:w-full  [&_span]:py-0.5 md:[&_span]:py-1.5  [&_span]:text-center '>
                  <p>
                     <span>55</span>
                     <span>ثانیه</span>
                  </p>
                  <p>
                     <span>10</span>
                     <span>دقیقه</span>
                  </p>
                  <p>
                     <span>23</span>
                     <span>ساعت</span>
                  </p>
                  <p>
                     <span>2</span>
                     <span>روز</span>
                  </p>
               </div>
               <img src="./images/circularsaw.png" className='hidden md:block w-60 mx-auto mt-12' />
            </div>

            <div className='w-full md:w-2/3 flex flex-col items-center justify-between md:pr-4'>
               <div className='w-full flex items-center flex-nowrap gap-2 my-2 px-1 md:mt-0 overflow-x-scroll no-scrollbar'>
                  <div className='w-60 bg-primary p-4 rounded-xl text-white'>
                     <img src="./images/drill-1.png" className='bg-white w-60 rounded-lg' />
                     <h2 className=' font-Yekan-Bold mt-2'>دریل چکشی رونیکس مدل ۲۱۰۷</h2>
                     <span className='text-gray-200 text-sm'>drillpress ronix</span>
                     <div className='w-full flex items-center justify-between font-Yekan-Medium'>
                        <p>قیمت:</p>
                        <span>1/360/000</span>
                     </div>
                     <span className='w-36 h-[1px] bg-white block mx-auto my-1'></span>
                     <button className='flex items-center justify-between w-36 mx-auto bg-white/30 text-sm font-Yekan-Medium py-1 px-2 rounded-md'>
                        <img src="./icons/Bagwhite.svg" className='w-5' />
                        <p>افزودن به سبد خرید</p>
                     </button>
                  </div>
                  <div className='w-60 bg-primary p-4 rounded-xl text-white'>
                     <img src="./images/drill-1.png" className='bg-white w-60 rounded-lg' />
                     <h2 className=' font-Yekan-Bold mt-2'>دریل چکشی رونیکس مدل ۲۱۰۷</h2>
                     <span className='text-gray-200 text-sm'>drillpress ronix</span>
                     <div className='w-full flex items-center justify-between font-Yekan-Medium'>
                        <p>قیمت:</p>
                        <span>1/360/000</span>
                     </div>
                     <span className='w-36 h-[1px] bg-white block mx-auto my-1'></span>
                     <button className='flex items-center justify-between w-36 mx-auto bg-white/30 text-sm font-Yekan-Medium py-1 px-2 rounded-md'>
                        <img src="./icons/Bagwhite.svg" className='w-5' />
                        <p>افزودن به سبد خرید</p>
                     </button>
                  </div>
                  <div className='w-60 bg-primary p-4 rounded-xl text-white'>
                     <img src="./images/drill-1.png" className='bg-white w-60 rounded-lg' />
                     <h2 className=' font-Yekan-Bold mt-2'>دریل چکشی رونیکس مدل ۲۱۰۷</h2>
                     <span className='text-gray-200 text-sm'>drillpress ronix</span>
                     <div className='w-full flex items-center justify-between font-Yekan-Medium'>
                        <p>قیمت:</p>
                        <span>1/360/000</span>
                     </div>
                     <span className='w-36 h-[1px] bg-white block mx-auto my-1'></span>
                     <button className='flex items-center justify-between w-36 mx-auto bg-white/30 text-sm font-Yekan-Medium py-1 px-2 rounded-md'>
                        <img src="./icons/Bagwhite.svg" className='w-5' />
                        <p>افزودن به سبد خرید</p>
                     </button>
                  </div>
                  <div className='w-60 bg-primary p-4 rounded-xl text-white'>
                     <img src="./images/drill-1.png" className='bg-white w-60 rounded-lg' />
                     <h2 className=' font-Yekan-Bold mt-2'>دریل چکشی رونیکس مدل ۲۱۰۷</h2>
                     <span className='text-gray-200 text-sm'>drillpress ronix</span>
                     <div className='w-full flex items-center justify-between font-Yekan-Medium'>
                        <p>قیمت:</p>
                        <span>1/360/000</span>
                     </div>
                     <span className='w-36 h-[1px] bg-white block mx-auto my-1'></span>
                     <button className='flex items-center justify-between w-36 mx-auto bg-white/30 text-sm font-Yekan-Medium py-1 px-2 rounded-md'>
                        <img src="./icons/Bagwhite.svg" className='w-5' />
                        <p>افزودن به سبد خرید</p>
                     </button>
                  </div>

                  <div className='w-fit flex items-center px-2 cursor-pointer'>
                     <p className='w-28 text-primary font-Yekan-Bold '>مشاهده همه</p>
                     <img src="./icons/arrow-left.svg" className='w-6' />
                  </div>
               </div>

               <div className='w-full h-40 bg-blue-500 flex items-center justify-between rounded-2xl'>
                  <div className='w-1/3 flex flex-col items-center justify-start font-Yekan-Bold'>
                     <div className='pr-2 text-sm sm:text-base md:text-lg'>
                        <p className='w-fit text-blue-500 bg-white py-1 px-2 mb-1 rounded-md'>۵۰٪ تخفیف</p>
                        <h3 className='text-white'>انواع دریل ‌های شارژی</h3>
                     </div>
                  </div>

                  <img src="./images/bg-drill.png" className='w-2/3 h-full' />
               </div>
            </div>
         </div>
      </div>
   );
};

export default DiscountProducts;