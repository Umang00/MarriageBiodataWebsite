import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = 'px-6 py-3 rounded-full font-semibold transition-colors duration-300';
  const widthStyles = fullWidth ? 'w-full' : '';
  const variantStyles = variant === 'primary' 
    ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
    : 'bg-gray-800 text-white hover:bg-gray-700';

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${widthStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};