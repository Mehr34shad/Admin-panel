import http from "./httpService";
import config from "./config.json";

export const getUsers = () => {
    return http.get(`${config.reqres}/api/users`);

};

export const newUser = user => {
    return http.post(`${config.reqres}/api/users/2`, user);

};

export const deleteUsers = userId => {
    return http.delete(`${config.reqres}/api/users/2/${userId}`);

};
export const updateUsers = (user, userId) => {
    return http.put(`${config.reqres}/api/users/2/${userId}`, user);

};




