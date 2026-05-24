import { IMAGES } from "@/utils/images";
import Image from "next/image";
import React from "react";

const MovingStrap = () => {
  const data = [
    "Website Design",
    "App Design",
    "UI/UX Design",
    "Graphic Design",
    "Branding",
    "App Development",
    "Web Development",
    "E-commerce Solutions",
    "Wireframing",
    "Prototyping",
    "User Research",
  ];

  return (
    <div className="w-full overflow-hidden bg-[#5D01B0]  py-6">
      <div className="flex w-max animate-marquee gap-10">
        {[...data, ...data,...data].map((item, index) => (
          <div
            key={index}
            className="whitespace-nowrap flex items-center gap-6"
          >
            <Image
                alt=""
                src={IMAGES.strapicon}
                height={30}
                width={30}
            />
            
            <div
                className="whitespace-nowrap text-[28px] font-bold text-[#FEFEFE]"
            >

            {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovingStrap;