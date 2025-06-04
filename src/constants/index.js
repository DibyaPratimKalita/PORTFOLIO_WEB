import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full-stack developer and a B.Tech Computer Science undergraduate at NIT Silchar, with a knack for crafting robust and scalable web applications. With 3 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "20__ - 20__",
    role: "Senior Full Stack Developer",
    company: "XYZ.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "20__ - 20__",
    role: "Frontend Developer",
    company: "XYZ",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "20__ - 20__",
    role: "Full Stack Developer",
    company: "XYZ",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
];

export const PROJECTS = [
  {
    title: "Astronomy Website",
    image: project1,
    description:
       "Developed a dynamic web application that fetches and displays NASA’s Astronomy Picture of the Day (APOD)based on user-selected dates, leveraging the NASA APOD API for real-time data retrieval.",
    technologies: ["HTML", "CSS", "Javascript", "API"],
  },
  {
    title: "Expense Management App",
    image: project2,
    description:
      "An application for managing expenses, with features such as user registration/login, adding/deleting/editing transactions.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind", "Framer motion"],
  },
  {
    title: "Decentralized Voting Application",
    image: project4,
    description:
      "An application to implement voting in solidity smart contract using ReactJS.",
    technologies: ["React", "Solidity"],
  },
];

export const CONTACT = {
  address: "",
  phoneNo: "Github profile: DibyaPratimKalita",
  email: "dibyapratimkalita@gmail.com",
};
