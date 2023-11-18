import { RiInstagramLine, RiTwitterXFill, RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri'
import SM from '@/MediaTree.json'
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
export const navbarEs = [
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
]

export const navbarEn = [
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
