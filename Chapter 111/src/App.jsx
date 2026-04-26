import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Navbar />
      <div className="cardContainer">
        <Card />
      </div>
    </>
  );
}

export default App;
