"use client";
import React from "react";

const About = () => {
  return (
    <>
      <div className="container">
        <h1>This is about me</h1>
        <p>hey there this is para</p>

        <style jsx>{`
          .container {
            background-color: pink;
          }
        `}</style>
      </div>
      <div className="container">
        hey i am good
        <style jsx global>{`
          .container {
            color: yellow;
          }
        `}</style>
      </div>
    </>
  );
};

export default About;
