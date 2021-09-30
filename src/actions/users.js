import { getUsers } from '../services/usersService';
import { successMessage } from './../utils/message';

export const getAllUsers = () => {
    return async dispatch => {
        const { data } = await getUsers();
        await dispatch({ type: "INIT", payload: data.data });
        // await dispatch({ type: "INIT", payload: data.total });
    };
};


export const createNewUsers = (user) => {

    return async (dispatch, getState) => {
        // const { data, status } = await newUser(user);
        // const users = [...getState().users];
        // const filteredUsers = users.filter(
        //     (user) => user.id !== userId
        // );

        // const users = [...getState()];
        // if (status === 201)
        await dispatch({
            type: "ADD_USER",
            // payload: [...getState(), data.user]
        });
        successMessage("New user added");
    };
};

export const handleDelete = (userId) => {
    console.log("ok");
    return async (dispatch, getState) => {
        const users = [...getState().users];
        const filteredUsers = users.filter(
            (user) => user.id !== userId
        );
        await dispatch({
            type: "DELETE_USER",
            payload: [...filteredUsers],
        });
        successMessage("Person deleted");
    };
};

