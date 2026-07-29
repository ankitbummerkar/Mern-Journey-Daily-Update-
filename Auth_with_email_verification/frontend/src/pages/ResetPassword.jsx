import { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ResetPassword() {
  const { token } = useParams();

  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password.trim()) {
      return toast.error("Please enter new password");
    }

    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `http://localhost:5000/api/auth/reset-password/${token}`,
        {
          password,
        },
      );

      toast.success(response.data.message);

      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Reset failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2">Reset Password</h1>

        <p className="text-center text-gray-500 mb-8">
          Enter your new password.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="password"
            placeholder="New Password"
            className="w-full border rounded-lg h-12 px-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-12"
          >
            {loading ? "Updating..." : "Update Password"}
          </button>
        </form>
      </div>
    </section>
  );
}
