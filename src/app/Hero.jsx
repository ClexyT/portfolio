import { useTranslate } from '@/useTranslate'
import { HeroConst } from '@/constants'
import Image from 'next/image'
const Hero = () => {
  const heroObject = HeroConst[0]
  const es = heroObject.HeroEs[0]
  const en = heroObject.HeroEn[0]
  const heroName = heroObject.name
  const imagen = heroObject.image
  const translate = useTranslate(en, es)
  return (
    <div id='home'>
      <div className='flex justify-center '>
        <Image src={imagen} className='mt-10 rounded-full max-w-full max-h-full width={200} height={200}' alt='imagen' />
      </div>
      <div className='mt-10'>
        <p className='flex justify-center font-black text-4xl'>{heroName}</p>
        <p className='flex justify-center font-medium text-xl mt-5'>{translate.Language.description}</p>
      </div>
    </div>
  )
}
export default Hero
