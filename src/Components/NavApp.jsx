import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Switch, VisuallyHidden, useSwitch, Button, Link } from '@nextui-org/react'
import { socialNetworks, navbarEn, navbarEs } from '@/constants'
import { GrLanguage } from 'react-icons/gr'
import DarkButton from './DarkButton'

export default function NavApp () {
  const en = navbarEn
  const es = navbarEs
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
          <div>
            <ul>
              {[isTranslate ? enMenuItems : esMenuItems].map((nav,index) => (
              <li
                
              >
                <Link href='/home' color='foreground' underline='none'>{}</Link>
              </li>
              ))}
            </ul>
          </div>
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
