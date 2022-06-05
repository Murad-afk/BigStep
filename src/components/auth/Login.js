import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./regandlog.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const [error, setError] = useState("");
  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,
      };

       await axios.post("https://muradsquote.herokuapp.com/auth/login", loginData);
     // await axios.post("https://bigstep.herokuapp.com/auth/login", loginData);
      await getLoggedIn();
      history.push("/");
    } catch (err) {
      setError(err.response.data.errorMessage)
    }
  }

  return (
    <div className="login">
      <form onSubmit={login}>
        <h1 className="logandreg-text">Login & <br/> Registration</h1>
        <div className="input-container">
          {" "}
          <label htmlFor="">Email</label>

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="input-container">
          {" "}
          <label htmlFor="">Password</label>

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button type="submit">Log in</button>
       <h1 className="err-message">{error}</h1>

       
      </form>
    </div>
  );
}

export default Login;
