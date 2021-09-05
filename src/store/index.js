import { createStore, compose, applyMiddleware } from "redux";
import { reducers } from "./../reducers/index";
import thunk from "redux-thunk";
import { getAllUsers } from "../actions/users";
import { getAllResource } from './../actions/resource';

export const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

//Initialize
store.dispatch(getAllUsers());
store.dispatch(getAllResource());

//subscribe
store.subscribe(() => console.log(store.getState()));


// kdhvdhvudvdgbvjdbvuidgbvuidbvudibgvudkgnvjdfbnvjdfbvjdbgvbgv