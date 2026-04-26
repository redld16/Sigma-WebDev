import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // const [name, setName] = useState("harry");
  const [form, setForm] = useState({});

  const handleClick = () => {
    alert("hey i am click");
  };

  // const handleMouseOver = () => {
  //   alert("mouse enter on div");
  // };

  const handleChange = (e) => {
    // setName(e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };
  return (
    <>
      <div className="button">
        <button onClick={handleClick}>click me</button>
      </div>
      {/* <div className="red" onMouseOver={handleMouseOver}>
        hi i am red{" "}
      </div> */}
      <input
        value={form.email ? form.email : ""}
        name="email"
        onChange={handleChange}
        type="text"
      />
      <input
        value={form.phone ? form.phone : ""}
        name="phone"
        onChange={handleChange}
        type="text"
      />
    </>
  );
}

export default App;
