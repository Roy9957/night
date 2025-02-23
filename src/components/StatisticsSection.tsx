
import React from "react";
import { motion } from "framer-motion";
import { Users, Clock, Trophy } from "lucide-react";

const stats = [
  {
    icon: <Users className="w-6 h-6" />,
    value: "10K+",
    label: "Active Users",
    description: "Growing community of satisfied customers"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    value: "24/7",
    label: "Support",
    description: "Round-the-clock assistance whenever you need"
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    value: "99.9%",
    label: "Uptime",
    description: "Reliable service you can count on"
  }
];

const StatisticsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent animated-gradient">
            Trusted by Thousands
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our platform has helped countless businesses achieve their goals with reliable performance and exceptional support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-effect night-glow p-6 rounded-xl text-center"
            >
              <div className="mb-4 text-purple-400 flex justify-center">{stat.icon}</div>
              <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-lg font-semibold text-purple-300 mb-2">{stat.label}</p>
              <p className="text-gray-400">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
