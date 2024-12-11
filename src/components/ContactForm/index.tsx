import { useContactForm } from './useContactForm';
import { FormInput } from './FormInput';
import { FormTextArea } from './FormTextArea';
import { Button } from '../Button';
import { Send } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import { toasterConfig } from './toasterConfig';

export function ContactForm() {
  const { handleSubmit, formState } = useContactForm();
  const { isSubmitting } = formState;

  return (
    <form onSubmit={handleSubmit} className="space-y-6" data-formspree-embed>
      <Toaster position="top-center" toastOptions={toasterConfig} />
      
      <FormInput
        id="name"
        label="Your Name"
        type="text"
        required
        disabled={isSubmitting}
      />

      <FormInput
        id="mobile"
        label="Mobile Number"
        type="tel"
        required
        placeholder="Enter 10-digit mobile number"
        disabled={isSubmitting}
      />

      <FormInput
        id="email"
        label="Your Email"
        type="email"
        disabled={isSubmitting}
      />

      <FormTextArea
        id="message"
        label="Message"
        required
        rows={4}
        disabled={isSubmitting}
      />

      <div className="flex justify-center">
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-auto px-6 py-2"
          variant="primary"
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