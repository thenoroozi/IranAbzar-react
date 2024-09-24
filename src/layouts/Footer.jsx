import call from '../../public/icons/call.svg'
import wallet from '../../public/icons/wallet.svg'
import guarantee from '../../public/icons/guarantee.svg'
import post from '../../public/icons/post.svg'
import zarinPall from '../../public/images/zarinPall.svg'
import enamad from '../../public/images/enamad.svg'
import twitter from '../../public/icons/twitter.svg'
import instagram from '../../public/icons/instagram.svg'
import telegram from '../../public/icons/telegram.svg'
import whatsApp from '../../public/icons/whatsApp.svg'
import aparat from '../../public/icons/aparat.svg'

const Footer = () => {
   return (
      <footer>
         <div className='flex flex-col md:flex-row items-center justify-evenly text-white font-Yekan-Medium py-3 bg-primary space-y-3 md:space-y-0 [&_div]:flex [&_div]:items-center [&_img]:ml-2 [&_img]:w-7 '>
            <div>
               <img src={wallet} />
               <span>امکان پرداخت در محل</span>
            </div>
            <span className='w-36 h-0.5 md:h-10 md:w-0.5 bg-white'></span>
            <div>
               <img src={call} />
               <span>پشتیبانی ۲۴ ساعته</span>
            </div>
            <span className='w-36 h-0.5 md:h-10 md:w-0.5 bg-white'></span>
            <div>
               <img src={guarantee} />
               <span>ضمانت اصلالت کالا</span>
            </div>
            <span className='w-36 h-0.5 md:h-10 md:w-0.5 bg-white'></span>
            <div>
               <img src={post} />
               <span>ارسال سریع</span>
            </div>
         </div>

         <div className='bg-gray-100 py-5'>
            <div className='flex flex-col md:flex-row items-center justify-around py-5'>
               <div className='flex items-start justify-between pb-4 md:pb-0
               [&_h3]:font-Yekan-Bold [&_h3]:text-lg md:[&_h3]:text-xl [&_h3]:mb-3 
               [&_div]:flex [&_div]:flex-col
               [&_span]:mb-2 [&_span]:text-sm md:[&_span]:text-base [&_span]:text-gray-500'>
                  <div className='ml-8'>
                     <h3>راهنمای مشتریان</h3>
                     <span>پاسخ به پرسش های متداول</span>
                     <span>روش های ارسال کالا</span>
                     <span>روش های پرداخت</span>
                     <span>قوانین و مقررات</span>
                  </div>
                  <div>
                     <h3>راهنمای مشتریان</h3>
                     <span>پاسخ به پرسش های متداول</span>
                     <span>روش های ارسال کالا</span>
                     <span>روش های پرداخت</span>
                     <span>قوانین و مقررات</span>
                  </div>
               </div>

               <div>
                  <div className='flex items-start [&_img]:w-20 md:[&_img]:w-24'>
                     <img src={zarinPall} className='ml-5'/>
                     <img src={enamad}/>
                  </div>
                  <div className='flex items-center justify-between mt-4 [&_img]:w-6 [&_img]:h-6 [&_a]:p-1 [&_a]:rounded'>
                     <a href="" className='bg-[#4fa1ff10]'><img src={twitter} alt="twitter" /></a>
                     <a href="" className='bg-[#19ae1910]'><img src={whatsApp} alt="whatsApp" /></a>
                     <a href="" className='bg-[#be69ff13]'><img src={instagram} alt="instagram" /></a>
                     <a href="" className='bg-[#4fa1ff10]'><img src={telegram} alt="telegram" /></a>
                     <a href="" className='bg-[#ed145c0e]'><img src={aparat} alt="aparat" /></a>
                  </div>
               </div>
            </div>
            <div className='bg-white text-center text-primary text-sm md:text-lg py-2'>کلیه حقوق مادی و معنوی دوره ها متعلق به این وبسایت می باشد.</div>
         </div>
      </footer>
   );
};

export default Footer;