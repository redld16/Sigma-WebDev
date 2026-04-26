import React from "react";
import "./Card.css";

const Cards = (props) => {
  return (
    <div className="card" style={{ overflow: "hidden" }}>
      <img
        src="https://images.freeimages.com/variants/nDv5dLEb1auNuDied29fLkGp/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d?fmt=webp&h=350"
        alt="Random Image"
        style={{ height: "60%" }}
      />
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  );
};

export default Cards;
