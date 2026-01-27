"use client";

import React from "react";
import { motion } from "framer-motion";

const AvailabilityBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-12 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-lime-500/10 to-green-500/10 border border-emerald-500/30 backdrop-blur-sm shadow-lg shadow-emerald-500/5"
    >
      <div className="flex items-center justify-center gap-3 mb-3">
        <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
        <h2 className="text-2xl md:text-3xl font-semibold text-emerald-400">
          Available for Freelance Work
        </h2>
      </div>
      <p className="text-neutral-300 text-center text-base md:text-lg">
        I'm currently accepting new projects and freelance opportunities.
        Whether you need a full-stack application, API development, or consulting,
        I'm here to help bring your ideas to life.
      </p>
    </motion.div>
  );
};

export default AvailabilityBanner;
