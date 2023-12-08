export const action = { type: "", payLoad: {} };

export const incrementCount = (game) => {
    return {
        type: "INCREMENT_COUNT",
        payLoad: { name: game },
    };
};

export const decrementCount = (game) => {
    return {
        type: "DECREMENT_COUNT",
        payLoad: { name: game },
    };
};

export const removeFromCart = (game) => {
    return {
        type: "REMOVE_FROM_CART",
        payLoad: { name: game },
    };
};