import { FaStar } from "react-icons/fa"
import PageContainer from "../common/PageContainer"
import Image from "next/image"
import { IMAGES } from "@/utils/images"

const HowWeWork = () => {
    const data = [
        {
            title: "Discovery",
            desc: "Understanding your business goals, users and project requirements."
        },
        {
            title: "Strategy & Planning",
            desc: "Creating a clear roadmap, wireframes and user-focused structure."
        },
        {
            title: "Design",
            desc: "Designing modern and engaging interfaces with usability in mind."
        },
        {
            title: "Development",
            desc: "Building fast, scalable and responsive digital solutions."
        },
        {
            title: "Testing & Launch",
            desc: "Testing performance, refining details and launching smoothly."
        }
    ]
    return (
        <PageContainer styles='bg-[linear-gradient(180deg,_rgba(214,0,192,0.02)_0%,_rgba(0,0,163,0.02)_100%)] py-20 '>
            <div className="grid grid-cols-2 gap-13">
                <div className="flex flex-col items-start gap-[76px]">
                    <div className="flex flex-col items-start gap-6">
                        <div className='bg-[#5D01B00D] text-[#5D01B0] px-4 py-[7px] rounded-full flex items-center gap-2.5'>
                            <FaStar size={16} />
                            <div className='leading-[30px] font-semibold uppercase'>HOW WE WORK</div>
                        </div>

                        <div className="text-[#000013] flex flex-col gap-2">
                            <div className="text-[36px] leading-[36px] font-bold">Our Process Workflow</div>
                            <div className="text-lg leading-[30px] font-normal">A simple and structured process focused on creating modern
                                digital experiences for businesses.</div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        {
                            data.slice(0,3).map((item,index)=>{
                                return <div key={index} className="flex items-start gap-4">
                                    <div className="h-9 w-9 flex justify-center items-center rounded-full border border-[#D600C0] text-[#D600C0] text-sm font-semibold">{String(index+1).padStart(2,'0')}</div>
                                    <div className="text-[#000013] flex flex-col gap-1">
                                        <div className="text-xl font-semibold leading-[30px]">{item.title}</div>
                                        <div className="text-base font-normal leading-6">{item.desc}</div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>

                <div className="flex flex-col gap-10">
                    <div className="relative h-[320px]">
                        <Image
                            alt=""
                            src={IMAGES.howwework}
                            fill

                        />
                    </div>

                    <div className="flex flex-col gap-8">
                        {
                            data.slice(3).map((item,index)=>{
                                return <div key={index} className="flex items-start gap-4">
                                    <div className="h-9 w-9 flex justify-center items-center rounded-full border border-[#D600C0] text-[#D600C0] text-sm font-semibold">{String(index+4).padStart(2,'0')}</div>
                                    <div className="text-[#000013] flex flex-col gap-1">
                                        <div className="text-xl font-semibold leading-[30px]">{item.title}</div>
                                        <div className="text-base font-normal leading-6">{item.desc}</div>
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

export default HowWeWork
