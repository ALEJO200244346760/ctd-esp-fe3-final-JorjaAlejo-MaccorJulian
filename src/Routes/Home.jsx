import { Card } from "Components";
import { useDentistApi, useUser } from 'Components/utils'
import { Outlet } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentists, setDentists] = useDentistApi()
  const [user] = useUser()

  return (
    <div className='card-grid'>
      {/* Aqui deberias renderizar las cards */}
      {dentists?.map((dentist) => (
        <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />
      ))}

      {/* Este Outlet es para renderizar el Detail/:id */}
      <Outlet />
    </div>
  )
}

export default Home