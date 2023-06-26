// Layout Components
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

// React Router
import { Outlet } from "react-router-dom";

// Style
import "./App.css";

function App() {
  return (
      <div className="App">
          <Navbar/>
          <main style={{padding: 10}}>
            <Outlet/>
          </main>
          <Footer/>
      </div>
  );
}

export default App;
