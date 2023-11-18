import useTranslate from '@/useTranslate'
import imagen from '../edurdo.jpeg'
import Image from 'next/image'
import { GrLanguage } from 'react-icons/gr'
const About = () => {
  const translate = useTranslate()
  return (
    <>
      <div className='flex justify-center '>
        <Image src={imagen} className='mt-10 rounded-full max-w-full max-h-full width={200} height={200}' alt='imagen' />
      </div>
      <div className='mt-10'>
        <p className='flex justify-center font-black text-4xl'>Eduardo Aguilar</p>
        <p className='flex justify-center font-medium text-xl mt-5'>{translate.isTranslate ? 'Desarrollador Frontend con 2 años de experiencia' : 'Frontend Developer with 2 years of experience'}</p>
        <button onClick={translate.handleTranslate} className=' transition-all duration-300 dark:invert invert-0 text-white hover:fill-blue-800 dark:hover:fill-blue-300'>
          <GrLanguage size='27' />
        </button>
      </div>
    </>
  )
}

export default About
