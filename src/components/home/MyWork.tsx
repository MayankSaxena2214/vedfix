'use client'
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa"
import PageContainer from "../common/PageContainer"
import { IMAGES } from "@/utils/images"
import { useState } from "react";
import Image from "next/image";


const MyWork = () => {
    const projectsData = [
        {
            title: "Food Landing Page",
            tags: ["UI/UX Design", "Web Design", "Landing Page"],
            image: IMAGES.project1,
        },
        {
            title: "Food Delivery Mobile App Design",
            tags: ["UI/UX Design", "Mobile App", "User Flow"],
            image: IMAGES.project1,
        },
        {
            title: "Social Media Post & Carousel Design",
            tags: ["Social Media", "Creatives", "Branding"],
            image: IMAGES.project1,
        },
        {
            title: "Real Estate Website Design",
            tags: ["Web Design", "Property Listing", "UI/UX"],
            image: IMAGES.project1,
        },
        {
            title: "Fitness Mobile App UI",
            tags: ["Mobile App", "Fitness", "UI Design"],
            image: IMAGES.project1,
        },
        {
            title: "E-commerce Dashboard Design",
            tags: ["Dashboard", "Admin Panel", "UX Research"],
            image: IMAGES.project1,
        },
    ];
    const [currentStart, setCurrentStart] = useState(0);

    return (
        <PageContainer styles='py-[90px] bg-[#5D01B0]'>
            <div className='flex flex-col gap-[50px]'>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col items-start gap-5">
                        <div className='bg-[#FFFFFF0D] text-white border border-[#FFFFFF80] px-4 py-[7px] rounded-full flex items-center gap-2.5'>
                            <FaStar size={14} />
                            <div className='leading-[30px] font-semibold uppercase'>My Work</div>
                        </div>
                        <div className="flex flex-col text-white gap-2">
                            <div className='font-bold text-[36px]'>Work That Actually Delivers</div>
                            <div className='font-normal text-base leading-[18px]'>Projects where we fixed real problems and built experiences that actually work.</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <button
                            onClick={() => setCurrentStart(Math.max(0, currentStart - 1))}
                            disabled={currentStart === 0}
                            className={`bg-white p-3 rounded-full`}>
                            <FaChevronLeft />

                        </button>
                        <button
                            onClick={() => setCurrentStart(Math.min(projectsData.length - 3, currentStart + 1))}
                            disabled={currentStart >= projectsData.length - 3}
                            className={`bg-white p-3 rounded-full`}>
                            <FaChevronRight />
                        </button>
                    </div>
                </div>

                <div className="flex items-stretch justify-between">
                    {
                        projectsData.slice(currentStart, currentStart + 3).map((item, index) => {
                            return <div
                                key={index}
                                className={`rounded-[30px] overflow-hidden`}
                            >
                                <div className='bg-white flex flex-col gap-[14px] py-[30px] px-[18px]'>
                                    <div className="text-xl leading-[30px] font-semibold text-[#000013]">{item.title}</div>
                                    <div className="flex items-center  gap-2 flex-wrap">
                                        {
                                            item.tags.map((tag, idx) => {
                                                return <div
                                                    key={idx}
                                                    className='bg-[#F409DC] text-[#F5F5F5] font-bold text-xs leading-[30px] rounded-full px-[13.5px] py-1'
                                                >
                                                    {tag}
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                                <div>
                                    <Image
                                    alt=""

                                        src={item.image}
                                        height={243}
                                        width={370}
                                        className='w-full h-full object-cover'
                                        
                                    />
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </PageContainer>
    )
}

export default MyWork
