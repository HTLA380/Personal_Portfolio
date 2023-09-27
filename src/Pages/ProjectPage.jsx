import React, { useEffect, useState } from "react";
import "../css/loading.css";
import { EachProject } from "../components/EachProject";
import ProjectData from "../Project-data";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function ProjectPage() {
  const [isPageAnimationActive, setIsPageAnimationActive] = useState(true);
  const [isAnimationVisible, setIsAnimationVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsAnimationVisible(false), 1800);
    setTimeout(() => setIsPageAnimationActive(false), 2500);
  }, []);

  if (isPageAnimationActive) {
    return (
      <main
        className={`project-loader-${
          isAnimationVisible ? "active" : "hidden"
        } w-full h-full bg-gradient-lightblue `}>
        <div className="loading-window">
          <div className="car">
            <div className="strike"></div>
            <div className="strike strike2"></div>
            <div className="strike strike3"></div>
            <div className="strike strike4"></div>
            <div className="strike strike5"></div>
            <div className="car-detail spoiler"></div>
            <div className="car-detail back"></div>
            <div className="car-detail center"></div>
            <div className="car-detail center1"></div>
            <div className="car-detail front"></div>
            <div className="car-detail wheel"></div>
            <div className="car-detail wheel wheel2"></div>
          </div>

          <div className="text">
            <span>Loading</span>
            <span className="dots">...</span>
          </div>
        </div>
      </main>
    );
  }

  return (
    <>
      <nav className="z-40 w-full fixed top-0 py-6 bg-gray-700">
        <div className="flex items-center justify-between mx-auto w-5/6">
          <h4 className="font-serif text-2xl sm:text-3xl">HTLA</h4>
        </div>
      </nav>
      <main className="h-screen mx-auto relative flex justify-center items-center">
        <Link
          to="/"
          className="fixed transform -translate-y-1/2 top-48 z-40 rotate-90 font-genos justify-center text-xl tracking-widest flex items-center w-fit back-to-home-btn ">
          <FaArrowRight className="rotate-90 bg-gradient-pink" />
          <p>Back To Home</p>
        </Link>
        <div className="w-full h-full overflow-x-hidden">
          {ProjectData.map((data, idx) => {
            return (
              <div
                key={idx}
                className="md:snap-start min-h-screen flex justify-center items-center p-10 flex-col"
                style={{
                  paddingTop: idx === 0 && "1.5rem",
                  background:
                    idx % 2 !== 0 && "linear-gradient(90deg, #1e2646, #010026)",
                }}>
                {idx === 0 && (
                  <div className="mt-20 mb-5">
                    <Title name="My Projects" />
                  </div>
                )}
                <EachProject key={data.title} {...data} />
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default ProjectPage;
