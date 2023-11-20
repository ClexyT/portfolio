import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link } from '@nextui-org/react'
import { socialNetworks, navbar } from '@/constants'
import { GrLanguage } from 'react-icons/gr'
import DarkButton from './DarkButton'
import { useTranslate } from '@/useTranslate'

export default function NavApp () {
  const en = navbar[0].navbarEn
  const es = navbar[0].navbarEs
  const translate = useTranslate(en, es)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <a href='/' className='cursor-default font-semibold text-2xl hover:text-blue-800 dark:hover:text-blue-300'>{translate.isTranslate ? 'Mi Portafolio' : 'My Portfolio'} </a>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        {translate.Language.map((nav) => (
          <NavbarItem key={nav.id} isActive>
            <Link href={`#${nav.id}`} color='foreground' aria-current='page' underline='hover'>{nav.title}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex '>
          <div className='items-center flex gap-5 justify-center'>
            {socialNetworks.map(({ logo, src }) => (
              <Link key={src} href={src} target='_blank' className='transition-all duration-300 dark:text-white text-black hover:text-blue-800 dark:hover:text-blue-300' rel='noreferrer'>{logo}</Link>
            ))}
            <div className='flex'>
              <button onClick={translate.handleTranslate} className=' transition-all duration-300 dark:invert invert-0 text-white hover:fill-blue-800 dark:hover:fill-blue-300'>
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
        {translate.Language.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? 'primary' : index === translate.Language.length - 1 ? 'danger' : 'foreground'
              }
              className='w-full'
              href='#'
              size='lg'
            >
              {item}
              <button onClick={translate.handleTranslate} className=' transition-all duration-300 dark:invert invert-0  hover:fill-blue-800 dark:hover:fill-blue-300'>
                <GrLanguage size='27' className='text-[36px] hover:scale-110 hover:text-blue-800 dark:hover:text-blue-300 transition-all !sm:mr-10 bg-transparent border-none !sm:mr-10' />
              </button>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
