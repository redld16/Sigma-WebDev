// import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

import fs from "fs/promises";

export default function Home() {
  // const [count, setCount] = useState(0);
  console.log("harry");
  let a = fs.readFile(".gitignore");
  a.then((e) => console.log(e.toString()));
  return (
    <div>
      <Navbar/>
      i am a comoponent
      {/* {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count
      </button> */}
    </div>
  );
}
