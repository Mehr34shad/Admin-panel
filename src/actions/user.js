export const addUser = user => {
    return async dispatch => {
        await dispatch({ type: "SET_USER", payload: user })
    }
}


export const clearUser = () => {
    return async dispatch => {
        await dispatch({ type: "SET_USER", payload: {} })
    }
}

