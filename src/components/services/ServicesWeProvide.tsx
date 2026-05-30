import React from 'react'
import PageContainer from '../common/PageContainer'
import { FaStar } from 'react-icons/fa'
import { IMAGES } from '@/utils/images'
import ServiceCard from './ServiceCard'

const ServicesWeProvide = () => {
    const data=[
        {
            image:IMAGES.sc1,
            title:"UI/UX Design",
            desc:"Clean, user-focused interfaces designed for websites, mobile apps, and dashboards with better usability and clear experiences.",
            link:"/"
        },
        {
            image:IMAGES.sc2,
            title:"Web Design & Development",
            desc:"Modern, responsive websites designed for smooth performance and better user experience.",
            link:"/"
        },
        {
            image:IMAGES.sc3,
            title:"Mobile App Design",
            desc:"Simple and scalable mobile app designs focused on usability, smooth navigation, and real user behavior.",
            link:"/"
        },
        {
            image:IMAGES.sc4,
            title:"Graphic & Branding Design",
            desc:"Professional branding solutions for a strong, consistent, and memorable brand identity.",
            link:"/"
        },
        {
            image:IMAGES.sc5,
            title:"Branding & Identity",
            desc:"Complete branding solutions that help businesses create a consistent, professional, and memorable visual presence.",
            link:"/"
        },
        {
            image:IMAGES.sc6,
            title:"Social Media Creatives",
            desc:"Engaging social media creatives designed for promotions, branding, campaigns, and better audience engagement.",
            link:"/"
        },
        {
            image:IMAGES.sc7,
            title:"Dashboard Design",
            desc:"Smart and organized dashboard designs focused on data clarity, usability, and easy business management.",
            link:"/"
        },
        {
            image:IMAGES.sc8,
            title:"Deployment & Support",
            desc:"Reliable deployment guidance and ongoing support to help digital products run smoothly after launch.",
            link:"/"
        },
        {
            image:IMAGES.sc9,
            title:"Custom Software",
            desc:"Tailored software solutions designed around business needs, workflows, and scalable digital operations.",
            link:"/"
        },
    ]
    return (
        <PageContainer styles='bg-[linear-gradient(180deg,_rgba(214,0,192,0.02)_0%,_rgba(0,0,163,0.02)_100%)] py-20 '>

            <div className="flex flex-col items-center gap-[60px]">
                <div className="flex flex-col items-center gap-6">
                    <div className='bg-[#5D01B00D] text-[#5D01B0] px-4 py-[7px] rounded-full flex items-center gap-2.5'>
                        <FaStar size={16} />
                        <div className='leading-[30px] font-semibold uppercase'>Our Expertise</div>
                    </div>
                    <div className='text-4xl font-bold flex items-center gap-2'>
                        <span className='text-[#5D01B0]'>Services</span>
                        We Provide
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-9 justify-between items-stretch">
                    {
                        data.map((item,index)=>{
                            return <ServiceCard item={item} key={index}/>
                        })
                    }
                </div>
            </div>
        </PageContainer>
    )
}

export default ServicesWeProvide
