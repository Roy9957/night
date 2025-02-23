
import React from "react";
import { Menu, User, Folder, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationMenuProps {
  onSelect: (option: string) => void;
}

const NavigationMenu = ({ onSelect }: NavigationMenuProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuOptions = [
    { 
      id: 'login', 
      label: 'Login/Sign up',
      icon: <User className="w-4 h-4" />
    },
    { 
      id: 'projects', 
      label: 'My Projects',
      icon: <Folder className="w-4 h-4" />
    },
    { 
      id: 'contact', 
      label: 'Contact',
      icon: <Mail className="w-4 h-4" />
    }
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
                  className="w-full px-4 py-2 text-left text-white hover:bg-purple-500/20 transition-colors flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-purple-400">{option.icon}</span>
                  <span>{option.label}</span>
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
