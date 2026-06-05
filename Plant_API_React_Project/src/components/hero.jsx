const Hero = () => {
  return (
    <section className="w-full py-24 order-2 border-amber-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2  items-center gap-10">
        {/* Left */}

        <div className="order-2 md:order-1">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-black">
            Traditional <span className="text-[#734060] italic">Flavour</span>{" "}
            Modern Cooking!
          </h1>

          <p className="mt-6 text-gray-700 text-lg max-w-xl">
            Unlock a world of variety culinary recipes and unleash your inner
            chef the easy way with flavoriz
          </p>

          <button
            className="mt-8  bg-[#734060] active:scale-95 active:shadow-2xl
 text-emerald-100 px-6 py-3 shadow-lg shadow-gray-800 rounded-lg hover:bg-[#734060] brightness-100 hover:scale-105 transition"
          >
            <a href="#list"> Shop Now</a>
          </button>
        </div>

        {/* Right  */}
        <div className="h-100  overflow-hidden rounded-2xl order-1 md:order-2">
          <img
            className=" h-full w-full object-cover rounded-2xl"
            src="4444.jpg"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;
