
import { useState } from 'react';

import close from '../../../../public/icons/close.svg'

const Login = ({ setLoginPage }) => {
   const [sign, setSign] = useState("in")

   return (
      <div className='fixed z-50 h-full w-full top-0 right-0 bg-gray-200/50 backdrop-blur-sm grid place-items-center'>
         <div className='w-96 h-fit bg-white p-4 rounded-lg'>
            <button onClick={() => setLoginPage(false)} className='hover:bg-primary/20 p-2 rounded-full' >
               <img src={close} className='w-3' />
            </button>
            <div className='w-72 p-2 mx-auto bg-gray-100 flex relative items-center justify-around rounded-full [&_button]:z-50 [&_button]:w-36 [&_button]:font-Yekan-Medium'>
               <span className={`${sign === "in" ? "translate-x-16" : "-translate-x-16"} absolute bg-primary w-36 h-[calc(100%-0.6rem)] rounded-full transition-all`}></span>
               <button
                  onClick={() => setSign("in")}
                  className={`${sign === "up" ? "text-gray-500" : "text-white"}`}>ورود</button>
               <button
                  onClick={() => setSign("up")}
                  className={`${sign === "in" ? "text-gray-500" : "text-white"}`}>ثبت نام</button>
            </div>
            {
               sign === "in" ?
                  <form className='py-2 flex flex-col [&_input]:mb-4 [&_input]:bg-gray-100 [&_input]:rounded-md [&_input]:outline-none [&_input]:p-1 [&_label]:mb-1 [&_label]:font-Yekan-Medium'>
                     <label htmlFor="username">نام کاربری</label>
                     <input type="text" name='username' placeholder='نام کاربری را وارد کنید' />
                     <label htmlFor="password">رمز عبور</label>
                     <input type="password" name='password' placeholder='رمز عبور را وارد کنید' />
                     <button type='submit' className='btn font-Yekan-Bold mx-auto'>ورود به حساب کاربری</button>
                  </form> :
                  <form className='py-2 flex flex-col [&_input]:mb-4 [&_input]:bg-gray-100 [&_input]:rounded-md [&_input]:outline-none [&_input]:p-1 [&_label]:mb-1 [&_label]:font-Yekan-Medium'>
                     <label htmlFor="username">نام کاربری</label>
                     <input type="text" name='username' placeholder='نام کاربری را وارد کنید' />
                     <label htmlFor="password">رمز عبور</label>
                     <input type="password" name='password' placeholder='رمز عبور را وارد کنید' />
                     <label htmlFor="password">تایید رمز عبور</label>
                     <input type="password" name='password' placeholder='رمز عبور را تکرار کنید' />
                     <button type='submit' className='btn font-Yekan-Bold mx-auto'>ساخت حساب کاربری</button>
                  </form>
            }
         </div>
      </div>
   );
};

export default Login;