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