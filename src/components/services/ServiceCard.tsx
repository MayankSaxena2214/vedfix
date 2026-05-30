import Image from "next/image";
import Link from "next/link";

interface ItemCardProps{
    image:string;
    title:string;
    desc:string;
    link:string;
}
interface ServiceCardProps{
    item:ItemCardProps;
}
const ServiceCard = ({item}:ServiceCardProps) => {
  return (
    <div className="p-[27px] h-full border rounded-[30px] overflow-hidden flex flex-col gap-[37px]">
        <div className="relative h-[91px] w-[91px] ">

        <Image
        alt=""
           fill
            src={item.image}
            className=""
        />
        </div>
        <div className="flex flex-col h-full gap-[52px] justify-between">
            <div className="flex flex-col gap-2.5">
                <div className="text-[#000013] text-[30px] font-semibold leading-[40px]">{item.title}</div>
                <div className="text-[#000013] text-[16px] font-normal leading-[26px]">{item.desc}</div>
            </div>
            <Link className="text-[#0000A3] text-lg font-semibold leading-7" href={item.link}>Learn More</Link>
        </div>
    </div>
  )
}

export default ServiceCard
