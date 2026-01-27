"use client";

import React from "react";
import { motion } from "framer-motion";
import { contactButtons } from "./contactData";

const ContactButtons: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
    >
      {contactButtons.map((button) => {
        const IconComponent = button.icon;
        return (
          <motion.a
            key={button.name}
            href={button.href}
            target={button.href.startsWith("mailto:") ? "_self" : "_blank"}
            rel={button.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
              group relative p-6 rounded-xl border transition-all duration-300
              ${button.color} ${button.hoverColor}
              backdrop-blur-sm cursor-pointer
            `}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-neutral-900/50 group-hover:bg-neutral-900/70 transition-colors">
                <IconComponent className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1 text-neutral-100 group-hover:text-white transition-colors">
                  {button.name}
                </h3>
                <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">
                  {button.description}
                </p>
              </div>
              <svg
                className="w-5 h-5 text-neutral-400 group-hover:text-neutral-200 group-hover:translate-x-1 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default ContactButtons;
