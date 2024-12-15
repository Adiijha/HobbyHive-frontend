import React from 'react';
import { motion } from 'framer-motion';
import Newsletter from './Newsletter';
import About from './About';
import Banner from './Banner';
import Featured from './Featured';
import HowItWorks from './HowItWorks';

function Hero() {
  return (
    <div
      className="w-full h-auto bg-gradient-to-r from-somig to-beige pt-28 p-20 flex flex-col justify-center items-center text-center"
    >
      {/* Hero Content Section */}
      <motion.div
        className="w-full h-screen text-black border-b-2 border-chgrey"
      >
        {/* Animated Heading */}
        <motion.span
          className="font-pop text-black font-bold text-7xl bg-gradient-to-b from-gray-500 to-gray-900 bg-black bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          UNLEASH YOUR PASSION AND CONNECT!
        </motion.span>
        <motion.div
  className="w-96 h-1 bg-gradient-to-r from-chgrey to-chblack bg-black mt-1 mx-auto"
  initial={{ opacity: 0, scaleX: 0 }}
  whileInView={{ opacity: 1, scaleX: 1 }}
  transition={{ duration: 1, delay: 0.2 }}
/>
        
        {/* Animated Description */}
        <motion.p
          className="font-pop mt-7 text-3xl text-chblack"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Discover, share, and grow with like-minded individuals from around the world in a vibrant, engaging community.
        </motion.p>

        {/* Animated Buttons */}
        <motion.div
  className="pt-8 font-pop flex gap-10 justify-center"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.6 }}
>
  {/* Animated Join Now Button */}
  <motion.button
    className="text-xl p-3 px-12 bg-black text-white rounded-full"
    whileHover={{ scale: 1.1, backgroundColor: "#3B3B3B" }}
    whileTap={{ scale: 0.95 }}
  >
    Join Now
  </motion.button>

  {/* Animated Explore Communities Button */}
  <motion.button
    className="text-xl p-3 px-6 border-2 border-black rounded-full"
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
