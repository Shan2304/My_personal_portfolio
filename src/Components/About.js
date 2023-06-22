import React, { useEffect, useRef } from "react";
import "./About.css";
function About() {
  const aboutCard = useRef();
  const hrRef = useRef();
  const observer = new IntersectionObserver(
    (entry) => {
      if (entry[0].isIntersecting) {
        hrRef.current.classList.add("animate");
      } else {
        hrRef.current.classList.remove("animate");
      }
    },
    { threshold: 0.7 }
  );
  useEffect(() => {
    observer.observe(aboutCard.current);
  });
  return (
    <div className="about" ref={aboutCard} id="about">
      <h1>
        About <hr ref={hrRef} />
      </h1>

      {/*<p>
       Placed as a <span>Associate Software Developer </span> at  <span> Unthinkable Solutions</span>
      </p>*/}
      <p>
        Pursuing <span>B.Tech(ECE) </span> from <span> I. K. Gujral Punjab Technical University </span> , Punjab
      </p>
      <p className="res-1280">
        Completed <span>Full-Stack Web Development</span> using
        <span>&nbsp;MERN stack</span> at <span>CodeHelp.</span>
      </p>
      <p className="res-1280">
        Completed <span>Higher secondary school (CBSE board)</span> with
        <span>&nbsp; aggregate marks (74%)</span> at <span>Smart Move Academy.</span>
      </p>
      <p className="res-1280">
        Completed <span>Secondary School (CBSE board) </span> with
        <span>&nbsp; aggregate marks (70%)</span> at <span>Nav Jeevan Mission School.</span>
      </p>
      <p className="res-1280">
      👉I AM ABLE TO HANDLE MULTIPLE TASKS ON DAILY BASIS. 👉I USE A CREATIVE APPROACH TO SOLVE THE PROBLEMS.
      </p>
      <p className="res-1280">
        Aspiring to be a Web Developer and Passionate about Coding and learning
        new technologies in development
      </p>
    </div>
  );
}

export default About;
