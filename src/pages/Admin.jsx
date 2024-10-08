import React from 'react';

const Admin = () => {

   return (
      <div className='my-4 mx-auto lg:w-[990px] flex flex-col items-center'>
         <div className='w-full grid grid-cols-2 gap-4 md:grid-cols-4 text-white font-Yekan-Medium 
         [&_button]:btn [&_button]:py-1.5 [&_button]:w-36 [&_button]:mx-auto [&_button]:rounded-md
         [&_img]:w-4 [&_img]:ml-2 '>
            <button>
               <img src="../../public/icons/plus.svg" />
               <p>محصول جدید</p>
            </button>
            <button>
               <img src='../../public/icons/plus.svg' />
               <p>دسته‌بندی جدید</p>
            </button>
            <button>
               <img src='../../public/icons/plus.svg' />
               <p>بلاگ جدید</p>
            </button>
            <button>
               <img src='../../public/icons/plus.svg' />
               <p>سوال جدید</p>
            </button>
         </div>
         <span className='w-full h-[1px] bg-primary rounded-lg my-4'></span>
      </div>
   );
};

export default Admin;