//React Router
import { Link } from 'react-router-dom'

// Style
import css from "./Navbar.module.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

// Routes for the navigation
const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/favs",
    name: "Favs",
  },
  {
    path: "/detail",
    name: "Detail",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

const Navbar = () => {

  return (
    <nav className={css.Navbar}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <ul className={css.Routes}>
        {routes.map((item) => (
          <li key={item.name}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar