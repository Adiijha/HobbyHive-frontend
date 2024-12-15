import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { motion } from "framer-motion"; // Import motion from framer-motion

function SignUp() {
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

  // Toggle show password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-12 text-black bg-gradient-to-r from-somig to-beige">
        <motion.span
          className="text-5xl font-bnt pb-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Sign Up
        </motion.span>
        <motion.p
          className="text-xl font-pop"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          Create your account
        </motion.p>
      </div>
      <div className="flex flex-col justify-center font-pop h-full p-4 pb-20 bg-grey pt-10 bg-gradient-to-r from-somig to-beige">
        <motion.div
          className="max-w-md w-full mx-auto border-2 border-btn-blue rounded-2xl p-8 bg-white"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* <form onSubmit={handleSubmit}> */}
          <form>
            <div className="space-y-6">
              {/* {error && <p className="text-red-500 text-sm">{error}</p>} */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <label className="text-gray-800 text-sm mb-2 block">Your Name</label>
                <input
                  name="name"
                  type="text"
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter Your Name"
                  // value={formData.name}
                  // onChange={handleChange}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <label className="text-gray-800 text-sm mb-2 block">Your Username</label>
                <input
                  name="username"
                  type="text"
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter Your Username"
                  // value={formData.username}
                  // onChange={handleChange}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label className="text-gray-800 text-sm mb-2 block">Email ID</label>
                <input
                  name="email"
                  type="text"
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter email"
                  // value={formData.email}
                  // onChange={handleChange}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative"
              >
                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter password"
                  // value={formData.password}
                  // onChange={handleChange}
                />
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer pt-6"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full text-white bg-black py-3 rounded-md text-sm mt-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Sign Up
              </motion.button>
            </div>
          </form>
          <div className="text-center mt-6">
            <span className="text-sm text-gray-700">Already have an account?</span>
            <Link to="/signin" className="text-black text-sm font-bold ml-2">
              Login here
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default SignUp;
