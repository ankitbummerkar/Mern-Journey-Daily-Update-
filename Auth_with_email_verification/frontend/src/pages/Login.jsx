import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      return toast.error("Please enter your email");
    }

    if (!password.trim()) {
      return toast.error("Please enter your password");
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://auth-with-email-verification-password.onrender.com/api/auth/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        },
      );

      toast.success(response.data.message);

      setEmail("");
      setPassword("");

      navigate("/dashboard", {
        state: {
          user: response.data.user,
        },
      });
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pb-10">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Section */}
          <div className="flex flex-col items-center justify-center bg-blue-50 p-8 lg:p-12">
            <h1 className="text-4xl font-bold text-gray-800 text-center">
              Welcome Back 👋
            </h1>

            <p className="mt-3 text-gray-600 text-center">
              Sign in to continue.
            </p>

            <img
              src="/characterpose25.png"
              alt="Login"
              className="
                mt-6
                w-28
                sm:w-36
                md:w-48
                lg:w-56
                xl:w-64
                h-auto
                object-contain
                mx-auto
              "
            />
          </div>

          {/* Right Section */}
          <div className="p-8 md:p-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Login</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 rounded-lg border border-gray-300 px-4 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-12 rounded-lg border border-gray-300 px-4 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <Link
                  to="/forgot-password"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold transition"
              >
                {loading ? "Logging in..." : "Login"}
              </button>

              {/* Signup Link */}
              <p className="text-center text-gray-600">
                Don't have an account?
                <Link
                  to="/"
                  className="ml-2 font-semibold text-blue-600 hover:underline"
                >
                  Signup
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
