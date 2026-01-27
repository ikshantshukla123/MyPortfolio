"use client";

import React from "react";
import { motion } from "framer-motion";
import { services } from "./contactData";

const ServicesSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-12 p-6 rounded-xl bg-neutral-900/30 border border-neutral-800 backdrop-blur-sm"
    >
      <h3 className="text-xl font-semibold mb-4 text-neutral-200">
        What I Can Help With
      </h3>
      <ul className="space-y-3 text-neutral-400">
        {services.map((service, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-emerald-500 mt-1">✓</span>
            <span>{service}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServicesSection;
