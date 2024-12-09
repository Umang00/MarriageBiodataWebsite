import { User, Users, GraduationCap, Briefcase, Heart, Coffee, ArrowRight } from 'lucide-react';
import { InfoSection } from '../components/InfoSection';
import { Timeline } from '../components/Timeline';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { 
  personalInfo, 
  familyInfo, 
  educationInfo, 
  professionalInfo, 
  astrologicalInfo, 
  lifestyleInfo 
} from '../data/profile';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-24 px-4">
      <h1 className="text-4xl font-serif mb-12 text-center">
        About <span className="text-yellow-400">Me</span>
      </h1>

      <InfoSection title="Personal Information" icon={<User />}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(personalInfo).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <span className="text-gray-400 text-sm">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
              <span className="text-white">{value}</span>
            </div>
          ))}
        </div>
      </InfoSection>

      <InfoSection title="Family Details" icon={<Users />}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(familyInfo).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <span className="text-gray-400 text-sm">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
              <span className="text-white">{value}</span>
            </div>
          ))}
        </div>
      </InfoSection>

      <InfoSection title="Education" icon={<GraduationCap />}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(educationInfo).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <span className="text-gray-400 text-sm">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
              <span className="text-white">{value}</span>
            </div>
          ))}
        </div>
      </InfoSection>

      <InfoSection title="Professional Information" icon={<Briefcase />}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(professionalInfo).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <span className="text-gray-400 text-sm">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
              <span className="text-white">{value}</span>
            </div>
          ))}
        </div>
      </InfoSection>

      <InfoSection title="Astrological Information" icon={<Heart />}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(astrologicalInfo).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <span className="text-gray-400 text-sm">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
              <span className="text-white">{value}</span>
            </div>
          ))}
        </div>
      </InfoSection>

      <InfoSection title="Lifestyle" icon={<Coffee />}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(lifestyleInfo).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <span className="text-gray-400 text-sm">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
              <span className="text-white">{Array.isArray(value) ? value.join(', ') : value}</span>
            </div>
          ))}
        </div>
      </InfoSection>

      <Timeline />

      <div className="flex justify-center mt-12">
        <Link to="/gallery">
          <Button>
            View My Photo Gallery
            <ArrowRight className="inline ml-2" size={20} />
          </Button>
        </Link>
      </div>
    </div>
  );
}