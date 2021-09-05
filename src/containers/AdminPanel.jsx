import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "layouts/Admin.js";
import Register from "components/register/Register";

const AdminPanel = () => {
    return (
        <Switch>
            <Route path="/form" component={Register} />
            <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
            <Redirect from="/" to="/form" />
        </Switch>
    );
}

export default AdminPanel;