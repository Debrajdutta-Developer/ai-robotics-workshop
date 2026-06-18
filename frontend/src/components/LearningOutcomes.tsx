import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const outcomes = [
  "Build and program your first autonomous mobile robot",
  "Understand fundamental AI concepts and Machine Learning models",
  "Master visual coding and transition to Python logic",
  "Collaborate on real-world STEM projects with peers",
  "Earn a globally recognized certificate of completion"
];

export const LearningOutcomes: React.FC = () => {
  return (
    <section className="py-24 bg-premium-gray/30">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What You Will <span className="gold-text">Achieve</span></h2>
        <div className="grid gap-6">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center p-6 bg-premium-gray rounded-xl border border-white/5 hover:border-yellow-500/20 transition-all"
            >
              <div className="bg-yellow-500/10 p-2 rounded-full mr-6">
                <CheckCircle className="w-6 h-6 text-yellow-500" />
              </div>
              <p className="text-gray-200 text-lg">{outcome}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};