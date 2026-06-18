import React from 'react';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-20 premium-gradient">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Master <span className="gold-text">AI & Robotics</span> <br />
          This Summer
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Unlock the future of technology. An intensive 4-week online workshop 
          designed for the next generation of innovators ages 9–14.
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToForm}
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-4 px-10 rounded-full text-lg shadow-lg shadow-yellow-500/20 transition-all"
        >
          Enroll Now
        </motion.button>
      </motion.div>
    </section>
  );
};