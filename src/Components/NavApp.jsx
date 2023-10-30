import React, { useEffect } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Switch, VisuallyHidden, useSwitch, Button, Link } from '@nextui-org/react'
import english from '@/Translate/en/Global.json'
import espanol from '@/Translate/es/Global.json'
import { RiInstagramLine, RiTwitterXFill, RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri'
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
  // translate function
  // useEffect(() => {
  //   if (navigator.language.startsWith('es')) {
  //     setTranslate(true)
  //   } else {
  //     setTranslate(false)
  //   }
  // }, [])
  const TranslateButton = () => {
    setTranslate(() => {
      if (true) {
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
        <NavbarItem className='hidden lg:flex'>
          <div className='flex ml-[3rem] items-center justify-center gap-7 '>
            {socialNetworks.map(({ logo, src }) => (
              <Link key={src} href={src} target='_blank' className='transition-all duration-300 dark:text-white text-black hover:text-blue-800 dark:hover:text-blue-300' rel='noreferrer'>{logo}</Link>
            ))}
          </div>
        </NavbarItem>
        <NavbarItem>
          <DarkButton />
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
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
