const ProductTrending = () => {
  return (
    <>
      <div className="flex flex-col  justify-center items-center  mt-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-gray-800">
            Our Trending Recipes 🍔
          </h1>
        </div>
        <div className="h-1 bg-gray-500 w-11   md:w-20"></div>
        <div className="flex m-4">
          <button className=" m-1 bg-[#734060]  text-emerald-100 px-4 py-2  rounded-3xl hover:bg-[#734060] brightness-100 hover:scale-105 transition duration-300 cursor-pointer">
            New Arrivals
          </button>
          <button className=" m-1 border border-emerald-300 rounded-3xl text-xl hover:bg-[#734060] brightness-100 px-4 py-2 hover:text-white hover:scale-105 transition duration-300 cursor-pointer">
            Featured
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductTrending;
