import React from "react";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <div>
      <SectionTitle title="About" />

      <div className="flex">
        <div className="h-[50vh]">
          <lottie-player
            src="https://lottie.host/ad8489c6-54ce-44c9-a122-054401e2524d/4xAE3KxHck.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
  );
}

export default About;
