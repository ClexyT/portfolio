import imagen from '../edurdo.jpeg'
import Image from 'next/image'
import { aboutMeEs, aboutMeEn } from '@constants'
const About = () => {
  const en = aboutMeEn
  const es = aboutMeEs
  return (
    <>
      <div className='flex justify-center '>
        <Image src={imagen} className='mt-10 rounded-full max-w-full max-h-full width={200} height={200}' alt='imagen' />
      </div>
      <div className='mt-10'>
        <p className='flex justify-center font-black text-4xl'>Eduardo Aguilar</p>
        <p className='flex justify-center font-medium text-xl mt-5'>Desarrollador Frontend con 2 años de experiencia</p>
      </div>
    </>
  )
}

export default About
