import React, { useEffect } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Switch, VisuallyHidden, useSwitch, Button, Link } from '@nextui-org/react'
import english from '@/Translate/en/Global.json'
import espanol from '@/Translate/es/Global.json'
import { RiInstagramLine, RiTwitterXFill, RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri'
import { GrLanguage } from 'react-icons/gr'
import SM from '@/MediaTree.json'
import DarkButton from './DarkButton'

const sm = SM[0].Links[0]
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
export default function NavApp () {
  const en = english[0].en.navbar
  const es = espanol[0].es.navbar
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isTranslate, setTranslate] = React.useState(() => {
    if (navigator.language.startsWith('es')) {
      return (true)
    } else {
      return (false)
    }
  })
  const enMenuItems = [
    en.Home,
    en.Portfolio,
    en.About,
    en.Contact
  ]
  const esMenuItems = [
    es.Home,
    es.Portfolio,
    es.About,
    es.Contact
  ]
  const TranslateButton = () => {
    setTranslate(() => {
      if (isTranslate === true) {
        return false
      } else {
        return true
      }
    })
  }
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <h1 className=' cursor-default hover:text-blue-800 dark:hover:text-blue-300'>{isTranslate ? 'My Portfolio' : 'Mi Portafolio'}</h1>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <Link href='#' color='foreground' underline='none'>
            {isTranslate ? en.Home : es.Home}
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href='#' color='foreground' underline='none'>
            {isTranslate ? en.Porfolio : es.Porfolio}
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href='#' color='foreground' underline='none'>
            {isTranslate ? en.About : es.About}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='#' color='foreground' underline='none'>
            {isTranslate ? en.Contact : es.Contact}
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex '>
          <div className='items-center flex gap-5 justify-center'>
            {socialNetworks.map(({ logo, src }) => (
              <Link key={src} href={src} target='_blank' className='transition-all duration-300 dark:text-white text-black hover:text-blue-800 dark:hover:text-blue-300' rel='noreferrer'>{logo}</Link>
            ))}
            <div className='flex'>
              <button onClick={TranslateButton} className=' transition-all duration-300 dark:invert invert-0 text-white hover:fill-blue-800 dark:hover:fill-blue-300'>
                <GrLanguage size='27' />
              </button>
              <div className='pl-8 pt-[0.12rem]'>
                <DarkButton />
              </div>
            </div>
          </div>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {[isTranslate ? esMenuItems : enMenuItems].map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? 'primary' : index === [isTranslate ? esMenuItems : enMenuItems].length - 1 ? 'danger' : 'foreground'
              }
              className='w-full'
              href='#'
              size='lg'
            >
              {item}
              <button onClick={TranslateButton} className=' transition-all duration-300 dark:invert invert-0  hover:fill-blue-800 dark:hover:fill-blue-300'>
                <GrLanguage size='27' className='text-[36px] hover:scale-110 hover:text-blue-800 dark:hover:text-blue-300 transition-all !sm:mr-10 bg-transparent border-none !sm:mr-10' />
              </button>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
