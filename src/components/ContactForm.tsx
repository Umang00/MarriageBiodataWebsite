import { useState, FormEvent } from 'react';
import { Button } from './Button';
import { Send } from 'lucide-react';
import { sendMessage } from '../services/messaging';

interface FormData {
  name: string;
  mobile: string;
  email: string;
  message: string;
  contactPerson?: string;
}

interface FormErrors {
  name?: string;
  mobile?: string;
  message?: string;
  contactPerson?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    mobile: '',
    email: '',
    message: '',
    contactPerson: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Please add Name to send the Message';
    }
    
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Please add Mobile No to send the Message';
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile.trim())) {
      newErrors.mobile = 'Please enter a valid Mobile Number';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please add Message to send the Message';
    }

    if (!formData.contactPerson?.trim()) {
      newErrors.contactPerson = 'Please specify who to contact';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm() || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Send via both channels
      sendMessage.email(formData);
      sendMessage.whatsapp(formData);

      // Reset form
      setFormData({
        name: '',
        mobile: '',
        email: '',
        message: '',
        contactPerson: ''
      });

      alert('Message channels opened successfully!');
    } catch (error) {
      console.error('Error opening message channels:', error);
      alert('Failed to open message channels. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Your Name *
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
        />
        {errors.name && <p className="mt-1 text-red-400 text-sm">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="mobile" className="block text-sm font-medium mb-2">
          Mobile Number *
        </label>
        <input
          type="tel"
          id="mobile"
          value={formData.mobile}
          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
          className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
          placeholder="Enter 10-digit mobile number"
        />
        {errors.mobile && <p className="mt-1 text-red-400 text-sm">{errors.mobile}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
        />
      </div>

      <div>
        <label htmlFor="contactPerson" className="block text-sm font-medium mb-2">
          Contact Person *
        </label>
        <input
          type="text"
          id="contactPerson"
          value={formData.contactPerson}
          onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
          className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
          placeholder="Who should we contact?"
        />
        {errors.contactPerson && <p className="mt-1 text-red-400 text-sm">{errors.contactPerson}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message *
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
        />
        {errors.message && <p className="mt-1 text-red-400 text-sm">{errors.message}</p>}
      </div>

      <Button type="submit" fullWidth disabled={isSubmitting}>
        <Send className="w-4 h-4 mr-2" />
        {isSubmitting ? 'Opening message channels...' : 'Send Message'}
      </Button>

      <p className="text-center text-sm text-gray-400 mt-4">
        Your details will remain confidential, so don't worry about it.
      </p>
    </form>
  );
}