import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { PhotoGallery } from '../components/PhotoGallery';

const photos = [
  {
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    caption: 'Professional Headshot - Corporate Event 2023'
  },
  {
    url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=600&fit=crop',
    caption: 'Casual Portrait - Weekend Getaway'
  },
  {
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=600&fit=crop',
    caption: 'Family Gathering - Diwali Celebration'
  },
  {
    url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=600&fit=crop',
    caption: 'At Work - Leading Team Meeting'
  }
];

export default function Gallery() {
  return (
    <div className="max-w-4xl mx-auto py-24 px-4">
      <h1 className="text-4xl font-serif mb-12 text-center">
        Photo <span className="text-yellow-400">Gallery</span>
      </h1>

      <PhotoGallery photos={photos} />

      <div className="flex justify-center mt-12">
        <Link to="/testimonials">
          <Button>
            What Others Say About Me?
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
}