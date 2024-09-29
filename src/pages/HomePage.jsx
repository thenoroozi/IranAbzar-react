import Banner from "../components/templates/Banner";
import DiscountProducts from "../components/templates/DiscountProducts";
import NewestProducts from "../components/templates/NewestProducts";

const HomePage = () => {
   return (
      <main className="lg:w-[990px] mx-auto">
        <Banner />
        <DiscountProducts />
        <NewestProducts />
      </main>
   );
};

export default HomePage;