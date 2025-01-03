import React from "react";
import geminiClone from '../assets/portfolio/geminiClone.png'
import Frienxe from "../assets/portfolio/Frienxe.png";
import Mgco from "../assets/portfolio/Mgco.png";
import ITask from "../assets/portfolio/ITask.png"
import TaskManagement from "../assets/portfolio/TaskManagement.png";
import uber from "../assets/portfolio/uber.png";



const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ITask,
      details:"To-Do App ",
       style: "shadow-purple-500"
    },
    {
      id: 2,
      src: geminiClone,
        details:"Gemini Clone",
         style: "shadow-blue-500"
    },
    {
      id: 3,
      src: Frienxe,
        details:"Frienxe Dashboard",
         style: "shadow-blue-800"
    },
    {
      id: 4,
      src: Mgco,
        details:"Mgco Legal",
          style: "shadow-violet-700"
    },
    {
      id: 5,
      src: TaskManagement,
        details:"Task Management",
         style: "shadow-white"
    },
    {
      id: 6,
      src: uber,
        details:"Uber Clone",
        style: "shadow-black-800"
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-8">Check out some of my work right here</p>
        </div>

        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {portfolios.map((item) => (
            <div
              key={item.id}
              className={`shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-200 ${item.style}`}
            >
              <img src={item.src} alt="" className="rounded-md h-[200px] w-full" />
              <div className="flex items-center justify-center">
                <button className="w-full px-6 py-3 m-4 duration-200 hover:scale-105 font-semibold " style={{color:item.style || "black"}}>
                  {item.details}
                </button>
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
