import React from 'react'
import Card from '../Components/Card'
import { useDentistApi, useUser } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context



const Home = () => {
  const [dentists, setDentists] = useDentistApi()
  const [user] = useUser()

  const haveLike = (id) => ({ liked: user.likes.some(like => like.id === id)})

  return (
    <div className='card-grid'>
      {/* Aqui deberias renderizar las cards */}
      {dentists?.map((dentist) => (
        <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} {...haveLike(dentist.id)} />
      ))}

    </div>
  )
}

export default Home