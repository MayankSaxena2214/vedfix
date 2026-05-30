import { IMAGES } from "@/utils/images"
import PageContainer from "../common/PageContainer"
import { FaStar } from "react-icons/fa"
import PortfolioCard from "./PortfolioCard"

const PortfolioHighlights = () => {
    const data=[
        {
            title:"Food Delivery Landing Page",
            category:"Website Design",
            image:IMAGES.portfolio
        },
        {
            title:"Hill Stay Booking",
            category:"Website Design",
            image:IMAGES.portfolio
        },
        {
            title:"Plan My Trip",
            category:"Website Design",
            image:IMAGES.portfolio
        },
        {
            title:"Express Delivery App",
            category:"Mobile App Design",
            image:IMAGES.portfolio
        },
        {
            title:"Plan My Trip",
            category:"Mobile App Design",
            image:IMAGES.portfolio
        },
        {
            title:"AI Wellness App",
            category:"Mobile App Design",
            image:IMAGES.portfolio
        },
        {
            title:"Express Delivery Branding",
            category:"Branding & Identity",
            image:IMAGES.portfolio
        },
        {
            title:"Wizard Watch",
            category:"Admin Dashboard Design",
            image:IMAGES.portfolio
        },
        {
            title:"Visual creatives for modern brands.",
            category:"Graphic Design",
            image:IMAGES.portfolio
        },

    ]
  return (
    <PageContainer styles='bg-[linear-gradient(180deg,_rgba(214,0,192,0.02)_0%,_rgba(0,0,163,0.02)_100%)] py-20 '>

            <div className="flex flex-col items-center gap-[60px]">
                <div className="flex flex-col items-center gap-6">
                    <div className='bg-[#5D01B00D] text-[#5D01B0] px-4 py-[7px] rounded-full flex items-center gap-2.5'>
                        <FaStar size={16} />
                        <div className='leading-[30px] font-semibold uppercase'>Selected Work</div>
                    </div>
                    <div className='text-4xl font-bold flex items-center gap-2'>
                        <span className='text-[#5D01B0]'>Creative work </span>
                        built for modern brands.
                    </div>
                </div>
                <div className="grid grid-cols-3 w-full gap-9 justify-between items-stretch">
                    {
                        data.map((item,index)=>{
                            return <PortfolioCard item={item} key={index}/>
                        })
                    }
                </div>
            </div>
        </PageContainer>
  )
}

export default PortfolioHighlights
