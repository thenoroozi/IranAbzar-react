import React from 'react';

const NewestProducts = () => {
   return (
      <div className='my-6 lg:px-4'>
         <div className='flex items-center justify-between'>
            <h1 className='text-primary font-bold md:text-lg lg:text-xl lg:font-Yekan-Heavy'>جدیدترین محصولات</h1>
            <div className='text-primary font-Yekan-Medium flex items-center'>
               <p>مشاهده همه</p>
               <img src="./icons/arrow-left.svg" className='mr-1 w-4' />
            </div>
         </div>

         <div className='my-2 flex items-center justify-between gap-2 md:gap-4 lg:gap-8 overflow-x-scroll no-scrollbar'>
            <div className='w-60 bg-gray-50 p-4 rounded-xl'>
               <img src="./images/drill-3.png" className='bg-gray-200 w-52 rounded-lg' />
               <h2 className=' font-Yekan-Bold mt-2'>دریل چکشی رونیکس مدل ۲۱۰۷</h2>
               <span className='text-gray-400 text-sm'>drillpress ronix</span>
               <div className='w-full my1 flex items-center justify-between font-Yekan-Medium'>
                  <p>قیمت:</p>
                  <span>1/360/000</span>
               </div>
               <span className='w-36 h-[1px] bg-gray-300 block mx-auto my-2'></span>
               <button className='flex items-center justify-between w-36 mx-auto text-white bg-primary text-sm font-Yekan-Medium py-1 px-2 rounded-md'>
                  <img src="./icons/Bagwhite.svg" className='w-5' />
                  <p>افزودن به سبد خرید</p>
               </button>
            </div>
            <div className='w-60 bg-gray-50 p-4 rounded-xl'>
               <img src="./images/drill-3.png" className='bg-gray-200 w-52 rounded-lg' />
               <h2 className=' font-Yekan-Bold mt-2'>دریل چکشی رونیکس مدل ۲۱۰۷</h2>
               <span className='text-gray-400 text-sm'>drillpress ronix</span>
               <div className='w-full my1 flex items-center justify-between font-Yekan-Medium'>
                  <p>قیمت:</p>
                  <span>1/360/000</span>
               </div>
               <span className='w-36 h-[1px] bg-gray-300 block mx-auto my-2'></span>
               <button className='flex items-center justify-between w-36 mx-auto text-white bg-primary text-sm font-Yekan-Medium py-1 px-2 rounded-md'>
                  <img src="./icons/Bagwhite.svg" className='w-5' />
                  <p>افزودن به سبد خرید</p>
               </button>
            </div>
            <div className='w-60 bg-gray-50 p-4 rounded-xl'>
               <img src="./images/drill-3.png" className='bg-gray-200 w-52 rounded-lg' />
               <h2 className=' font-Yekan-Bold mt-2'>دریل چکشی رونیکس مدل ۲۱۰۷</h2>
               <span className='text-gray-400 text-sm'>drillpress ronix</span>
               <div className='w-full my1 flex items-center justify-between font-Yekan-Medium'>
                  <p>قیمت:</p>
                  <span>1/360/000</span>
               </div>
               <span className='w-36 h-[1px] bg-gray-300 block mx-auto my-2'></span>
               <button className='flex items-center justify-between w-36 mx-auto text-white bg-primary text-sm font-Yekan-Medium py-1 px-2 rounded-md'>
                  <img src="./icons/Bagwhite.svg" className='w-5' />
                  <p>افزودن به سبد خرید</p>
               </button>
            </div>
            <div className='w-60 bg-gray-50 p-4 rounded-xl'>
               <img src="./images/drill-3.png" className='bg-gray-200 w-52 rounded-lg' />
               <h2 className=' font-Yekan-Bold mt-2'>دریل چکشی رونیکس مدل ۲۱۰۷</h2>
               <span className='text-gray-400 text-sm'>drillpress ronix</span>
               <div className='w-full my1 flex items-center justify-between font-Yekan-Medium'>
                  <p>قیمت:</p>
                  <span>1/360/000</span>
               </div>
               <span className='w-36 h-[1px] bg-gray-300 block mx-auto my-2'></span>
               <button className='flex items-center justify-between w-36 mx-auto text-white bg-primary text-sm font-Yekan-Medium py-1 px-2 rounded-md'>
                  <img src="./icons/Bagwhite.svg" className='w-5' />
                  <p>افزودن به سبد خرید</p>
               </button>
            </div>
         </div>

         <div className='mt-8 flex items-center'>
            <div className="relative w-1/3 h-[500px] hidden lg:flex items-center justify-center">
               <div className='absolute -z-20 w-52 h-full top-0 right-6 bg-amber-500 rounded-2xl'></div>
               <img src="./images/AEG-drill.png" className='absolute w-full h-fit' />
            </div>
            <div className='bg-amber-500 w-full lg:w-[calc(100%-25%)] h-full lg:h-[500px] lg:-mr-16 p-4 rounded-2xl'>
               <div className='flex items-center justify-between gap-4 md:gap-8 overflow-x-scroll sm:no-scrollbar'>
                  <div className='w-60 bg-gray-50 p-4 rounded-xl'>
                     <img src="./images/drill-3.png" className='bg-gray-200 w-52 rounded-lg' />
                     <h2 className=' font-Yekan-Bold mt-2 line-clamp-1'>دریل چکشی رونیکس مدل ۲۱۰۷</h2>
                     <span className='text-gray-400 text-sm'>drillpress ronix</span>
                     <div className='w-full my1 flex items-center justify-between font-Yekan-Medium'>
                        <p>قیمت:</p>
                        <span>1/360/000</span>
                     </div>
                     <span className='w-36 h-[1px] bg-gray-300 block mx-auto my-2'></span>
                     <button className='flex items-center justify-between w-36 mx-auto text-white bg-primary text-sm font-Yekan-Medium py-1 px-2 rounded-md'>
                        <img src="./icons/Bagwhite.svg" className='w-5' />
                        <p>افزودن به سبد خرید</p>
                     </button>
                  </div>
                  <div className='w-60 bg-gray-50 p-4 rounded-xl'>
                     <img src="./images/drill-2.png" className='bg-gray-200 w-52 rounded-lg' />
                     <h2 className=' font-Yekan-Bold mt-2 line-clamp-1'>دریل چکشی رونیکس مدل ۲۱۰۷</h2>
                     <span className='text-gray-400 text-sm'>drillpress ronix</span>
                     <div className='w-full my1 flex items-center justify-between font-Yekan-Medium'>
                        <p>قیمت:</p>
                        <span>1/360/000</span>
                     </div>
                     <span className='w-36 h-[1px] bg-gray-300 block mx-auto my-2'></span>
                     <button className='flex items-center justify-between w-36 mx-auto text-white bg-primary text-sm font-Yekan-Medium py-1 px-2 rounded-md'>
                        <img src="./icons/Bagwhite.svg" className='w-5' />
                        <p>افزودن به سبد خرید</p>
                     </button>
                  </div>
                  <div className='w-60 bg-gray-50 p-4 rounded-xl'>
                     <img src="./images/drill-2.png" className='bg-gray-200 w-52 rounded-lg' />
                     <h2 className=' font-Yekan-Bold mt-2 line-clamp-1'>دریل چکشی رونیکس مدل ۲۱۰۷</h2>
                     <span className='text-gray-400 text-sm'>drillpress ronix</span>
                     <div className='w-full my1 flex items-center justify-between font-Yekan-Medium'>
                        <p>قیمت:</p>
                        <span>1/360/000</span>
                     </div>
                     <span className='w-36 h-[1px] bg-gray-300 block mx-auto my-2'></span>
                     <button className='flex items-center justify-between w-36 mx-auto text-white bg-primary text-sm font-Yekan-Medium py-1 px-2 rounded-md'>
                        <img src="./icons/Bagwhite.svg" className='w-5' />
                        <p>افزودن به سبد خرید</p>
                     </button>
                  </div>
               </div>

               <div className='py-4 px-2 text-white'>
                  <h1 className='text-xl font-Yekan-Heavy lg:text-2xl'>جدیدترین دریل های شرکت AEG</h1>
                  <p className='text-justify font-Yekan-Medium my-1'>شرکت AEG توسط امیل راتناو در سال 1883 ابتدا در شهر برلین در کشور آلمان تاسیس شد نخستین نام این شرکت ( شرکت آلمانی برق ادیسون ) بود و امیل راتناو در همان سال ها با خرید امتیاز ثبت ...</p>
                  <button className='bg-white text-amber-500 font-Yekan-Bold py-2 px-4 rounded-lg shadow-md shadow-white/30'>مشاهده همه محصولات</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default NewestProducts;