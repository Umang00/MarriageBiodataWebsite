import { useState } from 'react';
import { useForm, FormspreeState } from '@formspree/react';
import { toast } from 'react-hot-toast';
import { validateMobile } from './validators';
import { FormData, FormState, UseContactFormReturn } from './types';

const FORM_ID = 'myzyadkq';

export function useContactForm(): UseContactFormReturn {
  const [formspreeState, sendToFormspree] = useForm(FORM_ID);
  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSuccessful: false,
    errors: {},
  });

  const validateForm = (formData: FormData): boolean => {
    const { name, mobile, message } = formData;
    
    if (!name || !mobile || !message) {
      toast.error('Please fill in all required fields');
      return false;
    }

    if (!validateMobile(mobile)) {
      toast.error('Please enter a valid 10-digit mobile number');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (formState.isSubmitting) {
      return;
    }

    const form = e.target as HTMLFormElement;
    const formData = Object.fromEntries(new FormData(form)) as FormData;

    if (!validateForm(formData)) {
      return;
    }

    setFormState(prev => ({ ...prev, isSubmitting: true }));

    try {
      await sendToFormspree(e);
      
      // Check Formspree state after submission
      if (formspreeState.errors?.length) {
        throw new Error(formspreeState.errors[0]);
      }

      if (!formspreeState.succeeded) {
        throw new Error('Form submission failed');
      }

      toast.success('Thank you for your message! We\'ll get back to you soon.');
      form.reset();
      setFormState(prev => ({ ...prev, isSuccessful: true }));
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to send your message. Please try again.');
      setFormState(prev => ({ 
        ...prev, 
        errors: { 
          submit: error instanceof Error ? error.message : 'Failed to send message'
        } 
      }));
    } finally {
      setFormState(prev => ({ ...prev, isSubmitting: false }));
    }
  };

  return {
    handleSubmit,
    formState: {
      ...formState,
      isSuccessful: formspreeState.succeeded,
    },
  };
}