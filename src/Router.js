import React, { useContext } from "react";
import { HashRouter , Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Reading from "./components/reading/Reading";
import AuthContext from "./context/AuthContext";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

import "./Router.css";
import Home from "./components/main/Home";
import Saves from "./components/main/Saves";
function Router() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <HashRouter >
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />{" "}
        </Route>
        {loggedIn === false && (
          <div className="auth">
            <div className="auth-image"></div>
            <div className="auth-actions">
              <Route exact path="/login">
                <div className="auth">
                  {" "}
                  <Login />
                  <h1 className="logorreg">
                    <span>Don't have an account?</span>
                    <Link to="register">Sign Up</Link>
                  </h1>
                </div>
              </Route>
              <Route path="/register">
                <div className="auth">
                  <Register />

                  <h1 className="logorreg">
                    {" "}
                    <span>Already have an account?</span>
                    <Link to="Login">Sign in</Link>
                  </h1>
                </div>
              </Route>
            </div>
          </div>
        )}
        {loggedIn === true && (
          <>
            <Route exact path="/login">
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/saves">
              <Saves />
            </Route>

          </>
        )}
      </Switch>
    </HashRouter>
  );
}

export default Router;
