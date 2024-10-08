import Banner from "../components/templates/home/Banner";
import DiscountProducts from "../components/templates/home/DiscountProducts";
import MostSellProducts from "../components/templates/home/MostSellProducts";
import NewestProducts from "../components/templates/home/NewestProducts";

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