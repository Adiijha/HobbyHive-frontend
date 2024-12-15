import React from 'react';
import { motion } from 'framer-motion';
import Newsletter from './Newsletter';
import About from './About';
import Banner from './Banner';
import Featured from './Featured';
import HowItWorks from './HowItWorks';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className=" w-full h-auto bg-gradient-to-r from-somig to-beige pt-12 md:pt-28 px-6 sm:px-10 md:px-16 lg:px-20 flex flex-col items-center text-center">
      {/* Hero Content Section */}
      <motion.div className="w-full max-h-[70vh] md:min-h-screen text-black border-b-2 border-chgrey flex flex-col items-center">
        {/* Animated Heading */}
        <motion.h1
          className="font-bnt text-black font-semibold text-6xl md:text-7xl lg:text-8xl bg-gradient-to-b from-gray-500 to-gray-900 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          UNLEASH YOUR PASSION AND CONNECT!
        </motion.h1>

        {/* Divider */}
        <motion.div
          className="w-2/3 md:w-2/3 lg:[width:1100px] h-1 md:h-1.5 rounded-3xl bg-gradient-to-r from-chgrey to-chblack mt-2 md:mt-4 mx-auto"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* Animated Description */}
        <motion.p
          className="font-pop mt-7 text-lg sm:text-xl md:text-2xl lg:text-3xl text-chblack px-4 md:px-12 lg:px-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Discover, share, and grow with like-minded individuals from around the world in a vibrant, engaging community.
        </motion.p>

        {/* Animated Buttons */}
        <motion.div
          className="pt-8 font-pop flex flex-col sm:flex-row gap-4 md:gap-6 sm:gap-10 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {/* Join Now Button */}
          <motion.button
            className="text-md sm:text-xl p-3 px-8 sm:px-8 bg-black text-white rounded-full transition-all"
            whileHover={{ scale: 1.1, backgroundColor: "#3B3B3B" }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/signup">Join Now</Link>
          </motion.button>

          {/* Explore Communities Button */}
          <motion.button
            className="text-md sm:text-xl p-3 sm:px-8 border-2 mb-10 md:mb-0 border-black rounded-full transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Communities
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Other Sections */}
      <About />
      <Banner />
      <Featured />
      <HowItWorks />
      <Newsletter />
    </div>
  );
}

export default Hero;
