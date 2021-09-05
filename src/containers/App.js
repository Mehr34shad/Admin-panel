import React from "react";
import { BrowserRouter } from "react-router-dom";
import AdminPanel from "./AdminPanel";
import { ToastContainer } from "react-toastify";

const App = () => {


    return (
        <BrowserRouter>
            <AdminPanel />
            <ToastContainer />
        </BrowserRouter>
    );
};

export default App;