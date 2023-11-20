import { AboutConst, BrandStyles } from '@/constants'
import { useTranslate } from '@/useTranslate'
const About = () => {
  const About = AboutConst[0]
  const en = About.AboutEn[0]
  const es = About.AboutEs[0]
  const translate = useTranslate(en, es)
  return (
    <div id='about'>
      <BrandStyles>
        <h1 className='flex sm:justify-start justify-center cursor-default font-semibold text-2xl hover:text-blue-800 dark:hover:text-blue-300'>{translate.Language.title}</h1>
      </BrandStyles>
    </div>
  )
}

export default About
