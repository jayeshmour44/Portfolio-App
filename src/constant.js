// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import typescriptLogo from './assets/tech_logo/typescriptLogo.png';
import nextjsLogo from './assets/tech_logo/nextjsLogo.png'
import vercelLogo from './assets/tech_logo/vercelLogo.png'
import renderLogo from './assets/tech_logo/renderLogo.png'
import postmanLogo from './assets/tech_logo/postmanLogo.png'
import chatgptLogo from './assets/tech_logo/chatgptLogo.png'
import gitcopilotLogo from './assets/tech_logo/gitcopilotLogo.png'
import claudeLogo from './assets/tech_logo/claudeLogo.png'
import geminiLogo from './assets/tech_logo/geminiLogo.webp'


// Experience Section Logo's
import Kuchoriyalogo from './assets/company_logo/kuchoriya.webp';
import Aaronlogo from './assets/company_logo/Aaron.png'


// Education Section Logo's
import skitLogo from './assets/education_logo/skitlogo.jpeg';
import caslogo from './assets/education_logo/CasLogo.png'
import kdjlogo from './assets/education_logo/KdjLogo.jpeg'

//Project sectionlogo's
import movierecLogo from './assets/work_logo/movie_rec.png';
// import imagesearchLogo from './assets/work_logo/image_search.png';
// import tttlogo from './assets/work_logo/TTT.png'
import ecommerceLogo from './assets/work_logo/e-commerce.png'
import imgLogo from './assets/work_logo/image-gallery.png'




export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'Next.js', logo: nextjsLogo },
      
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', logo: mongodbLogo },
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Render', logo: renderLogo },
      { name: 'Postman', logo: postmanLogo },
    ],
  },
  {
    title: 'AI Tools',
    skills: [
      { name: 'Chatgpt', logo: chatgptLogo },
      { name: 'GitHub Copilot', logo: gitcopilotLogo },
      { name: 'Claude', logo: claudeLogo },
      { name: 'Gemini', logo: geminiLogo },
    ]
  }
];

  export const experiences = [
    {
      id: 0,
      img: Kuchoriyalogo,
      role: "Full-stack Developer",
      company: "Kuchoriya Techsoft",
      date: "Oct 2025 - April 2026",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Next.js",
      ],
    },
    {
      id: 1,
      img: Aaronlogo,
      role: "Software Trainee",
      company: "Aaron softech private limited",
      date: "July 2023 - August 2023",
      desc: "Trained in Data Structures and Algorithms. Worked on optimizing code logic and solving real-world programming problems",
      skills: [
        "C",
        "C++",
        "JavaScript",
        "DSA",
        
      ],
    },
    
  ];
  
  export const education = [
    {
      id: 0,
      img: skitLogo,
      school: "SKIT College, Jaipur",
      date: "Sept 2020 - May 2024",
      grade: "8.16 CGPA",
      desc: "I completed my B.Tech degree in Electronics and Communication Engineering from SKIT College, Jaipur. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at SKIT College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "B.Tech (ECE)",
    },
    {
      id: 2,
      img: caslogo,
      school: "Central Academy School, Ajmer",
      date: "Apr 2018 - March 2020",
      grade: "A",
      desc: "I completed my class 12 education from Central Academy School, Ajmer, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "CBSE(XII) - PCM"
    },
    {
      id: 3,
      img: kdjlogo,
      school: "K.D. Jain Public School",
      date: "Apr 2017 - March 2018",
      grade: "A",
      desc: "I completed my class 10 education from K.D. Jain Public School, Madanganj-Kishangarh, under the CBSE board.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/jayeshmour44/MY-APP-First-Project.git",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
      id: 1,
      title: "E-commerce Web Application (MERN Stack)",
      description:
        "Developed and deployed a fully responsive E-commerce web application using modern web technologies.The platform allows users to browse products, view detailed product pages, and interact with a smooth, user-friendly UI.Focused on clean UI, performance optimization, and real-world e-commerce workflows.",
      image: ecommerceLogo,
      tags: ["React JS", "Node JS", "Express JS", "MongoDB"],
      github: "https://github.com/jayeshmour44/eCommerce-Website-Frontend.git",
      webapp: "https://e-commerce-website-frontend-zeta.vercel.app/",
    },
    {
      id: 2,
      title: "Image Gallery Web Application (Full Stack)",
      description:
        "Built a full-stack Image Gallery web application with a public user interface and a secure admin dashboard.Implemented Google Authentication using Firebase for users, while admins authenticate via JWT-based backend login.Developed RESTful APIs with Node.js and Express, connected to MongoDB Atlas, and integrated Cloudinary for imageupload, update, and deletion.",
      image: imgLogo,
      tags: ["React JS", "Node JS", "Express JS", "MongoDB"],
      github: "https://github.com/jayeshmour44/image-gallery-frontend.git",
      webapp: "https://image-gallery-frontend-flame.vercel.app/",
    },
];
//     {
//       id: 4,
//       title: "Task Reminder Chrome Extension Tool",
//       description:
//         "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
//       image: taskremLogo,
//       tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
//       github: "https://github.com/codingmastr/Task-Reminder-Tool",
//       webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
//     },
//     {
//       id: 5,
//       title: "Webverse Digital",
//       description:
//         "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
//       image: webverLogo,
//       tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
//       github: "https://github.com/codingmastr/Webverse-Digital",
//       webapp: "https://webversedigital.com/",
//     },
//     {
//       id: 6,
//       title: "Coding Master",
//       description:
//         "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
//       image: cmLogo,
//       tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
//       github: "https://codingmasterweb.in/",
//       webapp: "https://codingmasterweb.in/",
//     },
//     {
//       id: 7,
//       title: "Image Search App",
//       description:
//         "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
//       image: imagesearchLogo,
//       tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
//       github: "https://github.com/codingmastr/Image-Search-App",
//       webapp: "https://imagsearch.netlify.app/",
//     },
//     {
//       id: 8,
//       title: "Image Background Remover",
//       description:
//         "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
//       image: removebgLogo,
//       tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
//       github: "https://github.com/codingmastr/Image-Background-Remover",
//       webapp: "https://removeyourbg.netlify.app/",
//     },
//   ];  