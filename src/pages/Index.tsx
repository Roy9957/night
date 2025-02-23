
import React from "react";
import { Star, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";
import AnimatedCard from "@/components/AnimatedCard";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  const features = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Premium Design",
      description: "Expertly crafted interfaces that blend form and function seamlessly."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Optimized performance for a smooth and responsive experience."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Reliable",
      description: "Built with security in mind, ensuring your data stays protected."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white overflow-hidden">
      <ParticleBackground />
      
      <main className="relative z-10">
        <HeroSection />

        <motion.section 
          className="container mx-auto px-4 py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <AnimatedCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default Index;
