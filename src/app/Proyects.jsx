import { BrandStyles, ProyectsConst } from '@/constants'
import { useTranslate } from '@/useTranslate'
import { FaLink } from 'react-icons/fa6'
import { FiGithub } from 'react-icons/fi'
import Image from 'next/image'
import Link from 'next/link'
const Proyects = () => {
  const Proyects = ProyectsConst[0]
  const en = Proyects.ProyectsEn[0]
  const es = Proyects.ProyectsEs[0]
  const translate = useTranslate(en, es)
  return (
    <div id='portfolio'>
      {/* Header Section */}
      <BrandStyles>
        <h1 className='flex sm:justify-start justify-center cursor-default font-semibold text-2xl hover:text-blue-800 dark:hover:text-blue-300'>{translate.Language.title}</h1>
      </BrandStyles>
      {/* Project Section */}
      <div className='flex flex-col-reverse sm:flex-row w-full h-auto items-center justify-center inset-x-0 backdrop-saturate-150 bg-background/70'>
        <div className='flex flex-col sm:flex-row py-10 px-6 w-full relative items-center justify-between max-w-[1024px]'>
          <div className='flex items-center'>
            <Image src={Proyects.image} alt='imagen' className='w-[30rem]' />
          </div>
          <div className='ml-0 sm:ml-[7rem] mt-6 sm:mt-0'>
            <h1 className='flex items-start justify-center font-bold text-xl mb-5'>{translate.Language.proyect1.title}</h1>
            <p className='px-10 py-5'>{translate.Language.proyect1.description}</p>
            <div className='flex flex-row gap-8 justify-center mt-6'>
              <Link href={translate.Language.proyect1.link} target='_blank' rel='noreferrer'><FaLink size={60} /></Link>
              <Link href={translate.Language.proyect1.github} target='_blank' rel='noreferrer'><FiGithub size={60} /></Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Proyects
