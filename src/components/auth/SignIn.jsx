import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { loginUser } from "../../api/api";
import { login } from "../../redux/authSlice.js"; // Import the login action
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie"; // To handle cookies

function SignIn() {
  const [emailOrUsername, setEmailOrUsername] = useState(""); // State for email or username
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();


    // Get the authentication state from Redux
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    useEffect(() => {
      console.log("isAuthenticated changed:", isAuthenticated);
      if (isAuthenticated) {
        navigate("/dashboard");
      }
    }, [isAuthenticated, navigate]);
    
    const handleSignIn = async (e) => {
      e.preventDefault();
      setError(null);
      try {
        setIsLoading(true);
        const response = await loginUser(emailOrUsername, password);
        console.log("Login Response:", response);
    
        const accessToken = response?.data?.accessToken;
        if (!accessToken) throw new Error("Access Token not found");
    
        // Store the token in cookies
        Cookies.set("accessToken", accessToken, { secure: true, sameSite: "lax" });
    
        // Dispatch login action to Redux
        dispatch(login(accessToken));
        localStorage.setItem("authToken", accessToken);
        console.log("Token stored:", accessToken);
  
      } catch (err) {
        console.error("Login error:", err);
        setError(err?.message || "Something went wrong. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };
  
    
  // Toggle show password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {/* Static Background Section */}
      <div className="flex flex-col items-center justify-center pt-12 text-black bg-gradient-to-r from-somig to-beige">
        <motion.span
          className="text-5xl font-bnt pb-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Welcome Back
        </motion.span>
        <motion.p
          className="text-xl font-pop"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          Enter Your Details to Login
        </motion.p>
        <motion.div
        className="text-md text-gray-400 font-pop"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <p>Login Credentials for Testing Purposes:</p>
        <p>Username: bot123</p>
        <p>Password: bot123!@#</p>
        <p>PIN: 1234</p>
      </motion.div>

      </div>

      {/* Form Section with Animation */}
      <div className="flex flex-col justify-center font-pop h-full p-4 pb-20 bg-grey pt-10 bg-gradient-to-r from-somig to-beige">
        <motion.div
          className="max-w-md w-full mx-auto border-2 border-btn-blue rounded-2xl p-8 bg-white"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <form onSubmit={handleSignIn}>
            <div className="space-y-6">
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Email or Username</label>
                <motion.input
                  name="emailOrUsername"
                  type="text"
                  value={emailOrUsername}
                  onChange={(e) => setEmailOrUsername(e.target.value)}
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-black"
                  placeholder="Enter email or username"
                  required
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }} 
                  
                />
              </div>
              <div className="relative">
                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                <motion.input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-black"
                  placeholder="Enter password"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0 }} 
                />
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer pt-6"
                  onClick={togglePasswordVisibility}

                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>
              <div className="flex items-center pt-1">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 text-black focus:ring-chblack border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="text-gray-800 ml-3 block text-sm">
                  Remember me
                </label>
              </div>
              

              <motion.button
  type="submit"
  className="w-full text-white bg-black py-3 rounded-md text-sm mt-6 flex justify-center items-center"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.4 }}
>
  {isLoading ? (
    <div className="loader border-t-2 border-white w-5 h-5 rounded-full animate-spin"></div>
  ) : (
    "Sign In"
  )}
</motion.button>
            </div>
          </form>
          <p className="text-gray-800 text-md mt-6 text-center">
            Don't have an account?
            <Link to="/signup" className="text-black underline font-semibold group ml-1">
              Sign up here
            </Link>
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default SignIn;
