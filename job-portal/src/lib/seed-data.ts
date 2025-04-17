// Sample job data structure for seeding the database
export type JobSeed = {
  _id: string;
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

type JobSeedWithId = {
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
export const jobs: JobSeedWithId[] = [
  {
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
  },
  // --- Start of New Entries (40+ more) ---
  {
    "title": "Mobile Developer (iOS)",
    "company": "MobileFirst Solutions",
    "location": "Cupertino, CA",
    "description": "Develop cutting-edge native iOS applications using Swift and SwiftUI. Focus on performance, usability, and integration with backend services.",
    "requirements": ["3+ years iOS development experience", "Proficiency in Swift & SwiftUI", "Experience with UIKit", "Understanding of Apple's design principles", "Published apps on the App Store"],
    "type": "Full-time",
    "experience": "3-5 years",
    "salary": "$110k - $145k",
    "skills": ["iOS Development", "Swift", "SwiftUI", "UIKit", "Xcode", "REST APIs", "Core Data", "Git"],
    "benefits": ["Stock options", "Health insurance", "Free Apple products", "On-site cafeteria"]
  },
  {
    "title": "Data Engineer",
    "company": "Big Data Corp",
    "location": "Remote (US)",
    "description": "Build and maintain scalable data pipelines, ETL processes, and data warehouses. Work with large datasets using technologies like Spark, Kafka, and Airflow.",
    "requirements": ["Experience building data pipelines", "Proficiency in Python/Scala/Java", "Experience with Big Data tools (Spark, Hadoop)", "SQL mastery", "Cloud data warehouse knowledge (Snowflake/Redshift/BigQuery)"],
    "type": "Full-time",
    "experience": "4+ years",
    "salary": "$125k - $165k",
    "skills": ["Data Engineering", "ETL", "Python", "Scala", "SQL", "Apache Spark", "Kafka", "Airflow", "AWS/GCP/Azure", "Data Warehousing"],
    "benefits": ["Fully Remote", "Competitive salary", "Health/Dental/Vision", "401k matching", "Generous PTO"]
  },
  {
    "title": "Business Intelligence Analyst",
    "company": "Metrics Driven Inc.",
    "location": "Chicago, IL",
    "description": "Analyze business data to produce insights and reports that inform strategic decisions. Develop dashboards and visualizations using tools like Tableau or Power BI.",
    "requirements": ["Experience in BI or data analysis", "Strong SQL skills", "Proficiency with BI tools (Tableau/Power BI/Looker)", "Data modeling understanding", "Excellent communication skills"],
    "type": "Full-time",
    "experience": "2-5 years",
    "salary": "$80k - $110k",
    "skills": ["Business Intelligence", "Data Analysis", "SQL", "Tableau", "Power BI", "Data Visualization", "Reporting", "Excel"],
    "benefits": ["Hybrid work options", "Health benefits", "Performance bonus", "Professional development"]
  },
  {
    "title": "Cloud Engineer (GCP)",
    "company": "Google Cloud Partner",
    "location": "Mountain View, CA",
    "description": "Implement, manage, and support solutions on Google Cloud Platform (GCP). Focus on infrastructure automation, security, and cost optimization.",
    "requirements": ["Hands-on experience with GCP services (Compute Engine, GKE, Cloud SQL, BigQuery)", "Infrastructure as Code (Terraform)", "Scripting skills (Python/Bash)", "Networking fundamentals", "GCP certification preferred"],
    "type": "Full-time",
    "experience": "3+ years",
    "salary": "$120k - $150k",
    "skills": ["GCP", "Kubernetes (GKE)", "Terraform", "Cloud SQL", "BigQuery", "IAM", "Networking", "Python", "Automation"],
    "benefits": ["Competitive salary", "Google Cloud training", "Stock options", "Comprehensive health benefits"]
  },
  {
    "title": "System Administrator",
    "company": "Reliable IT Services",
    "location": "Dallas, TX",
    "description": "Maintain and administer company servers, networks, and operating systems (Windows/Linux). Provide end-user support and manage system backups and security.",
    "requirements": ["Experience as a System Admin", "Proficiency in Windows Server/Linux administration", "Networking knowledge (TCP/IP, DNS, DHCP)", "Virtualization experience (VMware/Hyper-V)", "Scripting ability (PowerShell/Bash)"],
    "type": "Full-time",
    "experience": "3-7 years",
    "salary": "$75k - $95k",
    "skills": ["System Administration", "Windows Server", "Linux", "Active Directory", "Networking", "VMware", "Backup Solutions", "PowerShell", "Security"],
    "benefits": ["Health insurance", "Paid time off", "Certification training", "401k"]
  },
  {
    "title": "Penetration Tester",
    "company": "CyberDefend Solutions",
    "location": "Remote",
    "description": "Conduct authorized penetration tests on networks, web applications, and infrastructure to identify vulnerabilities. Provide detailed reports and remediation recommendations.",
    "requirements": ["Proven penetration testing experience", "Expertise with testing tools (Metasploit, Burp Suite, Nmap)", "Strong understanding of OWASP Top 10", "Scripting skills (Python/Ruby)", "Relevant certifications (OSCP, GPEN)"],
    "type": "Full-time",
    "experience": "3+ years",
    "salary": "$100k - $140k",
    "skills": ["Penetration Testing", "Ethical Hacking", "Metasploit", "Burp Suite", "Nmap", "Kali Linux", "Web Application Security", "Network Security", "Python"],
    "benefits": ["Fully Remote", "Cutting-edge security tools", "Conference budget", "Health/Dental/Vision", "Performance bonus"]
  },
  {
    "title": "UX Researcher",
    "company": "User Insights Co.",
    "location": "New York, NY",
    "description": "Plan and conduct user research studies (interviews, surveys, usability testing) to understand user needs and behaviors. Synthesize findings to inform product design.",
    "requirements": ["Experience in UX research methodologies", "Ability to design and execute research plans", "Qualitative and quantitative data analysis skills", "Strong communication and presentation skills", "Portfolio of research projects"],
    "type": "Full-time",
    "experience": "3+ years",
    "salary": "$90k - $120k",
    "skills": ["UX Research", "User Interviews", "Usability Testing", "Survey Design", "Persona Development", "Journey Mapping", "Qualitative Analysis", "Quantitative Analysis"],
    "benefits": ["Hybrid work model", "Generous PTO", "Health benefits", "Learning stipend", "Collaborative environment"]
  },
  {
    "title": "Motion Graphics Designer",
    "company": "Dynamic Visuals Inc.",
    "location": "Los Angeles, CA",
    "description": "Create engaging animations and motion graphics for videos, marketing campaigns, and digital platforms using Adobe After Effects and related software.",
    "requirements": ["Strong portfolio demonstrating motion design skills", "Expertise in Adobe After Effects, Premiere Pro, Illustrator, Photoshop", "Understanding of animation principles", "Video editing skills"],
    "type": "Full-time",
    "experience": "2-5 years",
    "salary": "$70k - $90k",
    "skills": ["Motion Graphics", "Adobe After Effects", "Adobe Premiere Pro", "Animation", "Video Editing", "Visual Effects", "Typography", "Storyboarding"],
    "benefits": ["Creative studio environment", "Health insurance", "Paid time off", "Access to latest software/hardware"]
  },
  {
    "title": "Technical Program Manager",
    "company": "ScaleUp Technologies",
    "location": "Seattle, WA",
    "description": "Drive complex, cross-functional technical programs from initiation through delivery. Manage dependencies, risks, and communication across engineering teams.",
    "requirements": ["Experience managing large-scale software/infrastructure programs", "Technical background (CS degree or equivalent experience)", "Strong understanding of SDLC and Agile", "Excellent leadership and communication skills"],
    "type": "Full-time",
    "experience": "6+ years",
    "salary": "$140k - $180k",
    "skills": ["Technical Program Management", "Project Management", "Agile/Scrum", "Risk Management", "Cross-functional Leadership", "Roadmapping", "SDLC", "Stakeholder Management"],
    "benefits": ["Competitive salary and bonus", "Stock options", "Comprehensive health benefits", "Relocation assistance"]
  },
  {
    "title": "Sales Development Representative (SDR)",
    "company": "GrowthLeads Inc.",
    "location": "Remote (US)",
    "description": "Generate qualified leads for the sales team through outbound prospecting (cold calling, email campaigns, social selling). Research potential clients and initiate contact.",
    "requirements": ["Previous experience in sales or lead generation preferred", "Excellent communication and interpersonal skills", "Resilience and self-motivation", "Familiarity with CRM software (Salesforce) a plus"],
    "type": "Full-time",
    "experience": "0-2 years",
    "salary": "$50k - $65k base + commission",
    "skills": ["Sales Development", "Lead Generation", "Cold Calling", "Email Marketing", "Prospecting", "CRM", "Communication"],
    "benefits": ["Uncapped commission structure", "Remote work", "Sales training", "Health benefits", "Career growth path"]
  },
  {
    "title": "Customer Success Manager",
    "company": "ClientFirst SaaS",
    "location": "Austin, TX",
    "description": "Build relationships with key clients, ensure they achieve desired outcomes using our product, drive adoption, and manage renewals and upsells.",
    "requirements": ["Experience in Customer Success, Account Management, or related role", "Strong communication and relationship-building skills", "Understanding of SaaS business models", "Proactive and problem-solving attitude"],
    "type": "Full-time",
    "experience": "3+ years",
    "salary": "$85k - $115k + bonus",
    "skills": ["Customer Success", "Account Management", "Relationship Building", "SaaS", "Onboarding", "Retention", "Upselling", "CRM"],
    "benefits": ["Competitive salary and bonus", "Health/Dental/Vision", "Generous PTO", "Customer-centric culture"]
  },
  {
    "title": "Content Writer",
    "company": "Blogify Media",
    "location": "Remote",
    "description": "Create engaging and SEO-optimized content (blog posts, articles, website copy, social media posts) for various clients across different industries.",
    "requirements": ["Proven experience as a content writer or copywriter", "Excellent writing, editing, and proofreading skills", "Understanding of SEO principles", "Ability to research diverse topics", "Portfolio of published work"],
    "type": "Freelance/Contract",
    "experience": "2+ years",
    "salary": "$30 - $50 per hour or per project",
    "skills": ["Content Writing", "Copywriting", "SEO Writing", "Editing", "Blogging", "Content Marketing", "Research"],
    "benefits": ["Flexible hours", "Remote work", "Diverse projects", "Build portfolio"]
  },
  {
    "title": "Financial Analyst",
    "company": "Capital Insights Group",
    "location": "New York, NY",
    "description": "Perform financial forecasting, reporting, and operational metrics tracking. Analyze financial data, create financial models, and support budgeting processes.",
    "requirements": ["Bachelor's degree in Finance, Accounting, or Economics", "Strong analytical and modeling skills", "Proficiency in Excel", "Experience with financial planning software a plus"],
    "type": "Full-time",
    "experience": "2-4 years",
    "salary": "$75k - $95k",
    "skills": ["Financial Analysis", "Financial Modeling", "Budgeting", "Forecasting", "Excel", "Financial Reporting", "Variance Analysis", "Accounting Principles"],
    "benefits": ["Competitive salary", "Performance bonus", "401k matching", "Health benefits", "Career development"]
  },
  {
    "title": "Operations Manager",
    "company": "Efficient Logistics Co.",
    "location": "Chicago, IL",
    "description": "Oversee daily operations, manage staff, improve operational processes, ensure efficiency, and manage budgets for the operations department.",
    "requirements": ["Proven experience in operations management", "Strong leadership and decision-making skills", "Process improvement mindset (Lean/Six Sigma knowledge a plus)", "Budget management experience"],
    "type": "Full-time",
    "experience": "5+ years",
    "salary": "$90k - $120k",
    "skills": ["Operations Management", "Leadership", "Process Improvement", "Budgeting", "Staff Management", "Logistics", "Supply Chain", "Problem Solving"],
    "benefits": ["Comprehensive benefits package", "Bonus potential", "Leadership role", "Paid time off"]
  },
  {
    "title": "Game Developer (Unity)",
    "company": "PixelPlay Studios",
    "location": "Remote",
    "description": "Develop, test, and maintain games using the Unity engine and C#. Collaborate with designers and artists to implement game features and mechanics.",
    "requirements": ["Strong C# programming skills", "Experience with Unity engine (2D/3D)", "Understanding of game development principles", "Experience with version control (Git)", "Portfolio of game projects"],
    "type": "Full-time",
    "experience": "2+ years",
    "salary": "$80k - $110k",
    "skills": ["Game Development", "Unity", "C#", "Game Physics", "UI Implementation", "Version Control (Git)", "Debugging", "Optimization"],
    "benefits": ["Remote work", "Creative environment", "Work on exciting game titles", "Health benefits", "Gaming perks"]
  },
  {
    "title": "Database Administrator (DBA)",
    "company": "SecureData Management",
    "location": "Austin, TX",
    "description": "Install, configure, maintain, and secure database systems (SQL Server/Oracle/PostgreSQL). Perform backups, recovery, performance tuning, and troubleshooting.",
    "requirements": ["Experience as a DBA", "Expertise in specific database systems (e.g., SQL Server, PostgreSQL)", "Knowledge of database security and backup/recovery procedures", "Performance tuning skills", "Scripting knowledge (SQL, Shell)"],
    "type": "Full-time",
    "experience": "4+ years",
    "salary": "$95k - $125k",
    "skills": ["Database Administration", "SQL Server", "PostgreSQL", "Oracle", "Performance Tuning", "Backup & Recovery", "Database Security", "SQL", "Scripting"],
    "benefits": ["Health/Dental/Vision", "401k", "Paid time off", "Stable work environment"]
  },
  {
    "title": "Scrum Master",
    "company": "AgileFlow Solutions",
    "location": "Remote (EST)",
    "description": "Facilitate Scrum ceremonies, coach Agile teams, remove impediments, and promote Agile principles and practices within the organization.",
    "requirements": ["Certified Scrum Master (CSM) or equivalent", "Experience working with software development teams", "Strong understanding of Scrum framework and Agile principles", "Excellent facilitation and coaching skills"],
    "type": "Full-time",
    "experience": "3+ years",
    "salary": "$100k - $130k",
    "skills": ["Scrum Master", "Agile Coaching", "Scrum Framework", "Facilitation", "Servant Leadership", "JIRA/Confluence", "Conflict Resolution", "Continuous Improvement"],
    "benefits": ["Remote work", "Agile environment", "Professional development funds", "Health benefits", "Generous PTO"]
  },
  {
    "title": "Solutions Architect",
    "company": "Cloud Integrators Inc.",
    "location": "New York, NY",
    "description": "Design comprehensive technical solutions for clients, often involving cloud platforms, software integration, and infrastructure. Translate business requirements into technical designs.",
    "requirements": ["Strong technical background in software development or infrastructure", "Experience designing complex systems", "Cloud platform knowledge (AWS/Azure/GCP)", "Excellent communication and presentation skills", "Pre-sales experience a plus"],
    "type": "Full-time",
    "experience": "8+ years",
    "salary": "$150k - $200k",
    "skills": ["Solution Architecture", "Cloud Architecture (AWS/Azure/GCP)", "System Design", "Microservices", "API Design", "Pre-sales", "Technical Leadership", "Enterprise Architecture"],
    "benefits": ["High impact role", "Competitive compensation package", "Stock options", "Client-facing opportunities", "Travel opportunities"]
  },
  {
    "title": "IT Auditor",
    "company": "Compliance Check LLP",
    "location": "Chicago, IL",
    "description": "Plan and conduct IT audits, assess IT controls, identify risks, and ensure compliance with regulations (SOX, GDPR, etc.). Prepare audit reports and recommendations.",
    "requirements": ["Experience in IT audit or risk management", "Knowledge of IT control frameworks (COBIT, NIST)", "Understanding of auditing standards", "Relevant certifications (CISA, CISSP) preferred", "Strong analytical skills"],
    "type": "Full-time",
    "experience": "3-6 years",
    "salary": "$85k - $115k",
    "skills": ["IT Audit", "Risk Assessment", "IT Controls", "Compliance", "SOX", "GDPR", "COBIT", "NIST", "CISA", "Cybersecurity Concepts"],
    "benefits": ["Professional development support", "Health benefits", "401k", "Hybrid work model", "Clear career path"]
  },
  {
    "title": "Digital Marketing Specialist",
    "company": "Online Presence Pros",
    "location": "Remote",
    "description": "Implement and manage digital marketing campaigns across various channels including SEO, SEM, social media, and email marketing. Analyze campaign performance.",
    "requirements": ["Experience in digital marketing", "Knowledge of SEO/SEM best practices", "Experience with Google Analytics and Ads", "Social media marketing skills", "Email marketing platform experience"],
    "type": "Full-time",
    "experience": "2-4 years",
    "salary": "$60k - $80k",
    "skills": ["Digital Marketing", "SEO", "SEM", "Google Analytics", "Google Ads", "Social Media Marketing", "Email Marketing", "Content Marketing", "Campaign Analysis"],
    "benefits": ["Remote work", "Flexible hours", "Health insurance", "Learning opportunities", "Performance bonus"]
  },
  {
    "title": "SEO Specialist",
    "company": "Rank Higher Agency",
    "location": "Austin, TX",
    "description": "Develop and execute SEO strategies to improve organic search rankings and traffic. Conduct keyword research, on-page optimization, link building, and technical SEO audits.",
    "requirements": ["Proven SEO experience", "Deep understanding of search engine algorithms", "Experience with SEO tools (SEMrush, Ahrefs, Moz)", "Keyword research skills", "Technical SEO knowledge"],
    "type": "Full-time",
    "experience": "3+ years",
    "salary": "$70k - $95k",
    "skills": ["SEO", "Keyword Research", "On-Page Optimization", "Link Building", "Technical SEO", "Google Analytics", "SEMrush", "Ahrefs", "Content Strategy"],
    "benefits": ["Competitive salary", "Health benefits", "Generous PTO", "Opportunity to lead SEO initiatives"]
  },
  {
    "title": "Social Media Manager",
    "company": "Viral Content Creators",
    "location": "Los Angeles, CA",
    "description": "Develop and manage social media strategies, create engaging content, manage communities, run ad campaigns, and analyze performance across platforms (Instagram, TikTok, Facebook, Twitter).",
    "requirements": ["Experience managing social media for brands", "Excellent content creation skills (text, image, video)", "Knowledge of social media analytics tools", "Experience with social media advertising"],
    "type": "Full-time",
    "experience": "3-5 years",
    "salary": "$65k - $85k",
    "skills": ["Social Media Marketing", "Content Creation", "Community Management", "Social Media Advertising", "Analytics", "Strategy", "Instagram", "TikTok", "Facebook", "Twitter"],
    "benefits": ["Creative work environment", "Health insurance", "Paid time off", "Work with popular brands"]
  },
  {
    "title": "Talent Acquisition Specialist",
    "company": "HireRight Solutions",
    "location": "Remote",
    "description": "Manage the full recruitment lifecycle: sourcing candidates, screening resumes, conducting interviews, and managing offers for various roles within the company.",
    "requirements": ["Experience in recruitment or talent acquisition", "Strong sourcing skills (LinkedIn Recruiter, job boards)", "Interviewing skills", "Experience with Applicant Tracking Systems (ATS)", "Excellent communication skills"],
    "type": "Full-time",
    "experience": "2+ years",
    "salary": "$70k - $90k",
    "skills": ["Recruitment", "Talent Acquisition", "Sourcing", "Interviewing", "ATS", "Candidate Management", "Employer Branding", "Offer Negotiation"],
    "benefits": ["Remote work", "Competitive salary", "Health benefits", "Bonus potential", "Impact company growth"]
  },
  {
    "title": "Office Manager",
    "company": "Corporate Hub Inc.",
    "location": "Chicago, IL",
    "description": "Oversee daily office operations, manage supplies, coordinate meetings and events, support administrative tasks, and ensure a smooth-running office environment.",
    "requirements": ["Experience as an Office Manager or Administrative Assistant", "Strong organizational skills", "Proficiency in MS Office Suite", "Excellent communication and interpersonal skills"],
    "type": "Full-time",
    "experience": "3+ years",
    "salary": "$55k - $70k",
    "skills": ["Office Management", "Administration", "Organization", "Vendor Management", "Event Coordination", "MS Office", "Communication"],
    "benefits": ["Stable work environment", "Health insurance", "Paid time off", "Central office location"]
  },
  {
    "title": "Paralegal",
    "company": "Law Associates Group",
    "location": "Washington D.C.",
    "description": "Assist attorneys by preparing legal documents, conducting research, organizing case files, and managing communication with clients and courts.",
    "requirements": ["Paralegal certificate or degree", "Experience working in a law firm or legal department", "Strong research and writing skills", "Familiarity with legal software and databases"],
    "type": "Full-time",
    "experience": "2+ years",
    "salary": "$60k - $80k",
    "skills": ["Paralegal Support", "Legal Research", "Legal Document Preparation", "Case Management", "Litigation Support", "E-discovery", "Communication"],
    "benefits": ["Professional legal environment", "Health benefits", "Retirement plan", "Opportunities for specialization"]
  },
  {
    "title": "High School Math Teacher",
    "company": "City Public Schools",
    "location": "Boston, MA",
    "description": "Teach mathematics courses (Algebra, Geometry, Calculus) to high school students. Develop lesson plans, grade assignments, and manage classroom environment.",
    "requirements": ["Bachelor's degree in Mathematics or Education", "Valid state teaching license", "Experience teaching or tutoring preferred", "Strong classroom management skills"],
    "type": "Full-time",
    "experience": "1+ years",
    "salary": "$55k - $75k (based on district scale)",
    "skills": ["Teaching", "Mathematics", "Lesson Planning", "Classroom Management", "Curriculum Development", "Student Assessment", "Communication"],
    "benefits": ["Public sector benefits (pension, health)", "School holidays", "Professional development", "Making a difference"]
  },
  {
    "title": "Civil Engineer",
    "company": "Infrastructure Builders Co.",
    "location": "Denver, CO",
    "description": "Design, plan, and oversee construction and maintenance of building structures and infrastructure projects (roads, bridges, water systems).",
    "requirements": ["Bachelor's degree in Civil Engineering", "PE license preferred or EIT certification", "Experience with CAD software (AutoCAD, Civil 3D)", "Knowledge of construction principles"],
    "type": "Full-time",
    "experience": "3+ years",
    "salary": "$75k - $100k",
    "skills": ["Civil Engineering", "Structural Design", "AutoCAD", "Civil 3D", "Project Management", "Site Development", "Construction Management", "Surveying"],
    "benefits": ["Health insurance", "401k", "Paid time off", "Field and office work balance"]
  },
  {
    "title": "Mechanical Engineer",
    "company": "Precision Manufacturing",
    "location": "Detroit, MI",
    "description": "Design, develop, and test mechanical components, machinery, and systems. Use CAD software for modeling and analysis.",
    "requirements": ["Bachelor's degree in Mechanical Engineering", "Proficiency in CAD software (SolidWorks, AutoCAD)", "Understanding of thermodynamics, mechanics, and materials science", "Hands-on prototyping or testing experience"],
    "type": "Full-time",
    "experience": "2-5 years",
    "salary": "$70k - $95k",
    "skills": ["Mechanical Engineering", "SolidWorks", "AutoCAD", "Product Design", "Finite Element Analysis (FEA)", "Thermodynamics", "Manufacturing Processes", "Prototyping"],
    "benefits": ["Comprehensive health plan", "Retirement savings", "Paid vacation", "Innovation-driven environment"]
  },
  {
    "title": "Electrical Engineer",
    "company": "Power Systems Solutions",
    "location": "Houston, TX",
    "description": "Design, develop, test, and supervise the manufacturing of electrical equipment, including power generation systems, motors, and control systems.",
    "requirements": ["Bachelor's degree in Electrical Engineering", "Experience with circuit design and simulation tools", "Knowledge of power systems or electronics", "PLC programming experience a plus"],
    "type": "Full-time",
    "experience": "3+ years",
    "salary": "$80k - $105k",
    "skills": ["Electrical Engineering", "Circuit Design", "Power Systems", "Control Systems", "PCB Design", "Simulation Software (SPICE)", "AutoCAD Electrical", "PLCs"],
    "benefits": ["Competitive salary", "Health/Dental/Vision", "401k", "Professional growth opportunities"]
  },
  {
    "title": "Architect",
    "company": "Modern Design Group",
    "location": "New York, NY",
    "description": "Design buildings and structures, create architectural drawings and models (using Revit/AutoCAD), coordinate with engineers, and oversee construction phases.",
    "requirements": ["Professional degree in Architecture (B.Arch or M.Arch)", "Licensed Architect preferred", "Proficiency in Revit and AutoCAD", "Strong design portfolio", "Knowledge of building codes"],
    "type": "Full-time",
    "experience": "5+ years",
    "salary": "$85k - $120k",
    "skills": ["Architecture", "Building Design", "Revit", "AutoCAD", "SketchUp", "Construction Documentation", "Building Codes", "Project Coordination", "Sustainable Design"],
    "benefits": ["Creative design studio", "Health benefits", "Paid time off", "Contribution to skyline"]
  },
  {
    "title": "Pharmacist",
    "company": "Community Pharmacy Chain",
    "location": "Various Locations",
    "description": "Dispense prescription medications, counsel patients on drug use and side effects, manage pharmacy staff, and ensure compliance with regulations.",
    "requirements": ["Doctor of Pharmacy (Pharm.D.) degree", "Valid state pharmacist license", "Strong knowledge of pharmacology", "Excellent communication and patient care skills"],
    "type": "Full-time",
    "experience": "0+ years (including residency)",
    "salary": "$110k - $140k",
    "skills": ["Pharmacy", "Pharmacology", "Medication Dispensing", "Patient Counseling", "Immunization", "Inventory Management", "Pharmacy Law"],
    "benefits": ["Competitive salary", "Health insurance", "Malpractice insurance", "Continuing education support", "Store discounts"]
  },
  {
    "title": "Lab Technician",
    "company": "BioResearch Labs",
    "location": "Cambridge, MA",
    "description": "Perform laboratory tests, experiments, and analyses following established protocols. Maintain lab equipment, record data accurately, and adhere to safety procedures.",
    "requirements": ["Associate's or Bachelor's degree in Biology, Chemistry, or related field", "Experience working in a laboratory setting", "Attention to detail", "Familiarity with lab equipment and techniques"],
    "type": "Full-time",
    "experience": "1-3 years",
    "salary": "$45k - $60k",
    "skills": ["Laboratory Techniques", "Data Recording", "Equipment Maintenance", "Quality Control", "Safety Procedures", "Microscopy", "Sample Preparation"],
    "benefits": ["Health benefits", "Paid time off", "Work in scientific research", "Training provided"]
  },
  {
    "title": "Physical Therapist",
    "company": "Rehab Dynamics Clinic",
    "location": "Phoenix, AZ",
    "description": "Evaluate patient conditions, develop treatment plans, and provide therapy to improve mobility, reduce pain, and restore function after injury or illness.",
    "requirements": ["Doctor of Physical Therapy (DPT) degree", "Valid state PT license", "Strong understanding of anatomy and kinesiology", "Excellent patient interaction skills"],
    "type": "Full-time",
    "experience": "1+ years",
    "salary": "$75k - $95k",
    "skills": ["Physical Therapy", "Patient Evaluation", "Treatment Planning", "Manual Therapy", "Therapeutic Exercise", "Rehabilitation", "Documentation"],
    "benefits": ["Health insurance", "Liability insurance", "Continuing education allowance", "Flexible scheduling options"]
  },
  {
    "title": "Librarian",
    "company": "City Public Library",
    "location": "Portland, OR",
    "description": "Manage library collections, assist patrons with research and information needs, organize library programs, and manage library resources and databases.",
    "requirements": ["Master's degree in Library Science (MLS/MLIS)", "Experience in a library setting", "Strong research and information literacy skills", "Customer service orientation"],
    "type": "Full-time",
    "experience": "2+ years",
    "salary": "$50k - $70k",
    "skills": ["Librarianship", "Information Literacy", "Collection Development", "Cataloging", "Reference Services", "Database Searching", "Community Programming"],
    "benefits": ["Public service role", "Health benefits", "Pension plan", "Support for professional development"]
  },
  {
    "title": "Journalist",
    "company": "Metro Daily News",
    "location": "Chicago, IL",
    "description": "Research, investigate, write, and report news stories for print, online, or broadcast media. Conduct interviews and adhere to journalistic ethics.",
    "requirements": ["Bachelor's degree in Journalism, Communications, or related field", "Strong writing and interviewing skills", "Ability to meet deadlines", "Portfolio of published work/clips"],
    "type": "Full-time",
    "experience": "1+ years",
    "salary": "$45k - $65k",
    "skills": ["Journalism", "Reporting", "Writing", "Interviewing", "Research", "Fact-Checking", "AP Style", "Multimedia Storytelling"],
    "benefits": ["Fast-paced environment", "Health insurance", "Paid time off", "Opportunity to cover important events"]
  },
  {
    "title": "Event Planner",
    "company": "Premier Events Co.",
    "location": "Las Vegas, NV",
    "description": "Plan, organize, and execute events (corporate meetings, weddings, conferences) including budgeting, vendor management, logistics, and on-site coordination.",
    "requirements": ["Proven event planning experience", "Strong organizational and multitasking skills", "Excellent communication and negotiation skills", "Budget management experience"],
    "type": "Full-time",
    "experience": "3+ years",
    "salary": "$55k - $75k",
    "skills": ["Event Planning", "Budget Management", "Vendor Negotiation", "Logistics Coordination", "Project Management", "Client Relations", "Problem Solving"],
    "benefits": ["Dynamic work environment", "Travel opportunities", "Health benefits", "Performance bonuses"]
  },
  {
    "title": "Logistics Coordinator",
    "company": "Global Shipping Partners",
    "location": "Long Beach, CA",
    "description": "Coordinate and monitor supply chain operations, manage transportation and warehousing, track shipments, and ensure efficient movement of goods.",
    "requirements": ["Experience in logistics or supply chain", "Understanding of transportation modes and regulations", "Strong organizational skills", "Proficiency in logistics software"],
    "type": "Full-time",
    "experience": "2+ years",
    "salary": "$50k - $65k",
    "skills": ["Logistics Coordination", "Supply Chain Management", "Transportation Management", "Inventory Control", "Shipping/Receiving", "Documentation", "Problem Solving"],
    "benefits": ["Health insurance", "Paid time off", "Busy work environment", "Opportunities for advancement"]
  },
  {
    "title": "Supply Chain Analyst",
    "company": "Retail Giant Corp",
    "location": "Bentonville, AR",
    "description": "Analyze supply chain data to identify trends, improve efficiency, reduce costs, and optimize inventory levels. Develop reports and recommendations.",
    "requirements": ["Bachelor's degree in Supply Chain, Business, or related field", "Strong analytical skills", "Proficiency in Excel and data analysis tools", "Understanding of supply chain principles"],
    "type": "Full-time",
    "experience": "1-3 years",
    "salary": "$60k - $80k",
    "skills": ["Supply Chain Analysis", "Data Analysis", "Inventory Optimization", "Demand Forecasting", "Process Improvement", "Excel", "SQL (a plus)", "Reporting"],
    "benefits": ["Competitive salary", "Comprehensive benefits", "Career growth in large organization", "Data-driven role"]
  },
  {
    "title": "Barista",
    "company": "Artisan Coffee Roasters",
    "location": "Seattle, WA",
    "description": "Prepare and serve coffee and other beverages, provide excellent customer service, handle cash transactions, and maintain a clean and welcoming store environment.",
    "requirements": ["Previous barista or customer service experience preferred", "Passion for coffee", "Strong communication skills", "Ability to work in a fast-paced environment"],
    "type": "Part-time/Full-time",
    "experience": "0-2 years",
    "salary": "$15 - $18 per hour + tips",
    "skills": ["Barista Skills", "Customer Service", "Espresso Preparation", "Latte Art (a plus)", "Cash Handling", "Food Safety"],
    "benefits": ["Free coffee", "Employee discounts", "Tips", "Flexible scheduling (sometimes)"]
  },
  {
    "title": "Retail Store Manager",
    "company": "Fashion Forward Boutique",
    "location": "Miami, FL",
    "description": "Oversee daily store operations, manage staff, drive sales, manage inventory, ensure excellent customer service, and handle visual merchandising.",
    "requirements": ["Experience in retail management", "Strong leadership and sales skills", "Customer service focus", "Inventory management knowledge", "Visual merchandising skills"],
    "type": "Full-time",
    "experience": "3+ years",
    "salary": "$50k - $70k + bonus",
    "skills": ["Retail Management", "Sales Leadership", "Staff Management", "Customer Service", "Inventory Control", "Visual Merchandising", "POS Systems"],
    "benefits": ["Performance bonus", "Employee discount", "Health benefits", "Paid time off"]
  },
  {
    "title": "Web Developer (PHP/WordPress)",
    "company": "Digital Agency Pro",
    "location": "Remote",
    "description": "Develop and maintain WordPress websites, create custom themes and plugins using PHP, HTML, CSS, and JavaScript.",
    "requirements": ["Strong PHP and WordPress development experience", "Proficiency in HTML, CSS, JavaScript/jQuery", "Experience with MySQL", "Understanding of theme/plugin architecture"],
    "type": "Full-time",
    "experience": "3+ years",
    "salary": "$70k - $95k",
    "skills": ["PHP", "WordPress", "HTML5", "CSS3", "JavaScript", "jQuery", "MySQL", "Theme Development", "Plugin Development", "Git"],
    "benefits": ["Remote work", "Flexible schedule", "Work on diverse web projects", "Health insurance contribution"]
  },
  {
    "title": "Ruby on Rails Developer",
    "company": "WebCrafters Inc.",
    "location": "Portland, OR",
    "description": "Design, build, and maintain efficient, reusable, and reliable Ruby code using the Rails framework. Integrate data storage solutions and user-facing elements.",
    "requirements": ["Proven experience with Ruby on Rails", "Strong understanding of Ruby syntax and its nuances", "Familiarity with MVC, Mocking, ORM, and RESTful APIs", "Experience with relational databases"],
    "type": "Full-time",
    "experience": "3+ years",
    "salary": "$100k - $130k",
    "skills": ["Ruby", "Ruby on Rails", "MVC", "REST APIs", "PostgreSQL", "RSpec", "JavaScript", "HTML", "CSS", "Git"],
    "benefits": ["Competitive salary", "Health/Dental/Vision", "401k", "Laid-back office culture", "Conference budget"]
  },
  {
    "title": "Python Developer (Backend)",
    "company": "ServerSide Solutions",
    "location": "Remote (UK)",
    "description": "Develop robust backend systems, APIs, and microservices using Python and frameworks like Django or Flask. Work with databases and cloud services.",
    "requirements": ["Strong Python programming skills", "Experience with Django/Flask", "API development experience (REST)", "Database knowledge (PostgreSQL/MySQL)", "Experience with cloud platforms (AWS/Azure)"],
    "type": "Full-time",
    "experience": "4+ years",
    "salary": "£50k - £75k",
    "skills": ["Python", "Django", "Flask", "REST APIs", "PostgreSQL", "Docker", "AWS", "Microservices", "Celery", "Unit Testing"],
    "benefits": ["Remote working", "Pension scheme", "Private medical insurance", "Generous holiday allowance"]
  },
  {
    "title": "Java Developer (Enterprise)",
    "company": "Enterprise Systems Ltd.",
    "location": "London, UK",
    "description": "Design, develop, and maintain large-scale enterprise Java applications using frameworks like Spring Boot. Work on complex business logic and integrations.",
    "requirements": ["Extensive Java development experience", "Proficiency with Spring Framework (Spring Boot, Spring MVC)", "Experience with Hibernate/JPA", "Knowledge of microservices architecture", "Experience with build tools (Maven/Gradle)"],
    "type": "Full-time",
    "experience": "5+ years",
    "salary": "£65k - £90k",
    "skills": ["Java", "Spring Boot", "Spring Framework", "Hibernate", "JPA", "Microservices", "REST APIs", "SQL", "Maven", "Git", "JUnit"],
    "benefits": ["Competitive salary", "Annual bonus", "Pension scheme", "Health insurance", "Training budget"]
  },
  {
    "title": "C# / .NET Developer",
    "company": "Software Solutions Inc.",
    "location": "Redmond, WA",
    "description": "Develop web applications, services, and desktop applications using C#, .NET Core/Framework, and related Microsoft technologies like ASP.NET and Azure.",
    "requirements": ["Strong C# and .NET development experience", "Experience with ASP.NET Core/MVC", "Knowledge of Entity Framework", "Familiarity with SQL Server", "Experience with Azure services a plus"],
    "type": "Full-time",
    "experience": "3-6 years",
    "salary": "$100k - $135k",
    "skills": ["C#", ".NET Core", ".NET Framework", "ASP.NET Core", "MVC", "Entity Framework", "SQL Server", "Azure", "JavaScript", "Web APIs", "Git"],
    "benefits": ["Microsoft ecosystem focus", "Health/Dental/Vision", "401k matching", "On-site amenities", "Career growth"]
  }
];
