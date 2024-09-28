import Banner from "../components/templates/Banner";
import DiscountProducts from "../components/templates/DiscountProducts";

const HomePage = () => {
   return (
      <main className="lg:w-[990px] mx-auto">
        <Banner />
        <DiscountProducts />
      </main>
   );
};

export default HomePage;