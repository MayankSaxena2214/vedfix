'use client'
import PageContainer from '../common/PageContainer'
import { IMAGES } from '@/utils/images'
import Image from 'next/image'
import ThemeButton from '../common/ThemeButton'

const WhatWeDo = () => {
    const  points=[
        {
            title:"Built for Results",
            desc:"We design solutions that improve engagement, simplify flows, and support business goals.",
            image:IMAGES.wwdi1
        },
        {
            title:"Practical Approach",
            desc:"Every decision is based on usability, clarity, and real user behavior not guesswork.",
            image:IMAGES.wwdi2
        }
    ]
  return (
    <PageContainer styles='py-[120px]'>
        <div className='flex items-center justify-between'>
            <div className='w-[48%]'>
                <Image
                    alt=""
                    src={IMAGES.whatwedoleft}
                    width={500}
                    height={300}
                    className='w-full '
                />
            </div>
            <div className='w-[48%] flex flex-col items-start gap-[54px]'>
                <div className='flex flex-col gap-12'>

                <div className='flex flex-col gap-2.5'>
                    <div className='text-[28px] font-bold text-[#0000A3]'>
                    We Build Smart & Creative 
Digital Experiences
                </div>
                <div className='text-[18px] text-[#000000] leading-8'>
                    We are a team of passionate designers and developers who specialize in creating stunning websites and mobile applications. Our mission is to help businesses establish a strong online presence and achieve their goals through innovative design and cutting-edge technology.
                </div>
                </div>

                <div className="flex flex-col gap-7">
                    {
                        points.map((item,index)=>{
                            return <div key={index} className='flex gap-[22px] items-stretch'>
                                <Image
                                    alt=""
                                    src={item.image}
                                    width={73}
                                    height={73}
                                />
                                <div className='flex flex-col gap-1'>
                                    <div className='text-[20px] font-semibold text-[#000013]'>
                                        {item.title}
                                    </div>
                                    <div className='text-[16px] text-[#000013] leading-6 font-normal'>
                                        {item.desc}
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
                </div>
                <ThemeButton
                    renderComponent={() => (
                        <div className='text-[16px] font-semibold text-white leading-7'>
                            More About Us
                        </div>
                    )}
                />
            </div>
            </div>
        
    </PageContainer>
  )
}

export default WhatWeDo
