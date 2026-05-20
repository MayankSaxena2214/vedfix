import { cn } from "@/lib/utils"
import Link from "next/link";
import React from "react";
import { RiWhatsappFill } from "react-icons/ri"

interface ChatOnWhatsappProps{
    mainContainerStyle?:string;
}
const ChatOnWhatsapp = ({mainContainerStyle}:ChatOnWhatsappProps) => {
  return (
    <Link target="_blank" href={'https://wa.me/917903070211?text="Hi I want to connect you"'} className={
        cn(
            'flex items-center gap-3 py-2 px-13 rounded-full bg-[#0000A30A] border border-[#0000A333]',
            mainContainerStyle
        )
    }>
      <RiWhatsappFill size={36}/>
        <div className="flex flex-col gap-1 text-[#0000A3]">
            <div className="text-xs font-normal leading-3">Chat on WhatsApp</div>
            <div className="leading-4.5 text-base font-semibold">+91-7903070211</div>
        </div>
    </Link>
  )
}

export default React.memo(ChatOnWhatsapp);
