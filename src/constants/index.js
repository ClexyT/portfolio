import {
  FaHtml5,
  FaCss3Alt,
  SiJavascript,
  SiTypescript,
  FaReact,
  FaPython,
  SiSvelte,
  SiTailwindcss,
  SiRedux,
  FaAngular,
  TbBrandVite,
  SiAstro,
  SiNextdotjs,
  FaNode,
  RiInstagramLine,
  RiTwitterXFill,
  RiGithubFill,
  RiLinkedinBoxFill
} from 'react-icons/all'
import SM from '@/MediaTree.json'
import { me, malit } from '@/images'
const sm = SM[0].Links[0]

// NAVBAR SECCION
export const socialNetworks = [
  {
    logo: <RiInstagramLine size='30' />,
    src: [sm.Social.Personal.Instagram]
  },
  {
    logo: <RiGithubFill size='30' />,
    src: [sm.Social.Personal.Github]
  },
  {
    logo: <RiTwitterXFill size='30' />,
    src: [sm.Social.Personal.Twitter]
  },
  {
    logo: <RiLinkedinBoxFill size='30' />,
    src: [sm.Work.Employee.Linkedin]
  }
]
export const BrandStyles = ({ children, customStyles }) => {
  return (
    <div className={`flex w-full h-auto items-center justify-center inset-x-0 ${customStyles}`}>
      <div className='flex px-6 gap-4 w-full relative flex-nowrap items-center justify-between max-w-[1024px]'>
        <div className='flex basis-0 flex-grow flex-nowrap sm:justify-start justify-center bg-transparent items-center no-underline text-medium whitespace-nowrap box-border'>
          {children}
        </div>
      </div>
    </div>
  )
}
export const navbar = [
  {
    navbarEs: [
      {
        id: 'home',
        title: 'Inicio'
      },
      {
        id: 'portfolio',
        title: 'Portafolio'
      },
      {
        id: 'about',
        title: 'Sobre mi'
      },
      {
        id: 'contact',
        title: 'Contactame'
      }
    ],
    navbarEn: [
      {
        id: 'home',
        title: 'Home'
      },
      {
        id: 'portfolio',
        title: 'Portfolio'
      },
      {
        id: 'about',
        title: 'About me'
      },
      {
        id: 'contact',
        title: 'Contact me'
      }
    ]
  }
]
export const HeroConst = [
  {
    HeroEs: [
      {
        description: 'Desarrollador Frontend con 2 años de experiencia'
      }
    ],
    HeroEn: [
      {
        description: 'Frontend Developer with 2 years of experience'
      }
    ],
    name: 'Eduardo Aguilar',
    image: me
  }
]
export const ProyectsConst = [
  {
    ProyectsEs: [
      {
        title: 'Proyectos',
        proyect1: {
          title: 'MALIT',
          description: 'Malit es una página hecha con mi equipo sin fines lucrativos, solo por experimentación',
          link: 'https://www.malit.com.mx/experimental_features_malit',
          github: 'https://github.com/JHUMBERTTO/Malit.git'
        }
      }
    ],
    ProyectsEn: [
      {
        title: 'Proyects',
        proyect1: {
          title: 'MALIT',
          description: 'Malit in an app made with my team without profit, just for experimentation',
          link: 'https://www.malit.com.mx/experimental_features_malit',
          github: 'https://github.com/JHUMBERTTO/Malit.git'
        }
      }
    ],
    image: malit
  }
]
export const AboutConst = [
  {
    AboutEs: [
      {
        title: 'Sobre mi',
        description: 'Soy un programador frontend con +3 años de experiencia, soy de la Ciudad de México y estoy dispuesto a tomar trabajos en linea o presenciales',
        titleTech: 'Tecnologias',
        componentsTechImg: [
          {
            image: <FaHtml5 />,
            alt: 'HTML',
            name: 'HTML',
            src: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
          },
          {
            image: <FaCss3Alt />,
            alt: 'CSS',
            name: 'CSS',
            src: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
          },
          {
            image: <SiJavascript />,
            alt: 'JavaScript',
            name: 'JavaScript',
            src: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
          },
          {
            image: <SiTypescript />,
            alt: 'TypeScript',
            name: 'TypeScript',
            src: 'https://www.typescriptlang.org/'
          },
          {
            image: <FaReact />,
            alt: 'React',
            name: 'React',
            src: 'https://reactjs.org/'
          },
          {
            image: <FaPython />,
            alt: 'Python',
            name: 'Python',
            src: 'https://www.python.org/'
          },
          {
            image: <SiSvelte />,
            alt: 'Svelte',
            name: 'Svelte',
            src: 'https://svelte.dev/'
          },
          {
            image: <SiTailwindcss />,
            alt: 'Tailwind CSS',
            name: 'Tailwind CSS',
            src: 'https://tailwindcss.com/'
          },
          {
            image: <SiRedux />,
            alt: 'Redux',
            name: 'Redux',
            src: 'https://redux.js.org/'
          },
          {
            image: <FaAngular />,
            alt: 'Angular',
            name: 'Angular',
            src: 'https://angular.io/'
          },
          {
            image: <TbBrandVite />,
            alt: 'Vite',
            name: 'Vite',
            src: 'https://vitejs.dev/'
          },
          {
            image: <SiAstro />,
            alt: 'Astro',
            name: 'Astro',
            src: 'https://astro.build/'
          },
          {
            image: <SiNextdotjs />,
            alt: 'Next.js',
            name: 'Next.js',
            src: 'https://nextjs.org/'
          },
          {
            image: <FaNode />,
            alt: 'Node.js',
            name: 'Node.js',
            src: 'https://nodejs.org/'
          }
        ]
      }
    ],
    AboutEN: [
      {
        title: 'About me',
        description: 'I am a frontend programmer with +3 years of experience, I am from Mexico City and I am willing to take online or in-person jobs',
        titleTech: 'Technologies',
        componentsTechImg: [
          {
            image: <FaHtml5 />,
            alt: 'HTML',
            name: 'HTML',
            src: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
          },
          {
            image: <FaCss3Alt />,
            alt: 'CSS',
            name: 'CSS',
            src: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
          },
          {
            image: <SiJavascript />,
            alt: 'JavaScript',
            name: 'JavaScript',
            src: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
          },
          {
            image: <SiTypescript />,
            alt: 'TypeScript',
            name: 'TypeScript',
            src: 'https://www.typescriptlang.org/'
          },
          {
            image: <FaReact />,
            alt: 'React',
            name: 'React',
            src: 'https://reactjs.org/'
          },
          {
            image: <FaPython />,
            alt: 'Python',
            name: 'Python',
            src: 'https://www.python.org/'
          },
          {
            image: <SiSvelte />,
            alt: 'Svelte',
            name: 'Svelte',
            src: 'https://svelte.dev/'
          },
          {
            image: <SiTailwindcss />,
            alt: 'Tailwind CSS',
            name: 'Tailwind CSS',
            src: 'https://tailwindcss.com/'
          },
          {
            image: <SiRedux />,
            alt: 'Redux',
            name: 'Redux',
            src: 'https://redux.js.org/'
          },
          {
            image: <FaAngular />,
            alt: 'Angular',
            name: 'Angular',
            src: 'https://angular.io/'
          },
          {
            image: <TbBrandVite />,
            alt: 'Vite',
            name: 'Vite',
            src: 'https://vitejs.dev/'
          },
          {
            image: <SiAstro />,
            alt: 'Astro',
            name: 'Astro',
            src: 'https://astro.build/'
          },
          {
            image: <SiNextdotjs />,
            alt: 'Next.js',
            name: 'Next.js',
            src: 'https://nextjs.org/'
          },
          {
            image: <FaNode />,
            alt: 'Node.js',
            name: 'Node.js',
            src: 'https://nodejs.org/'
          }
        ]
      }
    ]
  }
]
