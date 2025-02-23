
import React from "react";
import { Star, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";
import AnimatedCard from "@/components/AnimatedCard";
import HeroSection from "@/components/HeroSection";
import StatisticsSection from "@/components/StatisticsSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import InteractiveFeatures from "@/components/InteractiveFeatures";
import ShowcaseSection from "@/components/ShowcaseSection";

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent animated-gradient">
              Why Choose Us
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience the perfect blend of functionality and aesthetics with our cutting-edge platform.
            </p>
          </motion.div>

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

        <InteractiveFeatures />
        <ShowcaseSection />
        <StatisticsSection />
        <TestimonialSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
