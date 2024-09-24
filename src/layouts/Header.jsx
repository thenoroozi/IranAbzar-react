import { useState } from 'react'

//components
import Login from '../components/templates/Login'
import Navbar from '../components/templates/Navbar'
import Menu from '../components/templates/Menu';

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