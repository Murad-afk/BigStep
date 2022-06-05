import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./regandlog.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [error, setError] = useState("");
  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        email,
        password,
        passwordVerify,
      };

       await  axios.post("https://muradsquote.herokuapp.com/auth/", registerData);
    //  await axios.post("https://bigstep.herokuapp.com/auth/", registerData);
      await getLoggedIn();
      history.push("/");
    } catch (err) {
      setError(err.response.data.errorMessage);
    }
  }

  return (
    <div className="register">
      <form onSubmit={register}>
        <h1 className="logandreg-text">
          Login & <br /> Registration
        </h1>

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

        <div className="input-container">
          {" "}
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Verify your password"
            onChange={(e) => setPasswordVerify(e.target.value)}
            value={passwordVerify}
          />
        </div>
        <button type="submit">Register</button>
        <h1 className="err-message">{error}</h1>
      </form>
    </div>
  );
}

export default Register;
