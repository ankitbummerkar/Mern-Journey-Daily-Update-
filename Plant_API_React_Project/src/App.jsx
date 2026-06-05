import { Route, Routes } from "react-router-dom";
import Hero from "./components/hero";
import Nav from "./components/nav";
import ProductList from "./components/product_list";
import ProductTrending from "./components/product_trending";
import Shippinginfo from "./components/shippinginfo";
import Productdetails from "./components/product_details";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav />

              <Hero />

              <Shippinginfo />
              <ProductTrending />

              <ProductList />
            </>
          }
        />
        <Route
          path="/:mealid"
          element={
            <>
              <Nav />
              <Productdetails />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
