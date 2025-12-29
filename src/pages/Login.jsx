// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Button from "../components/Button";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//     setError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     if (!formData.email || !formData.password) {
//       setError("Please fill in all fields");
//       setLoading(false);
//       return;
//     }

//     try {
//       await new Promise((res) => setTimeout(res, 1000));

//       const storedUser = JSON.parse(localStorage.getItem("user"));

//       if (
//         !storedUser ||
//         storedUser.email !== formData.email
//       ) {
//         setError("Invalid email or password");
//         setLoading(false);
//         return;
//       }

//       navigate("/profile");
//       window.location.reload();
//     } catch {
//       setError("Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="max-w-md w-full space-y-6">
//         <h2 className="text-center text-3xl font-bold">Login</h2>

//         {error && (
//           <div className="bg-red-100 text-red-700 p-3 rounded">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             className="w-full border p-2 rounded"
//             value={formData.email}
//             onChange={handleChange}
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             className="w-full border p-2 rounded"
//             value={formData.password}
//             onChange={handleChange}
//           />

//           <Button type="submit" disabled={loading} className="w-full">
//             {loading ? "Logging in..." : "Login"}
//           </Button>
//         </form>

//         <p className="text-center text-sm">
//           Don’t have an account?{" "}
//           <Link to="/register" className="text-indigo-600">
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;






import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showForgot, setShowForgot] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
    setMessage("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      await new Promise((res) => setTimeout(res, 1000));

      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (!storedUser || storedUser.email !== formData.email) {
        setError("Invalid email or password");
        setLoading(false);
        return;
      }

      navigate("/profile");
      window.location.reload();
    } catch {
      setError("Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    setError("");
    setMessage("");

    if (!formData.email) {
      setError("Please enter your email first");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser || storedUser.email !== formData.email) {
      setError("No account found with this email");
      return;
    }

    setMessage("Password reset link has been sent to your email (demo).");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-white px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <h2 className="text-3xl font-bold text-center text-pink-600 mb-2">
          Welcome Back 👋
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Login to continue shopping
        </p>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-3">
            {error}
          </div>
        )}

        {message && (
          <div className="bg-green-100 text-green-700 p-3 rounded mb-3">
            {message}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">

          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full border rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="w-full border rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-pink-600 hover:underline"
            >
              Forgot password?
            </button>

            <Link to="/register" className="text-gray-600 hover:underline">
              Create account
            </Link>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-pink-600 hover:bg-pink-700"
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>

        <p className="text-center text-sm mt-6 text-gray-500">
          New to FashionStyle?{" "}
          <Link to="/register" className="text-pink-600 font-medium">
            Sign up
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;
