import { RiInstagramLine, RiTwitterXFill, RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri'
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
      }
  ],
  AboutEn:[

  ]
  }
]