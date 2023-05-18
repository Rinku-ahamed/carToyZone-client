import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100 h-20 items-center px-6 md:px-0 py-12">
      <div className="navbar-start">
        <Link to="/" className="normal-case text-3xl font-bold">
          CarToy<span className="text-orange-600">Zone</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu gap-8 menu-horizontal px-1 text-xl font-medium text-slate-500">
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

          <NavLink
            to="/blogs"
            className={({ isActive }) => (isActive ? "text-orange-600" : "")}
          >
            Blogs
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to="/login"
          className="bg-orange-600 text-white px-10 py-2 font-bold rounded"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
