export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string;
  skills: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: "Westside Union",
    role: "Founder & Project / Product Lead",
    duration: "June 2009 – Present",
    description: "Lead multidisciplinary projects across digital products, AI-enabled workflows, design strategy, research, branding, and client delivery. Developed AI and SaaS concepts for local-business operations and revenue workflows, leading the design and positioning of products including Paviqo and Artpresso.",
    skills: ["Project Scope Definition", "Stakeholder Coordination", "Product Requirements", "Prototyping", "AI workflows", "SaaS Development"],
  },
  {
    company: "The Village Art Studio",
    role: "Founder & Program Director",
    duration: "December 2023 – Present",
    description: "Founded and direct a community-focused arts initiative supporting exhibitions, workshops, artist collaborations, and accessible creative programming in Toronto. Build partnerships with local artists and community businesses.",
    skills: ["Event Planning", "Workshop Delivery", "Partnership Building", "Audience Development"],
  },
  {
    company: "Right Time Inc",
    role: "Watch Customization Specialist",
    duration: "November 2022 – Present",
    description: "Manage bespoke watch-customization projects from customer consultation through design selection, component coordination, quality review, and delivery.",
    skills: ["Bespoke Customization", "Visual Consistency", "Customer Consultation"],
  },
  {
    company: "George Brown College Continuing Education",
    role: "Instructor — Fashion and Design",
    duration: "August 2022 – Present",
    description: "Develop and deliver college-level curriculum in fashion, design, and related creative disciplines. Mentor students through research, concept development, production, and presentation.",
    skills: ["Curriculum Development", "Student Mentorship", "Performance Evaluation", "Instructional Design"],
  },
  {
    company: "Right Time Inc",
    role: "Design Director / VP",
    duration: "October 2022 – December 2025",
    description: "Led design, branding, customization, and selected operational initiatives. Managed custom watch concepts from client brief through execution, and supported business initiatives.",
    skills: ["Brand Identity", "Visual Communication", "Team Coordination", "Promotional Materials"],
  },
  {
    company: "MAKALOT INDUSTRIAL CO., LTD.",
    role: "U.S FDA Agent",
    duration: "April 2020 – September 2024",
    description: "Acted as the U.S FDA Agent representative, serving as the FDA contact window and handling document review.",
    skills: ["FDA Communications", "Regulatory Compliance", "Document Review"],
  },
  {
    company: "Bio Union",
    role: "Founder / Researcher",
    duration: "May 2018 – September 2024",
    description: "Founded a wearable-technology venture developing sensor-integrated garments for continuous physiological monitoring. Defined product vision across smart textiles, sensors, hardware, software, and healthcare applications.",
    skills: ["Wearable Technology", "Smart Textiles", "Concept Development", "Cross-functional Coordination"],
  },
  {
    company: "Chinese Culture University",
    role: "Instructor",
    duration: "October 2015 – June 2019",
    description: "Taught History of African-American Culture and Music Production.",
    skills: ["Course Planning", "On-Site Teaching", "Music Production"],
  },
  {
    company: "NKG (新金寶)",
    role: "Medical Wearable Device Engineer & Project Manager",
    duration: "January 2017 – May 2018",
    description: "Led a cross-functional initiative that standardized work across ten departments and supported the development of two major wearable products within six months. Contributed to product design, garment engineering, pattern development, and UI/UX concepts.",
    skills: ["Cross-functional Leadership", "Garment Engineering", "Pattern Making", "UI/UX Design"],
  },
  {
    company: "Ties.DB",
    role: "Blockchain Technology Advisor",
    duration: "September 2017 – December 2017",
    description: "Advised on blockchain technology for a decentralized database, focusing on UX Design consulting and Smart Contract review and debug.",
    skills: ["UX Design Consulting", "Smart Contract Debugging", "Blockchain Technology"],
  },
  {
    company: "Seven Crash",
    role: "Design Director",
    duration: "November 2015 – December 2016",
    description: "Managed the ready-to-wear department and was in charge of the haute couture line. Launched the high-fashion line and opened the first flagship store in Crystal Galleria Shanghai.",
    skills: ["Fashion Design", "Creative Direction", "Store Interior Design", "Collection Conceptualization"],
  },
  {
    company: "China University of Technology",
    role: "Instructor (Department of Visual Communication and Design)",
    duration: "July 2014 – September 2016",
    description: "Visual Design and Internship program course lecturer. Taught Visual Design Process, UI/UX Design, Pitch Deck Design, and Presentation Skills.",
    skills: ["Visual Design", "UI/UX Education", "Pitch Deck Instruction", "Mentorship"],
  },
  {
    company: "National Yunlin University of Science and Technology",
    role: "Instructor (Department of Industrial Design)",
    duration: "2015 – 2016",
    description: "Product Design Process course lecturer at the Department of Industrial design. Taught UI/UX design, pitch deck design, and presentation skills.",
    skills: ["Industrial Design Education", "UI/UX Design", "Presentation Skills"],
  },
  {
    company: "Box Clothing",
    role: "Founder",
    duration: "September 2007 – 2016",
    description: "Founded an haute couture brand in Taiwan focusing on women's apparel with specialized tailoring. Produced hand-made and small-production collections based on black and white themes.",
    skills: ["Haute Couture Design", "Apparel Tailoring", "Brand Management", "Production Management"],
  },
];

/** Career journey milestones for the homepage horizontal timeline (§7.5) */
export const careerJourneyStages = [
  {
    id: "textiles",
    label: "Fashion & Textile Engineering",
    dateRange: "2007–2016",
    summary: "Founded Box Clothing and Seven Crash, blending haute couture tailoring with ready-to-wear collections and leading design teams.",
  },
  {
    id: "wearable-health",
    label: "Wearable Health Technology",
    dateRange: "2017–2024",
    summary: "Innovated at NKG and Bio Union, designing biosensor garment ecosystems that bridge textiles, hardware, and health software.",
  },
  {
    id: "education-design",
    label: "Education & Design Leadership",
    dateRange: "2014–Present",
    summary: "Teaching design and creative technology at multiple institutions (including George Brown College) while advancing product practice.",
  },
  {
    id: "digital-ai",
    label: "Digital Products & AI",
    dateRange: "2024–Present",
    summary: "Building Paviqo — an AI-powered SaaS platform — and shipping tools like Artpresso for creative professionals through Westside Union.",
  },
] as const;
