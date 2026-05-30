import CommonHeroSection from "@/components/common/CommonHeroSection"
import MovingStrap from "@/components/home/MovingStrap"
import StartYourProject from "@/components/home/StartYourProject"
import ServicesWeProvide from "@/components/services/ServicesWeProvide"


const ServicePage = () => {
  return (
    <div className=" ">
      <CommonHeroSection title="Services" text1="Home" text2="Services" text1Link="/" text2Link="/services"/>
      <MovingStrap/>
      <ServicesWeProvide/>
      <StartYourProject/>
    </div>
  )
}

export default ServicePage
