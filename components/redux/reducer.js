import { ADD_TO_CART, REMOVE_FROM_CART, SET_USER_DATA } from "./constants";
const initialState = {
    cart: [],
    users: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart,action.data],
            }
        case REMOVE_FROM_CART:
            let result = state.cart.filter(item => {
                return item._id != action.data._id
            })
            return {
                ...state,
                cart:result
            }
        case SET_USER_DATA:
            return {
                ...state,
                users:[...result.cart]
            }
        default:
            return state
    }
}