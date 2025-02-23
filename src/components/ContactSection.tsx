
import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-effect night-glow rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent animated-gradient">
              Get in Touch
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-4 text-purple-400">
                <Mail className="w-6 h-6" />
                <span>support@example.com</span>
              </div>
              <div className="flex items-center space-x-4 text-purple-400">
                <MessageSquare className="w-6 h-6" />
                <span>Live Chat Available</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <button className="w-full px-6 py-3 rounded-full bg-purple-500 text-white font-medium inline-flex items-center justify-center hover:bg-purple-600 transition-colors group">
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
