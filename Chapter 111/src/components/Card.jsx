import React from "react";
import { useState } from "react";
const Card = () => {
  async function getData() {
    let jsonData = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await JSON.stringify(jsonData);
    return data;
  }

  const [obj, setObj] = useState([getData()]);

  return (
    <div className="flex m-4">
      {obj.map((obj) => {
        return (
          <div key={obj.userId}>
            <div>{obj.userId}</div>
          </div>
        );
      })}
      <button
        onClick={() => {
          console.log(getData());
        }}
      >
        click
      </button>
    </div>
  );
};

export default Card;
