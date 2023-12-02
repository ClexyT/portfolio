'use client'

import Hero from './Hero'
import Proyects from './Proyects'
import About from './About'
import Testimonials from './Testimonials'
export default function page () {
  return (
    <>
      <Hero />
      <div className='my-[10rem]' />
      <Proyects />
      <div className='my-[10rem]' />
      <About />
      <div className='my-[10rem]' />
      <Testimonials />
      <div className='my-[10rem]' />
    </>
  )
}
