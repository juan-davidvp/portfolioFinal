const navLinks = [
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Engineer", imgPath: "/images/ideas.svg" },
  { text: "Developer", imgPath: "/images/code.svg" },
  { text: "Designer", imgPath: "/images/designs.svg" },
  { text: "Engineer", imgPath: "/images/ideas.svg" },
  { text: "Developer", imgPath: "/images/code.svg" },
  { text: "Designer", imgPath: "/images/designs.svg" },
];

const movingBarWords = [
  "Web Desing",
  "Web Development",
  "Graphic Design",
  "UI/UX Design",
  "Branding",
  "Motion" 
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 5, suffix: "+", label: "Satisfied Clients" },
  { value: 10, suffix: "+", label: "Completed Projects" }
];

const projects = [
  { image: "/images/soulAir.png",
    color: "bg-green-100",
    title: "SoulAir: Connecting Citizens with Air Quality Through UI/UX.", 
    link: "https://www.figma.com/proto/j9HtLxtX38pqm0eRfKrDJp/Prototipo-redise%C3%B1ado?page-id=2311%3A2&node-id=2508-122&viewport=1992%2C542%2C0.25&t=Ert65wAvHHxOoebN-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2311%3A3",
    btnlogo: "/images/figma.svg",
    description: "Soul Air empathizes with users by providing crucial information about air quality. Its key features include presenting complex data in an interactive and educational way, using augmented reality maps, healthy routes, and personalized news."
  },
  { image: "/images/styleTransfer.png",
    color: "bg-amber-100",
    title: "GAN-based facial style transfer for digital image transformation.", 
    link: "https://colab.research.google.com/drive/1ejOXq5Hhfqp-URS8Z9IxfJ_nTyM8JlVF?usp=sharing#scrollTo=rqokPe_QJ9MN",
    btnlogo: "/images/x.svg",
    description: "AI to merge the user's face with Pre-Colombian cultural elements from the Calima and Quimbaya civilizations, generating a stylized image that preserves the original facial identity with high artistic and cultural value using PyTorch."
  },
  { image: "/images/daviviendaWeb.png",
    color: "bg-red-100",
    title: "Recreation of the Davivienda website with Node.js and MySQL for user management.", 
    link: "https://github.com/juan-davidvp/ProyectoFinalWebNodeJS.git",
    btnlogo: "/images/x.svg",
    description: "Imitation of the Davivienda bank website using Bootstrap for user registration and login management with a MySQL database and Node.js, complying with basic web security protocols."  },
  { image: "/images/fenadeco.png",
    color: "bg-blue-300",
    title: "FENADECO Website Redesign and Development: Optimizing the Digital Experience", 
    link: "https://www.figma.com/proto/m36yRQpRMTpUz22dTwVaGk/Fenadeco?page-id=0%3A1&node-id=61-18&viewport=563%2C1042%2C0.1&t=cmloiKfdwP5o7Ulo-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=61%3A18",
    btnlogo: "/images/figma.svg",
    description: "FENADECO's website redesign and development project focused on enhancing the user experience through a modern, responsive design. The project involved creating a visually appealing interface that is easy to navigate, ensuring that users can access information efficiently and effectively."
  },

];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/skills/team.svg",
    title: "Team Collaboration",
    desc: "I collaborate in teams to integrate roles and achieve common goals.",
  },
  {
    imgPath: "/images/skills/brain.svg",
    title: "Critical Thinking",
    desc: "I analyze problems to propose technical and creative solutions",
  },
  {
    imgPath: "/images/skills/clock.svg",
    title: "Project Management",
    desc: "I plan and execute tasks with agile methodologies to meet objectives.",
  },
  {
    imgPath: "/images/skills/chat.svg",
    title: "Effective Communication",
    desc: "I articulate ideas clearly, facilitating dialogue with clients",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    job: "UI Web Designer",
    jobDate: "June 2025 - July 2025",
    review:
      "Project to redesign the official Fenadeco website based on criteria of interactivity, accessibility, and intuitive navigation, as well as implementing the complete solution in CMS Wordpress.",
    imgPath: "/images/exp-02.png",
    logoPath: "/images/logo-01.png",
    title: "Ingenieria Multimedia",
    institution: "West Autonomous University - Colombia",
    date: "January 2022 - June 2026",
  },
  {
    job: "Motion Graphic Designer",
    jobDate: "April 2025 - June 2025",
    review: "Project commissioned to develop audiovisual content using the Adobe Suit focused on raising awareness of Colpensiones' Periodic Economic Benefits (BEPS).",
    imgPath: "/images/exp-01.png",
    logoPath: "/images/logo-02.png",
    title: "Bootcamp Programación Web Full Stack",
    institution: "Cymetria - Unicuses - Colombia",
    date: "July 2025 - September 2025",
  },
  {
    logoPath: "/images/logo-03.png",
    title: "Diplmado en Programación con Énfasis en Aplicaciones Web",
    institution: "Caldas University - Colombia",
    date: "May 2021 - December 2021",
  },
];


const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    url: "https://www.x.com/",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  movingBarWords,
  abilities,
  projects,
  logoIconsList,
  counterItems,
  expCards,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};