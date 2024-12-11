import { TextareaHTMLAttributes } from 'react';

interface FormTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
}

export function FormTextArea({ label, id, required, ...props }: FormTextAreaProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-2">
        {label} {required && '*'}
      </label>
      <textarea
        id={id}
        name={id}
        required={required}
        className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
        {...props}
      />
    </div>
  );
}