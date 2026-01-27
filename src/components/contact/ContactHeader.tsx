"use client";

import React from "react";
import { motion } from "framer-motion";

const ContactHeader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12 text-center"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
        Let's Connect
      </h1>
      <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto">
        Have a project in mind? Let's discuss how we can work together.
      </p>
    </motion.div>
  );
};

export default ContactHeader;
