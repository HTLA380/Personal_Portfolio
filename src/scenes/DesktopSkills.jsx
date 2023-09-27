import SkillCard from "../components/desktopSkill/SkillCard";
import SkillTitle from "../components/desktopSkill/SkillTitle";

import { ImHtmlFive2 } from "react-icons/im";
import {
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandTypescript,
} from "react-icons/tb";
import { FaReact, FaSass } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { SiTailwindcss } from "react-icons/si";
import { BsGit } from "react-icons/bs";

const skills = [
  {
    title: "<HTML />",
    id: "html",
    skillIcon: <ImHtmlFive2 className="text-[9rem] text-[#e34c26]" />,
  },
  {
    title: "<CSS />",
    id: "css",
    skillIcon: <TbBrandCss3 className="text-[11rem] text-[#264de4]" />,
  },
  {
    title: "<SASS />",
    id: "sass",
    skillIcon: <FaSass className="text-[9rem] text-[#cc6699]" />,
  },
  {
    title: "<TAILWIND />",
    id: "tailwind",
    skillIcon: <SiTailwindcss className="text-[9rem] text-[#4dc0b5]" />,
  },
  {
    title: "<JAVASCRIPT />",
    id: "javascript",
    skillIcon: <TbBrandJavascript className="text-[11rem] text-[#f0db4f]" />,
  },
  {
    title: "<REACT />",
    id: "react",
    skillIcon: <FaReact className="text-[9rem] text-[#61DBFB]" />,
  },
  {
    title: "<TYPESCRIPT />",
    id: "typescript",
    skillIcon: <TbBrandTypescript className="text-[11rem] text-[#007acc]" />,
  },
  {
    title: "<Git />",
    id: "git",
    skillIcon: <BsGit className="text-[11rem] text-[#F1502F]" />,
  },
  {
    title: "<Github />",
    id: "github",
    skillIcon: <VscGithub className="text-[11rem] text-[#f5f5f5]" />,
  },
];

const DesktopSkills = () => {
  return (
    <section id="skills" className="pb-10 pt-10">
      <div className="flex items-start w-full gap-20 text-white">
        <div className="w-full sticky top-0 flex justify-center  h-screen flex-col">
          <h1 className="text-light-blue text-xl xs:text-2xl sm:text-6xl cursor-pointer font-playfair mb-16 underline">
            Skills
          </h1>
          <div className="w-4/5 aspect-square bg-[#0e0e0e] rounded-2xl relative">
            {skills.map((feature) => (
              <SkillCard id={feature.id} key={feature.id}>
                {feature.skillIcon}
              </SkillCard>
            ))}
          </div>
        </div>
        <div className="w-full py-[50vh]">
          <ul>
            {skills.map((feature) => (
              <li key={feature.id}>
                <SkillTitle id={feature.id}>{feature.title}</SkillTitle>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="h-screen">More rooms to scroll</div>
    </section>
  );
};

export default DesktopSkills;
