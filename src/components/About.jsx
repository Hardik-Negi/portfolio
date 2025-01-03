import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8 sm:pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-lg lg:text-xl mt-20 sm:mt-6" >
        I am Hardik Negi, a passionate and detail-oriented React.js Developer with hands-on experience in creating dynamic and responsive user interfaces. With a strong academic foundation in Electronics and Communication from Maharaja Surajmal Institute of Technology.
        </p>
        <br />
        <p className="text-lg mb-10 lg:text-xl">
          My professional journey started with Graphketing (service based startup) and during my internship i explored technologies like developing robust applications like
          task management, Frienxe and Mgco legal,
          showcasing my expertise in React.js, Tailwind CSS, and Redux Toolkit.I bring strong problem-solving abilities, team collaboration skills, and a commitment to leveraging cutting-edge technologies to create impactful applications. I am eager to embrace new challenges and contribute to innovative solutions in the tech industry.
          
        </p>
      </div>
    </div>
  );
};

export default About;
