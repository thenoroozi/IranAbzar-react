import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

//icons
import close from '../../../public/icons/close.svg';
import category from '../../../public/icons/category.svg'
import arrow from '../../../public/icons/arrow.svg'

//api
import { getCategories } from '../../services/categories';

const SideMenu = ({ openSideMenu, setOpenSideMenu }) => {
   
   const [categoryOpen, setCategoryOpen] = useState([]);

   const { data, isLoading } = useQuery({
      queryKey: ["get-categories"],
      queryFn: getCategories
   })

   const categoryHandler = (categoryId) => {
      let listId = [];
      if (categoryOpen.includes(categoryId)) {
         listId=categoryOpen.filter(id => id !== categoryId && id);
         setCategoryOpen(listId)
      } else {
         setCategoryOpen([...categoryOpen, categoryId]);
      }
   }
   console.log(categoryOpen);
   
   return (
      <div className={`${openSideMenu ? "right-0" : "-right-80"} z-40 fixed top-0 w-80 h-screen bg-gray-50 py-5 px-4`}>
         <div className='flex justify-end'>
            <button onClick={() => setOpenSideMenu(false)} className='p-2 rounded-full'>
               <img src={close} className=' w-4 mx-auto' />
            </button>
         </div>
         <div>
            <div className='flex items-center'>
               <img src={category} className='ml-2 w-6' />
               <h2 className='font-Yekan-Bold text-lg text-primary'>دسته‌بندی محصولات</h2>
            </div>
            {isLoading ?
               <h1>loading...</h1> :
               <ul className='flex flex-col items-start text-black 
               [&_li]:font-Yekan-Medium'>
                  {
                     data.data.map((category) => (
                        <div key={category.id} className='w-full'>
                           <li
                              onClick={() => categoryHandler(category.id)}
                              className='relative w-full mt-4 py-1 px-2 flex items-center justify-between rounded-md cursor-pointer bg-primary/20 '>
                              <p>{category.title}</p>
                              {category?.subcategories &&
                                 <img src={arrow} className={`${categoryOpen.includes(category.id) ? "-rotate-90" : "rotate-0"} ml-2 transition-all `} />
                              }
                           </li>
                           {category?.subcategories &&
                              <ul className={`${categoryOpen.includes(category.id) ? "visible opacity-100 h-fit mt-1 py-1" : "invisible opacity-0 h-0 mt-0 py-0"}   px-4 space-y-1 bg-white rounded-md transition-all`}>
                                 {category?.subcategories.map((subcategory) => (
                                    <li key={subcategory.id} className='transition-all !font-Yekan'>
                                       <p>- {subcategory.title}</p>
                                    </li>
                                 ))}
                              </ul>
                           }
                        </div>
                     ))
                  }
               </ul>
            }

         </div>
      </div>
   );
};

export default SideMenu;