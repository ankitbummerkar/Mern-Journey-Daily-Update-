import { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [meals, setMeals] = useState([]);

  const [page, setPage] = useState(0);

  const pageSize = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/search.php?s=",
        );

        const updatedData = response.data.meals.map((meal) => {
          return {
            ...meal,

            price: Math.floor(Math.random() * 900 + 200),
          };
        });

        setMeals(updatedData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const totalPages = Math.ceil(meals.length / pageSize);

  return (
    <section className="w-full py-12 bg-gray-100 min-h-screen">
      <div className="flex flex-wrap justify-center gap-6 px-6">
        {meals

          .slice(page * pageSize, (page + 1) * pageSize)

          .map((meal) => (
            <div
              key={meal.idMeal}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-105 transition duration-300 w-60"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="h-full w-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-4">
                <h2 className="text-xl font-bold text-[#734060] line-clamp-1">
                  {meal.strMeal}
                </h2>

                <p className="text-gray-500 text-sm mt-1">{meal.strCategory}</p>

                <div className="mt-4 space-y-3">
                  <div className="flex justify-between">
                    <span>🌍 Origin</span>

                    <span className="font-semibold">{meal.strArea}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>🍽 Category</span>

                    <span className="font-semibold">{meal.strCategory}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-black text-[#734060] mt-5">
                  ₹{meal.price}
                </h3>

                <button className="w-full mt-5 bg-[#734060] hover:bg-purple-900 text-white py-3 rounded-2xl font-semibold">
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
      </div>

      <div className="flex justify-center gap-4 mt-12 flex-wrap">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`w-12 h-12 rounded-xl font-bold

              ${
                page === i
                  ? "bg-[#734060] text-white"
                  : "bg-white hover:bg-[#734060] hover:text-white"
              }
            `}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
