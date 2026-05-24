'use client'

import Image from "next/image"
import PageContainer from "../common/PageContainer"
import ThemeButton from "../common/ThemeButton"
import { IMAGES } from "@/utils/images"

const Herosection = () => {
  return (
    <PageContainer styles="py-[70px] flex flex-col items-center bg-gradient-to-b from-white via-white to-[#0000a332] ">
      <div className="flex flex-col gap-12 items-center  w-full  relative py-[128px]">
        <Image 
        alt=""
        src={IMAGES.stack2}
        height={62}
        width={62}
        className="absolute top-0 rounded-[12px] overflow-hidden border overflow-hidden border -translate-x-1/2 "
          
        />

        <Image 
        alt=""
        src={IMAGES.stack3}
        height={62}
        width={62}
        className="absolute top-8 left-1/8 rounded-[12px] overflow-hidden border  "
          
        />

        <Image 
        alt=""
        src={IMAGES.stack4}
        height={62}
        width={62}
        className="absolute top-8 right-1/8 rounded-[12px] overflow-hidden border  "
          
        />

        <Image 
        alt=""
        src={IMAGES.stack5}
        height={62}
        width={62}
        className="absolute bottom-8 left-1/8 rounded-[12px] overflow-hidden border  "
          
        />

        <Image 
        alt=""
        src={IMAGES.stack6}
        height={62}
        width={62}
        className="absolute bottom-8 right-1/8 rounded-[12px] overflow-hidden border  "
          
        />

        <Image 
        alt=""
        src={IMAGES.stack7}
        height={62}
        width={62}
        className="absolute top-1/2 left-0 rounded-[12px] overflow-hidden border  "
          
        />

        <Image 
        alt=""
        src={IMAGES.stack1}
        height={62}
        width={62}
        className="absolute top-1/2 right-0 rounded-[12px] overflow-hidden border  "
          
        />
        <div className='flex flex-col items-center gap-4 text-center'>
          <div className="text-[54px] text-center font-bold leading-[70px] text-[#000013]">
            <div> We Don’t Just Build Software</div>
            <div>We Solve Real Business Problems.</div>
          </div>


          <div className="text-[24px] text-center font-normal leading-[36px] text-[#000013]">
            <div>We deliver fast, reliable, and user-focused design </div>
          <div>solutions tailored to your business needs.</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ThemeButton
            renderComponent={() => <div>Start Your  Project</div>}
          />

          <ThemeButton
            containerStyles="bg-transparent border border-[#0000A3] text-[#0000A3]"
            renderComponent={() => <div>View Work</div>}
          />
        </div>

      </div>

    </PageContainer>
  )
}

export default Herosection
