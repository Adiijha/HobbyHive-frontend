import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import anime from '../../assets/anime.png';
import dance from '../../assets/dance.png';
import sing from '../../assets/sing.png'; 

function Choice() {
  const navigate = useNavigate();

  const handleChoice = (option) => {
    // Navigate to the dashboard with the selected option as a query parameter
    navigate(`/dashboard?choice=${option}`);
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 } },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-somig to-beige p-10 sm:p-8">
      <motion.h1 
        className="text-4xl md:text-5xl lg:text-6xl font-bnt font-bold text-black mb-8 md:mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Choose a Community to Join
      </motion.h1>

      {/* Images with Animation */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-full max-w-6xl"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Singing Community */}
        <motion.div 
          className="relative group cursor-pointer w-full h-56 sm:h-64 md:h-72"
          onClick={() => handleChoice('singing')}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={sing}
            className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300 ease-in-out"
            alt="Sing"
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
          >
            <span className="font-semibold font-pop text-lg md:text-xl lg:text-2xl">Singing Community</span>
          </motion.div>
        </motion.div>

        {/* Anime Community */}
        <motion.div 
          className="relative group cursor-pointer w-full h-56 sm:h-64 md:h-72"
          onClick={() => handleChoice('anime')}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={anime}
            className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300 ease-in-out"
            alt="Anime"
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
          >
            <span className="font-semibold font-pop text-lg md:text-xl lg:text-2xl">Anime Community</span>
          </motion.div>
        </motion.div>

        {/* Dance Community */}
        <motion.div 
          className="relative group cursor-pointer w-full h-56 sm:h-64 md:h-72"
          onClick={() => handleChoice('dance')}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={dance}
            className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300 ease-in-out"
            alt="Dance"
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
          >
            <span className="font-semibold font-pop text-lg md:text-xl lg:text-2xl">Dance Community</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Choice;
