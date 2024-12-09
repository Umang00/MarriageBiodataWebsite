import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  relation: string;
  text: string;
  imageUrl: string;
  index: number;
}

export function TestimonialCard({ name, relation, text, imageUrl, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="bg-gray-900/50 p-6 rounded-lg relative backdrop-blur-sm"
    >
      <Quote className="absolute top-4 right-4 text-yellow-400/20" size={40} />
      <div className="flex items-center gap-4 mb-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400"
        />
        <div>
          <p className="font-semibold text-yellow-400">{name}</p>
          <p className="text-sm text-gray-400">{relation}</p>
        </div>
      </div>
      <p className="text-lg italic text-gray-200">{text}</p>
    </motion.div>
  );
}