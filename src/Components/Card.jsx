import React from "react";
import "./Card.css";
import { useState } from "react";
import { useUser } from "./utils/global.context";
import { userActions } from "./utils/user";
import { getDentistById } from "./api/dentist";
import Divider from "./Divider";

const Card = ({ name, username, id, liked }) => {
  const [fav, setFav] = useState(false)
  const [user, dispatchUser] = useUser()

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    if(liked){
      dispatchUser({type: userActions.REMOVE_LIKE, payload: {id}})
    } else {
      getDentistById(id).then(res => dispatchUser({type: userActions.ADD_LIKE, payload: res.data}))
    }
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <p className="id">{id}</p>
        <div className="info-container">
          <img src="https://picsum.photos/300/300"/>
          <Divider variant="primary" height={2} />
          <h3>{name}</h3>
          <h4>{username}</h4>
        </div>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">{liked ? "❤️" : "🤍"}</button>
    </div>
  );
};

export default Card;
