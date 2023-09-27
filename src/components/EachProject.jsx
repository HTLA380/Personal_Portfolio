import {motion} from "framer-motion";
import {HiOutlineExternalLink} from "react-icons/hi";
import {FiGithub} from "react-icons/fi";

export const EachProject = ({
  title,
  img,
  content,
  techs,
  order,
  webSiteLink,
  source,
}) => {
  return (
    <div
      className={`relative md:min-h-[360px] lg:min-h-[400px] flex flex-col md:flex-row justify-center items-center`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{delay: 0.2, duration: 0.5}}
        variants={{
          hidden: {opacity: 0, x: order ? -50 : 50},
          visible: {opacity: 1, x: 0},
        }}
        className={`max-w-[500px] ${order ? "md:order-0" : "md:order-2"}`}>
        <img
          src={`../assets/${img}.jpeg`}
          className="aspect-square object-cover"
          alt={img}
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{delay: 0.4, duration: 0.5}}
        variants={{
          hidden: {opacity: 0, x: order ? 50 : -50},
          visible: {opacity: 1, x: 0},
        }}
        className={`w-full max-w-[500px] md:mx-10 lg:mx-20 z-10 md:p-5 mt-6 md:mt-0 text-white`}>
        <h1 className="text-xl sm:text-3xl font-opensans">{title}</h1>
        <p className="my-4 md:my-8 text-md sm:text-lg md:text-xl font-thin">
          {content}
        </p>
        <div className="mt-2 mb-5">
          <h3 className="font-opensans mb-2 text-lg">Technologies:</h3>
          <ul>
            {techs.map((tech) => (
              <li
                className="list-disc list-item uppercase ml-5 font-mono"
                key={tech}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={webSiteLink}
            className="hover:bg-red transition duration-200 rounded bg-slate-700 py-2 px-5 text-white
           flex align-baseline max-w-[220px]">
            <HiOutlineExternalLink className="text-2xl mr-2" />
            Visit The Website
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={source}
            className="hover:text-red transition duration-200 rounded text-white text-2xl">
            <FiGithub />
          </a>
        </div>
      </motion.div>
    </div>
  );
};
