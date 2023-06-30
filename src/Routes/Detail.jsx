
import { LikeButton } from "Components"
import { getDentistById } from "Components/api/dentist"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import "./Detail.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const navigate = useNavigate()
  const { id } = useParams()
  const [dentist, setDentist] = useState({})

  useEffect(() => {
    getDentistById(id).then(res => setDentist(res.data))
  }, [])

  const handleWrapperClick = (e) => {
    console.log(e.target)
    navigate("/")
  }

  return (
    <div onClick={handleWrapperClick} className='detail-dialog-wrapper'>
      <dialog open>
        {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
        <section className="dialog-header">
        <p className="id" >{dentist.id}</p>
        <h2>{dentist.name}</h2>
        <h5>{dentist.username}</h5>

        </section>
        <section className="dialog-body">
        <h4>Email: {dentist.email}</h4>
        <h4>Phone: {dentist.phone}</h4>
        <h5>Website: {dentist.website}</h5>

        </section>
        <section className="dialog-sidebar">
          <button className="exit" onClick={() => navigate("/")}>X</button>
          <img src="/images/doctor.jpg"></img>
          <LikeButton id={dentist.id}/>
        </section>
        
        <h5>{dentist.address?.city}</h5>

      </dialog>
    </div>
  )
}

export default Detail