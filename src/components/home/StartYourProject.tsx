'use client'
import Image from "next/image"
import PageContainer from "../common/PageContainer"
import { IMAGES } from "@/utils/images"
import ThemeButton from "../common/ThemeButton"

const StartYourProject = () => {
  return (
    <PageContainer styles='relative py-15 bg-[radial-gradient(47.41%_50%_at_50%_50%,rgba(93,1,176,0.2)_0%,rgba(93,1,176,0)_100%)]'>
        <Image
            className="absolute bottom-15 left-0"
            src={IMAGES.sypimg}
            alt="Start Your Project"
            width={100}
            height={100}
        />

        <Image
            className="absolute top-15 right-0 rotate-180"
            src={IMAGES.sypimg}
            alt="Start Your Project"
            width={100}
            height={100}
        />
        <div className='flex justify-center flex-col items-center gap-12'>
            <div className='flex flex-col gap-2.5 text-center'>
                <div className='text-[#000013] font-bold text-[54px] leading-[70px]'>Let’s Build Something That <br /> Actually Works</div>
                <div className='text-[#000013] text-2xl leading-[40px]'>Have an idea or facing issues with your current product? <br /> Let’s fix it and create a better experience for your users.</div>
            </div>
            <ThemeButton
                renderComponent={() => (
                    <div className='text-[16px] font-semibold text-white leading-7'>
                        Start Your Project
                    </div>
                )}
            />
        </div>
    </PageContainer>
  )
}

export default StartYourProject
