export interface PersonalInfo {
  fullName: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
  age: number;
  gender: string;
  height: string;
  weight: string;
  bloodGroup: string;
}

export interface FamilyInfo {
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
  siblings: string;
  familyType: string;
}

export interface EducationInfo {
  qualification: string;
  fieldOfStudy: string;
}

export interface ProfessionalInfo {
  occupation: string;
  jobTitle: string;
  companyName: string;
  workLocation: string;
  annualIncome: string;
}

export interface AstrologicalInfo {
  gotra: string;
  gan: string;
  nakshatra: string;
  rashi: string;
  horoscopeMatch: string;
  mangalDosha: string;
}

export interface LifestyleInfo {
  diet: string;
  drinking: string;
  smoking: string;
  hobbies: string[];
}