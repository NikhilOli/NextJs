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
export const jobs: JobSeed[] = [
  {
    "id": 1,
    "title": "Frontend Developer",
    "company": "Tech Corp",
    "location": "San Francisco, CA",
    "description": "We are looking for an experienced Frontend Developer to join our team and help build modern web applications using React and Next.js.",
    "requirements": ["3+ years React experience", "TypeScript knowledge", "Experience with Next.js"],
    "type": "Full-time",
    "experience": "3-5 years",
    "salary": "$100k - $130k",
    "skills": ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
    "benefits": ["Health insurance", "401k", "Remote work option", "Flexible hours"]
  },
  {
    "id": 2,
    "title": "Backend Engineer",
    "company": "Data Systems Inc",
    "location": "New York, NY",
    "description": "Seeking a skilled Backend Engineer to develop and maintain scalable server-side applications and APIs.",
    "requirements": ["5+ years Node.js experience", "MongoDB expertise", "API design experience", "Microservices architecture knowledge"],
    "type": "Full-time",
    "experience": "5+ years",
    "salary": "$120k - $160k",
    "skills": ["Node.js", "MongoDB", "Express", "TypeScript", "REST APIs", "Docker", "AWS"],
    "benefits": ["Health & dental", "Stock options", "Gym membership", "Annual bonus"]
  },
  {
    "id": 3,
    "title": "Full Stack Developer",
    "company": "StartupX",
    "location": "Remote",
    "description": "Join our fast-growing startup as a Full Stack Developer. Help build and scale our main product using modern technologies.",
    "requirements": ["Full stack development experience", "React/Next.js proficiency", "Node.js backend experience", "Database management (SQL/NoSQL)"],
    "type": "Full-time",
    "experience": "2-4 years",
    "salary": "$90k - $120k",
    "skills": ["React", "Next.js", "Node.js", "MongoDB", "TypeScript", "GraphQL", "Git"],
    "benefits": ["Remote-first", "Flexible hours", "Learning budget", "Health insurance", "Team retreats"]
  },
  {
    "id": 4,
    "title": "Data Scientist",
    "company": "Insight Analytics",
    "location": "Austin, TX",
    "description": "Leverage data to uncover insights and drive business decisions. Develop predictive models and perform complex data analysis.",
    "requirements": ["Master's or PhD in quantitative field", "Strong Python/R skills", "Experience with ML frameworks (TensorFlow/PyTorch)"],
    "type": "Full-time",
    "experience": "4+ years",
    "salary": "$110k - $150k",
    "skills": ["Python", "R", "SQL", "Machine Learning", "Statistics", "Data Visualization", "Big Data (Spark)"],
    "benefits": ["Competitive salary", "Comprehensive health plans", "Generous PTO", "Conference budget"]
  },
  {
    "id": 5,
    "title": "DevOps Engineer",
    "company": "Cloud Solutions Ltd.",
    "location": "Remote",
    "description": "Implement and manage CI/CD pipelines, automate infrastructure provisioning, and ensure system reliability and scalability on AWS.",
    "requirements": ["Experience with AWS", "Proficiency in scripting (Bash/Python)", "Knowledge of Kubernetes/Docker", "CI/CD tools (Jenkins/GitLab CI)"],
    "type": "Full-time",
    "experience": "3-6 years",
    "salary": "$115k - $145k",
    "skills": ["AWS", "Kubernetes", "Docker", "Terraform", "Ansible", "Jenkins", "Python", "Linux"],
    "benefits": ["Fully Remote", "Health/Dental/Vision", "Unlimited PTO", "Tech stipend"]
  },
  {
    "id": 6,
    "title": "Marketing Manager",
    "company": "Creative Buzz Agency",
    "location": "London, UK",
    "description": "Develop and execute innovative marketing strategies across multiple channels to drive brand awareness and lead generation.",
    "requirements": ["Proven marketing campaign experience", "Strong understanding of SEO/SEM", "Excellent communication skills", "Budget management"],
    "type": "Full-time",
    "experience": "5+ years",
    "salary": "£55k - £70k",
    "skills": ["Digital Marketing", "SEO", "SEM", "Content Marketing", "Social Media Strategy", "Analytics", "Campaign Management"],
    "benefits": ["Pension scheme", "Private health insurance", "Performance bonus", "Central London office"]
  },
  {
    "id": 7,
    "title": "UI/UX Designer",
    "company": "Appify Creations",
    "location": "Berlin, Germany",
    "description": "Design intuitive and engaging user interfaces for web and mobile applications. Conduct user research and create wireframes and prototypes.",
    "requirements": ["Strong portfolio showcasing UI/UX work", "Proficiency in Figma/Sketch/Adobe XD", "User research methodologies", "Understanding of design systems"],
    "type": "Full-time",
    "experience": "3-5 years",
    "salary": "€60k - €75k",
    "skills": ["Figma", "Sketch", "User Research", "Wireframing", "Prototyping", "Interaction Design", "Usability Testing"],
    "benefits": ["Relocation support", "Language courses", "Flexible working hours", "Modern office space"]
  },
  {
    "id": 8,
    "title": "QA Automation Engineer",
    "company": "QualitySoft",
    "location": "Seattle, WA",
    "description": "Design, develop, and execute automated test scripts to ensure software quality. Collaborate with developers to resolve issues.",
    "requirements": ["Experience with Selenium/Cypress", "Programming skills (Java/Python/JavaScript)", "API testing knowledge", "Experience with test frameworks"],
    "type": "Full-time",
    "experience": "3+ years",
    "salary": "$95k - $125k",
    "skills": ["Selenium", "Cypress", "Java", "Python", "API Testing", "JIRA", "SQL", "Test Automation"],
    "benefits": ["Medical/Dental/Vision", "401k matching", "Paid volunteer time", "On-site gym"]
  },
  {
    "id": 9,
    "title": "Graphic Designer",
    "company": "Visual Impact Studios",
    "location": "Chicago, IL",
    "description": "Create compelling visual assets for branding, marketing materials, web, and print. Collaborate with marketing and product teams.",
    "requirements": ["Expertise in Adobe Creative Suite (Photoshop, Illustrator, InDesign)", "Strong portfolio", "Understanding of typography and layout"],
    "type": "Contract",
    "experience": "2+ years",
    "salary": "$55k - $70k (pro-rata)",
    "skills": ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Branding", "Typography", "Layout Design", "Digital Art"],
    "benefits": ["Flexible schedule", "Creative environment", "Potential for full-time conversion"]
  },
  {
    "id": 10,
    "title": "Cloud Architect (Azure)",
    "company": "Enterprise Cloud Partners",
    "location": "Remote (US)",
    "description": "Design and implement scalable, secure, and robust cloud solutions on Microsoft Azure. Provide technical leadership and guidance.",
    "requirements": ["Extensive Azure experience", "Strong understanding of cloud networking and security", "Infrastructure as Code (ARM/Terraform)", "Azure certifications preferred"],
    "type": "Full-time",
    "experience": "7+ years",
    "salary": "$140k - $180k",
    "skills": ["Azure", "Solution Architecture", "Cloud Security", "Networking", "Terraform", "ARM Templates", "DevOps Principles"],
    "benefits": ["Competitive salary", "Performance bonus", "Comprehensive benefits", "Remote work", "Professional development funds"]
  },
  {
    "id": 11,
    "title": "Staff Accountant",
    "company": "Finance Forward LLC",
    "location": "Toronto, ON",
    "description": "Manage day-to-day accounting tasks, including accounts payable/receivable, general ledger entries, and bank reconciliations.",
    "requirements": ["Bachelor's degree in Accounting/Finance", "Experience with accounting software (QuickBooks/Xero)", "Knowledge of GAAP/IFRS"],
    "type": "Full-time",
    "experience": "2-4 years",
    "salary": "$60k - $75k CAD",
    "skills": ["Accounting", "QuickBooks", "General Ledger", "Accounts Payable", "Accounts Receivable", "Financial Reporting", "Excel"],
    "benefits": ["RRSP matching", "Health benefits", "Paid time off", "Professional development support"]
  },
  {
    "id": 12,
    "title": "Mobile Developer (Android)",
    "company": "ConnectApp",
    "location": "Remote (Europe)",
    "description": "Develop and maintain native Android applications using Kotlin and Java. Collaborate with cross-functional teams to define and ship new features.",
    "requirements": ["Proven Android development experience", "Proficiency in Kotlin/Java", "Experience with Android SDK and Jetpack", "RESTful API integration"],
    "type": "Full-time",
    "experience": "3+ years",
    "salary": "€65k - €85k",
    "skills": ["Android Development", "Kotlin", "Java", "Android SDK", "Jetpack Compose", "REST APIs", "Git", "MVVM/MVI"],
    "benefits": ["Remote work", "Flexible hours", "Stock options", "Health insurance contribution"]
  },
  {
    "id": 13,
    "title": "Human Resources Generalist",
    "company": "PeopleFirst Corp",
    "location": "Denver, CO",
    "description": "Support various HR functions including recruitment, onboarding, employee relations, benefits administration, and compliance.",
    "requirements": ["Bachelor's degree in HR or related field", "Experience with HRIS systems", "Knowledge of employment law", "Strong interpersonal skills"],
    "type": "Full-time",
    "experience": "3-5 years",
    "salary": "$65k - $80k",
    "skills": ["Human Resources", "Recruitment", "Onboarding", "Employee Relations", "Benefits Administration", "HRIS", "Compliance"],
    "benefits": ["Health/Dental/Vision", "401k", "Paid parental leave", "Wellness program"]
  },
  {
    "id": 14,
    "title": "Cybersecurity Analyst",
    "company": "Secure Networks Inc.",
    "location": "Washington D.C.",
    "description": "Monitor security alerts, respond to incidents, conduct vulnerability assessments, and help maintain security infrastructure.",
    "requirements": ["Experience with SIEM tools", "Understanding of network protocols and security principles", "Incident response experience", "Relevant certifications (Security+, CySA+)"],
    "type": "Full-time",
    "experience": "2-5 years",
    "salary": "$85k - $115k",
    "skills": ["Cybersecurity", "SIEM", "Incident Response", "Vulnerability Assessment", "Network Security", "Firewalls", "Intrusion Detection"],
    "benefits": ["Security clearance support (if applicable)", "Comprehensive health benefits", "Training budget", "401k matching"]
  },
  {
    "id": 15,
    "title": "Technical Writer",
    "company": "DocuTech Solutions",
    "location": "Remote",
    "description": "Create clear, concise, and accurate technical documentation, including user manuals, API documentation, and knowledge base articles.",
    "requirements": ["Proven technical writing experience", "Ability to understand complex technical concepts", "Experience with documentation tools (Markdown, Confluence)", "Excellent writing and editing skills"],
    "type": "Part-time",
    "experience": "3+ years",
    "salary": "$40 - $60 per hour",
    "skills": ["Technical Writing", "API Documentation", "User Manuals", "Markdown", "Confluence", "Editing", "Information Architecture"],
    "benefits": ["Fully Remote", "Flexible hours", "Opportunity to work with diverse products"]
  },
  {
    "id": 16,
    "title": "IT Project Manager",
    "company": "Innovate Solutions",
    "location": "Boston, MA",
    "description": "Lead and manage IT projects from initiation to completion, ensuring projects are delivered on time, within scope, and on budget.",
    "requirements": ["Experience managing software development projects", "Strong knowledge of Agile/Scrum methodologies", "Excellent communication and leadership skills", "PMP or CSM certification a plus"],
    "type": "Full-time",
    "experience": "5+ years",
    "salary": "$105k - $135k",
    "skills": ["Project Management", "Agile", "Scrum", "JIRA", "Risk Management", "Stakeholder Management", "Budgeting", "Software Development Lifecycle"],
    "benefits": ["Health insurance", "401k plan", "Performance bonus", "Hybrid work model"]
  },
  {
    "id": 17,
    "title": "Executive Chef",
    "company": "The Grand Restaurant",
    "location": "Paris, France",
    "description": "Oversee all kitchen operations, including menu creation, staff management, inventory control, and ensuring high standards of food quality and safety.",
    "requirements": ["Extensive culinary experience in fine dining", "Proven leadership skills", "Knowledge of food costing and inventory management", "Relevant culinary degree/certification"],
    "type": "Full-time",
    "experience": "10+ years",
    "salary": "€70k - €90k + bonus",
    "skills": ["Culinary Arts", "Menu Development", "Kitchen Management", "Staff Training", "Food Costing", "Inventory Control", "Fine Dining"],
    "benefits": ["Performance bonus", "Meals provided", "Uniform allowance", "Health benefits package"]
  },
  {
    "id": 18,
    "title": "IT Support Specialist - Tier 2",
    "company": "Global Tech Support",
    "location": "Remote (Canada)",
    "description": "Provide technical assistance and support for incoming queries and issues related to computer systems, software, and hardware. Escalate unresolved issues.",
    "requirements": ["Experience in IT support role", "Strong troubleshooting skills (Windows/Mac OS)", "Knowledge of Active Directory and networking concepts", "Excellent customer service skills"],
    "type": "Full-time",
    "experience": "2-4 years",
    "salary": "$55k - $70k CAD",
    "skills": ["IT Support", "Troubleshooting", "Windows OS", "Mac OS", "Active Directory", "Networking Basics", "Help Desk Software", "Customer Service"],
    "benefits": ["Remote work", "Health and dental plan", "Paid time off", "Certification reimbursement"]
  },
  {
    "id": 19,
    "title": "Network Engineer",
    "company": "Connectivity Solutions Pte Ltd",
    "location": "Singapore",
    "description": "Design, implement, maintain, and support our growing network infrastructure. Ensure network connectivity and security.",
    "requirements": ["Experience with Cisco/Juniper equipment", "Strong understanding of routing (BGP, OSPF) and switching", "Firewall configuration knowledge (Palo Alto/Fortinet)", "Network certifications (CCNA/CCNP) preferred"],
    "type": "Full-time",
    "experience": "4+ years",
    "salary": "$80k - $110k SGD",
    "skills": ["Network Engineering", "Cisco IOS/NX-OS", "Juniper Junos", "Routing Protocols", "Switching", "Firewalls", "VPN", "Network Monitoring"],
    "benefits": ["Medical insurance", "Annual leave", "Transport allowance", "Training opportunities"]
  },
  {
    "id": 20,
    "title": "Registered Nurse (ER)",
    "company": "Metro Health Hospital",
    "location": "Miami, FL",
    "description": "Provide direct patient care in a fast-paced emergency room environment. Assess patient conditions, administer medications, and collaborate with physicians.",
    "requirements": ["Valid RN license in Florida", "BLS/ACLS certification", "Experience in emergency or critical care setting preferred", "Strong assessment skills"],
    "type": "Full-time",
    "experience": "1+ years",
    "salary": "$70k - $90k + differentials",
    "skills": ["Nursing", "Patient Care", "Emergency Medicine", "Triage", "Medication Administration", "EMR Systems", "Critical Thinking", "ACLS"],
    "benefits": ["Shift differentials", "Health/Dental/Vision", "Retirement plan", "Tuition reimbursement", "Sign-on bonus possible"]
  },
  {
    "id": 21,
    "title": "Machine Learning Engineer",
    "company": "AI Future Labs",
    "location": "Palo Alto, CA",
    "description": "Design, build, and deploy machine learning models for various applications. Optimize models for performance and scalability.",
    "requirements": ["Strong background in CS/ML", "Experience with Python and ML libraries (TensorFlow, PyTorch, scikit-learn)", "Experience deploying models to production", "Solid software engineering skills"],
    "type": "Full-time",
    "experience": "3-6 years",
    "salary": "$130k - $170k",
    "skills": ["Machine Learning", "Python", "TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision", "Docker", "Cloud Platforms (AWS/GCP)"],
    "benefits": ["Stock options", "Cutting-edge projects", "Health benefits", "Catered lunches", "Generous PTO"]
  },
  {
    "id": 22,
    "title": "Product Manager",
    "company": "InnovateApp Co.",
    "location": "Remote",
    "description": "Define product vision, strategy, and roadmap for our core SaaS offering. Work closely with engineering, design, and marketing.",
    "requirements": ["Proven experience as a Product Manager in tech", "Experience with Agile development", "Strong analytical and communication skills", "Ability to translate user needs into requirements"],
    "type": "Full-time",
    "experience": "4+ years",
    "salary": "$120k - $155k",
    "skills": ["Product Management", "Agile Methodologies", "Roadmapping", "User Stories", "Market Research", "Data Analysis", "JIRA", "Stakeholder Communication"],
    "benefits": ["Remote-first culture", "Competitive salary & equity", "Health/Dental/Vision", "Unlimited PTO", "Home office stipend"]
  }
];
