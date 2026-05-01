/**
 * PORTFOLIO DATA MANAGER
 * ==============================================================================
 * This file contains all the content for your portfolio.
 * You can update it manually, or use the CLI script `node scripts/content-manager.js`
 * 
 * HOW TO UPDATE MANUALLY:
 * 
 * 1. userInfo:
 *    - name: Your full name
 *    - role: Your job title or tagline
 *    - taglines: Array of strings for the animated typewriter effect
 *    - bio: Your about me text
 *    - email: Your contact email
 *    - location: Your city, country
 *    - social: Links to your profiles (github, linkedin, twitter)
 * 
 * 2. skills:
 *    - Array of objects: { name: "Skill Name", category: "Category Name", proficiency: 0-100 }
 * 
 * 3. education:
 *    - Array of objects: { institution: "", degree: "", year: "YYYY - YYYY", score: "GPA/Score", coursework: "Courses" }
 * 
 * 4. certificates:
 *    - Array of objects: { title: "", platform: "", date: "Month Year", credentialUrl: "URL", category: "Category" }
 * 
 * 5. projects:
 *    - Array of objects: { name: "", description: "", techStack: ["React", "Node", etc], githubUrl: "URL", liveUrl: "URL", featured: boolean }
 * ==============================================================================
 */

export const userInfo = {
  name: "Suyash Sunam",
  role: "Software Developer",
  taglines: [
    "Full Stack Developer",
    "Problem Solver",
    "Data Scientist",
    "Machine Learning Engineer"
  ],
  bio: "I’m a B.Tech undergraduate passionate about building real-world tech solutions, especially in AI,ML,DL,IoT and computer vision. I’ve worked with technologies like Python,OpenCV, IoT, Arduino R4, ML and DL techniques to create practical, problem-solving projects. I’m always focused on improving my skills and turning ideas into something useful.",
  email: "2suyash@gmail.com",
  location: "Pune, Maharashtra, India",
  social: {
    github: "https://github.com/Suyashman",
    linkedin: "https://www.linkedin.com/in/suyashsunam/",
    codeforces: "https://codeforces.com/profile/SuyashSunam"
  },
  githubUsername: "Suyashman" // Used to fetch GitHub repositories automatically
};

export const skills = [
  { name: "C++", category: "Languages", proficiency: 90 },
  { name: "Python", category: "Languages", proficiency: 85 },
  { name: "Java", category: "Languages", proficiency: 75 },
  { name: "R", category: "Languages", proficiency: 70 },
  { name: "React / React Native", category: "Frameworks", proficiency: 88 },
  { name: "Node.js / Express", category: "Frameworks", proficiency: 80 },
  { name: "Tailwind CSS", category: "Frameworks", proficiency: 95 },
  { name: "Git & GitHub", category: "Tools & DevOps", proficiency: 90 },
  { name: "Docker", category: "Tools & DevOps", proficiency: 70 },
  { name: "Arduino IDE", category: "Tools & DevOps", proficiency: 70 },
  { name: "Antigravity", category: "Tools & DevOps", proficiency: 70 },
  { name: "ML / DL", category: "Tools & DevOps", proficiency: 70 },
  { name: "Computer Vision", category: "Tools & DevOps", proficiency: 70 },
  { name: "Data Structures & Algos", category: "CS Fundamentals", proficiency: 85 },
  { name: "Operating Systems", category: "CS Fundamentals", proficiency: 85 },
  { name: "Computer Networks", category: "CS Fundamentals", proficiency: 85 },
  { name: "Databases MYSQL, PostgreSQL", category: "CS Fundamentals", proficiency: 80 },
  { name: "Object Oriented Programming", category: "CS Fundamentals", proficiency: 85 },
  { name: "Software Engineering", category: "CS Fundamentals", proficiency: 85 }
];

export const education = [
  {
    institution: "MIT World Peace University",
    degree: "B.Tech Computer Science (AI & DS)",
    year: "2023 - 2027",
    score: "CGPA 8.56",
    coursework: "Data Structures, Algorithms,Artificial Intelligence, Machine Learning, Deep Learning"
  },
  {
    institution: "SNBP Rahatani",
    degree: "CBSE 12th ",
    year: "2022-2023",
    score: "85.6%",
    coursework: "SCIENCE - Physics Chemistry Maths English Informatics Practices"
  },
  {
    institution: "The Academy School",
    degree: "ICSE 10th ",
    year: "2020-2021",
    score: "81%",
    coursework: "PCM + Computers"
  }
];

export const certificates = [
  {
    title: "Python Intro",
    platform: "Sololearn",
    date: "May 2021",
    credentialUrl: "/Python CERT 1.pdf",
    category: "Python"
  },
  {
    title: "C++ Intro",
    platform: "Sololearn",
    date: "May 2021",
    credentialUrl: "/CppCERT 1.pdf",
    category: "C++"
  },
  {
    title: "Machine Learning & Deep Learning",
    platform: "NIT GOA",
    date: "February 2026",
    credentialUrl: "NIT GOA.pdf",
    category: "ML"
  },
  {
    title: "Infosys Springboard Certification",
    platform: "Infosys",
    date: "April 2026",
    category: "Software Engineering Management",
    pdfs: [
      { name: "1", url: "SEMINAR CERTIFICATE 1.pdf" },
      { name: "2", url: "SEMINAR CERTIFICATE 2.pdf" },
      { name: "3", url: "SEMINAR CERTIFICATE 3.pdf" },
      { name: "4", url: "SEMINAR CERTIFICATE 4.pdf" }
    ]
  }
];

export const projects = [
  {
    name: "Video Steganography",
    description: "A video steganography system built in Java that conceals secret text messages within ordinary video files.",
    techStack: ["Java", "OpenCV"],
    githubUrl: "https://github.com/Suyashman/video-steganography-java",
    liveUrl: false,
    featured: true,
    type: "Solo",
    docUrl: "REPORT1_VIDEO_STEG.pdf",
    date: "April 2026",
    youtubeUrl: "https://youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    name: "Image Steganography",
    description: "An image steganography system built in Python that conceals secret text messages within ordinary image files.",
    techStack: ["Python", "OpenCV"],
    githubUrl: "https://github.com/Suyashman/image-steganography",
    liveUrl: "https://image-steganography-two.vercel.app/",
    featured: true,
    type: "Solo",
    date: "May 2026",
  },
  {
    name: "Vegetable Segregator using Arduino R4 and ML",
    description: "A smart vegetable segregation system that uses machine learning to identify and segregate different types of vegetables, reducing manual sorting efforts.",
    techStack: ["Arduino R4", "ML", "Python", "OpenCV"],
    githubUrl: "https://github.com/Suyashman/tomato-segregator",
    liveUrl: false,
    featured: true,
    type: "Solo",
    docUrl: "REPORT2_TOMATO_SEGG.pdf",
    date: "December 2025",
    youtubeUrl: "https://youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    name: "Crop Disease Prediction",
    description: "Built a full stack mobile app for predicting crop disease using CNN and predicting future risks using LSTM.",
    techStack: ["Python", "OpenCV", "Flutter"],
    githubUrl: "https://github.com/arya20072004/crop-disease-detection",
    liveUrl: false,
    featured: true,
    type: "Group",
    docUrl: "REPORT3_CROP_DISEASE.pdf",
    date: "April 2026",
  },
  {
    name: "FSRCNN for Super Resolution",
    description: "This project implements an FSRCNN-based image super-resolution model that improves reconstruction quality while maintaining efficient, real-time performance.",
    techStack: ["Python", "PyTorch", "OpenCV"],
    githubUrl: "https://github.com/Suyashman/fsrcnn-dlss",
    liveUrl: false,
    featured: true,
    type: "Solo",
    docUrl: "REPORT4_FSRCNN.pdf",
    date: "March 2026",
  },
  {
    name: "Virtual Hand Painter",
    description: "A virtual hand painting application that uses computer vision to detect hand movements and allows users to paint on a digital canvas.",
    techStack: ["Python", "OpenCV"],
    githubUrl: "https://github.com/Suyashman/hand-gesture-drawing",
    liveUrl: false,
    featured: true,
    type: "Solo",
    docUrl: "/resume.pdf",
    date: "May 2021",
    youtubeUrl: "https://youtube.com/watch?v=dQw4w9WgXcQ",
  }
];
