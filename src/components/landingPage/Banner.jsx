import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Card from './Card';

function Banner() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: false, threshold: 0.3 });

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <div
      ref={sectionRef}
      className="w-full h-auto mt-7 p-10 border-b-2 border-chgrey"
    >
      <motion.div
        className="text-5xl font-quick font-bold"
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        WHY CHOOSE HOBBYHIVE?
      </motion.div>
      
      <motion.div
        className="flex gap-20"
        variants={cardContainerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div variants={cardVariants}>
          <Card
            number={"1."}
            heading={"Tailored Communities"}
            description={
              "Find or create communities for any hobby you love, and make connections that matter."
            }
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <Card
            number={"2."}
            heading={"Inspiring Content"}
            description={
              "Access tutorials, stories, and insights to keep you inspired and motivated."
            }
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <Card
            number={"3."}
            heading={"Collaborative Projects"}
            description={
              "Work with others on exciting projects and showcase your creations to the world."
            }
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Banner;
