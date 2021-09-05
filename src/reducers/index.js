import { combineReducers } from "redux";
import { usersReducer } from "./users";
import { resourceReducer } from "./resource";
import { userReducer } from "./user";

export const reducers = combineReducers({
    users: usersReducer,
    resource: resourceReducer,
    user: userReducer
});
