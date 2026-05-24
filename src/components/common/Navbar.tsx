'use client'

import PageContainer from './PageContainer'
import Image from 'next/image'
import { IMAGES } from '@/utils/images'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import ChatOnWhatsapp from './ChatOnWhatsapp'

const Navbar = () => {
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
  ]

  return (
    <PageContainer
      styles="flex items-center justify-between gap-20 bg-white border-b border-transparent bg-gradient-to-r from-[rgba(0,0,163,0.1)] to-[rgba(214,0,192,0.1)] bg-[length:100%_1px] bg-no-repeat bg-bottom"
    >
      <div className="flex items-center justify-between">
        <Image
          loading="eager"
          className="w-[137px] h-[36px]"
          src={IMAGES.logo}
          alt=""
          height={36}
          width={137}
        />
      </div>

      {/* Nav links */}
      <div className="flex items-center justify-center gap-5">
        {linksData.map((item, index) => {
          return (
            <Link
              href={item.link}
              key={index}
              className={`relative pb-2 text-base font-normal transition-all duration-200 ${
                item?.isActive
                  ? 'font-medium '
                  : 'text-black'
              }`}
            >
              {item?.title}

              {item?.isActive && (
                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#5D01B0] to-transparent" />
              )}
            </Link>
          )
        })}
      </div>

      <ChatOnWhatsapp/>
    </PageContainer>
  )
}

export default Navbar