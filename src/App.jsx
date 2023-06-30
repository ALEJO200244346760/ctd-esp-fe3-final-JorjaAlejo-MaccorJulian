// Layout Components
import { Navbar, Footer } from "Components";

// React
import { useUser } from "Components/utils";

// React Router
import { Outlet } from "react-router-dom";

// Style
import "./App.css";

function App() {
  const [user] = useUser();
  return (
      <div className={`App ${user.theme}`}>
          <Navbar />
          <main >
            <Outlet/>
          </main>
          <Footer/>
      </div>
  );
}

export default App;
