import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface InfoSectionProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

export const InfoSection: FC<InfoSectionProps> = ({ title, icon, children }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12"
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="text-yellow-400 text-2xl">{icon}</span>
        <h2 className="text-2xl font-serif">{title}</h2>
      </div>
      <div className="bg-gray-900/50 p-8 rounded-lg backdrop-blur-sm">
        {children}
      </div>
    </motion.section>
  );
};