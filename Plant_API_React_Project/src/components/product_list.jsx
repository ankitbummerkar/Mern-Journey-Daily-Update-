import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

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
          };
        });

        setMeals(updatedData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  if (meals.length === 0) {
    return (
      <section className="w-full min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-16 h-16 border-4 border-[#734060] border-t-transparent rounded-full animate-spin"></div>
      </section>
    );
  }
  const totalPages = Math.ceil(meals.length / pageSize);

  return (
    <section id="list" className="w-full  bg-gray-100 min-h-screen">
      {!meals ? (
        <h1 className="text-3xl text-center mt-20 font-bold">Loading...</h1>
      ) : (
        <div className="flex flex-wrap justify-center gap-6 px-6">
          {meals

            .slice(page * pageSize, (page + 1) * pageSize)

            .map((meal) => (
              <div
                key={meal.idMeal}
                className="bg-white rounded-3xl active:scale-95 active:shadow-2xl
 overflow-hidden shadow-md hover:shadow-2xl hover:scale-105 transition duration-300 w-60"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="h-full w-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="p-4">
                  <h2 className="text-xl font-bold text-[#734060]  text-center line-clamp-1">
                    {meal.strMeal}
                  </h2>

                  <div className="mt-1 space-y-3">
                    <div className="flex justify-between">
                      <span>🌍 Origin</span>

                      <span className="font-semibold">{meal.strArea}</span>
                    </div>

                    <div className="flex justify-between">
                      <span>🍽 Category</span>

                      <span className="font-semibold">{meal.strCategory}</span>
                    </div>
                  </div>

                  <NavLink to={`/${meal.idMeal}`}>
                    <button className="w-full mt-5 bg-[#734060] hover:bg-purple-900 text-white py-3 rounded-2xl font-semibold">
                      View Details
                    </button>
                  </NavLink>
                </div>
              </div>
            ))}
        </div>
      )}
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
