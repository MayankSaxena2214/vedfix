'use client'

import { IMAGES } from "@/utils/images"
import PageContainer from "../common/PageContainer"
import Image from "next/image"
import Link from "next/link"

const OurServices = () => {
    const servicesData=[
        {
            title:"UI/UX Design",
            description:"User-focused design for apps, websites, and dashboards with clear structure and usability.",
            link:"/",
            image:IMAGES.si1
        },
        {
            title:"Graphic & Branding Design",
            description:"Logos, banners, posters, and brand visuals that build a strong and consistent identity.",
            link:"/",
            image:IMAGES.si2
        },
         {
            title:"Social Media Creatives",
            description:"Logos, banners, posters, and brand visuals that build a strong and consistent identity.",
            link:"/",
            image:IMAGES.si3
        },
         {
            title:"Mobile App Design & Development",
            description:"Designing mobile experiences that are simple to use, visually clean, and built for real user behavior.",
            link:"/",
            image:IMAGES.si5
        },
         {
            title:"Web Design & Development",
            description:"Designing and building modern, responsive websites that are fast, user-friendly, and built to perform.",
            link:"/",
            image:IMAGES.si4
        }
    ]

    
  return (
    <PageContainer styles='py-[120px]'>
        <div className='flex flex-col gap-[50px]'>
            <div className='flex items-start justify-between'>
                <div className="flex flex-col gap-2">
                    <div className='text-[36px] font-bold text-[#000013]'>Services We Provide</div>
                    <div className='text-lg font-normal text-[#000013]'>Design and development solutions focused on clarity, usability, and real results.</div>
                </div>
                <div className="px-[10px] py-[16px] text-[#0000A3] text-base leading-7 font-semibold">
                    View All Services
                </div>
            </div>
            <div className='flex flex-col gap-[45px] items-ceter w-full'>
                <div  className="flex hide-scrollbar items-stretch justify-start gap-5 overflow-x-auto w-full py-2">
                {
                    servicesData.map((item,index)=>{
                        return <div  key={index}
                            className='w-[284px]  flex-shrink-0 p-[21px] flex flex-col gap-[27px] justify-between rounded-[30px] border'
                        >
                            <div className="gap-5 flex flex-col">
                                <Image
                                    alt=""
                                    src={item.image}
                                    width={65}
                                    height={300}
                                />
                                <div className="flex flex-col gap-1">
                                    <div className="text-xl leading-[30px] font-semibold text-[#000013]">{item.title}</div>
                                    <div className="text-sm leading-[22px] font-normal text-[#000013]">{item.description}</div>
                                </div>

                            </div>

                            <Link className='text-base leading-7 font-sembold text-[#0000A3]' href={item.link}>Learn More</Link>
                        </div>
                    })
                }
                </div>
            </div>
        </div>
    </PageContainer>
  )
}

export default OurServices
