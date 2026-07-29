import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import { ToastContainer } from "react-toastify";
import VerifyEmail from "./pages/VerifyEmail";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 mb-10 flex items-center justify-center px-4 py-8">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/verify-email" element={<VerifyEmail />} />

        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default App;
