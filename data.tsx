import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "https://www.youtube.com/@hakka41/featured",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/feed",
    },
    {
        id: 3,
        logo: <Twitter size={30} strokeWidth={1} />,
        src: "https://x.com/home?lang=es",
    },
    {
        id: 4,
        logo: <Rss size={30} strokeWidth={1} />,
        src: "https://github.com/hakka247",
    },
    {
        id: 5,
        logo: <Twitch size={30} strokeWidth={1} />,
        src: "https://www.twitch.tv",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#ffffffff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#ffffffff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#ffffffff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#ffffffff" strokeWidth={1} />,
        link: "/portfolio",
    },
  
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Estudios en Técnico en Programación y Análisis de Sistemas",
    subtitle: "AIEP",
    description:
      "Comencé mis estudios en 2024, donde he adquirido conocimientos en programación, análisis de sistemas, bases de datos y desarrollo web. Estoy en proceso de finalizar mi carrera para dar el salto al mundo laboral.",
    date: "2024 – 2025",
  },
  {
    id: 2,
    title: "Proyectos Académicos",
    subtitle: "Portafolio",
    description:
      "He desarrollado aplicaciones CRUD, sistemas de gestión y páginas web como parte de mis asignaturas y proyectos personales. Estos trabajos me han permitido poner en práctica mis habilidades en JavaScript, React y bases de datos.",
    date: "2024 – 2025",
  },
  {
    id: 3,
    title: "Práctica Profesional (Próximamente)",
    subtitle: "Empresa por definir",
    description:
      "Me encuentro preparado para realizar mi práctica profesional, con el objetivo de aplicar mis conocimientos en un entorno real, colaborar en proyectos de desarrollo de software y seguir aprendiendo de la industria.",
    date: "2025",
  },
  {
    id: 4,
    title: "Primeros pasos en el mundo laboral",
    subtitle: "Meta profesional",
    description:
      "Mi objetivo es incorporarme a una empresa de tecnología donde pueda crecer como desarrollador, aportar soluciones innovadoras y consolidar mi carrera en programación y análisis de sistemas.",
    date: "Futuro",
  },
];

export const dataCounter = [
    {
        id: 0,
        endCounter: 10,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 80,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 220,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 30,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Computer />,
        title: "Desarrollo Web",
        description: "Creación de sitios y aplicaciones web a medida, utilizando React, Next.js y bases de datos. Interfaces rápidas, modernas y seguras.",
    },
    {
        icon: <Pencil />,
        title: "Diseño Frontend",
        description: "Diseño de interfaces limpias y responsivas con Tailwind CSS, asegurando una excelente experiencia de usuario en cualquier dispositivo.",
    },
    {
        icon: <Book />,
        title: "Proyectos Académicos",
        description: "Experiencia en desarrollo de sistemas CRUD, páginas web y aplicaciones como parte de mi portafolio académico y personal.",
    },
    {
        icon: <Crop />,
        title: "Soporte y Mantención",
        description: "Acompañamiento técnico para mantener tus proyectos actualizados, seguros y escalables en el tiempo.",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Proyecto Hasheo",
        image: "/image-1.jpg",
        urlGithub: "https://github.com/hakka247/ProyectoHasheo.git",
       
    },
    {
        id: 2,
        title: "Modulo inventario",
        image: "/image-2.jpg",
        urlGithub: "https://github.com/hakka247/Modulo-inventario.git",
        
    },
    {
        id: 3,
        title: "TecnoLas Page",
        image: "/image-3.jpg",
        urlGithub: "https://github.com/hakka247/TecnoLas.git",
      
    },
    {
        id: 4,
        title: "Multiples Diagramas",
        image: "/image-4.jpg",
        urlGithub: "https://drive.google.com/drive/folders/1mGxrqfcFJuYNrNJCP9h9vpRpVzYqeMNV?usp=sharing",
       
    },
    
];

export const dataTestimonials = [
    
];