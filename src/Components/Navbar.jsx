//React
import { memo } from 'react'

//React Router
import { Link } from 'react-router-dom'

// Style
import "./Navbar.css";
import Divider from './Divider';
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
    <div className='Header'>
      <nav className="Navbar">
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <ul className="Routes">
          {routes.map((item) => (
            <li key={item.name}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button>Change theme</button>
      </nav>
      <Divider variant="primary">
            <div>
              <img src="/images/logo-dentista.png" alt="Clinic Logo" />
            </div>
      </Divider>
    </div>
  )
}

export default memo(Navbar)