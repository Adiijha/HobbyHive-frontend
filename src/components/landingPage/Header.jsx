import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Header() {
  return (
    <div className="w-full h-20 border-b-2 pb-5 bg-somig border-chgrey flex flex-row justify-between items-center px-8 pt-4 font-bnt">
      <div className="flex flex-row gap-16">
       <Link to="/"> <span className="text-chblack font-bold text-5xl">HOBBYHIVE</span></Link>
      </div>
      <div className="flex gap-4">
        {/* Sign In Button with Framer Motion */}
        <Link to="/signin">
          <motion.button
            className="font-quick font-semibold w-28 h-10 text-md text-white bg-black rounded-3xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
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
          >
            Sign Up
          </motion.button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
