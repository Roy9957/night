
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "This platform has transformed how we operate. The night mode is especially pleasant for long working hours.",
    author: "Sarah Johnson",
    role: "Product Manager"
  },
  {
    quote: "Incredible attention to detail and beautiful animations. It's a joy to use every single day.",
    author: "Michael Chen",
    role: "Lead Developer"
  },
  {
    quote: "The best investment we've made for our team's productivity and workflow.",
    author: "Emma Williams",
    role: "Creative Director"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent animated-gradient">
            What Our Users Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-effect night-glow p-6 rounded-xl relative"
            >
              <Quote className="w-8 h-8 text-purple-400 mb-4" />
              <p className="text-gray-300 mb-4 italic">{testimonial.quote}</p>
              <div className="mt-auto">
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-purple-400 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
