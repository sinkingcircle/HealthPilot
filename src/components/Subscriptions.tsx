import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Magnetic } from '@/components/ui/magnetic';

const features = [
  "24/7 AI Health Assistant",
  "Personalized Health Insights",
  "Symptom Tracking",
  "Health Records Storage",
  "Emergency Contact System",
];

const premiumFeatures = [
  ...features,
  "Priority Response Time",
  "Video Consultations",
  "Family Health Management",
  "Advanced Health Analytics",
  "Specialist Referrals",
];

export function Subscriptions() {
  return (
    <section id="subscriptions" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#2D1810] to-[#00B2FF] bg-clip-text text-transparent"
          >
            Choose Your Health Journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Select the plan that best fits your healthcare needs
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 z-0" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">Basic Plan</h3>
              <p className="text-gray-600 mb-6">Essential health monitoring</p>
              <div className="flex items-end gap-2 mb-8">
                <span className="text-4xl font-bold">$9.99</span>
                <span className="text-gray-500 mb-1">/month</span>
              </div>
              <div className="space-y-4 mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              <Magnetic>
                <button className="w-full py-3 rounded-lg bg-[#00B2FF] text-white font-medium hover:bg-blue-600 transition-colors">
                  Get Started
                </button>
              </Magnetic>
            </div>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-[#2D1810] to-black rounded-2xl p-8 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-2 right-2">
              <Star className="text-yellow-400" fill="currentColor" size={24} />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2 text-white">Premium Plan</h3>
              <p className="text-gray-300 mb-6">Advanced healthcare suite</p>
              <div className="flex items-end gap-2 mb-8">
                <span className="text-4xl font-bold text-white">$24.99</span>
                <span className="text-gray-300 mb-1">/month</span>
              </div>
              <div className="space-y-4 mb-8">
                {premiumFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="text-green-400 flex-shrink-0" size={20} />
                    <span className="text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>
              <Magnetic>
                <button className="w-full py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-100 transition-colors">
                  Get Premium
                </button>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}