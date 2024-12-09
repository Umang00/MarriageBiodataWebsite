import { Link } from 'react-router-dom';
import { ShareButtons } from './ShareButtons';

export function Footer() {
  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Me' },
    { path: '/gallery', label: 'Photo Gallery' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-[#111] mt-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="border-t border-gray-800 pt-8 mb-8">
          <ShareButtons />
        </div>
        
        <p className="text-center text-gray-400">Thank you for visiting!</p>
      </div>
    </footer>
  );
}