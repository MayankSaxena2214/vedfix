import Herosection from "@/components/home/Herosection"
import HowWeFixAndBuild from "@/components/home/HowWeFixAndBuild"
import MovingStrap from "@/components/home/MovingStrap"
import MyWork from "@/components/home/MyWork"
import OurBuildFeatures from "@/components/home/OurBuildFeatures"
import OurServices from "@/components/home/OurServices"
import StartYourProject from "@/components/home/StartYourProject"
import WhatWeDo from "@/components/home/WhatWeDo"

const Homepage = () => {
  return (
    <div>
      <Herosection/>
      <MovingStrap/>
      <WhatWeDo/>
      <OurServices/>
      <HowWeFixAndBuild/>
      <OurBuildFeatures/>
      <MyWork/>
      <StartYourProject/>
    </div>
  )
}

export default Homepage
