// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import prodigyLogo from './assets/company_logo/prodigy_logo.png';

// Education Section Logo's
import vpsLogo from './assets/education_logo/vps_logo.png';
import juLogo from './assets/education_logo/JU2.jpg';
import rsaLogo from './assets/education_logo/RSA.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import hranalyticsLogo from './assets/work_logo/HR-Analytics.jpg';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
import subermLogo from './assets/work_logo/SuperM.png';
import mobilemLogo from './assets/work_logo/mobileM.png'


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: prodigyLogo,
      role: "Data Analyst Intern",
      company: "Prodigy Infotech",
      date: "April 2024 - September 2024",
desc: "During my internship at Prodigy InfoTech, I worked on AI-driven projects focused on data analysis, predictive modeling, and machine learning applications. I gained practical experience in exploring datasets, identifying patterns, and building intelligent solutions that address real-world problems. This role enhanced my understanding of AI workflows and strengthened my ability to think analytically, solve problems, and collaborate effectively in a remote environment.",
skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        
      ],
    },
    
  ];
  
  export const education = [
  
    {
      id: 0,
      img: juLogo,
      school: "Jagannath University, Bahadurgarh",
      date: "Sept 2022 - Pursuing",
      grade: " N/A",
      desc: "I am currently pursuing my B.Tech in Computer Science at Jagannath University, where I am building a strong foundation in core computer science subjects such as data structures, algorithms, operating systems, and software engineering. This academic journey has helped me develop problem-solving skills and a deep interest in areas like artificial intelligence, machine learning, and data analytics. I actively participate in coding challenges, workshops, and seminars to enhance my technical expertise and stay updated with industry trends.",
      degree: "Bachelor of Technology (B.Tech) in Computer Science",
    },
    {
      id: 1,
      img: rsaLogo,
      school: "Rising Star Academy, Pitampura, Delhi",
      date: "Apr 2021 - March 2022",
      grade: "62%",
      desc: "I completed my class 12 education from Rising Star Academy, Pitampura, Delhi, under the CBSE board, where I studied Physics, Chemistry, Mathematics, and Biology (PCMB) with Computer Science.",
      degree: "CBSE(XII) - PCMB with Computer Science",
    },
    {
      id: 2,
      img: rsaLogo,
      school: "Rising Star Academy, Pitampura, Delhi",
      date: "Apr 2019 - March 2020",
      grade: "76%",
      desc: "I completed my class 10 education from Rising Star Academy, Pitampura, Delhi, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "GitHub Profile Detective",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/AbhijithPrabhakar/GitHub-Profile-Search",
      webapp: "https://githubprofiledetective.netlify.app/",
    },
    
    {
      id: 1,
      title: "Elevating HR Analytics Project",
description:
        `It is a Python-based initiative aimed at analyzing and
mitigating employee attrition within human resources.
Leveraging Python's data analytics libraries, the project
delves into HR datasets to identify patterns and factors
contributing to attrition rates.`,
      image: hranalyticsLogo,
      tags: ["Python", "numpy", "pandas", "matplotlib", "Jupyter Notebook"],
      github: "https://github.com/AbhijithPrabhakar/HR-Analytic",
      webapp: "https://www.linkedin.com/posts/abhijith-prabhakar-7697602bb_hr-activity-7180839219546791936-1u49?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEzR7kEBRvKZZHClV9LftSKhdw8eIjbhX9o",
    },
    {
      id: 2,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/AbhijithPrabhakar/Image-Search-App",
      webapp: "https://imagsearch.netlify.app/",
    },
    {
      id: 3,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/AbhijithPrabhakar/Image-Bg-Remover",
      webapp: "https://removeyourbg.netlify.app/",
    },
    {
     id: 4,
     title: "Build Supermarket Billing System, developed in Python",
  description:
    "The Supermarket Billing System is a Python project designed to streamline the checkout process in supermarkets. Developed using Python, this system efficiently calculates the total bill for customers based on their purchases. It includes features such as quantity tracking, and automatic price calculation. With a user-friendly interface, this project aims to enhance the efficiency and accuracy of billing operations in supermarkets.",
  image: subermLogo,
  tags: ["Python", "Tkinter", "GUI", "Billing System"],
  webapp: "https://www.linkedin.com/posts/abhijith-prabhakar-7697602bb_supermarket-billing-system-activity-7180170168021516288-uJ3J?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEzR7kEBRvKZZHClV9LftSKhdw8eIjbhX9o",
},
    {
      id: 5,
      title: "Made a E-commerce Webpage using HTML, CSS and JS",
      description:
        "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
      image: mobilemLogo,
      tags: ["HTML", "CSS", "JavaScript", "Web Design", "Animations"],
      github: "https://github.com/AbhijithPrabhakar/https---github.com-AbhijithPrabhakar-Mobile-Mart",
      webapp: "https://mobilemart123.netlify.app/",
    },
    
    
  ];  