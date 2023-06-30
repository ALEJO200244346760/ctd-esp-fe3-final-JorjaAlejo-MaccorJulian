import { userActions, useUser } from "Components/utils/";
import { getDentistById } from "Components/api/dentist";
import { memo, useCallback, useMemo } from "react";
import "./LikeButton.css"


export const useLikeButton = (id) => {
  const [user, dispatchUser] = useUser()
  const liked = useMemo(() => user.likes.some(like => like.id === id), [user.likes, id])

  const handleFav = useCallback((e)=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    e.stopPropagation();

    if(liked){
      dispatchUser({type: userActions.REMOVE_LIKE, payload: {id}})
    } else {
      getDentistById(id).then(res => dispatchUser({type: userActions.ADD_LIKE, payload: res.data}))
    }
  }, [liked, id])

  return { liked, handleFav }
}


const LikeButton = ({ id }) => {
  const {liked, handleFav} = useLikeButton(id)
  return (
    <button onClick={handleFav} className="circle-button like">{liked ? "❤️" : "🤍"}</button>
  )
}

export default memo(LikeButton)