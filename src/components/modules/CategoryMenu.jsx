
const CategoryMenu = ({ data }) => {


   if (data?.data) return (
      <ul className='bg-white w-fit p-4 flex items-start text-black rounded-lg shadow-md 
               [&_li]:font-Yekan-Medium'>
         {
            data.data.map((category) => (
               <div key={category.id} className='w-44'>
                  <li className='text-primary cursor-default lg:text-lg lg:!font-Yekan-Bold'>
                     <p>{category.title}</p>
                  </li>
                  {category?.subcategories &&
                     <ul className='p-2 space-y-2'>
                        {category?.subcategories.map((subcategory) => (
                           <li key={subcategory.id} className='text-sm lg:text-base hover:text-primary/80 hover:scale-110 transition-all cursor-pointer'>
                              <p>- {subcategory.title}</p>
                           </li>
                        ))}
                     </ul>
                  }
               </div>
            ))
         }
      </ul>
   );
};

export default CategoryMenu;