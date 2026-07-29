import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function VerifyEmail() {
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email || "your email address";

  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();

    if (!code.trim()) {
      return toast.error("Please enter the verification code");
    }

    if (code.length !== 6) {
      return toast.error("Verification code must be 6 digits");
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/verify-email",
        {
          code,
        },
        {
          withCredentials: true,
        },
      );

      toast.success(response.data.message);

      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Verification Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-4xl">📧</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800">Verify Your Email</h1>

        <p className="mt-4 text-gray-600">We've sent a verification code to</p>

        <p className="mt-2 text-blue-600 font-semibold break-all">{email}</p>

        <p className="mt-6 text-gray-500 text-sm">
          Please enter the <strong>6-digit verification code</strong> sent to
          your email.
        </p>

        {/* OTP Form */}
        <form onSubmit={handleVerify} className="mt-8 space-y-5">
          <input
            type="text"
            maxLength={6}
            value={code}
            onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
            placeholder="123456"
            className="
              w-full
              h-14
              border
              border-gray-300
              rounded-lg
              text-center
              text-2xl
              tracking-[10px]
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-blue-500
              hover:bg-blue-600
              disabled:bg-blue-300
              text-white
              font-semibold
              py-3
              rounded-lg
              transition
            "
          >
            {loading ? "Verifying..." : "Verify Email"}
          </button>
        </form>

        {/* Back to Login */}
        <Link
          to="/login"
          className="mt-5 inline-block text-blue-600 hover:underline"
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
}
