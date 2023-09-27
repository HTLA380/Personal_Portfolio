import ProjectData from "../Project-data";
import { FaArrowRight } from "react-icons/fa";
import { EachProject } from "../components/EachProject";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// const container = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const projectVariant = {
//   hidden: {opacity: 0, scale: 0.8},
//   visible: {opacity: 1, scale: 1},
// };

const Projects = () => {
  return (
    <motion.section id="projects" className="pt-16 md:pt-40 pb-10">
      {/* HEADINGS */}
      <Title name={"Projects"} />

      {/* PROJECTS */}
      <div className="mt-10 md:mt-20">
        {
          <EachProject
            key={ProjectData[4].title}
            title={ProjectData[4].title}
            img={ProjectData[4].img}
            content={ProjectData[4].content}
            techs={ProjectData[4].techs}
            webSiteLink={ProjectData[4].webSiteLink}
            source={ProjectData[4].source}
            order={ProjectData[4].order}
          />
        }
        <Link
          to="/projects"
          className="font-righteous py-2 pl-5 pr-2 bg-gradient-pink mt-10 md:mt-16 text-lg tracking-widest project-btn flex items-center gap-2 w-fit">
          All Projects
          <FaArrowRight className="opacity-0" />
        </Link>
      </div>
    </motion.section>
  );
};

export default Projects;
