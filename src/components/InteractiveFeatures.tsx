
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  Star, 
  Shield, 
  Code, 
  Sparkles, 
  Lightbulb,
  Palette,
  Rocket,
  Coffee
} from "lucide-react";

const InteractiveFeatures = () => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  const features = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Premium Features",
      description: "Experience the best of what technology has to offer with our premium features.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Built with modern best practices and maintainable architecture.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Magic Effects",
      description: "Delightful animations and transitions that bring your interface to life.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Smart Solutions",
      description: "Intelligent features that adapt to your needs and preferences.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Beautiful Design",
      description: "Stunning visuals that captivate and engage your audience.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Fast Performance",
      description: "Lightning-quick responses and smooth interactions.",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Easy to Use",
      description: "Intuitive interface that makes complex tasks simple.",
      color: "from-amber-500 to-yellow-500"
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent animated-gradient">
            Explore Our Features
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Click on any feature to see it come to life with stunning animations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`glass-effect night-glow p-8 rounded-xl cursor-pointer overflow-hidden relative group`}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedFeature(selectedFeature === index ? null : index)}
            >
              <AnimatePresence>
                {selectedFeature === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10`}
                  />
                )}
              </AnimatePresence>
              
              <motion.div
                animate={selectedFeature === index ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <div className="mb-4 text-purple-400 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveFeatures;
