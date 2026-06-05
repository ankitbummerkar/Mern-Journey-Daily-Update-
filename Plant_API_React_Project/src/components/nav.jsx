import { Search, ShoppingBag, User, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Nav = () => {
  const apii = import.meta.env.VITE_API_URL;
  console.log(apii);

  return (
    <nav className="w-full bg-[#734060] text-emerald-100 fixed z-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* left */}
        <Link to={"/"}>
          <div className="flex items-center ">
            <img src="logofinal.png" alt="logo" className="w-20 h-20" />
            <span className="text-2xl font-bold">Yumverse</span>
          </div>
        </Link>

        {/* right */}
        <div className="hidden md:flex items-center gap-5 ">
          <button className="hover:text-white  hover:scale-105 transition duration-300 ">
            <User />
          </button>

          <button className="hover:text-white hover:scale-105 transition duration-300">
            <Search />
          </button>

          <button className="hover:text-white hover:scale-105 transition duration-300">
            <ShoppingBag />
          </button>
        </div>

        <button className="md:hidden">
          <Menu />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
