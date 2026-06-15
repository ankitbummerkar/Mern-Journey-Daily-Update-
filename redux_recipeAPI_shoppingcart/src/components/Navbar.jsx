import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center sticky top-0 z-50">
      <NavLink to="/">
        <h1 className="text-3xl font-bold text-purple-700">ReduxCart</h1>
      </NavLink>

      <NavLink to="/cart">
        <div className="relative cursor-pointer">
          <span className="text-4xl">🛒</span>

          <span className="absolute -top-2 -right-2 bg-purple-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
            {cartItems.length}
          </span>
        </div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
