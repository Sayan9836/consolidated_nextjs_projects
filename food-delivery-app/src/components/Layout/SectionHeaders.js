import React from "react";

const SectionHeaders = ({ subheader, mainheader }) => {
  return (
    <div className="text-center">
      <h3 className="uppercase text-gray-500 font-semibold leading-4">
        {subheader}
      </h3>
      <h2 className="text-primary font-bold text-4xl italic">{mainheader}</h2>
    </div>
  );
};

export default SectionHeaders;
