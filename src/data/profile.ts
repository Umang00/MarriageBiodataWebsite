import { PersonalInfo, FamilyInfo, EducationInfo, ProfessionalInfo, AstrologicalInfo, LifestyleInfo } from '../types';

export const personalInfo: PersonalInfo = {
  fullName: "Umang Sharma",
  dateOfBirth: "1995-05-15",
  timeOfBirth: "14:30",
  placeOfBirth: "Mumbai, India",
  age: 28,
  gender: "Male",
  height: "5'10\"",
  weight: "75 kg",
  bloodGroup: "B+"
};

export const familyInfo: FamilyInfo = {
  fatherName: "Rajesh Sharma",
  fatherOccupation: "Business Owner",
  motherName: "Priya Sharma",
  motherOccupation: "Homemaker",
  siblings: "1 younger sister",
  familyType: "Nuclear Family"
};

export const educationInfo: EducationInfo = {
  qualification: "Master of Technology",
  fieldOfStudy: "Computer Science"
};

export const professionalInfo: ProfessionalInfo = {
  occupation: "Software Engineer",
  jobTitle: "Senior Developer",
  companyName: "Tech Solutions Inc.",
  workLocation: "Bangalore",
  annualIncome: "20 LPA"
};

export const astrologicalInfo: AstrologicalInfo = {
  gotra: "Kashyap",
  gan: "Dev",
  nakshatra: "Rohini",
  rashi: "Taurus",
  horoscopeMatch: "Required",
  mangalDosha: "No"
};

export const lifestyleInfo: LifestyleInfo = {
  diet: "Vegetarian",
  drinking: "No",
  smoking: "No",
  hobbies: ["Reading", "Photography", "Traveling", "Playing Guitar"]
};