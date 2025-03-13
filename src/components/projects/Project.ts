
export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  organization?: string;
  difficulty?: string;
  skillLevel?: string;
  skillsRequired?: string[];
  requiredSkills?: string[];
  skillsGained?: string[];
  duration?: string;
  sdgGoals?: number[];
  image?: string;
  imageUrl?: string;
  participants?: number;
  maxParticipants?: number;
  startDate?: string;
  mentorId?: string;
  mentorName?: string;
  featured?: boolean;
  credentialOffered?: boolean;
  status?: string;
}
