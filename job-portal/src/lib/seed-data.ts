// Sample job data structure for seeding the database
export type JobSeed = {
  id: number;
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

// Sample jobs data
export const sampleJobs: JobSeed[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    description: "We are looking for an experienced Frontend Developer to join our team and help build modern web applications using React and Next.js.",
    requirements: ["3+ years React experience", "TypeScript knowledge", "Experience with Next.js"],
    type: "Full-time",
    experience: "3-5 years",
    salary: "$100k - $130k",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    benefits: ["Health insurance", "401k", "Remote work", "Flexible hours"]
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Data Systems Inc",
    location: "New York, NY",
    description: "Seeking a skilled Backend Engineer to develop and maintain scalable server-side applications and APIs.",
    requirements: ["5+ years Node.js experience", "MongoDB expertise", "API design experience"],
    type: "Full-time",
    experience: "5+ years",
    salary: "$120k - $160k",
    skills: ["Node.js", "MongoDB", "Express", "TypeScript", "REST APIs"],
    benefits: ["Health & dental", "Stock options", "Gym membership", "Annual bonus"]
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "StartupX",
    location: "Remote",
    description: "Join our fast-growing startup as a Full Stack Developer. Help build and scale our main product using modern technologies.",
    requirements: ["Full stack development experience", "React/Next.js proficiency", "Node.js backend experience"],
    type: "Full-time",
    experience: "2-4 years",
    salary: "$90k - $120k",
    skills: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript"],
    benefits: ["Remote-first", "Flexible hours", "Learning budget", "Health insurance"]
  }
];
