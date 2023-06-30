import { Divider, LikeButton } from "Components";
import Info from "Icons/Info.svg";

// Style
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ name, username, id}) => {
  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <div className="card-header">
          <p className="id">{id}</p>
          <Link className="circle-button info" to={`/detail/${id}`}><img src={Info}></img></Link>
          <LikeButton id={id}/>
        </div>
        <div className="card-body">
          <img src="/images/doctor.jpg"/>
          <Divider variant="primary" height={2} />
          <h5>{name}</h5>
          <h6>{username}</h6>
        </div>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
    </div>
  );
};

export default Card;
