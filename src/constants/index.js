import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import project5 from "../assets/projects/project-5.webp";

export const HERO_CONTENT = `Hi, I'm Rukmanghan Selvakumar, a BIT (Bachelor of Information Technology) graduate with a deep passion for coding and a demonstrated ability to rapidly master new programming tools and technologies. My enthusiasm for technology fuels my drive to develop innovative solutions using advanced coding techniques. I am dedicated to creating cutting-edge software that optimizes systems and sets new industry benchmarks.`;

export const ABOUT_TEXT = `I am proficient in various programming tools and technologies, with extensive experience in web development. I possess a broad understanding of software development concepts and best practices and am dedicated to staying current with the latest industry trends and technologies. I actively seek new technologies and continually explore ways to scale my skills and knowledge to drive innovation and excellence in the industry.`;

export const EXPERIENCES = [
  {
    year: "2025 - March to 2025 - September",
    role: "Intern Software Engineer (On Site)",
    company: "Gray Corp.",
    description: `Worked as an Intern Software Engineer, contributing to the development and maintenance of web applications using React.js, Tailwind CSS, and Redux. Integrated backend services with Firebase and utilized Axios for handling API requests. Used Postman for testing RESTful APIs and contributed to content management using WordPress. Collaborated with stakeholders to gather requirements, define project timelines, and deliver scalable solutions.`,
    technologies: [
      "Javascript",
      "React.js",
      "Tailwind CSS",
      "Redux",
      , "GIT",
      "Firebase",
      "Axios",
      "Postman",
      "WordPress",
    ],
  },
  {
    year: "2023 - Augest to 2025 - may",
    role: "Graphic Designer (Remote)",
    company: "Pix Graphics and Signs.",
    description: `Worked as a Graphic Designer, creating visually engaging digital assets using Adobe Photoshop and Adobe Illustrator. Designed marketing materials, social media graphics, and brand elements aligned with project requirements and brand guidelines. Collaborated with clients and team members to understand design objectives, meet deadlines, and deliver high-quality creative solutions.`,
    technologies: ["PhotoShop","Illustrator"],
  },
];

export const PROJECTS = [
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
    technologies: ["React", "Tailwind", "Axios"],
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
  {
    title: "Interior Design Management System",
    image: project1,
    description:
      "A fully functional Interior Design Management System website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "Javascript", "PHP", "Mysql"],
    link: "https://github.com/rkrukshan/Interior_Design_Management_System.git",
  },
  {
    title: "SpringBoot CRUD With , Mysql and Tailwind",
    image: project5,
    description:
      "A SpringBoot application that implements CRUD operations with a ThymeLeaf frontend styled using Tailwind CSS.",
    technologies: ["SpringBoot", "ThymeLeaf", "Mysql", "Tailwind"],
    link: "https://github.com/rkrukshan/SpringBoot-CRUD-with-Thymeleaf-Tailwind.git",
  },
];

export const CONTACT = {
  address: "186/2 sir pon, Ramanathan Road, Thirunelveli, Jaffna, Sri Lanka.",
  phoneNo: "+94 769861092 ",
  email: "rukshan1122@gmail.com",
};
