import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { TestimonialCard } from '../components/TestimonialCard';

const testimonials = [
  {
    name: 'Krishnakumar Davda',
    relation: 'Beloved Nana',
    text: 'Umang has always been like a son to me. Even as a child, his maturity amazed me—he never cried for toys like other kids during our temple visits, always saying \'no\' with a wisdom beyond his years. Watching him grow into the kind-hearted, responsible person he is today was one of my life’s greatest joys.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop'
  },
  {
    name: 'Priya Patel',
    relation: 'Senior Colleague',
    text: 'Having worked with Umang for three years, I can vouch for his integrity and commitment. He maintains a perfect work-life balance and is always ready to help others grow.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
  },
  {
    name: 'Ashok Swami',
    relation: 'College Friend',
    text: 'Umang has been my rock during one of the toughest phases of my life. When I was buried under a mountain of debt and struggling to make ends meet, he helped me restructure my loan, supported me financially, and encouraged me to upskill. Today, thanks to his guidance and support, I\'ve tripled my earnings and nearly cleared my debts. He\'s the kind of friend everyone wishes to have—selfless, wise, and always ready to lend a hand.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
  },
  {
    name: 'Shiv Pande',
    relation: 'Ex-Manager at Hunch',
    text: 'Umang\'s creativity and strategic thinking set him apart as a content strategist. His ability to lead with authenticity inspired the team and fostered a collaborative environment. Whether solving complex challenges or pushing boundaries with innovative ideas, he always delivered with excellence. It was a privilege to witness his growth and see him take on every project with unmatched dedication.',
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
          <Button>Get In Touch</Button>
        </Link>
      </div>
    </div>
  );
}
