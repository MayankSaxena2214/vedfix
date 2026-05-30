import Image from 'next/image';
import React from 'react'
interface ItemCard{
    title:string;
    category:string;
    image:string;
}
interface PortfolioCardProps{
    item:ItemCard
}
const PortfolioCard = ({item}:PortfolioCardProps) => {
  return (
    <div className='rounded-t-[30px] overflow-hidden'>
        <div className='bg-[#0000A30A] px-[30px]'>
            <div className="relative h-[472px]">
                <Image
                    alt=''
                    src={item.image}
                    fill
                    className='object-cover'
                />
            </div>
        </div>
        <div className='flex flex-col gap-1.5 py-5 text-[#000013]'>
            <div className='text-xl font-semibold leading-[30px]'>{item.title}</div>
            <div className='text-base leading-6 font-normal'>{item.category}</div>
        </div>
    </div>
  )
}

export default PortfolioCard
