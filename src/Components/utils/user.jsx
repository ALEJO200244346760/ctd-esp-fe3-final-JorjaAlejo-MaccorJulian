import { useMemo, useReducer } from "react";

const initialUser = {likes: [], theme: "light"}

export const userActions = {
    ADD_LIKE: "ADD_LIKE",
    REMOVE_LIKE: "REMOVE_LIKE",
    SET_THEME: "SET_THEME",
}

const useUserReducer = () => {
    const [user, dispatch] =useReducer((state, action) => {
        switch (action.type) {
        case userActions.ADD_LIKE:
            return {...state, likes: [...state.likes, action.payload]};
        case userActions.REMOVE_LIKE:
            return state.likes.filter((item) => item.id !== action.payload.id);
        case userActions.SET_THEME:
            return { ...state, theme: action.payload };
        default:
            return state;
        }
    }, initialUser)

    const memorizedUser = useMemo(() => user, [user]);

    return [memorizedUser, dispatch]
};


export default useUserReducer