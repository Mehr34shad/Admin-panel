export const resourceReducer = (state = [], action) => {
    switch (action.type) {
        case "IMIT":
            return [...action.payload];
        default:
            return state;
    }
};
