import { useState } from 'react'

//components
import Navbar from '../components/templates/layout/Navbar';
import Menu from '../components/templates/layout/Menu';
import Login from '../components/templates/layout/Login';


const Header = () => {
   const [loginPage, setLoginPage] = useState(null);
   const [openSideMenu, setOpenSideMenu] = useState(false);

   return (
      <header>
         <Navbar setLoginPage={setLoginPage} />
         
         {!!loginPage && <Login setLoginPage={setLoginPage} />}

         <Menu setLoginPage={setLoginPage} openSideMenu={openSideMenu} setOpenSideMenu={setOpenSideMenu} />
      </header>
   );
};

export default Header;