import { useForm } from '@formspree/react';
import { Button } from './Button';
import { Send } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';

interface FormData {
  name: string;
  mobile: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  mobile?: string;
  message?: string;
}

export function ContactForm() {
  const [state, handleSubmit] = useForm('myzyadkq');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateMobile = (mobile: string): boolean => {
    return /^[6-9]\d{9}$/.test(mobile.trim());
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const name = formData.get('name') as string;
    const mobile = formData.get('mobile') as string;
    const message = formData.get('message') as string;
    
    if (!name || !mobile || !message) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (!validateMobile(mobile)) {
      toast.error('Please enter a valid 10-digit mobile number');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await handleSubmit(e);
      
      if (result.response && result.response.ok) {
        toast.success('Thank you for your message! We\'ll get back to you soon.');
        form.reset();
      } else {
        toast.error('Failed to send your message. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to send your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 5000,
          style: {
            background: '#333',
            color: '#fff',
            padding: '16px',
            borderRadius: '8px',
          },
          success: {
            iconTheme: {
              primary: '#FFD700',
              secondary: '#333',
            },
            style: {
              border: '1px solid #FFD700',
            },
          },
          error: {
            iconTheme: {
              primary: '#ff4b4b',
              secondary: '#333',
            },
            style: {
              border: '1px solid #ff4b4b',
            },
          },
        }} 
      />
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Your Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
        />
      </div>

      <div>
        <label htmlFor="mobile" className="block text-sm font-medium mb-2">
          Mobile Number *
        </label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          required
          className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
          placeholder="Enter 10-digit mobile number"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
        />
      </div>

      <div className="flex justify-center">
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-auto px-8"
        >
          <div className="flex items-center justify-center gap-2">
            <Send className="w-4 h-4" />
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          </div>
        </Button>
      </div>

      <p className="text-center text-sm text-gray-400 mt-4">
        Your details will remain confidential, so don't worry about it.
      </p>
    </form>
  );
}