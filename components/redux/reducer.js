import { ADD_TO_CART, REMOVE_FROM_CART, SET_USER_DATA, SET_ACTIVE_ITEM } from "./constants";

const initialState = {
    cart: [],
    users: [],
    activeItem: null
};

//TODO: Refactor this reducer.
export const reducer = (state = initialState, action = {}) => {
    const { cart } = state;
    const { data } = action;
    const index = cart.findIndex(cartItem => cartItem?.id === data?._id);

    switch (action.type) {
        case ADD_TO_CART:

            if (index > -1) {
                const cartItem = cart[index];
                cartItem.count++;

                return {
                    ...state,
                    cart: [...cart],
                }
            }

            cart.push({
                id: data._id,
                item: data,
                count: 1
            });

            return {
                ...state,
                cart: [...cart],
            }
        case REMOVE_FROM_CART:
            if (index === -1) {
                return state;
            }

            const cartItem = cart[index];
            if (cartItem.count - 1 <= 0) {
                cart.splice(index, 1)
            } else {
                cartItem.count--;
            }

            return {
                ...state,
                cart: [...cart]
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