import React from "react";
import css from "../assets/css.png";
import github from "../assets/github.png";
import graphql from "../assets/graphql.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import next from "../assets/nextjs.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: next,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-500",
    },
    {
      id: 9,
      src: node,
      title: "HTML",
      style: "shadow-orange-500",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
        <div  className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2 ">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className=" grid gap-8 sm:grid-cols-2 md:grid-cols-3 py-8 px-12 sm:px-0">
          {experiences.map((item) => (
            <div
              key={item.id}
              className={`shadow-md py-2  rounded-lg hover:scale-105 duration-500 ${item.style}`}
            >
              <img src={item.src} alt="" className="rounded-md w-20 mx-auto " />
              <p className="mt-4 text-center">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
