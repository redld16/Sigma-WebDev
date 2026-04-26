import React, { useContext } from "react";
import Component1 from "./Component1";
import { counterContext } from "../context/context";

const button = () => {
  const value = useContext(counterContext);
  return (
    <div>
      <button onClick={() => value.setCount((count) => count + 1)}>
        <span>
          <Component1 />
        </span>
        i am button
      </button>
    </div>
  );
};

export default button;
