import { ADD_TO_CART, REMOVE_FROM_CART, SET_USER_DATA, SET_ACTIVE_ITEM } from "./constants";

const initialState = {
    cart: [],
    users: [],
    activeItem: null
};

export const reducer = (state = initialState, action = {}) => {
    const { cart } = state;
    const { data } = action;
    const index = cart.findIndex(cartItem => cartItem?.id === data?._id);

    switch (action.type) {
        case ADD_TO_CART:
            if (index > -1) {
                const updatedCart = cart.map((cartItem, i) => {
                    if (i === index) {
                        return {
                            ...cartItem,
                            count: cartItem.count + 1
                        };
                    }
                    return cartItem;
                });

                return {
                    ...state,
                    cart: updatedCart,
                };
            }

            return {
                ...state,
                cart: [
                    ...cart,
                    {
                        id: data._id,
                        item: data,
                        count: 1
                    }
                ],
            };
        case REMOVE_FROM_CART:
            if (index === -1) {
                return state;
            }

            const updatedCart = cart.map((cartItem, i) => {
                if (i === index) {
                    if (cartItem.count - 1 <= 0) {
                        return null;
                    }
                    return {
                        ...cartItem,
                        count: cartItem.count - 1
                    };
                }
                return cartItem;
            }).filter(Boolean);

            return {
                ...state,
                cart: updatedCart
            };
        case SET_USER_DATA:
            return {
                ...state,
                users: [...state.cart]
            };
        case SET_ACTIVE_ITEM:
            return {
                ...state,
                activeItem: action.data
            };
        default:
            return state;
    }
};
