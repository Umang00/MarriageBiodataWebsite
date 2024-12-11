import { FormEvent } from 'react';

export interface FormData {
  name: string;
  mobile: string;
  email?: string;
  message: string;
}

export interface FormState {
  isSubmitting: boolean;
  isSuccessful: boolean;
  errors: Record<string, string>;
}

export interface UseContactFormReturn {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  formState: FormState;
}