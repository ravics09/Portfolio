import React from "react";
import Typewriter from "typewriter-effect";

function Typer() {
  return (
    <Typewriter
      options={{
        strings: [
          "MERN Stack Developer",
          "Senior Software Developer",
          "And",
          "Technical Writer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 70,
      }}
    />
  );
}

export default Typer;