import React from "react";
import guitarImg from "../assets/guitar.svg";
import { FaChevronRight } from "react-icons/fa";
import AnimatedDiv from "../components/animation/AnimateDiv";

const Article = ({ title, text, delayTime = 0, className }) => {
  return (
    <AnimatedDiv
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      duration={0.5}
      delayTime={delayTime}
      className={className}>
      <h4 className="text-gray-400 flex items-center font-semibold text-sm xs:text-base">
        <FaChevronRight size={15} />
        {title}
      </h4>
      <p className="text-pink font-dmSans sm:ml-14 text-sm xs:text-base">
        {text}
      </p>
    </AnimatedDiv>
  );
};

const AboutMe = () => {
  return (
    <section id="about me" className="pt-16 sm:pt-32 pb-10 ">
      <h1 className="text-light-blue text-xl xs:text-2xl sm:text-3xl relative inline-block before:w-full before:h-0.5 before:bg-gray-500 before:absolute before:-bottom-1 before:left-0 cursor-pointer font-playfair">
        About ME
      </h1>

      <Article
        title="Introduction"
        text="Hello, I'm Htet Aung Lin, a passionate front-end developer
          on a journey to master the art of building beautiful and functional
          websites."
        className="mt-5 sm:ml-10"
        delayTime={0.25}
      />

      <Article
        title="What Got Me Into Coding"
        text="When my school closed its doors in the second year of the COVID-19
          pandemic, I started my web development career. I had the chance to
          explore the world of coding at this difficult time, and I haven't
          looked back since. I've been on an exciting learning path ever since,
          constantly enhancing my knowledge and abilities."
        delayTime={0.5}
        className="mt-5 sm:ml-10"
      />

      <div className="w-full sm:flex sm:justify-between sm:items-start mt-10">
        <span className="w-1/3 text-white hidden sm:block">
          <img
            src={guitarImg}
            alt="guitar"
            className="select-none w-full"
            draggable="false"
          />
        </span>
        <div className="sm:w-3/5">
          <Article
            title="My Interests"
            text="Beyond the code, music is where I find the most inspiration. When
        I'm having trouble with coding, my guitar becomes my partner in
        problem-solving. It's remarkable how strumming a few chords can
        unlock creative solutions."
            delayTime={0.75}
            className="sm:-ml-10"
          />
          <Article
            title="My Goal"
            text="My goal is to work on innovative projects in order to get
        priceless experience. I'm excited about the endless possibilities
        in the world of web development and look forward to the challenges
        and innovations that lie ahead."
            delayTime={1}
            className="sm:-ml-10 mt-5 sm:mt-0"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
