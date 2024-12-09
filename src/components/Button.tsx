import { ButtonHTMLAttributes, FC } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export const Button: FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  ...props 
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        px-6 py-3 rounded-full font-semibold transition-colors duration-300
        ${fullWidth ? 'w-full' : ''}
        ${variant === 'primary' 
          ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
          : 'bg-gray-800 text-white hover:bg-gray-700'}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
};