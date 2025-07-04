import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `Hi, I'm Rukmanghan Selvakumar, a BIT (Bachelor of Information Technology) graduate with a deep passion for coding and a demonstrated ability to rapidly master new programming tools and technologies. My enthusiasm for technology fuels my drive to develop innovative solutions using advanced coding techniques. I am dedicated to creating cutting-edge software that optimizes systems and sets new industry benchmarks.`;

export const ABOUT_TEXT = `I am proficient in various programming tools and technologies, with extensive experience in web development. I possess a broad understanding of software development concepts and best practices and am dedicated to staying current with the latest industry trends and technologies. I actively seek new technologies and continually explore ways to scale my skills and knowledge to drive innovation and excellence in the industry.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Interior Design Management System",
    image: project1,
    description:
      "A fully functional Interior Design Management System website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "Javascript", "PHP", "Mysql"],
    link: "https://github.com/rkrukshan/Interior_Design_Management_System.git",
  },
  {
    title: "MobStore",
    image: project2,
    description:
      "A modern, responsive web application designed for a mobile phone retail store. Developed using React for user interfaces and Tailwind CSS for sleek, utility-first styling.",
    technologies: ["React", "Tailwind"],
    link: "https://github.com/rkrukshan/MobStore.git",
  },
  {
    title: "Image Gallery",
    image: project3,
    description:
      "An elegant image gallery website with advanced search capabilities for easy image discovery and seamless user experience.",
    technologies: ["React", "Tailwind", "API"],
    link: "https://github.com/rkrukshan/react-image-gallery.git",
  },
  {
    title: "Grosery Shop",
    image: project4,
    description:
      "A platform for Listing and Showcase Grosery products using React ,Tailwind, Redux, Material UI, Framer Motion.",
    technologies: ["React", "Tailwind", "Redux", "MUI", "Framer Motion"],
    link: "https://github.com/rkrukshan/Grocery-Shop/tree/master",
  },
];

export const CONTACT = {
  address: "186/2 sir pon, Ramanathan Road, Thirunelveli, Jaffna, Sri Lanka.",
  phoneNo: "+94 769861092 ",
  email: "rukshan1122@gmail.com",
};
