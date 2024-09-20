import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
   return (
      <>
         <Header />
         <div className='min-h-screen px-5 sm:px-8'>{children}</div>
         <Footer />
      </>
   );
};

export default Layout;