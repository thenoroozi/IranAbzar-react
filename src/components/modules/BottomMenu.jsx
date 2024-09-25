import React, { useEffect, useState } from 'react';

//icons
import home from '../../../public/icons/home.svg'
import homePrimary from '../../../public/icons/home-primary.svg'
import archive from '../../../public/icons/archive.svg'
import archivePrimary from '../../../public/icons/archive-primary.svg'
import comment from '../../../public/icons/comment.svg'
import commentPrimary from '../../../public/icons/comment-primary.svg'
import shopBag from '../../../public/icons/shop bag.svg'
import shopBagPrimary from '../../../public/icons/shop bag-primary.svg'
import person from '../../../public/icons/personblack.svg'
import personPrimary from '../../../public/icons/person-primary.svg'
import curve from '../../../public/images/curve.svg'
import { Link } from 'react-router-dom';

const BottomMenu = ({ setLoginPage }) => {
   const [selectedMenu, setSelectedMenu] = useState("home");
   const [curveRight, setCurveRight] = useState("right-[163px]");

   useEffect(() => {

      switch (selectedMenu) {
         case "shop":
            setCurveRight("right-[28px]")
            break;
         case "archive":
            setCurveRight("right-[103px]")
            break;
         case "home":
            setCurveRight("right-[163px]")
            break;
         case "comment":
            setCurveRight("right-[231px]")
            break;
         case "person":
            setCurveRight("right-[302px]")
            break;
      }
      console.log(selectedMenu, curveRight);

   }, [selectedMenu])

   return (
      <div className='md:hidden w-96 h-16 fixed bottom-4 left-1/2 -translate-x-1/2 bg-gray-100 rounded-lg shadow-md'>
         <img
            className={`-z-10 absolute -top-3 ${curveRight} transition-all`}
            src={curve} />
         <ul className='flex items-start justify-evenly 
         [&_li]:font-Yekan-Medium [&_a]:flex [&_a]:flex-col [&_a]:items-center [&_li]:cursor-pointer [&_li]:transition-all [&_li]:w-fit
         [&_img]:mb-1'>
            <li onClick={() => setSelectedMenu("shop")} className={`${selectedMenu === "shop" ? "mt-0 text-primary" : "mt-3"}`}>
               <Link to="/products">
                  <img src={selectedMenu === "shop" ? shopBagPrimary : shopBag} />
                  <p>فروشگاه</p>
               </Link>
            </li>
            <li onClick={() => setSelectedMenu("archive")} className={`${selectedMenu === "archive" ? "mt-0 text-primary" : "mt-3"}`}>
               <Link to="/archive">
                  <img src={selectedMenu === "archive" ? archivePrimary : archive} />
                  <p>آرشیو</p>
               </Link>
            </li>
            <li onClick={() => setSelectedMenu("home")} className={`${selectedMenu === "home" ? "mt-0 text-primary" : "mt-3"}`}>
               <Link to="/">
                  <img src={selectedMenu === "home" ? homePrimary : home} />
                  <p>خانه</p>
               </Link>
            </li>
            <li onClick={() => setSelectedMenu("comment")} className={`${selectedMenu === "comment" ? "mt-0 text-primary" : "mt-3"}`}>
               <Link to="/comments">
                  <img src={selectedMenu === "comment" ? commentPrimary : comment} />
                  <p>سوالات</p>
               </Link>
            </li>
            <li onClick={() => setSelectedMenu("person")} className={`${selectedMenu === "person" ? "mt-0 text-primary" : "mt-3"}`}>
               <Link to="/dashboard">
                  <img src={selectedMenu === "person" ? personPrimary : person} />
                  <p>حساب</p>
               </Link>
            </li>
         </ul>
      </div>
   );
};

export default BottomMenu;