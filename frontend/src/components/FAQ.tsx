import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Do I need any prior coding experience?",
    answer: "No prior experience is required! We start from the basics of visual logic and gradually move to more advanced concepts, making it perfect for beginners."
  },
  {
    question: "What hardware is required for the robotics part?",
    answer: "We use a high-fidelity simulator for the online sessions. If you wish to build a physical version, we provide a recommended parts list that you can purchase separately."
  },
  {
    question: "Will recordings of the sessions be available?",
    answer: "Yes, all live sessions are recorded and made available on our student portal for up to 6 months after the workshop ends."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-premium-black">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked <span className="gold-text">Questions</span></h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/10">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex justify-between items-center text-left hover:text-yellow-400 transition-colors"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};