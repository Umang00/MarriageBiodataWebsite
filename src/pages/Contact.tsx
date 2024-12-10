import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, User } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto py-24 px-4">
      <h1 className="text-4xl font-serif mb-12 text-center">
        Get in <span className="text-yellow-400">Touch</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <h2 className="text-2xl font-serif mb-6">Contact Information</h2>
          
          <div className="flex items-center space-x-4">
            <User className="text-yellow-400" />
            <div>
              <p className="font-semibold">Contact Person</p>
              <p className="text-gray-400">Umang Sharma</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Phone className="text-yellow-400" />
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-gray-400">+91 94261 54668</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Mail className="text-yellow-400" />
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-gray-400">umangthakkar005@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <MapPin className="text-yellow-400" />
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-gray-400">Bangalore, India</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
}