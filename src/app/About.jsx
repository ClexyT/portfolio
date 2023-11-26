import { AboutConst, BrandStyles } from '@/constants'
import { useTranslate } from '@/useTranslate'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  const aboutData = AboutConst[0]
  const en = aboutData.AboutEn[0]
  const es = aboutData.AboutEs[0]
  const translate = useTranslate(en, es)
  const techLogos = translate.Language.componentsTechImg

  return (
    <div id='about'>
      <BrandStyles>
        <h1 className='flex sm:justify-start justify-center cursor-default font-semibold text-2xl hover:text-blue-800 dark:hover:text-blue-300'>
          {translate.Language.title}
        </h1>
      </BrandStyles>
      <h2 className='m-5'>{translate.Language.description}</h2>
      <BrandStyles>
        <h1 className='flex sm:justify-start justify-center cursor-default font-medium text-lg hover:text-blue-800 dark:hover:text-blue-300'>
          {translate.Language.titleTech}
        </h1>
      </BrandStyles>
      <div>
        <ul>
          {techLogos.map((logo, index) => (
            <li key={index}>
              <Link href={logo.src}>
                {logo.image}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default About
