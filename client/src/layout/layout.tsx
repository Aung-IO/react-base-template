import { NavLink, Outlet } from "react-router";
import Logo from "../images/logo.png"
import MenuIcon from "../components/icons/menuIcon"
import CreateIcon from "../components/icons/createIcon";
import ListIcon from "../components/icons/listIcon";
import UsersIcon from "../components/icons/usersIcon";
import Header from "../components/header";
const Layout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <nav className="w-64 bg-primary-dark text-white">
        <img src={Logo} alt="logo" className="w-32 mx-auto my-4" />
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `block px-4 py-2 ${isActive ? "bg-primary-hover m-4 rounded-md" : ""}`
              }
            >
             <div className="flex gap-2">
             <MenuIcon/> Dashboard
             </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/create-record"
              className={({ isActive }) =>
                `block px-4 py-2 ${isActive ? "bg-primary-hover m-4 rounded-md" : ""}`
              }
            >
              <div className="flex gap-2">
                <CreateIcon/>Create Record
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cars-list"
              className={({ isActive }) =>
               `block px-4 py-2 ${isActive ? "bg-primary-hover m-4 rounded-md" : ""}`
              }
            >
             <div className="flex gap-2">
                <ListIcon/>Cars List
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users-list"
              className={({ isActive }) =>
                `block px-4 py-2 ${isActive ? "bg-primary-hover m-4 rounded-md" : ""}`
              }
            >
              <div className="flex gap-2">
                <UsersIcon/>Users
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-1">
        <Header/>
        <div className="p-4">

        <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
