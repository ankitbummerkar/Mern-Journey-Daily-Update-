import Hero from "./components/hero";
import Nav from "./components/nav";
import ProductList from "./components/product_list";
import ProductTrending from "./components/product_trending";
import Shippinginfo from "./components/shippinginfo";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Hero />
      </div>
      <Shippinginfo />
      <ProductTrending />

      <ProductList />
    </div>
  );
};

export default App;
