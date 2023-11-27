import { AboutConst, BrandStyles } from '@/constants'
import { useTranslate } from '@/useTranslate'
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
        <h1 className='flex sm:justify-start justify-center cursor-default font-semibold text-2xl'>
          {translate.Language.title}
        </h1>
      </BrandStyles>
      <h2 className='m-5'>{translate.Language.description}</h2>
      <BrandStyles>
        <h1 className='flex sm:justify-start justify-center cursor-default font-medium text-lg '>
          {translate.Language.titleTech}
        </h1>
      </BrandStyles>
      <div>
        <ul>
          <div class='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-7'>
            {techLogos.map((logo, index) => (
              <div key={index} class='flex items-center justify-center '>
                <Link href={logo.src} className={`hover:text-${logo.color}`}>
                  {logo.image}
                </Link>
              </div>
            ))}
          </div>

        </ul>
      </div>
    </div>
  )
}

export default About
