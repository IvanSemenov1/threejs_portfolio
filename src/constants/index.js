export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
      name: 'Aliev Alan',
      position: 'Marketing Director at Ivanscorp',
      img: 'assets/review1.png',
      review:
        'Working with Ivan was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
      name: 'Maklashin Pavel',
      position: 'Founder of Pavels Shop',
      img: 'assets/review2.png',
      review:
        'Ivan’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'Ivan Petrov',
    position: 'Project Manager at TechGL ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Ivan. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Antony Taylor',
    position: 'CEO of Stars',
    img: 'assets/review4.png',
    review:
      'Ivan was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in frontend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Shop1 - my first deployed project',
    desc: 'Shop1 is my first deployed project on GitHub featuring the layout of a shopping website.',
    subdesc:
      'Shop1 is a well-crafted layout for an online store that has the potential to be integrated into a fully functional e-commerce application in the future. The design focuses on user experience, ensuring intuitive navigation and an appealing aesthetic. With responsive design principles, it adapts seamlessly to various devices, providing a consistent shopping experience for users. Additionally, the project incorporates modern technologies and best practices, making it a solid foundation for further development and enhancement as I continue to refine my skills in web development.',
    href: 'https://github.com/IvanSemenov1/shop1',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'AmoCRM',
    pos: 'Junior Frontend Developer',
    duration: '2024 - Present',
    title: "AmoCRM Allows me to make calls directly from client cards in one click and records conversations in a card, where it is convenient to listen to them at any time. amoCRM stores all the information about the entire customer base, and this is very useful for repeat sales.",
    icon: '/assets/amocrm.svg',
    animation: 'victory',
  },
];
