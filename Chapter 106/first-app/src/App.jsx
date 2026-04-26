import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>

        <div className="cards">
          <Cards title="card 1" desc="card 1 desc" />
          <Cards title="card 2" desc="card 2 desc" />
          <Cards title="card 3" desc="card 3 desc" />
          <Cards title="card 4" desc="card 4 desc" />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
