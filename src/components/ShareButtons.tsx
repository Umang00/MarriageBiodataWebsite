import { MessageCircle, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

interface ShareButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

function ShareButton({ icon, label, onClick }: ShareButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="text-gray-400 hover:text-yellow-400 transition-colors relative group"
      aria-label={label}
    >
      {icon}
      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {label}
      </span>
    </motion.button>
  );
}

export function ShareButtons() {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Check out Umang's Biodata: ${window.location.href}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const handleEmail = () => {
    const subject = encodeURIComponent("Umang's Biodata");
    const body = encodeURIComponent(`I thought you might be interested in viewing this biodata: ${window.location.href}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <p className="text-gray-400">Share Biodata Via:</p>
      <div className="flex justify-center space-x-6">
        <ShareButton
          icon={<MessageCircle size={24} />}
          label="Share via WhatsApp"
          onClick={handleWhatsApp}
        />
        <ShareButton
          icon={<Mail size={24} />}
          label="Share via Email"
          onClick={handleEmail}
        />
      </div>
    </div>
  );
}