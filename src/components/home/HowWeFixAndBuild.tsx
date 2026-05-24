import Image from 'next/image'
import PageContainer from '../common/PageContainer'
import { IMAGES } from '@/utils/images'

const HowWeFixAndBuild = () => {
    const data = [
        {
            title: " Understand the Problem",
            desc: "I start by understanding your business, users, and what’s actually not working.",
            image: IMAGES.fxi1
        },
        {
            title: "Plan & Structure",
            desc: "Creating wireframes and defining clear user flows before moving to design.",
            image: IMAGES.fxi2
        },
        {
            title: "Design & Build",
            desc: "Designing clean UI and preparing development-ready solutions.",
            image: IMAGES.fxi3
        },
        {
            title: "Test & Improve",
            desc: "Refining the experience based on usability and final feedback.",
            image: IMAGES.fxi4
        }
    ]
    return (
        <PageContainer styles='py-[80px] h-[700px] bg-gradient-to-b from-[#FFE1FC] to-[#fff] '>
            <div className='relative grid grid-cols-4 justify-between gap-[72px] h-full'>
                <div className='absolute top-0 left-0 w-full flex flex-col items-center justify-center gap-2.5 text-center'>
                    <div className='text-[36px] text-center font-bold text-[#000013] leading-9'>How We Fix & Build</div>
                    <div className='text-lg text-[#000013] leading-[30px] font-normal'>
                        <div>A structured process focused on fixing what matters</div>
                        <div>and building experiences that work.</div>
                    </div>
                </div>
                {
                    data.map((item, index) => {
                        return <div
                            className={`flex flex-col items-center gap-[17px]  h-full ${index == 0 || index == data.length - 1 ? '' : 'justify-end'}`}
                            key={index}>
                            <Image

                                src={item.image}
                                alt={item.title}
                                width={200}
                                height={200}
                            />
                            <div className="flex flex-col items-center text-center gap-1.5">
                                <div className='text-xl leading-[30px] font-semibold text-[#000013]'>
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
        </PageContainer>
    )
}

export default HowWeFixAndBuild
