
import React from "react";
import { motion } from "framer-motion";
import { Monitor, Smartphone, Globe } from "lucide-react";

const ShowcaseSection = () => {
  const showcaseItems = [
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "Desktop Experience",
      description: "Stunning visuals and seamless interactions on larger screens."
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile First",
      description: "Perfectly optimized for an exceptional mobile experience."
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Reach",
      description: "Connect with users worldwide through our platform."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass-effect night-glow p-8 rounded-2xl"
        >
          {showcaseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex items-start space-x-6 mb-12 last:mb-0"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-purple-400 flex-shrink-0"
              >
                {item.icon}
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
