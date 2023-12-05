import React from 'react'
import HomeHeroSection from '../../components/Home/HeroSection'
import HomeSkillSection from '../../components/Home/SkillSection'
import HomeProjectSecion from "../../components/Home/PortfolioSection"
import HomeBlogSection from "../../components/Home/BlogSection"

function index() {
  return (
    <>
      <HomeHeroSection />
      <HomeSkillSection />
      <HomeProjectSecion />
      <HomeBlogSection />
    </>
  )
}

export default index