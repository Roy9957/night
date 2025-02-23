
import React from "react";
import { motion } from "framer-motion";

interface AnimatedCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const AnimatedCard = ({ title, description, icon }: AnimatedCardProps) => {
  return (
    <motion.div
      className="glass-effect rounded-xl p-6 relative overflow-hidden group"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500/10 to-transparent transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="mb-4 text-purple-400">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
