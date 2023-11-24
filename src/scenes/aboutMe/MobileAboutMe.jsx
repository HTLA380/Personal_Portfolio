import React from "react";
import data from "./data.json";
import SectionTitle from "../../components/SectionTitle";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const MobileAboutMe = () => {
  return (
    <section id="about me" className="pt-16 pb-10">
      <SectionTitle content="About Me" />

      <div className="mb-3 bg-[#131313] py-2 px-4 rounded-md mt-5">
        <h4 className="text-gray-400 flex items-center font-semibold text-sm mb-1">
          {data[0].title}
        </h4>
        <p className="text-pink font-dmSans text-sm mb-3">{data[0].text}</p>
      </div>

      <div className="mb-3 bg-[#131313] py-2 px-4 rounded-md">
        <h4 className="text-gray-400 flex items-center font-semibold text-sm mb-1">
          {data[3].title}
        </h4>
        <p className="text-pink font-dmSans text-sm mb-3">{data[3].text}</p>
      </div>

      <Accordion title={data[1].title} text={data[1].text} />

      <Accordion title={data[2].title} text={data[2].text} />
    </section>
  );
};

export default MobileAboutMe;

const Accordion = ({ title, text }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-[#131313] py-3 px-4 rounded-md mb-3">
      <input
        id="expandCollapse"
        type="checkbox"
        checked={open}
        readOnly
        className="peer sr-only"
      />
      <label
        className="w-full flex justify-between items-center"
        htmlFor="expandCollapse"
        onClick={() => setOpen(!open)}>
        <h4 className={"text-gray-400 font-semibold text-sm"}>{title}</h4>
        <span className="text-white">
          <FaChevronRight size={13} className="rotate-90" />
        </span>
      </label>
      <div className="overflow-hidden h-0 text-sm peer-checked:h-auto peer-checked:my-3 ">
        <p className={"text-pink"}>{text}</p>
      </div>
    </div>
  );
};

export { Accordion as SimpleAccordion };
