"use client"
import Image from "next/image"
import PageContainer from "./PageContainer"
import { IMAGES } from "@/utils/images"
import ChatOnWhatsapp from "./ChatOnWhatsapp"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
    const pathName = usePathname()

  const linksData = [
    {
      title: 'Home',
      link: '/',
      isActive: pathName == '/',
    },
    {
      title: 'Services',
      link: '/services',
      isActive: pathName == '/services',
    },
    {
      title: 'Portfolio',
      link: '/portfolio',
      isActive: pathName == '/portfolio',
    },
    {
      title: 'About',
      link: '/about',
      isActive: pathName == '/about',
    },
    {
      title: 'Contact',
      link: '/contact',
      isActive: pathName == '/contact',
    },
  ];

  const followUsData=[
    {
        icon:IMAGES.linkedin,
        link:"",
        title:"LinkedIn"
    },
    {
        icon:IMAGES.instagram,
        link:"",
        title:"Instagram"
    },
    {
        icon:IMAGES.facebook,
        link:"",
        title:"Facebook"
    },
  ];

  const getInTouch=[
    {
        link:"",
        image:IMAGES.email,
        title:"vedfix07@gmail.com"
    },
    {
        image:IMAGES.whatsapp,
        link:"",
        title:"+91-7903070211"
    },
  ]
    return (
        <PageContainer styles="bg-[#0000A30F] py-20">
            <div className="flex flex-col gap-6">

            <div className="flex items-start justify-between">
                <div className="w-[30%] flex flex-col items-start gap-8">
                    <div className=" flex flex-col gap-5">
                        <Image
                            loading="eager"
                            className="w-[137px] h-[36px]"
                            src={IMAGES.logo}
                            alt=""
                            height={36}
                            width={137}
                        />
                        <div className="text-lg font-normal leading-[26px] text-[#000013]">We fix and build websites, mobile apps, and brand experiences creating simple, user-focused solutions that deliver real results.</div>
                    </div>

                    <ChatOnWhatsapp/>
                </div>
                <div className="w-[60%] flex justify-between ">
                    <div className=" flex flex-col gap-5">
                        <div className="text-xl font-semibold text-[#000013]">Useful Links</div>
                        <div className="flex flex-col gap-4">
                            {
                                linksData.map((item,index)=>{
                                    return <Link className="text-base font-normal text-black" href={item.link} key={index}>
                                        {item.title}
                                    </Link>
                                })
                            }
                        </div>
                    </div>

                    <div className=" flex flex-col gap-5">
                        <div className="text-xl font-semibold text-[#000013]">Follow Us</div>
                        <div className="flex flex-col gap-4">
                            {
                                followUsData.map((item,index)=>{
                                    return <Link className="flex items-center gap-2 text-base font-normal text-black" href={item.link} key={index}>
                                        <Image
                                            src={item.icon}
                                            alt=""
                                            height={24}
                                            width={24}

                                        />
                                        <div className="text-base font-normal">{item.title}</div>
                                    </Link>
                                })
                            }
                        </div>
                    </div>

                    <div className=" flex flex-col gap-5">
                        <div className="text-xl font-semibold text-[#000013]">Get in Touch</div>
                        <div className="flex flex-col gap-4">
                            {
                                getInTouch.map((item,index)=>{
                                    return <Link className="flex items-center gap-2 text-base font-normal text-black" href={item.link} key={index}>
                                        <Image
                                            src={item.image}
                                            alt=""
                                            height={24}
                                            width={24}
                                            
                                        />
                                        <div className="text-base font-normal">{item.title}</div>
                                    </Link>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="border"/>
            <div className="font-normal text-base">
                © 2026 Vedfix Designs. All rights reserved.
            </div>
            </div>
        </PageContainer>
    )
}

export default Footer
