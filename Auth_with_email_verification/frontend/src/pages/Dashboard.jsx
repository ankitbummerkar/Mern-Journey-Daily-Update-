import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const user = location.state?.user;

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "https://authwithemailverify.vercel.app/api/auth/logout",
        {},
        {
          withCredentials: true,
        },
      );

      toast.success(response.data.message);

      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Logout Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6">Hello 👋</h1>

        <h2 className="text-xl font-semibold">{user?.name}</h2>

        <p className="text-gray-500 mt-2">{user?.email}</p>

        <button
          onClick={handleLogout}
          className="mt-8 w-full h-12 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
