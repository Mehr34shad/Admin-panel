import http from "./httpService";

import config from "./config.json";

export const registerUser = user => {
    return http.post(
        `${config.reqres}/api/register`,
        JSON.stringify(user)
    );
};
export const loginUser = user => {
    return http.post(
        `${config.reqres}/api/login`,
        JSON.stringify(user)
    );
};