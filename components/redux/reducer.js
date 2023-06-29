import { ADD_TO_CART, REMOVE_FROM_CART, SET_USER_DATA, SET_ACTIVE_ITEM } from "./constants";
const initialState = {
    cart: [],
    users: [],
    activeItem: null
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.data],
            }
        case REMOVE_FROM_CART:
            let result = state.cart.filter(item => {
                return item._id != action.data._id
            })
            return {
                ...state,
                cart: result
            }
        case SET_USER_DATA:
            return {
                ...state,
                users: [...result.cart]
            }
        case SET_ACTIVE_ITEM:
            return {
                ...state,
                activeItem: action.data
            }
        default:
            return state
    }
}