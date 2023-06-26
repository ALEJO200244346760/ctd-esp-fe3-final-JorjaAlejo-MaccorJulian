// Layout Components
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

// React
import { useUser } from "./Components/utils/global.context";

// React Router
import { Outlet } from "react-router-dom";

// Style
import "./App.css";

function App() {
  const [user] = useUser();
  return (
      <div className={`App ${user.theme}`}>
          <Navbar/>
          <main style={{padding: "20px 10px" }}>
            <Outlet/>
          </main>
          <Footer/>
      </div>
  );
}

export default App;
