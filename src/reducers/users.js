export const usersReducer = (state = [], action) => {
    switch (action.type) {
        case "INIT":
            return [...action.payload];
            case "ADD_USER":
                return [...action.payload];
            case "DELETE_USER":
                return [...action.payload];
            case "UPDATE_USER":
                return [...action.payload];
            default:
                return state;

    }
};
