import { useDispatch, useSelector } from "react-redux";

import { removeitemCart } from "../features/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold">Cart is Empty</h1>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-100 p-6">
      <div className="flex flex-wrap justify-center gap-6">
        {cartItems.map((item) => (
          <div
            key={item.idMeal}
            className="bg-white rounded-3xl overflow-hidden shadow-md w-72"
          >
            <img
              src={item.strMealThumb}
              alt={item.strMeal}
              className="h-56 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-bold text-purple-700">
                {item.strMeal}
              </h2>

              <button
                onClick={() => dispatch(removeitemCart(item.idMeal))}
                className="w-full mt-5 bg-red-500 hover:bg-red-700 text-white py-3 rounded-2xl font-semibold"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cart;
