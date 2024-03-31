"use client";

import React from "react";
import HeroSection from "@/containers/home-page/hero-section";
import useMediaQuery from "@/hooks/useMediaQuery";
import { DesktopAboutMe, MobileAboutMe } from "@/containers/home-page/about-me-section";
import MobileSkills, { DesktopSkills } from "@/containers/home-page/skills-section";
import { DesktopProject, MobileProject } from "@/containers/home-page/project-section";
import Contact from "@/containers/home-page/contact-section";
import Footer from "@/components/footer/Footer";
import Transition from "@/components/animation/Transition";

const Home = () => {
  const isDesktop = useMediaQuery("(min-width: 48rem)");

  return (
    <div className="relative">
      <div
        id="home"
        className="relative flex items-center justify-center w-5/6 min-h-screen mx-auto border-b max-w-screen-smd md:items-start md:pt-56 scroll-effect border-b-gray-700">
        <HeroSection />
      </div>
      <div className="w-5/6 max-w-screen-smd mx-auto h-full relative border-b border-b-gray-700">
        {isDesktop ? <DesktopAboutMe /> : <MobileAboutMe />}
      </div>
      <div className="w-5/6 max-w-screen-smd mx-auto h-full relative border-b border-b-gray-700 ">
        {isDesktop ? <DesktopSkills /> : <MobileSkills />}
      </div>
      <div className="w-5/6 max-w-screen-smd mx-auto h-full relative border-b border-b-gray-700 ">
        {isDesktop ? <DesktopProject /> : <MobileProject />}
      </div>
      <div className="w-5/6 max-w-screen-smd mx-auto md:h-full">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Transition(Home);
