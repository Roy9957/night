
import React from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

interface NavigationMenuProps {
  onSelect: (option: string) => void;
}

const NavigationMenu = ({ onSelect }: NavigationMenuProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuOptions = [
    { id: 'features', label: 'Features' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleOptionClick = (optionId: string) => {
    onSelect(optionId);
    setIsOpen(false);
  };

  return (
    <div className="relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 p-2 rounded-full glass-effect hover:bg-purple-500/20 transition-colors"
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 right-6 glass-effect night-glow rounded-xl overflow-hidden min-w-[200px]"
          >
            <div className="py-2">
              {menuOptions.map((option) => (
                <motion.button
                  key={option.id}
                  onClick={() => handleOptionClick(option.id)}
                  className="w-full px-4 py-2 text-left text-white hover:bg-purple-500/20 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {option.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavigationMenu;
