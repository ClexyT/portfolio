import { BrandStyles } from '@/constants'
import { useTranslate } from '@/useTranslate'
const About = () => {
  const translate = useTranslate()
  return (
    <div id='about'>
      <BrandStyles>
        <h1 className='flex sm:justify-start justify-center cursor-default font-semibold text-2xl hover:text-blue-800 dark:hover:text-blue-300'>{translate.Language.title}</h1>
      </BrandStyles>
    </div>
  )
}

export default About
