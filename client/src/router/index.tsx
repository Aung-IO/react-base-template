import { createBrowserRouter } from "react-router";
import Layout from "../layout/layout";
import Home from "../pages/Home";
import About from "../pages/About";


const router = createBrowserRouter([
{
    path : "/",
    element: <Layout/>,
    children: [
        {
            path : "",
            element : <Home/>
        },
        { 
            path : "/about",
            element : <About/>
        }
    ]
}
])

export default router