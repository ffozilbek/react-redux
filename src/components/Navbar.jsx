import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const { loggedIn, user } = useSelector((state) => state.auth);

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          fayZek
        </Link>
      </div>
      <div className="flex-none">
        {loggedIn ? (
          <ul className="menu menu-horizontal px-1 items-center">
            <li className="mr-5">{user.username}</li>
            <li>
              <NavLink className="btn btn-outline btn-error">LogOut</NavLink>
            </li>
          </ul>
        ) : (
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/login">LogIn</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
