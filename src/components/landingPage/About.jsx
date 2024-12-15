import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import banner from '../../assets/banner.png';

function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.3 });

  // Animation Variants
  const textVariant = {
    hidden: { x: '-100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 2, ease: 'easeOut' } },
  };

  const imageVariant = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 2, ease: 'easeOut' } },
  };

  return (
    <div
      ref={sectionRef}
      className="w-full py-10 flex flex-col md:flex-row md:gap-24 justify-between items-center border-b-2 border-chgrey"
    >
      {/* Text Section */}
      <motion.div
        className="w-full md:w-1/2 p-4 md:p-20"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={textVariant}
      >
        <span className="text-4xl md:text-7xl text-left font-bnt block">
          WHAT IS HOBBYHIVE?
        </span>
        <p className="text-lg md:text-2xl mt-4 md:ml-2 md:mt-6 font-pop text-left">
          HobbyHive is the ultimate platform for hobby enthusiasts. From crafting to gaming, join communities tailored to your interests and connect with others who share your passion.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={imageVariant}
      >
        <div className="w-3/4 h-auto md:w-2/3 md:h-2/3 scale-110">
          <img src={banner} alt="Banner" className="w-full h-full object-contain" />
        </div>
      </motion.div>
    </div>
  );
}

export default About;
