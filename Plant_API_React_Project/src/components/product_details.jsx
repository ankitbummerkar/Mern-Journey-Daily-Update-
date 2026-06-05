/* eslint-disable react-hooks/purity */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Productdetails = () => {
  const { mealid } = useParams();

  const [detail, setDetail] = useState(null);

  // Random price
  let price = Math.floor(Math.random() * 900 + 200);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`,
        );

        setDetail(response.data.meals[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, [mealid]);

  if (!detail) {
    return (
      <section className="w-full min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-16 h-16 border-4 border-[#734060] border-t-transparent rounded-full animate-spin"></div>
      </section>
    );
  }

  return (
    <section className="w-full min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
        {/* Left */}
        <div className="flex items-center justify-center">
          <img
            className="w-full max-w-sm h-72 object-cover rounded-2xl shadow-md hover:scale-105 active:scale-105 transition duration-300"
            src={detail.strMealThumb}
            alt={detail.strMeal}
          />
        </div>

        {/* Right */}
        <div className="flex flex-col justify-center">
          <p className="text-sm uppercase tracking-widest text-[#734060] font-semibold">
            {detail.strCategory}
          </p>

          <h1 className="text-3xl md:text-5xl font-bold mt-2 text-gray-900">
            {detail.strMeal}
          </h1>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-4xl font-bold text-[#734060]">₹{price}</span>

            <span className="text-lg text-gray-400 line-through">
              ₹{price + 300}
            </span>
          </div>

          <div className="flex gap-3 mt-5 flex-wrap">
            <span className="bg-[#734060] text-white px-4 py-2 rounded-full text-sm">
              {detail.strArea}
            </span>

            <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">
              {detail.strCategory}
            </span>
          </div>

          <p className="mt-6 text-gray-600 leading-relaxed text-[15px] line-clamp-5">
            {detail.strInstructions}
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">
            <button className="bg-[#734060] text-white px-6 py-3 rounded-xl hover:scale-105 active:scale-95 transition duration-300 shadow-md">
              Add To Cart
            </button>

            <button className="border border-[#734060] text-[#734060] px-6 py-3 rounded-xl hover:bg-[#734060] hover:text-white active:bg-[#734060] active:text-white transition duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productdetails;
