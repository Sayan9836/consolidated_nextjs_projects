import React from "react";
import SectionHeaders from "./SectionHeaders";

const Contact = () => {
  return (
    <>
      <section className="text-center my-8">
        <SectionHeaders
          subheader={"Don't hesitate"}
          mainheader={"Contact us"}
        />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel:+917596889179"
          >
            +917596889179
          </a>
        </div>
        <div></div>
      </section>
    </>
  );
};

export default Contact;
