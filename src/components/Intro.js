import React from "react";

function Intro() {
  return (
    <div className="h-[80vh] bg-color3 flex flex-col items-start justify-center gap-10">
      <h1 className="text-slate-600 text-2xl">Hi, I am</h1>
      <h1 className="text-7xl text-color2 font-semibold">Pradip Sapkota</h1>
      <h1 className="text-5xl text-slate-600 font-semibold">
        I love coding and want to turn it into a career.
      </h1>
      <p className=" text-slate-600 text-2xl w-5/6 text-justify">
        Enthusiastic and dedicated Computer Science student with a passion for
        coding and problem-solving. Possessing a strong foundation in computer
        science principles and programming languages, I am eager to apply my
        skills to real-world projects and contribute positively to the field of
        software development.
      </p>
      <button className="border-2 border-color2 px-10 py-3 rounded-md  text-slate-600 text-2xl font-medium hover:text-color2 transition duration-400 ease-in-out">
        Get Started
      </button>
    </div>
  );
}

export default Intro;
