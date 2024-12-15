import React from 'react';
import { motion, useInView } from 'framer-motion';
import '../../index.css';
import dummy from '../../assets/dummy.png';
import { Link } from 'react-router-dom';

function Featured() {
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.3 });

  // Animation Variants
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } },
  };

  return (
    <div ref={sectionRef}>
      <div className="border-b-2 border-chgrey pb-24">
        <div className="w-full h-auto flex flex-col items-center justify-center">
          {/* Featured Text with Animation */}
          <motion.div
            className="font-quick font-bold pt-20 text-5xl mb-8"
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            FEATURED
          </motion.div>

          <motion.div
            className="font-pop text-2xl mb-6"
            variants={descriptionVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            Explore hobbies like photography, painting, gaming, fitness, writing, and more. Find your community today!
          </motion.div>
        </div>
        
        {/* Images with Animation */}
        <motion.div
          className="grid grid-cols-3 gap-10"
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div>
            <img src={dummy} className="rounded-3xl hover:scale-110 transition-transform duration-300 ease-in-out" alt="" />
          </motion.div>
          <motion.div>
            <img src={dummy} className="rounded-3xl hover:scale-110 transition-transform duration-300 ease-in-out" alt="" />
          </motion.div>
          <motion.div>
            <img src={dummy} className="rounded-3xl hover:scale-110 transition-transform duration-300 ease-in-out" alt="" />
          </motion.div>
        </motion.div>

        {/* "View All Hobbies" link with animation */}
        <motion.div
          className="font-pop flex text-xl w-full justify-end pr-5 pt-2"
          variants={linkVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <Link className="relative group">View All Hobbies</Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Featured;
