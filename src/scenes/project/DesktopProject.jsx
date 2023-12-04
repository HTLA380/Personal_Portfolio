import React from "react";
import SectionTitle from "../../components/SectionTitle";
import ProjectImg5 from "../../assets/projects/project-5.jpeg";
import { Link } from "react-router-dom";
import AnimatedDiv from "../../components/animation/AnimateDiv";
import { GoProjectSymlink } from "react-icons/go";
import { FiGithub } from "react-icons/fi";

const DesktopProject = () => {
  return (
    <section id="project" className="py-20">
      <SectionTitle content={"Projects"} />

      <AnimatedDiv
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        delayTime={0.2}
        duration={1}
        className="md:w-11/12 flex text-start mx-auto  gap-10 mt-8">
        <img
          src={ProjectImg5}
          alt="Recipe App Using React JS"
          className="w-1/2 h-full object-cover"
          loading="lazy"
        />
        <div className="w-1/2 mt-3">
          <h1 className="text-2xl lg:text-3xl font-playfair text-white">
            Recipe App Using React JS
          </h1>
          <div className="mt-2 mb-5">
            <p className="text-pink font-dmSans text-sm lg:text-base">
              This project is a React-based web application that allows users to
              search their favorite recipes. The app uses an API to fetch recipe
              data and display it in a user-friendly interface.
            </p>
            <ul className="mt-3">
              <li className="uppercase text-sm font-dmSans text-flat-black font-semibold inline-block px-2 rounded bg-light-blue m-1">
                HTML
              </li>
              <li className="uppercase text-sm font-dmSans text-flat-black font-semibold inline-block px-2 rounded bg-light-blue m-1">
                Css
              </li>
              <li className="uppercase text-sm font-dmSans text-flat-black font-semibold inline-block px-2 rounded bg-light-blue m-1">
                React
              </li>
              <li className="uppercase text-sm font-dmSans text-flat-black font-semibold inline-block px-2 rounded bg-light-blue m-1">
                styled-components
              </li>
              <li className="uppercase text-sm font-dmSans text-flat-black font-semibold inline-block px-2 rounded bg-light-blue m-1">
                SPOONACULAR API
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <a
              target="_blank"
              href="https://htl-easybank-landing.netlify.app/"
              className="mx-1 flex bg-gray-400 text-flat-black font-dmSans font-semibold hover:brightness-75 items-center justify-center gap-2 px-3 py-1 rounded">
              <GoProjectSymlink size={20} /> <p>Visit</p>
            </a>
            <a
              target="_blank"
              href="https://github.com/HTLA380/EasyBank-Landing-Page.git"
              className="text-pink mx-1 inline-block text-2xl">
              <FiGithub />
            </a>
          </div>
        </div>
      </AnimatedDiv>
      <Link
        to="/projects"
        className="bg-transparent border-2 border-gray-400 text-gray-400 mx-auto block w-fit mt-10 py-2 px-4 rounded-md border-solid font-semibold hover:bg-gray-400 hover:text-flat-black duration-500 hover:tracking-widest">
        All Projects
      </Link>
    </section>
  );
};

export default DesktopProject;
