import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { enquiryService } from '../services/api';

type FormData = {
  name: string;
  email: string;
  phone: string;
};

export const RegistrationForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    try {
      const response = await enquiryService.submitEnquiry(data);
      setStatus('success');
      setMessage(response.message);
      reset();
    } catch (error: any) {
      setStatus('error');
      setMessage(error.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="registration-form" className="py-24 bg-premium-gray/50">
      <div className="max-w-xl mx-auto px-4">
        <div className="bg-premium-black p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
          <h2 className="text-3xl font-bold mb-2 text-center">Reserve Your <span className="gold-text">Spot</span></h2>
          <p className="text-gray-400 text-center mb-10">Fill in your details and we'll get back to you.</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
              <input
                {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'Too short' } })}
                className={`w-full bg-premium-gray border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors`}
                placeholder="John Doe"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
              <input
                {...register('email', { 
                  required: 'Email is required', 
                  pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } 
                })}
                className={`w-full bg-premium-gray border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors`}
                placeholder="john@example.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
              <input
                {...register('phone', { 
                  required: 'Phone is required',
                  pattern: { value: /^\+?[\d\s-]{10,}$/, message: 'Invalid phone number' }
                })}
                className={`w-full bg-premium-gray border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors`}
                placeholder="+91 98765 43210"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={status === 'loading'}
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-4 rounded-xl flex items-center justify-center disabled:opacity-50"
            >
              {status === 'loading' ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                'Submit Enquiry'
              )}
            </motion.button>
          </form>

          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center text-green-500"
            >
              <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
              <p className="text-sm">{message}</p>
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center text-red-500"
            >
              <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
              <p className="text-sm">{message}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};