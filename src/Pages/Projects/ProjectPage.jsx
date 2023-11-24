import React, { useEffect, useState } from "react";
import { EachProject } from "../../components/EachProject";
import { motion } from "framer-motion";
import { FaQuestionCircle, FaArrowLeft } from "react-icons/fa";
import ProjectData from "./Project-data";
import Transition from "../../components/animation/Transition";
import SectionTitle from "../../components/SectionTitle";
import Footer from "../../scenes/Footer";
import { Link } from "react-router-dom";
import SocialMedia from "../../scenes/SocialMedia";
import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaRegFileLines } from "react-icons/fa6";

function ProjectPage() {
  return (
    <div>
      <nav className="flex items-center justify-between mx-auto w-5/6 py-5">
        <Link
          to="/"
          className="font-serif text-xl xs:text-2xl sm:text-3xl text-pink">
          HTLA
        </Link>
        <div className="flex md:gap-4 sm:gap-8 items-center text-gray-400 text-xl">
          <Link
            to="/resume"
            className="text-pink bg-gray-900 p-2 rounded-md flex items-center w-fit gap-1 hover:bg-pink hover:text-gray-900 transition duration-300">
            <FaRegFileLines size={20} />
            <p className="font-righteous text-sm font-normal tracking-widest">
              Resume
            </p>
          </Link>{" "}
          <a
            className="mx-1"
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100083287641210">
            <FiFacebook />
          </a>
          <a
            className="mx-1"
            target="_blank"
            href="https://www.linkedin.com/in/htet-aung-lin-741968291
      ">
            <FiLinkedin />
          </a>
          <a className="mx-1" target="_blank" href="https://github.com/HTLA380">
            <FiGithub />
          </a>
        </div>
      </nav>
      {/* DESKTOP NAV */}

      <main className="bg-flat-black w-5/6 max-w-screen-lg mx-auto min-h-screen pb-32 pt-20">
        <div className="flex justify-between items-center">
          <SectionTitle content={"Projects"} />
          <span className="text-xl text-gray-200 cursor-pointer relative group">
            <FaQuestionCircle />
            <p className="absolute text-sm w-fit whitespace-nowrap bg-white text-flat-black font-dmSans right-5 py-1 px-2 rounded duration-200 opacity-0 group-hover:opacity-100">
              Click the image to see the information
            </p>
          </span>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch justify-center mt-10 border-b border-b-gray-400 pb-16">
          {ProjectData.map((data) => (
            <EachProject
              key={data.title}
              title={data.title}
              techs={data.techs}
              img={data.img}
              webSiteLink={data.webSiteLink}
              source={data.source}
            />
          ))}
        </motion.div>
        <Link
          to="/"
          className="text-pink mt-4 bg-gray-900 p-2 rounded-md flex items-center w-fit gap-1 hover:bg-pink hover:text-gray-900 transition duration-300">
          <FaArrowLeft size={20} />
          <p className="font-righteous tracking-widest">Home</p>
        </Link>
      </main>
      <Footer />
    </div>
  );
}

export default Transition(ProjectPage);
