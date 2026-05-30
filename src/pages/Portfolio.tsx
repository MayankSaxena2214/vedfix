import CommonHeroSection from "@/components/common/CommonHeroSection"
import StartYourProject from "@/components/home/StartYourProject"
import PortfolioHighlights from "@/components/portfolio/PortfolioHighlights"

const Portfolio = () => {
  return (
    <div>
      <CommonHeroSection title="Portfolio" text1="Home" text2="Portfolio" text1Link="/" text2Link="/portfolio"/>
      <PortfolioHighlights/>
      <StartYourProject/>
    </div>
  )
}

export default Portfolio
