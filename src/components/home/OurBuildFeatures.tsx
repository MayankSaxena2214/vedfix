'use client'
import { FaStar } from "react-icons/fa"
import PageContainer from "../common/PageContainer"
import ThemeButton from "../common/ThemeButton"
import { IMAGES } from "@/utils/images"
import Image from "next/image"

const OurBuildFeatures = () => {
    const data=[
        {
            image:IMAGES.btfi1,
            title:"Plan & Structure",
            desc:"Creating wireframes and defining clear user flows before moving to design."
        },
        {
            image:IMAGES.btfi2,
            title:"Product Focused Thinking",
            desc:"We focus on usability, flow, and clarity not just visuals."
        },
        {
            image:IMAGES.btfi3,
            title:"Clean & Scalable Design",
            desc:"Design systems that are easy to use, maintain, and grow with your product."
        },
        {
            image:IMAGES.btfi4,
            title:"Results that Matter",
            desc:"Better experience, smoother journeys, and improved user engagement."
        },
        
    ]
  return (
    <PageContainer styles='py-[80px]'>
        <div className='flex items-center justify-between '>
            <div className='flex flex-col items-start gap-12 w-[48%]'>
                <div className='flex flex-col items-start gap-5'>
                    <div className='bg-[#5D01B00D] text-[#5D01B0] px-4 py-[7px] rounded-full flex items-center gap-2.5'>
                        <FaStar size={16}/>
                        <div className='leading-[30px] font-semibold uppercase'>Why Choose us</div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div>
                            <div className='leading-[55px] text-[#000013] text-[36px] font-bold'>Built to Fix What’s Holding
                            </div>
                            <div className='leading-[55px] text-[#000013] text-[36px] font-bold'>
Your Product Back</div>
                        </div>

                        <div>We don’t just focus on visuals we focus on solving real product <br/> problems. Our approach is simple: understand, fix, and build <br/> experiences that actually work for users and businesses.</div>

                    </div>
                </div>
                <ThemeButton
                    renderComponent={() => (
                        <div className='text-[16px] font-semibold text-white leading-7'>
                            Contact Us
                        </div>
                    )}
                />


            </div>
            <div className='w-[48%] h-full grid grid-cols-2 gap-[30px]'>
                <div className='flex flex-col gap-6 pt-[43px]'>
                    {
                        data.slice(0,2).map((item,index)=>{
                            return <div 
                            className={`px-[25px] py-[30px] flex flex-col gap-3.5 ${index==0 ?'bg-[#5D01B0] text-white':'text-[#000013] bg-[#5D01B00D]'} rounded-[30px] `}
                            key={index}>
                                <Image
                                    alt=""
                                    src={item.image}
                                    width={52}  
                                    height={52}
                                />
                                <div className="flex flex-col gap-[5px]">
                                    <div className={`text-[18px] font-semibold `}>
                                        {item.title}
                                    </div>
                                    <div className={`pr-8 text-[16px]  leading-[24px]`}>
                                        {item.desc}
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className='flex flex-col gap-6 '>
                    {
                        data.slice(2,4).map((item,index)=>{
                            return <div 
                            className={`px-[25px] py-[30px] flex flex-col gap-3.5 ${index==1 ?'bg-[#5D01B0] text-white':'text-[#000013] bg-[#5D01B00D]'} rounded-[30px] `}
                            key={index}>
                                <Image
                                    alt=""
                                    src={item.image}
                                    width={52}  
                                    height={52}
                                />
                                <div className="flex flex-col gap-[5px]">
                                    <div className={`text-[18px] font-semibold `}>
                                        {item.title}
                                    </div>
                                    <div className={` text-[16px]  leading-[24px]`}>
                                        {item.desc}
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    </PageContainer>
  )
}

export default OurBuildFeatures
