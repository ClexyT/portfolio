
import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from '@nextui-org/navbar'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import english from '@/Translate/en/Global.json'
import espanol from '@/Translate/es/Global.json'
import { RiInstagramLine, RiTwitterXFill, RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri'

export const socialNetworks = [
  {
    logo: <RiInstagramLine size="40" />,
    src: "https://instagram.com/_jared1x_",
  },
  {
    logo: <RiGithubFill size="40" />,
    src: "https://github.com/vaancillo",
  },
  {
    logo: <RiTwitterXFill size="40" />,
    src: "https://twitter.com/jaredmazapann",
  },
  {
    logo: <RiLinkedinBoxFill size="40" />,
    src: "www.linkedin.com/in/jared-p-9aba09271",
  }
];
export default function NavApp () {
  const en = english[0].en.navbar
  const es = espanol[0].es.navbar
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isTranslate, setTranslate] = React.useState(false)
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

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <h1 className=' cursor-default hover:text-blue-500'>{isTranslate ? 'My Portfolio' : 'Mi Portafolio'}</h1>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href='#' aria-current='page'>
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
        <div className='flex items-center justify-center gap-7'>
                        {socialNetworks.map(({ logo, src }) => (
                            <Link key={src} href={src} target="_blank" className='transition-all duration-300 hover:text-[#838383]'>{logo}</Link>
                        ))}
        </div>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color='primary' href='#' variant='flat'>

          </Button>
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
