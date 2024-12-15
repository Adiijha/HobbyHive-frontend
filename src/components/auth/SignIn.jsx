import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { motion } from "framer-motion"; // Import motion from framer-motion

function SignIn() {
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

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
      </div>

      {/* Form Section with Animation */}
      <div className="flex flex-col justify-center font-pop h-full p-4 pb-20 bg-grey pt-10 bg-gradient-to-r from-somig to-beige">
        <motion.div
          className="max-w-md w-full mx-auto border-2 border-btn-blue rounded-2xl p-8 bg-white"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <form>
            <div className="space-y-6">
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Email or Username</label>
                <motion.input
                  name="emailOrUsername"
                  type="text"
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
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
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
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
                className="w-full text-white bg-black py-3 rounded-md text-sm mt-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Sign In
              </motion.button>
            </div>
          </form>
          <p className="text-gray-800 text-sm mt-6 text-center">
            Don't have an account?
            <Link to="/signup" className="text-black font-semibold hover:underline ml-1">
              Sign up here
            </Link>
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default SignIn;
