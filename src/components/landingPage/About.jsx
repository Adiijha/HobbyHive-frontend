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
      className="w-full h-1/3 pt-16 pb-10 flex gap-24 flex-row justify-between border-b-2 border-chgrey"
    >
      {/* Text Section */}
      <motion.div
        className="w-1/2 p-20 px-1"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={textVariant}
      >
        <span className="text-5xl font-quick font-bold">
          WHAT IS HOBBYHIVE?
        </span>
        <p className="text-2xl mt-6 font-pop">
          HobbyHive is the ultimate platform for hobby enthusiasts. From crafting to gaming, join communities tailored to your interests and connect with others who share your passion.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="w-1/2 h-auto"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={imageVariant}
      >
        <div className="w-2/3 h-2/3 scale-110 mb-8">
          <img src={banner} alt="Banner" />
        </div>
      </motion.div>
    </div>
  );
}

export default About;
