import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons for the hamburger menu

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu and handle transition
  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <div className="w-full h-16 md:h-20 border-b-2 pb-5 bg-somig border-chgrey flex justify-between items-center px-4 sm:px-8 pt-4 font-bnt relative">
      {/* Logo Section */}
      <div className="flex justify-between items-center w-full sm:w-auto mb-4 sm:mb-0 pt-4 md:pt-0">
        <Link to="/">
          <span className="text-chblack font-bold text-3xl sm:text-5xl">HOBBYHIVE</span>
        </Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="sm:hidden flex justify-end w-full">
        <button onClick={toggleMenu}>
          {menuOpen ? (
            <FaTimes className="text-3xl text-chblack" />
          ) : (
            <FaBars className="text-3xl text-chblack" />
          )}
        </button>
      </div>

      {/* Popup Menu (Hidden by default, appears when menuOpen is true) */}
      <motion.div
        className={`${
          menuOpen ? 'block' : 'hidden'
        } fixed top-0 right-0 w-2/3 sm:w-80 h-full bg-white shadow-lg flex flex-col justify-center items-center z-50`}
        initial={{ x: '100%' }}
        animate={{ x: menuOpen ? 0 : '100%' }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
          duration: 0.5,
        }}
      >
        {/* Close Button (Top Right Corner) */}
        <div className="absolute top-4 right-4">
          <button onClick={toggleMenu}>
            <FaTimes className="text-3xl text-chblack" />
          </button>
        </div>

        {/* Sign In Button with Framer Motion */}
        <Link to="/signin">
          <motion.button
            className="font-quick font-semibold w-40 h-10 text-md text-white bg-black rounded-3xl mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            onClick={handleMenuClose} // Close menu on sign in click
          >
            Sign In
          </motion.button>
        </Link>

        {/* Sign Up Button with Framer Motion */}
        <Link to="/signup">
          <motion.button
            className="font-quick font-semibold w-40 h-10 text-md bg-white rounded-3xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            onClick={handleMenuClose} // Close menu on sign up click
          >
            Sign Up
          </motion.button>
        </Link>
      </motion.div>

      {/* Button Section (Shown on Desktop) */}
      <div className="hidden sm:flex flex-row gap-4 sm:gap-8 w-full sm:w-auto justify-center">
        {/* Sign In Button with Framer Motion */}
        <Link to="/signin">
          <motion.button
            className="font-quick font-semibold w-28 h-10 text-md text-white bg-black rounded-3xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            onClick={handleMenuClose} // Close menu on sign in click
          >
            Sign In
          </motion.button>
        </Link>

        {/* Sign Up Button with Framer Motion */}
        <Link to="/signup">
          <motion.button
            className="font-quick font-semibold w-28 h-10 text-md bg-white rounded-3xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            onClick={handleMenuClose} // Close menu on sign up click
          >
            Sign Up
          </motion.button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
