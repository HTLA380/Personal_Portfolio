import Landing from "../scenes/Landing";
import DesktopSkills from "../scenes/DesktopSkills";
import Projects from "../scenes/Projects";
import Contact from "../scenes/Contact";
import Footer from "../scenes/Footer";
import wave from "../assets/wave.svg";
import AboutMe from "../scenes/AboutMe";

function Pages() {
  return (
    <>
      <div
        id="home"
        className="w-5/6 max-w-screen-smd mx-auto flex min-h-screen justify-center items-center md:items-start md:pt-56 relative scroll-effect">
        <Landing />
      </div>
      <div className="w-5/6 max-w-screen-smd mx-auto h-full relative">
        <AboutMe />
      </div>
      <div className="w-5/6 max-w-screen-smd mx-auto min-h-full relative">
        <DesktopSkills />
      </div>
      {/* <div className="w-5/6 max-w-screen-lg md:h-full mx-auto">
        <Projects />
      </div>
      <div className="w-5/6 max-w-screen-lg mx-auto md:h-full">
        <Contact />
      </div> */}
      {/* <Footer /> */}
    </>
  );
}

export default Pages;
