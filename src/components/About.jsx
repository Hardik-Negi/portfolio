import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20">
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, quisquam architecto quaerat mollitia minus sit adipisci praesentium distinctio perferendis excepturi deleniti nisi labore ipsa? Esse aliquam dolores blanditiis sapiente eveniet. Fugiat magni in, nesciunt quisquam doloremque saepe quod architecto incidunt. Libero delectus amet praesentium ipsam quaerat itaque quisquam soluta quia!
        </p>
        <br />
        <p className="text-xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          quisquam, quod, sed natus, libero mollitia magnam animi ducimus
          perspiciatis accusamus laborum saepe sit! Numquam, vel asperiores
          alias perspiciatis obcaecati esse distinctio a quos. Fuga, optio
          dolorem a unde doloribus aliquam repudiandae quam libero ab
          consequatur ullam doloremque vero adipisci excepturi.
        </p>
      </div>
    </div>
  );
};

export default About;
