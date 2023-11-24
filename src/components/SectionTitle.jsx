import React from "react";

const SectionTitle = ({ content }) => {
  return (
    <h1 className="text-light-blue text-2xl sm:text-3xl relative inline-block before:w-full before:h-0.5 before:bg-gray-500 before:absolute before:-bottom-1 before:left-0 cursor-pointer font-playfair">
      {content}
    </h1>
  );
};

export default SectionTitle;
