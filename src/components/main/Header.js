import React, { useState, useContext } from "react";
import "./Header.css";
import { BsFillPersonFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import axios from 'axios'
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [open, setOpen] = useState(false);

  const { getLoggedIn } = useContext(AuthContext);

  const history = useHistory();

  async function logOut() {
    await axios.get("https://muradsquote.herokuapp.com/auth/logout");
   /* await axios.get(
      "https://bigstep.herokuapp.com/auth/logout"
    );*/
    await getLoggedIn();
    history.push("/");
  }
  return (
    <div className="header">
      {open ? (
        <div className="header-log">
           <IconContext.Provider value={{ color: "white", size: "35px" }}>
            <AiOutlineClose
              onClick={() => setOpen(!open)}
              className="close-btn"
            />
          </IconContext.Provider>
<button className="header-logout" onClick={() => logOut()}>Log Out</button>      
        </div>
      ) : (
        <div className="header-nav">
          <h1>Home Feed</h1>
          <div>
            <IconContext.Provider value={{ color: "white", size: "35px" }}>
              <BsFillPersonFill onClick={() => setOpen(!open)} />
            </IconContext.Provider>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
