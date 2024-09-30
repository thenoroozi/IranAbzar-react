import Banner from "../components/templates/Banner";
import DiscountProducts from "../components/templates/DiscountProducts";
import MostSellProducts from "../components/templates/MostSellProducts";
import NewestProducts from "../components/templates/NewestProducts";

const HomePage = () => {
   return (
      <main className="lg:w-[990px] mx-auto">
        <Banner />
        <DiscountProducts />
        <NewestProducts />
        <MostSellProducts />
      </main>
   );
};

export default HomePage;