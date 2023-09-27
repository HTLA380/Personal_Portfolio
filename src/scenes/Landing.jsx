import useMediaQuery from "../hooks/useMediaQuery";
import AnimatedDiv from "../components/animation/AnimateDiv";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile from "../assets/profile1.svg";
import { Reveal } from "../components/animation/Reveal";
import "../css/animation.css";

const Landing = () => {
  const isSmallSize = useMediaQuery("(max-width: 619px)");
  return (
    <section className="w-full h-full">
      {/* MAIN TEXT */}
      <div className="text-center">
        {/* Title */}

        {!isSmallSize ? (
          <Reveal>
            <div
              title="title"
              className="text-start md:text-center text-clamp-title font-righteous flex flex-col ss:flex-row ss:gap-4">
              {/* <h2 className="text-stroke-black">Hi My Name is </h2> */}
              <h2 className="text-stroke-black">HI, My Name is </h2>
              <h2 className="text-light-blue ml-[20%] -mt-2 ss:ml-0 ss:mt-0">
                Htet Aung Lin{" "}
              </h2>
            </div>
          </Reveal>
        ) : (
          <div
            title="title"
            className="text-start md:text-center text-clamp-title font-righteous flex flex-col ss:flex-row ss:gap-4">
            {/* <h2 className="text-stroke-black">Hi My Name is </h2> */}
            <h2 className="text-stroke-black">HI, My Name is </h2>
            <h2 className="text-light-blue ml-[20%] -mt-2 ss:ml-0 ss:mt-0">
              Htet Aung Lin{" "}
            </h2>
          </div>
        )}

        {/* sub title */}
        <AnimatedDiv
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          delayTime={2.2}
          duration={2}>
          <h3 className="font-sans text-sm font-bold -mt-1 mr-10 mb-4 text-light-blue text-start underline ss:no-underline ss:text-base sm:text-xl md:text-2xl ss:text-end">
            A Junior Frontend Developer
          </h3>
        </AnimatedDiv>

        {/* content */}
        <div>
          <AnimatedDiv
            delayTime={2}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            duration={1}>
            <h2 className="my-4 text-clamp-sm leading-5 ss:leading-normal -mt-1 font-dmSans text-pink text-start ">
              {isSmallSize ? (
                <>
                  I'm passionate about building visually stunning websites with
                  intuitive and functional user interfaces.
                </>
              ) : (
                <>
                  {" "}
                  I'm passionate about <br /> building visually stunning
                  websites <br />
                  with intuitive and functional user interfaces.
                </>
              )}
            </h2>
          </AnimatedDiv>
        </div>

        {/* call to action */}
        <AnimatedDiv
          className="flex justify-start"
          delayTime={2}
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0 },
          }}
          duration={1}>
          <AnchorLink
            className="bg-pink border border-pink text-flat-black rounded-sm py-3 px-7 font-bold font-dmSans text-sm xs:text-md sm:text-lg hover:bg-transparent hover:text-pink transition duration-500"
            href="#contact">
            Contact Me
          </AnchorLink>
        </AnimatedDiv>

        {/* profile image */}
        <span className="absolute bottom-0 right-0 w-3/5 scroll-effect-img">
          <img
            src={profile}
            alt="a boy using laptop"
            className="select-none w-full"
            draggable="false"
          />
        </span>
      </div>
    </section>
  );
};

export default Landing;
