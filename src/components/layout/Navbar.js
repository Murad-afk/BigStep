import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogOutBtn from "../auth/LogOutBtn";
import "./Navbar.css";
function Navbar() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <div className="navbar">
      {loggedIn === false && (
        <div className="regandlogin">
          <h1>
            <Link to="/register" style={{ textDecoration: "none" }}>
              Register
            </Link>
          </h1>
          <h1>
            {" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              Log in
            </Link>
          </h1>
        </div>
      )}
      {loggedIn === true && (
        <>
          <h1>
            {" "}
            <Link to="/customer" style={{ textDecoration: "none" }}>
              Customers
            </Link>
          </h1>
          <LogOutBtn />
        </>
      )}
    </div>
  );
}

export default Navbar;
