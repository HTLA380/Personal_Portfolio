import { Splide, SplideSlide } from "@splidejs/react-splide";
import skillData from "../../assets/skills/skillImages";

import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";

import SectionTitle from "../../components/SectionTitle";

const MobileSkills = () => {
  return (
    <section id="skills" className="py-16">
      <SectionTitle content={"Skills"} />

      <Splide
        options={{
          perPage: 3,
          arrows: false,
          gap: "0.5rem",
          breakpoints: {
            680: {
              perPage: 3,
            },
          },
        }}
        className="pb-10 mx-auto max-w-sm mt-3">
        {skillData.map((data) => (
          <SplideSlide key={data.title} className="p-4 xxs:p-7 rounded-md">
            <img src={data.image} loading="lazy" className="brightness-75" />
            <p className="text-gray-200 text-center font-dmSans pt-2 text-sm">
              {data.title}
            </p>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default MobileSkills;
