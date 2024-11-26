import { createBrowserRouter } from "react-router";
import Layout from "../layout/layout";

import Dashboard from "../pages/Dashboard";
import CreateRecord from "../pages/CreateRecord";
import CarsList from "../pages/CarsList";
import Users from "../pages/Users";
import Login from "../pages/auth/Login";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    
    {
        path: "/",
        element: <Layout />,
        children: [

            {
                path: "dashboard",
                element: <Dashboard />
            },
            {
                path: "create-record",
                element: <CreateRecord />
            },
            {
                path: "cars-list",
                element: <CarsList />
            },
            {
                path: "users-list",
                element: <Users />
            }
        ]
    }
])

export default router