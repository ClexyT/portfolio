import { RiInstagramLine, RiTwitterXFill, RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri'
import SM from '@/MediaTree.json'
const sm = SM[0].Links[0]

export const navbarEs = [
  {
    Home: 'Inicio',
    Portfolio: 'Portafolio',
    About: 'Sobre mi',
    Contact: 'Contactame'
  }
]

export const navbarEn = [
  {
    Home: 'Home',
    Portfolio: 'Portfolio',
    About: 'About me',
    Contact: 'Contact me'
  }
]

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
