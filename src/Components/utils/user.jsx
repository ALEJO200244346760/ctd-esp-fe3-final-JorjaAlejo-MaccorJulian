import { useMemo, useReducer } from "react";

const initialUser = {likes: [], theme: "light"}

export const userActions = {
    ADD_LIKE: "ADD_LIKE",
    REMOVE_LIKE: "REMOVE_LIKE",
    SET_THEME: "SET_THEME",
}

const addLike = (state, payload) => {
    return state.likes.some(like => like.id === payload.id) 
    ? state 
    : {...state, likes:  [...state.likes, payload]}
}

const removeLike = (state, payload) => ({...state, likes: state.likes.filter((item) => item.id !== payload.id)})

const useUserReducer = () => {
    const [user, dispatch] =useReducer((state, {type, payload}) => {
        switch (type) {
        case userActions.ADD_LIKE:
            return addLike(state, payload);
        case userActions.REMOVE_LIKE:
            return removeLike(state, payload);
        case userActions.SET_THEME:
            return { ...state, theme: payload };
        default:
            return state;
        }
    }, initialUser)

    const memorizedUser = useMemo(() => user, [user]);

    return [memorizedUser, dispatch]
};


export default useUserReducer