import { InputHTMLAttributes } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export function FormInput({ label, id, required, ...props }: FormInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-2">
        {label} {required && '*'}
      </label>
      <input
        id={id}
        name={id}
        required={required}
        className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
        {...props}
      />
    </div>
  );
}