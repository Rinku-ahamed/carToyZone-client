import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logOutUser()
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar bg-base-100 h-20 items-center px-6 md:px-0 py-12">
      <div className="navbar-start">
        <Link to="/" className="normal-case text-3xl font-bold">
          CarToy<span className="text-orange-600">Zone</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu gap-8 menu-horizontal px-1 text-lg font-medium text-slate-500">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-orange-600" : "")}
          >
            Home
          </NavLink>

          <NavLink
            to="/allToys"
            className={({ isActive }) => (isActive ? "text-orange-600" : "")}
          >
            All Toys
          </NavLink>
          {user && (
            <NavLink
              to="/myToys"
              className={({ isActive }) => (isActive ? "text-orange-600" : "")}
            >
              My Toys
            </NavLink>
          )}
          {user && (
            <NavLink
              to="/addToys"
              className={({ isActive }) => (isActive ? "text-orange-600" : "")}
            >
              Add A Toys
            </NavLink>
          )}

          <NavLink
            to="/blogs"
            className={({ isActive }) => (isActive ? "text-orange-600" : "")}
          >
            Blogs
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-3 items-center">
            <img
              src={user.photoURL}
              alt=""
              title={user.displayName}
              className="w-10 h-10 rounded-full"
            />
            <button
              onClick={handleLogout}
              className="bg-orange-600 text-white px-10 py-2 font-bold rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-orange-600 text-white px-10 py-2 font-bold rounded"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
