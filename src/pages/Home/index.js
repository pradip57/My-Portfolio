import React from "react";
import Header from "../../components/Header";
import Intro from "../../components/Intro";
import About from "../../components/About";

function Home() {
  return (
    <div>
      <Header />
      <div className="bg-color3 px-40">
        <Intro />
        <About />
      </div>
    </div>
  );
}

export default Home;
