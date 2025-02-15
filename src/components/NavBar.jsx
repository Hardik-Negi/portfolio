import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 bg-black text-white fixed px-4">
      <div>
        <h1 className="font-signature text-5xl ml-2">Hardik negi</h1>
      </div>
      <ul className="hidden md:flex ">
        {links.map((item, index) => {
          return (
            <li
              key={item.id}
              className="capitalize px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200"
            >
              <Link to={item.link} smooth duration={500}>
                {item.link}
              </Link>
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map((item, index) => {
            return (
              <li
                key={item.id}
                className="capitalize px-4 cursor-pointer py-6 text-4xl"
              >
                <Link onClick={()=>setNav(!nav)} to={item.link} smooth duration={500}>
                  {item.link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
