// src/components/MetricWidget.js (This file is REQUIRED)

import { motion } from "framer-motion";

export default function MetricWidget({ stat, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: delay }}
      className="p-6 rounded-xl bg-[#031026] border border-cyan-500/10 shadow-xl hover:border-cyan-500/40 transition-all relative overflow-hidden h-full flex flex-col justify-between"
    >
      {/* Subtle background glow effect for visual depth */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-400/10 rounded-full blur-2xl opacity-40 transform translate-x-1/2 -translate-y-1/2"></div>
      
      {/* The main data point with a vibrant gradient clip */}
      <p className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
        {stat}
      </p>
      
      {/* The description */}
      <p className="text-gray-300 text-base font-medium">{description}</p>
    </motion.div>
  );
}