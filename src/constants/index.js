import { RiInstagramLine, RiTwitterXFill, RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri'
import SM from '@/MediaTree.json'
const sm = SM[0].Links[0]

export const navbarEs = [
  {
    Home: 'Home',
    Portfolio: 'Portfolio',
    About: 'About',
    Contact: 'Contact'
  }
]

export const navbarEn = [
  {
    Home: 'Home',
    Portfolio: 'Portfolio',
    About: 'About',
    Contact: 'Contact'
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
