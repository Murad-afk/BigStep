import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Customers from "./components/customers/Customers";
import Navbar from "./components/layout/Navbar";
import AuthContext from "./context/AuthContext";
import { Link } from "react-router-dom";

import "./Router.css";
function Router() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <div className="auth">
        <div className="auth-image"></div>
        <div className="auth-actions">
          <Navbar />
          <Switch>
            <Route exact path="/">
                  <Link  to="/login"/>
            </Route>
            {loggedIn === false && (
              <>
                <Route path="/register">
                  <Register />
                </Route>
                <Route exact path="/login">
                  <Login />
                </Route>
              </>
            )}
            {loggedIn === true && (
              <>
                <Route path="/customer">
                  <Customers />
                </Route>
              </>
            )}
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Router;
