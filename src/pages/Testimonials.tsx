import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { TestimonialCard } from '../components/TestimonialCard';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    relation: 'Family Friend',
    text: 'Umang is a very responsible and caring person. His dedication to both his career and family values makes him an ideal life partner. I\'ve known him and his family for over 15 years.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop'
  },
  {
    name: 'Priya Patel',
    relation: 'Senior Colleague',
    text: 'Having worked with Umang for three years, I can vouch for his integrity and commitment. He maintains a perfect work-life balance and is always ready to help others grow.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
  },
  {
    name: 'Dr. Sharma',
    relation: 'Professor',
    text: 'As his professor during his Master\'s program, I witnessed Umang\'s exceptional growth. His analytical thinking and problem-solving abilities set him apart from his peers.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
  }
];

export default function Testimonials() {
  return (
    <div className="max-w-4xl mx-auto py-24 px-4">
      <h1 className="text-4xl font-serif mb-12 text-center">
        What Others <span className="text-yellow-400">Say</span>
      </h1>

      <div className="grid gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.name}
            {...testimonial}
            index={index}
          />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Link to="/contact">
          <Button>
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
}