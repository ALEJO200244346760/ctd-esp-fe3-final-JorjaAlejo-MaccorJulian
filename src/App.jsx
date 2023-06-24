// Layout Components
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar/Navbar";

// React Router
import { Outlet } from "react-router-dom";

// Style
import css from "./App.module.css";

function App() {
  return (
      <div className={css.App}>
          <Navbar/>
          <main>
            <Outlet/>
          </main>
          <Footer/>
      </div>
  );
}

export default App;
