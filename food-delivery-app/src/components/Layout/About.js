import React from "react";
import SectionHeaders from "./SectionHeaders";

const About = () => {
  return (
    <section className="text-center my-16">
      <SectionHeaders subheader={"Our Story"} mainheader={"About Us"} />
      <div className="flex flex-col gap-4 text-gray-500 max-w-2xl mx-auto mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quo
          nemo alias pariatur itaque, harum sunt ipsam deleniti ab a maxime,
          officia tenetur explicabo nisi autem reiciendis quisquam iure
          officiis. Pariatur vitae mollitia quia earum eum deserunt ut illum
          quos accusantium ipsum magnam laudantium
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quo
          nemo alias pariatur itaque, harum sunt ipsam deleniti ab a maxime,
          officia tenetur explicabo nisi autem reiciendis quisquam iure
          officiis. Pariatur vitae mollitia quia earum eum deserunt ut illum
          quos accusantium ipsum magnam laudantium
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quo
          nemo alias pariatur itaque, harum sunt ipsam deleniti ab a maxime,
        </p>
      </div>
    </section>
  );
};

export default About;
