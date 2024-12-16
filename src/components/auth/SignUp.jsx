import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { registerUser, verifyOTP } from '../../api/api';

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showOtpSection, setShowOtpSection] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const { name, username, email, password } = formData;

    if (!name || !username || !email || !password) {
      return setError('All fields are required.');
    }

    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      return setError('Username should only contain letters, numbers, and underscores.');
    }

    const payload = { name, username, email, password };

    try {
      setIsLoading(true);
      const response = await registerUser(payload);

      if (response?.message) {
        setIsOtpSent(true);
        setShowOtpSection(true);
      }
    } catch (err) {
      setError(err.message || 'Error sending OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!otp || otp.length !== 6) {
      return setError('Please enter a valid 6-digit OTP.');
    }

    try {
      setIsLoading(true);
      const response = await verifyOTP(formData.email, otp);

      if (response?.message === 'User verified and confirmed successfully. You can now log in.') {
        navigate('/choice');
      } else {
        setError('Invalid OTP. Please try again.');
      }
    } catch (err) {
      setError('Error verifying OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-12 text-black bg-gradient-to-r from-somig to-beige">
        <motion.span
          className="text-5xl font-bnt pb-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Sign Up
        </motion.span>
        <motion.p
          className="text-xl font-pop"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
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
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {['name', 'username', 'email', 'password'].map((field, index) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={field === 'password' ? 'relative' : ''}
                >
                  <label className="text-gray-800 text-sm mb-2 block">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    name={field}
                    type={field === 'password' && !showPassword ? 'password' : 'text'}
                    className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-black"
                    placeholder={`Enter your ${field}`}
                    value={formData[field]}
                    onChange={handleChange}
                  />
                  {field === 'password' && (
                    <span
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer pt-6"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>

            {error && (
              <div className="text-red-500 text-sm mt-4">{error}</div>
            )}

            {isLoading ? (
  <motion.button
    type="submit"
    className="w-full text-white bg-black py-3 rounded-md text-sm mt-6 flex justify-center items-center"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    <div className="loader border-t-2 border-white w-5 h-5 rounded-full animate-spin"></div>
  </motion.button>
) : !isOtpSent ? (
  <motion.button
    type="submit"
    className="w-full text-white bg-black py-3 rounded-md text-sm mt-6"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    Send OTP
  </motion.button>
) : (
  <div className="mt-6">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <label className="text-gray-800 text-sm mb-2 block">Enter OTP</label>
      <input
        name="otp"
        type="text"
        className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-black"
        placeholder="Enter OTP"
        value={otp}
        onChange={handleOtpChange}
      />
    </motion.div>

    <motion.button
      type="button"
      className="w-full text-white bg-black py-3 rounded-md text-sm mt-6"
      onClick={handleOtpSubmit}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Verify OTP
    </motion.button>
  </div>
)}
          </form>
        <div className="text-center mt-6">
          <span className="text-md text-gray-700">Already have an account?</span>
          <Link to="/signin" className="text-black underline text-md group font-bold ml-2">
            Login here
          </Link>
        </div>
        </motion.div>
      </div>
    </>
  );
}

export default SignUp;
