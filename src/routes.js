import CreateNewUser from "views/CreateNewUser.js";
import UserList from "views/examples/UserList.js";
import ResourceList from "views/examples/ResourceList.js";

var routes = [
  {
    path: "/UserList",
    name: "User List",
    icon: "ni ni-bullet-list-67 text-red",
    component: UserList,
    layout: "/admin",
  },
  {
    path: "/CreateNewUser",
    name: "Create New User",
    icon: "ni ni-single-02 text-yellow",
    component: CreateNewUser,
    layout: "/admin",
  },
  {
    path: "/ResourceList",
    name: " Resource List",
    icon: "ni ni-chart-bar-32 text-blue",
    component: ResourceList,
    layout: "/admin",
  },
];
export default routes;
