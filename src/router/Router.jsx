import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Products from '../pages/Products';
import Dashboard from '../pages/Dashboard';
import Archive from '../pages/Archive';
import Comments from '../pages/Comments';

const Router = () => {

   return (
      <Routes>
         <Route index element={<HomePage />} />
         <Route path="/products" element={<Products />} />
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/archive" element={<Archive />} />
         <Route path="/comments" element={<Comments />} />
      </Routes>
   );
};

export default Router;