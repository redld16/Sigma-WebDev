import Navbar from "./components/Navbar";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [card, setCard] = useState([]);
  const [showData, setShowData] = useState(false);

  let fetchData = async () => {
    const a = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await a.json();
    setCard(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex my-3  justify-center items-center sticky top-19 ">
        <button
          className="border-1 rounded-full px-4 py-2   border-black 
       bg-transprent hover:shadow-lg shadow-black text-gray-800 font-bold"
          onClick={() => {
            setShowData(!showData);
          }}
        >
        {!showData?`Show data`:"Hide data"}
        </button>
      </div>
      {showData && (
        <div className="cardContainer flex flex-wrap justify-center  items-center py-4 border-black gap-10">
          {card.map((e) => {
            return (
              <div
                className="card max-w-[30vw] h-[80vh] overflow-auto  rounded-[10px]  "
                key={e.id}
              >
                <div>
                  {" "}
                  <img
                    className="w-50% h-60%  object-contain rounded-[10px 10px 0 0]"
                    src="https://images.freeimages.com/variants/nDv5dLEb1auNuDied29fLkGp/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d?fmt=webp&h=350"
                    alt=""
                  />
                </div>
                <div className="text-center my-3">
                  <span className="text-sm font-bold ">
                    by userId: {e.userId}
                  </span>
                  <h1 className="font-bold text-2xl "> {e.title}</h1>
                  <p className="text-lg"> {e.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default App;
