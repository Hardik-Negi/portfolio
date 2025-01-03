import React from "react";
import heroImage from "../assets/HeroIcon.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from "react-scroll"

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center mt-20 ">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a React Developer</h2>
          <p className="text-gray-500 py-4 max-w-lg">
            I have 1 year of experience building and designing software.
            Currently, I love to work on web application using technologies like
            React,Tailwind,Node Js and Redux Toolkit.{" "}
          </p>
          <div className="">
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-200">
              PortFolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="w-[350px] h-[350px] mt-10 ">
          <img  className="rounded-2xl  w-2/3 md:w-full" src={heroImage} alt="my profile" />
        </div>
      </div>
    </div>
  );
};

export default Home;
