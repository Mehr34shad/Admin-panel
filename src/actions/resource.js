import { getResourceList } from './../services/resourceServices';

export const getAllResource = () => {
    return async dispatch => {
        const { data } = await getResourceList();
        await dispatch({ type: "IMIT", payload: data.data });
        console.log(data)
    };
};
