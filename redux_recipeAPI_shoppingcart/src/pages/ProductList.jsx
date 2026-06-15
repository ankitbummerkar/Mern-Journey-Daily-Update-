import { useEffect, useState } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";

import { addtocart } from "../features/cartSlice";

const ProductList = () => {
  const [meals, setMeals] = useState([]);

  const [page, setPage] = useState(0);

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const pageSize = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/search.php?s=",
        );

        setMeals(response.data.meals);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (meals.length === 0) {
    return (
      <section className="w-full min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-16 h-16 border-4 border-purple-700 border-t-transparent rounded-full animate-spin"></div>
      </section>
    );
  }

  const totalPages = Math.ceil(meals.length / pageSize);

  return (
    <section className="bg-gray-100 min-h-screen py-10">
      <div className="flex flex-wrap justify-center gap-6 px-6">
        {meals.slice(page * pageSize, (page + 1) * pageSize).map((meal) => {
          const itemExists = cartItems.find(
            (item) => item.idMeal === meal.idMeal,
          );

          return (
            <div
              key={meal.idMeal}
              className="bg-white rounded-3xl overflow-hidden shadow-md active:scale-90  hover:shadow-2xl hover:-translate-y-2 transition duration-300 w-64"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-4">
                <h2 className="text-xl font-bold text-purple-700 text-center line-clamp-1">
                  {meal.strMeal}
                </h2>

                <div className="mt-3 space-y-2">
                  <div className="flex justify-between">
                    <span>Origin</span>

                    <span className="font-semibold">{meal.strArea}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Category</span>

                    <span className="font-semibold">{meal.strCategory}</span>
                  </div>
                </div>

                <button
                  disabled={itemExists}
                  onClick={() => dispatch(addtocart(meal))}
                  className={`w-full mt-5 py-3 rounded-2xl font-semibold text-white
                      
                      ${
                        itemExists
                          ? "bg-gray-400"
                          : "bg-purple-700 active:bg-purple-900 hover:bg-purple-900"
                      }
                    `}
                >
                  {itemExists ? "Added" : "Add To Cart"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center gap-4 mt-12 flex-wrap">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`w-12 h-12 rounded-xl font-bold

              ${
                page === i
                  ? "bg-purple-700 text-white"
                  : "bg-white hover:bg-purple-700 hover:text-white"
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
