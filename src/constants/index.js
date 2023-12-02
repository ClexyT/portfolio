import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaAngular, FaNode } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiSvelte, SiTailwindcss, SiRedux, SiAstro, SiNextdotjs } from 'react-icons/si'
import { TbBrandVite } from 'react-icons/tb'
import {
  RiInstagramLine,
  RiTwitterXFill,
  RiGithubFill,
  RiLinkedinBoxFill
} from 'react-icons/ri'
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
            image: <FaHtml5 size='50' className='text-orange-500' />,
            alt: 'HTML',
            name: 'HTML',
            src: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
          },
          {
            image: <FaCss3Alt size='50' className='text-blue-500' />,
            alt: 'CSS',
            name: 'CSS',
            src: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
          },
          {
            image: <SiJavascript size='50' className='text-yellow-300' />,
            alt: 'JavaScript',
            name: 'JavaScript',
            src: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
          },
          {
            image: <SiTypescript size='50' className='text-blue-600' />,
            alt: 'TypeScript',
            name: 'TypeScript',
            src: 'https://www.typescriptlang.org/'
          },
          {
            image: <FaReact size='50' className='text-cyan-400' />,
            alt: 'React',
            name: 'React',
            src: 'https://reactjs.org/'
          },
          {
            image: <FaPython size='50' className='text-yellow-600' />,
            alt: 'Python',
            name: 'Python',
            src: 'https://www.python.org/'
          },
          {
            image: <SiSvelte size='50' />,
            alt: 'Svelte',
            name: 'Svelte',
            src: 'https://svelte.dev/',
            color: 'text-indigo-600'
          },
          {
            image: <SiTailwindcss size='50' />,
            alt: 'Tailwind CSS',
            name: 'Tailwind CSS',
            src: 'https://tailwindcss.com/',
            color: 'text-indigo-600'
          },
          {
            image: <SiRedux size='50' />,
            alt: 'Redux',
            name: 'Redux',
            src: 'https://redux.js.org/',
            color: 'text-indigo-600'
          },
          {
            image: <FaAngular size='50' className='text-red-600' />,
            alt: 'Angular',
            name: 'Angular',
            src: 'https://angular.io/'
          },
          {
            image: <TbBrandVite size='50' className='text-purple-500' />,
            alt: 'Vite',
            name: 'Vite',
            src: 'https://vitejs.dev/'
          },
          {
            image: <SiAstro size='50' className='text-purple-800' />,
            alt: 'Astro',
            name: 'Astro',
            src: 'https://astro.build/'
          },
          {
            image: <SiNextdotjs size='50' className='text-slate-600' />,
            alt: 'Next.js',
            name: 'Next.js',
            src: 'https://nextjs.org/'
          },
          {
            image: <FaNode size='50' className='text-green-800' />,
            alt: 'Node.js',
            name: 'Node.js',
            src: 'https://nodejs.org/'
          }
        ]
      }
    ],
    AboutEn: [
      {
        title: 'About me',
        description: 'I am a frontend programmer with +3 years of experience, I am from Mexico City and I am willing to take online or in-person jobs',
        titleTech: 'Technologies',
        componentsTechImg: [
          {
            image: <FaHtml5 size='50' className='text-orange-500' />,
            alt: 'HTML',
            name: 'HTML',
            src: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
          },
          {
            image: <FaCss3Alt size='50' className='text-blue-500' />,
            alt: 'CSS',
            name: 'CSS',
            src: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
          },
          {
            image: <SiJavascript size='50' className='text-yellow-300' />,
            alt: 'JavaScript',
            name: 'JavaScript',
            src: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
          },
          {
            image: <SiTypescript size='50' className='text-blue-600' />,
            alt: 'TypeScript',
            name: 'TypeScript',
            src: 'https://www.typescriptlang.org/'
          },
          {
            image: <FaReact size='50' className='text-cyan-400' />,
            alt: 'React',
            name: 'React',
            src: 'https://reactjs.org/'
          },
          {
            image: <FaPython size='50' className='text-yellow-600' />,
            alt: 'Python',
            name: 'Python',
            src: 'https://www.python.org/'
          },
          {
            image: <SiSvelte size='50' className='text-orange-500' />,
            alt: 'Svelte',
            name: 'Svelte',
            src: 'https://svelte.dev/'
          },
          {
            image: <SiTailwindcss size='50' className='text-blue-400' />,
            alt: 'Tailwind CSS',
            name: 'Tailwind CSS',
            src: 'https://tailwindcss.com/'
          },
          {
            image: <SiRedux size='50' className='text-indigo-600' />,
            alt: 'Redux',
            name: 'Redux',
            src: 'https://redux.js.org/'
          },
          {
            image: <FaAngular size='50' className='text-red-600' />,
            alt: 'Angular',
            name: 'Angular',
            src: 'https://angular.io/'
          },
          {
            image: <TbBrandVite size='50' className='text-purple-500' />,
            alt: 'Vite',
            name: 'Vite',
            src: 'https://vitejs.dev/'
          },
          {
            image: <SiAstro size='50' className='text-purple-800' />,
            alt: 'Astro',
            name: 'Astro',
            src: 'https://astro.build/'
          },
          {
            image: <SiNextdotjs size='50' className='text-slate-600' />,
            alt: 'Next.js',
            name: 'Next.js',
            src: 'https://nextjs.org/'
          },
          {
            image: <FaNode size='50' className='text-green-800' />,
            alt: 'Node.js',
            name: 'Node.js',
            src: 'https://nodejs.org/'
          }

        ]
      }
    ]
  }
]
