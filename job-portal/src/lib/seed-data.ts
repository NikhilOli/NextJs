// Sample job data structure for seeding the database
export type JobSeed = {
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string[];
  type: string;
  experience: string;
  salary: string;
  skills: string[];
  benefits: string[];
}

// You can add your sample jobs here
export const sampleJobs: JobSeed[] = [
  // Add your job listings here
  // Example structure:
  /*
  {
    title: "Frontend Developer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    description: "We are looking for...",
    requirements: ["3+ years React experience", "TypeScript knowledge"],
    type: "Full-time",
    experience: "3-5 years",
    salary: "$100k - $130k",
    skills: ["React", "TypeScript", "Next.js"],
    benefits: ["Health insurance", "401k", "Remote work"]
  }
  */
];
