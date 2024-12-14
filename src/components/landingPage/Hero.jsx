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
          className="font-bnt text-black text-8xl"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          UNLEASH YOUR PASSION AND CONNECT!
        </motion.span>
        
        {/* Animated Description */}
        <motion.p
          className="font-awe mt-1 text-3xl text-chblack"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Discover, share, and grow with like-minded individuals from around the world in a vibrant, engaging community.
        </motion.p>

        {/* Animated Buttons */}
        <motion.div
          className="pt-12 font-bnt flex gap-10 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <button className="text-2xl p-3 px-12 bg-black text-white rounded-full hover:bg-mugrbl">
            Join Now
          </button>
          <button className="text-2xl p-3 px-6 border-2 border-black rounded-full">
            Explore Communities
          </button>
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
