import { IMAGES } from '@/utils/images'
import Image from 'next/image'
import Link from 'next/link'

interface CommonHeroSectionProps{
  title:string;
  text1?:string,
  text2?:string;
  text1Link?:string;
  text2Link?:string;
}
const CommonHeroSection = ({
  title="",
  text1="",
  text2="",
  text1Link="/",
  text2Link="/"
}:CommonHeroSectionProps) => {
  return (
    <div className='relative h-[260px] flex justify-center items-center flex-col gap-3'>
      <div className='absolute inset-0 '>

      <Image 
      src={IMAGES.herobg} 
      height={260}
      width={1200}
      alt="Hero Background" 
      className='w-full  h-full object-cover' />
      </div>
      <div className='z-10 flex flex-col gap-3 items-center'>
          <div className='text-[40px] font-bold text-[#000013]'>{title}</div>
          <div className="flex items-center gap-2 font-normal text-xl text-[#000013CC]">
            <Link href={text1Link}>{text1}</Link>
            <div>/</div>
            <Link href={text2Link} className='text-[#5D01B0] '>{text2}</Link>
          </div>
      </div>
    </div>
  )
}

export default CommonHeroSection
