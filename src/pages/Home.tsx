import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { personalInfo, professionalInfo } from '../data/profile';

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 font-serif"
      >
        <h2 className="text-3xl text-yellow-400 mb-2">जय श्री कृष्णा</h2>
      </motion.div>
      
      <motion.img
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
        alt={personalInfo.fullName}
        className="w-48 h-48 rounded-full mb-8 object-cover border-4 border-yellow-400"
      />
      
      <motion.h1 
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        className="text-5xl font-serif mb-4"
      >
        Umang's <span className="text-yellow-400">Biodata</span>
      </motion.h1>
      
      <p className="text-gray-300 mb-8 max-w-md">
        A {personalInfo.age}-year-old professional from {professionalInfo.workLocation}, 
        dedicated to building a life filled with love, shared values, and meaningful connections. 
        Seeking a life partner to embark on a journey of togetherness, creating cherished memories every step of the way.
      </p>

      <div className="space-y-4">
        <Link to="/about">
          <Button>
            More Details About Me
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
