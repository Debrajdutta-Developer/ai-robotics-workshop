import React from 'react';
import { Users, Calendar, Monitor, IndianRupee, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const details = [
  { icon: Users, label: 'Age Group', value: '9–14 Years' },
  { icon: Calendar, label: 'Duration', value: '4 Weeks' },
  { icon: Monitor, label: 'Mode', value: 'Online' },
  { icon: IndianRupee, label: 'Fee', value: '₹2,999' },
  { icon: Rocket, label: 'Start Date', value: '15 July 2026' },
];

export const WorkshopDetails: React.FC = () => {
  return (
    <section className="py-20 bg-premium-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {details.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-premium-gray p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center group hover:border-yellow-500/30 transition-colors"
            >
              <item.icon className="w-8 h-8 text-yellow-500 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-gray-500 text-sm mb-1 uppercase tracking-wider">{item.label}</span>
              <span className="text-white font-semibold text-lg">{item.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};