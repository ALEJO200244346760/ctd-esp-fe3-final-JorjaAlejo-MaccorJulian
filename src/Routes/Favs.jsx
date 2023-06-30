import { Card } from "Components";
import { useUser } from "Components/utils";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [ user ] = useUser()
  return (
    <>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {user.likes.map(like => <Card key={like.id} id={like.id} name={like.name} username={like.username} liked></Card> )}
        
      </div>
    </>
  );
};

export default Favs;
